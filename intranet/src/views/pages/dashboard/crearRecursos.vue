<template>
  <Layout>
    <div class="row">
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
                    <b-form-input for="nombre"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="tipoRecurso"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Tipo de recurso"
                    label-for="tipo"
                  >
                    <b-form-input for="tipo"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="cliente"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Cliente"
                    label-for="cliente"
                  >
                    <b-form-input for="cliente"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="academico"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Académico"
                    label-for="academico"
                  >
                    <b-form-input for="academico"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="corporativo"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Corporativo"
                    label-for="corporativo"
                  >
                    <b-form-input for="corporativo"></b-form-input>
                  </b-form-group>

                  <b-form-group
                    id="cursoTransversal"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="Curso transversal"
                    label-for="curso"
                  >
                    <b-form-input for="curso"></b-form-input>
                  </b-form-group>

                  <div class="form-group row">
                    <label class="col-lg-3 col-md-4 col-form-label"
                      >Nombre del tab</label
                    >
                    <div class="col-lg-9 col-md-8">
                      <select class="custom-select">
                        <option selected>Selecciona un tab</option>
                        <option value="1"
                          >Presentaciones / Interacciones</option
                        >
                        <option value="2">Videos</option>
                        <option value="3">Simuladores</option>
                      </select>
                    </div>
                  </div>

                  <b-form-group
                    id="url"
                    label-cols-md="4"
                    label-cols-lg="3"
                    label="URL"
                    label-for="url"
                  >
                    <b-form-input id="url" type="url" name="url"></b-form-input>
                  </b-form-group>

                  <div class="form-group row">
                    <label class="col-lg-3 col-md-4 col-form-label"
                      >Imagen</label
                    >
                    <div class="col-lg-9 col-md-8">
                      <div class="custom-file">
                        <input
                          id="customFile"
                          type="file"
                          class="custom-file-input"
                        />
                        <label class="custom-file-label" for="customFile"
                          >Seleccionar archivo</label
                        >
                      </div>
                    </div>
                  </div>

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
import PageHeader from "@/components/page-header";

/**
 * Dashboard component
 */
export default {
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      title: "Agregar Recurso",
    };
    
  },
  methods: {
    chooseFiles() {
        document.getElementById("fileUpload").click()
    },
  }
};
</script>
