<template>
  <div class="row">
    <div class="col-md-3" v-for="(data, index) in statData" :key="index">
      <div class="card card-data" @click="previsualizar(data)">
        <div class="card-body img-container">
          <div class="media">
            <div class="media-body overflow-hidden">
              <img src="@/assets/images/logo-st-recursos.jpg" />
            </div>
          </div>
          <div class="media-cover">
            <div class="i-container">
              <i class="ri-play-circle-fill"></i>
            </div>
            <!-- <img
            @click="previsualizar(data)"
            style="width: 55px;height: 55px;"
            src="@/assets/images/play-button.png"
          /> -->
          </div>
        </div>

        <div class="card-body border-top">
          <p class="text-truncate font-size-14 mb-0 font-weight-bold">
            {{ data.value }}
          </p>
        </div>
      </div>
    </div>
  </div>
  <!-- end row -->
</template>

<style lang="scss">
.card-data {
  .text-truncate {
    color: #303f48;
  }
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
  .img-container {
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
