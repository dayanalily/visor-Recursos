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
                        @input="buscarAll"
                        v-model="textAll"
                        class="form-control"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!--ALL-->
            <div class="row">
              <div class="col-md-3" v-for="all in listAll" :key="all.id">
                <div class="card card-data">
                  <div
                    class="card-body img-container"
                    @click="previsualizar(all)"
                  >
                    <div class="media">
                      <div class="media-body overflow-hidden">
                        <img src="@/assets/images/logo-st-recursos.jpg" />
                      </div>
                    </div>
                    <div class="media-cover">
                      <div class="i-container">
                        <i class="ri-play-circle-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div class="card-body border-top file-name-container">
                    <p class="text-truncate font-size-14 mb-0 font-weight-bold">
                      {{ all.name }}
                    </p>
                    <i
                      class="i-eliminar ri-delete-bin-line"
                      v-if="deleteResource"
                      @click="eliminarAll(all)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <!--ENND-->
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
                        @input="buscarPresentaciones"
                        v-model="textPresentaciones"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!--ALL-->
            <div class="row">
              <div
                class="col-md-3"
                v-for="presentaciones in listPresentaciones"
                :key="presentaciones.id"
              >
                <div class="card card-data">
                  <div
                    class="card-body img-container"
                    @click="previsualizar(presentaciones)"
                  >
                    <div class="media">
                      <div class="media-body overflow-hidden">
                        <img src="@/assets/images/logo-st-recursos.jpg" />
                      </div>
                    </div>
                    <div class="media-cover">
                      <div class="i-container">
                        <i class="ri-play-circle-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div class="card-body border-top file-name-container">
                    <p class="text-truncate font-size-14 mb-0 font-weight-bold">
                      {{ presentaciones.name }}
                    </p>
                    <i
                      class="i-eliminar ri-delete-bin-line"
                      v-if="deleteResource"
                      @click="eliminarPresentaciones(presentaciones)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <!--ENND-->
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
                        @input="buscarVideos"
                        v-model="textVideos"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!--ALL-->
            <div class="row">
              <div
                class="col-md-3"
                v-for="videos in listVideos"
                :key="videos.id"
              >
                <div class="card card-data">
                  <div
                    class="card-body img-container"
                    @click="previsualizar(videos)"
                  >
                    <div class="media">
                      <div class="media-body overflow-hidden">
                        <img src="@/assets/images/logo-st-recursos.jpg" />
                      </div>
                    </div>
                    <div class="media-cover">
                      <div class="i-container">
                        <i class="ri-play-circle-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div class="card-body border-top file-name-container">
                    <p class="text-truncate font-size-14 mb-0 font-weight-bold">
                      {{ videos.name }}
                    </p>
                    <i
                      class="i-eliminar ri-delete-bin-line"
                      v-if="deleteResource"
                      @click="eliminarVideos(videos)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <!--ENND-->
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
                        @input="buscarSimulator"
                        v-model="textSimuladores"
                        placeholder="Buscar recursos..."
                      />
                      <span class="ri-search-line"></span>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!--ALL-->
            <div class="row">
              <div
                class="col-md-3"
                v-for="simuladores in listSimuladores"
                :key="simuladores.id"
              >
                <div class="card card-data">
                  <div
                    class="card-body img-container"
                    @click="previsualizar(simuladores)"
                  >
                    <div class="media">
                      <div class="media-body overflow-hidden">
                        <img src="@/assets/images/logo-st-recursos.jpg" />
                      </div>
                    </div>
                    <div class="media-cover">
                      <div class="i-container">
                        <i class="ri-play-circle-fill"></i>
                      </div>
                    </div>
                  </div>

                  <div class="card-body border-top file-name-container">
                    <p class="text-truncate font-size-14 mb-0 font-weight-bold">
                      {{ simuladores.name }}
                    </p>
                    <i
                      class="i-eliminar ri-delete-bin-line"
                      v-if="deleteResource"
                      @click="eliminarSimulador(simuladores)"
                    ></i>
                  </div>
                </div>
              </div>
            </div>
            <!--ENND-->
          </b-tab>
        </b-tabs>
      </div>
    </div>
  </Layout>
</template>

