
<template>

  <Layout>
  
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-12">
      
        <Stat />
       
      </div>
     
    </div>
  
 
  </Layout>
</template>
<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import Stat from "./widget";

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
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
  mounted(){
    console.log("hola", window.location.pathname == "/indexRecursos")
    // let user = JSON.parse(localStorage.getItem('user'));
    
  }
};
</script>

<style>
.vertical-menu, #vertical-menu-btn, .dropdown-mega, .ri-fullscreen-line, .ri-settings-2-line, .noti-icon {
    display: none !important
}
.btn-group .noti-icon {
   display: none !important
}
.btn-group .btn-white {
  display: none !important
}
.app-search .position-relative {
  display: none
}
.main-content {
    margin-left: 0;
    overflow: hidden;
}
.btn-login {
  font-weight: bold;
  opacity: 1;
  transition: all ease .3s;
  display: block !important
}
.header-item.btn-black {
  display: none
}
.btn-login:hover {
  font-weight: bold;
  opacity: .7
}
</style>



