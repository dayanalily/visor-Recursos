<template>
  <Layout>
    <div class="row">
      <div class="col-12">
        <b-alert show dismissible variant="success">El recurso se ha guardado exitosamente.</b-alert>
        <b-alert show dismissible variant="danger">Ha ocurrido un error al guardar el rcurso. Por favor intenta nuevamente.</b-alert>
      </div>
      <div class="col-md-8 offset-md-2">
        <div class="card">
          <div class="card-body">
            <PageHeader :title="title" />
            <div class="row">
              <div class="col-12">
                <form class="form-horizontal" role="form">
                  <b-form-group
                    id="nombre"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Nombre del recurso"
                    label-for="nombre"
                  >
                    <b-form-input for="nombre" v-model="form.nombre" required></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="tipoRecurso"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Tipo de recurso"
                    label-for="tipo"
                  >
                    <b-form-input for="tipo" v-model="form.tipo" required></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="cliente"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Cliente"
                    label-for="cliente"
                  >
                    <b-form-input for="cliente" v-model="form.cliente" required></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="academico"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Académico"
                    label-for="academico"
                  >
                    <b-form-input for="academico" v-model="form.academico" required></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="corporativo"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Corporativo"
                    label-for="corporativo"
                  >
                    <b-form-input for="corporativo" v-model="form.corporativo" required></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="cursoTransversal"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Curso transversal"
                    label-for="curso"
                  >
                    <b-form-input for="curso" v-model="form.curso" required></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Nombre del tab"
                    label-for="tab"
                  >
                    <select class="custom-select" v-model="form.tab" required>
                      <option selected>Selecciona un tab</option>
                      <option value="1">Presentaciones / Interacciones</option>
                      <option value="2">Videos</option>
                      <option value="3">Simuladores</option>
                    </select>
                  </b-form-group>

                  <b-form-group
                    id="url"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="URL"
                    label-for="url"
                  >
                    <b-form-input id="url" type="url" name="url" v-model="form.url" required></b-form-input>
                  </b-form-group>

                  <b-form-group
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Imagen"
                    label-for="imagen"
                  >
                    <file-input v-on:update="updateImagen"></file-input>
                  </b-form-group>

                  <button class="btn btn-primary float-right" type="submit">
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


/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    FileInput,
    PageHeader
  },
  data() {
    return {
      title: "Agregar Recurso",
      form: {
        nombre: "",
        tipo: "",
        cliente: "",
        academico: "",
        corporativo: "",
        curso: "",
        tab: "",
        url: "",
        imagen: "",
      }
    };
  },
  methods: {
    chooseFiles() {
      document.getElementById("fileUpload").click();
    },
    updateImagen(img) {
      console.log("soy LA IMAGWN", img)
      this.form.imagen = img
    }
  },
};
</script>
