<template>
  <Layout>
    <div class="row">
      <div class="col-12">
        <b-alert show dismissible variant="success" v-if="exit"
          >El recurso se ha guardado exitosamente.</b-alert
        >
        <b-alert show dismissible variant="danger" v-if="err"
          >Ha ocurrido un error al guardar el rcurso. Por favor intenta
          nuevamente.</b-alert
        >
      </div>
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <PageHeader :title="title" />
            <div class="row">
              <div class="col-12">
                <form class="form-horizontal" role="form">
                  <b-form-group
                    id="name"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="name del recurso"
                    label-for="name"
                  >
                    <b-form-input
                      for="name"
                      v-model="form.name"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="tipoRecurso"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Tipo de recurso"
                    label-for="tipo"
                  >
                    <b-form-input
                      for="tipo"
                      v-model="form.tipo"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="cliente"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Cliente"
                    label-for="cliente"
                  >
                    <b-form-input
                      for="cliente"
                      v-model="form.cliente"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="academico"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Académico"
                    label-for="academico"
                  >
                    <b-form-input
                      for="academico"
                      v-model="form.academico"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="corporativo"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Corporativo"
                    label-for="corporativo"
                  >
                    <b-form-input
                      for="corporativo"
                      v-model="form.corporativo"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="cursoTransversal"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Curso transversal"
                    label-for="curso"
                  >
                    <b-form-input
                      for="curso"
                      v-model="form.curso"
                      required
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="name del tab"
                    label-for="tab"
                  >
                    <select class="custom-select" v-model="form.tab" required>
                      <option selected value="0"
                        >Presentaciones / Interacciones</option
                      >
                      <option value="1">Videos</option>
                      <option value="2">Simuladores</option>
                    </select>
                  </b-form-group>

                  <b-form-group
                    id="enlace"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="enlace"
                    label-for="enlace"
                  >
                    <b-form-input
                      id="enlace"
                      type="text"
                      required
                      name="enlace"
                      v-model="form.enlace"
                    ></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Imagen"
                    label-for="imagen"
                  >
                    <file-input v-on:update="updateImagen"></file-input>
                  </b-form-group>

                  <button
                    class="btn btn-primary float-right"
                    @click="saveResources"
                    type="submit"
                  >
                    Guardar recurso
                  </button>
                </form>
              </div>
            </div>
            <!-- end row -->
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
<script>
import Layout from "../../layouts/main";
import FileInput from "@/components/file-input";
import PageHeader from "@/components/page-header";
import axios from "axios";
import api from "../../../config/base.js";
import swal from "sweetalert2";
// import { Utils } from "../../../mixins/utils";
/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    FileInput,
    PageHeader,
  },
  data() {
    return {
      exit: false,
      err: false,
      title: "Agregar Recurso",
      form: {
        name: "",
        tipo: "",
        cliente: "",
        academico: "",
        corporativo: "",
        curso: "",
        tab: "",
        enlace: "",
        imagen: "",
      },
    };
  },

  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    updateImagen(img) {
      console.log("soy LA IMAGWN", img);
      let formData = new FormData();
      formData.append("file", img);
      /**
       axios
                .post(
                  api.api + "users/addphoto/" + this.user.id, formData
                )
                .then((r) => {
   ***/
      this.form.imagen = img;
    },
    saveResources() {
      console.log(api.api + "recursos");

      axios
        .post(api.api + "recursos", {
          name: this.form.name,
          tipo: this.form.tipo,
          cliente: this.form.cliente,
          academico: this.form.academico,
          corporativo: this.form.corporativo,
          curso: this.form.curso,
          tab: this.form.tab,
          enlace: this.form.enlace,
          imagen: this.form.imagen,
        })
        .then((resp) => {
          console.log("resp recursos", resp);
          if (resp) {
            this.$router.push("/");
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
              title: "Recurso guardado exitosamente",
            });
          }
        })
        .catch((error) => {
          console.log(error);
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
            title: "Campos no validos",
          });
        });
      // }
    },
  },
};
</script>
