<template>
  <div class="item-card">
    <router-link :to="videoLink">
      <img
        @mouseover="hover = true"
        @mouseout="hover = false"
        class="cover-image"
        :src="cardImage"
      />
    </router-link>
    <div class="user">
      <img class="profile" :src="item.ownerImage" />
      <div class="credentials">
        <p>{{ item.title }}</p>
        <p>{{ item.ownerName }}</p>
        <div class="sub-view">
          <p>{{ item.viewCount }}</p>
          <p>{{ item.publishDateInMonth }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    cardImage: function () {
      return this.hover ? this.item.hoverImage : this.item.coverImage;
    },
    videoLink: function () {
      return "watch/" + this.item.id;
    },
  },
};
</script>

<style>
.sub-view {
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
}

.item-card {
  background-color: white;
  width: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 0px 20px 0px;
  padding-top: 20px;
}

.cover-image {
  width: 360px;
  height: 200px;
}

.user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 360px;
  height: 150px;
}

.user img {
  width: 36px;
  height: 36px;
  border-radius: 50%;
}
</style>