<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import appConfig from "@/app.config";
import axios from 'axios';
import router from './router';
import store from './store';
import api from './config/base';

export default {
  // name: "app",
  // page: {
  //   // All subcomponent titles will be injected into this template.
  //   titleTemplate(title) {
  //     title = typeof title === "function" ? title(this.$store) : title;
  //     return title ? `${title} | ${appConfig.title}` : appConfig.title;
  //   },
  // },
  
  created() {
      axios.interceptors.request.use(function (config) {
          store.commit('loading',true);
          const auth_token = sessionStorage.getItem('token');
            if(auth_token) {
              config.headers = {Authorization: 'Bearer '+auth_token};
            }
          return config;
        }, function (error) {
          store.commit('loading',false);
          return Promise.reject(error);
        });


        axios.interceptors.response.use((response) => {
            store.commit('loading',false);
            return response
        }, function (error) {
            const originalRequest = error.config;
            if(error.response.status === 404){
                sessionStorage.removeItem('token');
                store.commit('loading',false);
                router.push('login');
                return Promise.reject(error);
            }        
            if((error.response.status === 401 || error.response.status === 404) && originalRequest.url === api.api+'renewtoken/'+sessionStorage.getItem('userId')){
                sessionStorage.removeItem('token');
                store.commit('loading',false);
                router.push('login');
                return Promise.reject(error);
            }
            if(error.response.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                const usr = sessionStorage.getItem('userId');
                if(!usr) return Promise.reject(error);
                return axios.post(api.api+'renewtoken/'+sessionStorage.getItem('userId'))
                    .then(res => {
                        if (res.status === 200) {
                            sessionStorage.token=res.data.token;
                            axios.defaults.headers = {Authorization: 'Bearer '+res.data.token};
                            return axios(originalRequest);
                        }else{
                        store.commit('loading',false);
                        router.push('login');
                        }
                    })
                    .catch(err => {
                      console.log(err)
                        store.commit('loading',false);
                        router.push('login');
                    })
            }
            store.commit('loading',false);
            return Promise.reject(error);
        });
        }

    
};
</script>
