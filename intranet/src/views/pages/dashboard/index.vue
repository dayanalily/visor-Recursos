<script>
import Layout from "../../layouts/main";
import Stat from "./widget";

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    Stat,
  },
  data() {
    return {
      title: "Recursos",
    };
  },
};
</script>

<template>
  <Layout>
    <div class="row">
      <div class="col-xl-12">
        <b-tabs justified content-class="p-3 text-muted">
          <b-tab active>
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="fas fa-home"></i>
              </span>
              <span class="d-none d-sm-inline-block">Todos</span>
            </template>
            <div class="col-12 card">
              <div class="row">
                <div class="col-md-4">
                  <form class="app-search">
                    <div class="position-relative">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p>Aqui va el contenido de todos los tabs</p>
            <Stat />
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="fas fa-home"></i>
              </span>
              <span class="d-none d-sm-inline-block"
                >Presentaciones / Interacciones</span
              >
            </template>
            <div class="col-12 card">
              <div class="row">
                <div class="col-md-4">
                  <form class="app-search">
                    <div class="position-relative">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p>Aqui va el contenido del tab 1</p>
            <Stat />
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="far fa-user"></i>
              </span>
              <span class="d-none d-sm-inline-block">Videos</span>
            </template>
            <div class="col-12 card">
              <div class="row">
                <div class="col-md-4">
                  <form class="app-search">
                    <div class="position-relative">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p>Aqui va el contenido del tab 2</p>
            <Stat />
          </b-tab>
          <b-tab>
            <template v-slot:title>
              <span class="d-inline-block d-sm-none">
                <i class="far fa-envelope"></i>
              </span>
              <span class="d-none d-sm-inline-block">Simuladores</span>
            </template>
            <div class="col-12 card">
              <div class="row">
                <div class="col-md-4">
                  <form class="app-search">
                    <div class="position-relative">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <p>Aqui va el contenido del tab 3</p>
            <Stat />
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss">
.tab-content.p-3 {
  padding: 1rem 0 !important;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #ffffff;
  background-color: #0ba6e2;
  border-color: #0ba6e2;
}
</style>
