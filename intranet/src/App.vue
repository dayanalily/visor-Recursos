<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import appConfig from "@/app.config";

export default {
  name: "app",
  page: {
    // All subcomponent titles will be injected into this template.
    titleTemplate(title) {
      title = typeof title === "function" ? title(this.$store) : title;
      return title ? `${title} | ${appConfig.title}` : appConfig.title;
    }
  },
  watch: {
    '$route' (to, from) {
      console.log('Route changed from ' + from.path + ' to ' + to.path); 
      if (to.path == '/indexRecursos') {
       this.variableGlobal = true
      }
      console.log(this.variableGlobal)
    }
  },
  data() {
    return {
      variableGlobal: false,
    }
  },
  mounted() {
  }
};
</script>