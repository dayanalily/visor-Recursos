import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loader: false,
    level: '',
    toast: false,
    toastcolor: 'success',
    toasttext: '',
    toasttime:2000
  },
  mutations: {
    loading(state,payload){
      state.loader = payload;
    },
    TOAST(state,payload){
      state.toastcolor = payload.color;
      state.toasttext = payload.text;
      state.toast = true;
    },
    LEVEL(state,payload){
      state.level = payload;
    }
  },
  actions: {

  },
})
