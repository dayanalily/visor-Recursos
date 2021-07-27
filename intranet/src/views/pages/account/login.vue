<template>
  <div>
    <div class="home-btn d-none d-sm-block">
      <a href="/">
        <i class="mdi mdi-home-variant h2 text-white"></i>
      </a>
    </div>
    <div>
      <div class="container-fluid p-0">
        <div class="row no-gutters">
          <div class="col-lg-3"></div>

          <div class="col-lg-6">
            <div
              class="authentication-page-content p-4 d-flex align-items-center min-vh-100"
            >
              <div class="w-100">
                <div class="row justify-content-center">
                  <div class="col-lg-9">
                    <div>
                      <div class="text-center">
                        <div>
                          <a href="/" class="logo">
                            <img
                              src="@/assets/images/logo-st.png"
                              height="100"
                              alt="logo"
                            />
                          </a>
                        </div>

                        <h4 class="font-size-18 mt-4"></h4>
                        <p class="text-muted"></p>
                      </div>

                      <b-alert
                        variant="danger"
                        class="mt-3"
                        v-if="notification.message"
                        show
                        dismissible
                        >{{ notification.message }}</b-alert
                      >

                      <div class="p-2 mt-5">
                        <form
                          class="form-horizontal"
                          @submit.prevent="tryToLogIn"
                        >
                          <div class="form-group auth-form-group-custom mb-4">
                            <i class="ri-mail-line auti-custom-input-icon"></i>
                            <label for="run">Rut</label>
                            <input
                              type="text"
                              v-model="run"
                              class="form-control"
                              id="run"
                              placeholder="Rut"
                              :class="{
                                'is-invalid': submitted && $v.run.$error,
                              }"
                            />
                            <div
                              v-if="submitted && $v.run.$error"
                              class="invalid-feedback"
                            >
                              <span v-if="!$v.run.required"
                                >Correo es requerido.</span
                              >
                              <span v-if="!$v.run.run"
                                >Por favor introduzca un rut valido
                                válido.</span
                              >
                            </div>
                          </div>

                          <div class="form-group auth-form-group-custom mb-4">
                            <i
                              class="ri-lock-2-line auti-custom-input-icon"
                            ></i>
                            <label for="userpassword">Contraseña</label>
                            <input
                              v-model="password"
                              type="password"
                              class="form-control"
                              id="userpassword"
                              placeholder="Enter password"
                              :class="{
                                'is-invalid': submitted && $v.password.$error,
                              }"
                            />
                            <div
                              v-if="submitted && !$v.password.required"
                              class="invalid-feedback"
                            >
                              Se requiere contraseña.
                            </div>
                          </div>
                          <!---
                          <div class="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              class="custom-control-input"
                              id="customControlInline"
                            />
                            <label
                              class="custom-control-label"
                              for="customControlInline"
                            >Remember me</label>
                          </div>
                          -->

                          <div class="mt-4 text-center">
                            <button
                              class="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Iniciar sesión
                            </button>
                          </div>
                          <!--
                          <div class="mt-4 text-center">
                            <router-link
                              tag="a"
                              to="/forgot-password"
                              class="text-muted"
                            >
                              <i class="mdi mdi-lock mr-1"></i> Forgot your
                              password?
                            </router-link>
                          </div>
                          -->
                        </form>
                      </div>
                      <!---
                      <div class="mt-5 text-center">
                        <p>
                          Don't have an account ?
                          <router-link
                            tag="a"
                            to="/register"
                            class="font-weight-medium text-primary"
                          >Register</router-link>
                        </p>
                        <p>
                          © 2020 Nazox. Crafted with
                          <i class="mdi mdi-heart text-danger"></i> by Themesdesign
                        </p>
                      </div>
                      -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3"></div>

          <!--
          <div class="col-lg-8">
            <div class="authentication-bg">
              <div class="bg-overlay"></div>
            </div>
          </div>
       -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import axios from "axios";
import api from "../../../config/base.js";
import swal from "sweetalert2";
import { Utils } from "../../../mixins/utils";
// import router from "../../../router/routes";
import {
  authMethods,
  authFackMethods,
  notificationMethods,
} from "@/state/helpers";

// import router from "@/router";

export default {
  mixins: [Utils()],

  data() {
    return {
      // email: "", // "admin@themesdesign.in",
      password: "", //"123456",
      run: "", //"123456",
      submitted: false,
    };
  },
  mounted() {
    this.testApi();
  },
  computed: {
    notification() {
      return this.$store ? this.$store.state.notification : null;
    },
  },
  created() {
    document.body.classList.add("auth-body-bg");
  },
  validations: {
    run: { required },
    password: { required },
  },
  methods: {
    ...authMethods,
    ...authFackMethods,
    ...notificationMethods,
    testApi() {
      axios
        .get(
          api.api + "/ping"
          // "http://localhost:3000/ping"
        )
        .then((res) => {
          console.log("resp", res.data);
        });
    },

    tryToLogIn() {
      this.submitted = true;
      this.authError = null;
      if ((this.run.length > 7) & (this.password.length > 3)) {
        axios
          .post(api.api + "login", {
            run: this.runClean(this.run),
            password: this.password,
          })
          .then((r) => {
            sessionStorage.token = r.data.token;
            localStorage.token = r.data.token;
            sessionStorage.userId = r.data.data.id;
            localStorage.userId = r.data.data.id;
            sessionStorage.data = JSON.stringify(r.data.data);
            localStorage.user = JSON.stringify(r.data.data);
            this.tryingToRegister = false;
            this.isRegisterError = false;
            this.registerSuccess = true;
             this.$router.push("/");
          })
          .catch((error) => {
            console.log("day", error);
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
              title: "Usuario o Contraseña no validos",
            });
          });
      } else {
        // this.login({ run: this.run, password: this.password });
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
          title: "Favor ingrese usuario y clave validos",
        });
      }
    },


  },
};
</script>

<style>
.home-btn {
  display: none !important;
}
</style>
