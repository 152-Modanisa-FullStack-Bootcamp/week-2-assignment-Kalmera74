<template>
  <div class="favoritebody">
    <FavoriteCard :key="item.id" :favorite="item" v-for="item in favorites" />
  </div>
</template>

<script>
import api from "../apis/api";
export default {
  components: {
    FavoriteCard: () => import("../components/FavoriteVideoCard.vue"),
  },

  data() {
    return {
      favorites: [],
    };
  },

  mounted() {
    const x = api.getFavorites();
    x.then((data) => {
      this.favorites = data;
    });
    console.log(this.favorites);
  },
};
</script>

<style>
.favoritebody {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
  background-color: wheat;
  padding-top: 20px;
}
</style>