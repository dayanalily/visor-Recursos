

<template>
  <header id="page-topbar">
    <div class="navbar-header">
      <div class="d-flex">
        <!-- LOGO -->
        <div class="navbar-brand-box">
          <a  class="logo logo-dark">
            <span class="logo-sm">
              <img src="@/assets/images/logo-sm-st.png" alt height="50" />
            </span>
            <span class="logo-lg">
              <img src="@/assets/images/logo-st-dark.png" alt height="50" />
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

        <button
          @click="toggleMenu"
          type="button"
          class="btn btn-sm px-3 font-size-24 header-item waves-effect"
          id="vertical-menu-btn"
        >
          <i class="ri-menu-2-line align-middle"></i>
        </button>

       
      </div>

      <div class="d-flex">
        <div class="dropdown d-inline-block d-lg-none ml-2">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            id="page-header-search-dropdown"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <i class="ri-search-line"></i>
          </button>
          <div
            class="dropdown-menu dropdown-menu-lg dropdown-menu-right p-0"
            aria-labelledby="page-header-search-dropdown"
          >
            <form class="p-3">
              <div class="form-group m-0">
                <div class="input-group">
                  <input type="text" class="form-control" placeholder="Search ..." />
                  <div class="input-group-append">
                    <button class="btn btn-primary" type="submit">
                      <i class="ri-search-line"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

     

        <div class="dropdown d-none d-lg-inline-block ml-1">
          <button
            type="button"
            class="btn header-item noti-icon waves-effect"
            @click="initFullScreen"
          >
            <i class="ri-fullscreen-line"></i>
          </button>
        </div>

    
        <b-dropdown
          right
          variant="black"
          toggle-class="header-item"
          class="d-inline-block user-dropdown"
        >
          <template v-slot:button-content>
            <img
              class="rounded-circle header-profile-user"
                 src="@/assets/images/perfil-st.png"
              alt="Header Avatar"
            />
            <span class="d-none d-xl-inline-block ml-1">  Admin ST</span>
            <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
          </template>
          <!-- item logout-->
        
          <div ></div>
          <a class="dropdown-item text-danger" href="/logout">
            <i class="ri-shut-down-line align-middle mr-1 text-danger"></i>
            Cerrar sesión
          </a>
        </b-dropdown>

        <div class="dropdown d-inline-block">
          <button
            type="button"
            class="btn header-item noti-icon right-bar-toggle waves-effect toggle-right"
            @click="toggleRightSidebar"
          >
            <i class="ri-settings-2-line toggle-right"></i>
          </button>
        </div>
        <!-- <button
            @click="iniciarSession"
            type="button"
            class="btn header-item btn-login right-bar-toggle waves-effect toggle-right"
          >
            Iniciar Sesión
          </button> -->
      </div>
    </div>
  </header>
</template>
<script>

import i18n from "../i18n";
import router from '@/router';

export default {
  data() {
    return {
      languages: [
        {
          flag: require("@/assets/images/flags/us.jpg"),
          language: "en",
          title: "English"
        },
        {
          flag: require("@/assets/images/flags/french.jpg"),
          language: "fr",
          title: "French"
        },
        {
          flag: require("@/assets/images/flags/spain.jpg"),
          language: "es",
          title: "spanish"
        },
        {
          flag: require("@/assets/images/flags/chaina.png"),
          language: "zh",
          title: "Chinese"
        },
        {
          flag: require("@/assets/images/flags/arabic.png"),
          language: "ar",
          title: "Arabic"
        }
      ],
      current_language: "en"
    };
  },
 mounted(){

 },
  methods: {
    iniciarSession(){
router.push("login")
    },
    toggleMenu() {
      this.$parent.toggleMenu();
    },
    initFullScreen() {
      document.body.classList.toggle("fullscreen-enable");
      if (
        !document.fullscreenElement &&
        /* alternative standard method */ !document.mozFullScreenElement &&
        !document.webkitFullscreenElement
      ) {
        // current working methods
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(
            Element.ALLOW_KEYBOARD_INPUT
          );
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        }
      }
    },
    toggleRightSidebar() {
      this.$parent.toggleRightSidebar();
    },
    setLanguage(locale) {
      i18n.locale = locale;
      this.current_language = i18n.locale;
    }
  }
};
</script>

<style lang="scss" scoped>
// .notify-item {
//   .active {
//     color: #16181b;
//     background-color: #f8f9fa;
//   }
// }
// .btn-login {
//   display: none
// }
</style>