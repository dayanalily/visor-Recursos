
<template>
<div class="m-3">
  <header id="page-topbar" class="mb-3">
    <div class="navbar-header">
      <div class="d-flex">
        <div class="navbar-brand-box">
          <a  class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm-st.png" alt height="50" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-st.png" alt height="50" />
            </span>
          </a>

          <a class="logo logo-light">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm-st.png" alt height="50" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-st.png" alt height="50" />
            </span>
          </a>
        </div>
      </div>
      <div class="btn-login-container">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle waves-effect toggle-right"
            @click="iniciarSession"
          >
            Iniciar sesión
          </button>
        </div>
    </div>
  </header>


  <!-- <Layout> -->
  <div class="header-space">
  </div>
    <PageHeader :title="title" :items="items" />
    
    <div class="row">
      <div class="col-xl-12">
      
        <Stat />
       
      </div>
     
    </div>
</div>
  
 
  <!-- </Layout> -->
</template>
<script>
// import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Stat from "./widget";
import router from '@/router';

/**
 * Dashboard component
 */
export default {
  components: {
    // Layout,
    PageHeader,
    Stat,
  },
  data() {
    return {
      title: "Recursos",
      items: [
      
        {
          text: "Recursos",
          active: true
        }
      ]
    };
  },
  methods: {
    iniciarSession(){
router.push("login")
    },
  }
};
</script>

<style lang="scss">
.header-space {
  height: 70px;
}
.btn-login-container {
    background-color: #0ba6e2;
    margin-right: -16px;
    button {
      padding: 0.47rem 2rem !important;
        color: #ffffff;
        opacity: 1;
        transition: all ease .3s;
        &:hover {
            opacity: .7;
                color: #ffffff;
        }
    }
}
@media screen and (max-width: 380px) {
.navbar-brand-box {
    display: block;
}
}
</style>


