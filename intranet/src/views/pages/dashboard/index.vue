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
  }
};
</script>

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

<style>
.vertical-menu, #vertical-menu-btn, .dropdown-mega, .ri-fullscreen-line, .ri-settings-2-line, .noti-icon {
    display: block !important
}
.btn-login {
  font-weight: bold;
  opacity: 1;
  transition: all ease .3s;
  display: none !important
}

.btn-group .noti-icon {
    display: block !important
}
.btn-group .btn-white {
  display: block !important
}
.app-search .position-relative {
   display: block !important
}
.header-item.btn-black {
  display: block !important
}
</style>
