<template>
  <div class="row">
    <div class="col-md-4" v-for="(data, index) in statData" :key="index">
      <div class="card">
        <div class="card-body">
          <div class="media">
            <div class="media-body overflow-hidden">
              <p class="text-truncate font-size-14 mb-2">{{ data.value }}</p>
              <img src="@/assets/images/logo-st.png" style="width: 215px;" />
            </div>
            <div class="text-primary">
              <i :class="`${data.icon} font-size-24`"></i>
            </div>
          </div>
        </div>

        <div class="card-body border-top py-3">
          <img
            @click="previsualizar(data)"
            style="width: 55px;height: 55px;margin-top: -40px;"
            src="@/assets/images/play-button.png"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>
<script>
/**
 * Widget Component
 import router from '@/router';

 */
export default {
  data() {
    return {
      statData: [
        {
          title: "Number of Sales",
          icon: "ri-stack-line",
          value: "recurso 1",
          img: "",
          url:
            "https://gea.sfo2.digitaloceanspaces.com/BibliografiaST/Corporativo/Salud_y_Famaceutico/C1_M1%20-%20Accidente%20Cerebrovascular%20-%20Storyline%20output/story.html",
        },
        {
          title: "Sales Revenue",
          icon: "ri-store-2-line",
          value: "$ 38452",
          subvalue: " 2.4% ",
        },
        {
          title: "Average Price",
          icon: "ri-briefcase-4-line",
          value: "$ 15.4",
          subvalue: " 2.4% ",
        },
      ],
    };
  },
  methods: {
    previsualizar(index) {
      console.log(index);
      window.open(index.url, "_blank");
    },
  },
};
</script>