<script>
import Layout from "../../layouts/main";
// import Stat from "./widget";
import axios from "axios";
import api from "../../../config/base.js";
import swal from "sweetalert2";
/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
  },
  data() {
    return {
      textAll: "",
      listAll: [],
      searchAll: [],
      textPresentaciones: "",
      listPresentaciones: [],
      searchPresentaciones: [],
      textVideos: "",
      listVideos: [],
      searchVideos: [],
      textSimuladores: "",
      listSimuladores: [],
      searchSimuladores: [],
      title: "Recursos",
      deleteResource: false,
    };
  },
  mounted() {
    this.getResources();
    if (JSON.parse(localStorage.getItem("user"))) {
      this.deleteResource = true;
      console.log("te amo", JSON.parse(localStorage.getItem("user")));
    }
  },
  methods: {
    getResources() {
      this.listAll = [];
      this.searchAll = [];
      this.listPresentaciones = [];
      this.searchPresentaciones = [];
      this.listVideos = [];
      this.searchVideos = [];
      this.listSimuladores = [];
      this.searchSimuladores = [];
      axios.get(api.api + "recursos").then((resp) => {
        resp.data.forEach((element) => {
          this.listAll.push(element);
          this.searchAll.push(element);
          switch (element.tab) {
            case "0":
              this.listPresentaciones.push(element);
              this.searchPresentaciones.push(element);
              break;
            case "1":
              this.listVideos.push(element);
              this.searchVideos.push(element);
              break;
            case "2":
              this.listSimuladores.push(element);
              this.searchSimuladores.push(element);
              break;
          }
        });
      });
    },
    previsualizar(index) {
      console.log(index);
      window.open(index.enlace, "_blank");
    },
    buscarAll() {
      if (this.textAll === "") {
        this.listAll = this.searchAll;
      } else {
        let arrayAllTemp = [];
        this.searchAll.filter((word) => {
          if (word.name === this.textAll) {
            arrayAllTemp.push(word);
          }
        });
        this.listAll = [];
        this.listAll = arrayAllTemp;
      }
    },
    buscarPresentaciones() {
      if (this.textPresentaciones === "") {
        this.listPresentaciones = this.searchPresentaciones;
      } else {
        let arrayPresentacionesTemp = [];
        this.searchPresentaciones.filter((word) => {
          if (word.name === this.textPresentaciones) {
            arrayPresentacionesTemp.push(word);
          }
        });
        this.listPresentaciones = [];
        this.listPresentaciones = arrayPresentacionesTemp;
      }
    },
    buscarVideos() {
      if (this.textVideos === "") {
        this.listVideos = this.searchVideos;
      } else {
        let arrayVideosTemp = [];
        this.searchVideos.filter((word) => {
          if (word.name === this.textVideos) {
            arrayVideosTemp.push(word);
          }
        });
        this.listVideos = [];
        this.listVideos = arrayVideosTemp;
      }
    },
    buscarSimulator() {
      if (this.textSimuladores === "") {
        this.listSimuladores = this.searchSimuladores;
      } else {
        let arraySimuladoresTemp = [];
        this.searchSimuladores.filter((word) => {
          if (word.name === this.textSimuladores) {
            arraySimuladoresTemp.push(word);
          }
        });
        this.listSimuladores = [];
        this.listSimuladores = arraySimuladoresTemp;
      }
    },
    eliminarAll(all) {
      axios.delete(api.api + "recursos/" + all.id).then((resp) => {
        if (resp) {
          this.getResources();
          const Toast = swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", swal.stopTimer);
              toast.addEventListener("mouseleave", swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "error",
            title: "Recurso eliminado exitosamente",
          });
        }
        console.log(resp);
      });
    },
    eliminarPresentaciones(presentaciones) {
      axios.delete(api.api + "recursos/" + presentaciones.id).then((resp) => {
        if (resp) {
          this.getResources();
        }
        console.log(resp);
        const Toast = swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Recurso eliminado exitosamente",
        });
      });
    },
    eliminarVideos(videos) {
      axios.delete(api.api + "recursos/" + videos.id).then((resp) => {
        if (resp) {
          this.getResources();
        }
        console.log(resp);
        const Toast = swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Recurso eliminado exitosamente",
        });
      });
    },
    eliminarSimulador(simuladores) {
      axios.delete(api.api + "recursos/" + simuladores.id).then((resp) => {
        if (resp) {
          this.getResources();
        }
        console.log(resp);
        const Toast = swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", swal.stopTimer);
            toast.addEventListener("mouseleave", swal.resumeTimer);
          },
        });

        Toast.fire({
          icon: "error",
          title: "Recurso eliminado exitosamente",
        });
      });
    },
  },
};
</script>

<style lang="scss">
.file-name-container {
  display: flex;
  padding: 1.25rem 1.25rem 0.75rem 1.25rem;
  p {
    width: 90%;
    margin-bottom: 0;
  }
  i {
    width: 10%;
    color: red;
    opacity: 1;
    transition: all ease 0.3s;
    font-size: 1.1rem;
    position: relative;
    top: -4px;
    &:hover {
      opacity: 0.6;
    }
  }
}
.tab-content.p-3 {
  padding: 1rem 0 !important;
}
.nav-tabs .nav-link.active,
.nav-tabs .nav-item.show .nav-link {
  color: #ffffff;
  background-color: #0ba6e2;
  border-color: #0ba6e2;
}
.card-data {
  .text-truncate {
    color: #303f48;
    cursor: default;
  }
  .img-container {
    &:hover {
      cursor: pointer;
      .media-cover {
        background-color: rgba(0, 0, 0, 0.5);
        .i-container {
          opacity: 1;
          i {
            color: #0ba6e2;
          }
        }
      }
    }
    height: 150px;
    padding: 0 !important;
    display: flex;
    align-items: stretch;
    .media {
      width: 100%;
      img {
        width: 100%;
        height: 150px;
        object-fit: cover;
      }
      .media-body {
        border-radius: 0.25rem 0.25rem 0 0;
      }
    }
  }
  .media-cover {
    background-color: rgba(0, 0, 0, 0.15);
    position: absolute;
    top: 0;
    width: 100%;
    height: 150px;
    border-radius: 0.25rem 0.25rem 0 0;
    text-align: center;
    transition: all ease 0.3s;
    .i-container {
      top: calc(50% - 2.25rem);
      left: calc(50% - 2.25rem);
      position: absolute;
      background-color: #ffffff;
      height: 4.5rem;
      border-radius: 100%;
      opacity: 0.6;
      transition: all ease 0.3s;
      i {
        font-size: 4.5rem;
        position: relative;
        top: -18px;
        color: #38474f;
        transition: all ease 0.3s;
      }
    }
  }
}
</style>
