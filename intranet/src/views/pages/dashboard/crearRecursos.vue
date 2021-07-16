<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-5 "></div>
      <div class="col-4 "></div>
      <div class="col-3 ">
        <i class="ri-add-circle-fill mt-1"></i><label class="mt-0">Agregar recurso</label>
      </div>
    </div>
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
          active: true,
        },
      ],
    };
  },
};
</script>

<style>
.main-content {
  margin-left: 0;
  overflow: hidden;
}

.btn-login:hover {
  font-weight: bold;
  opacity: 0.7;
}
</style>
