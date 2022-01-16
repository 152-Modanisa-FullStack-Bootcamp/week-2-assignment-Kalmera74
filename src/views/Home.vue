<template>
  <div class="homebody">
    <VideoCard :key="item.id" :item="item" v-for="item in items" />
  </div>
</template>

<script>
import api from "../apis/api.js";
export default {
  data() {
    return {
      items: [],
    };
  },
  components: {
    VideoCard: () => import("../components/VideoCard.vue"),
  },
  mounted() {
    const x = api.getAll();
    x.then((data) => {
      this.items = data;
    });
  },
};
</script>

<style>
.homebody {
  background-color: wheat;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 0px 20px 0px;
}
</style>