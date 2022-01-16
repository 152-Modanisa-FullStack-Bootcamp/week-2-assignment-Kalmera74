<template>
  <div class="favorite-card">
    <img :src="favorite.coverImage" alt="favorite.title" />
    <div class="details">
      <h3>{{ favorite.title }}</h3>
      <div class="sub-details">
        <span>{{ favorite.viewCount }}</span>
        <span>{{ favorite.publishDateInMonth }}</span>
      </div>
      <div class="owner">
        <img :src="favorite.ownerImage" alt="favorite.ownerName" />
        <p>{{ favorite.ownerName }}</p>
      </div>
      <p>{{ favorite.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    favorite: {
      type: Object,
    },
  },
};
</script>

<style>
.favorite-card {
  display: flex;
  gap: 25px;
  align-items: center;
  height: 300px;
  width: 700px;
  margin-bottom: 20px;
  background-color: white;
  padding: 0px 10px 0px 10px;
}

.favorite-card img {
  width: 360px;
  height: 200px;
}

.owner {
  display: flex;
  align-items: center;
  gap: 15px;
}

.sub-details {
  display: flex;
  align-items: center;
  gap: 35px;
}

.owner img {
  width: 24px;
  height: 24px;
  border-radius: 50%;
}
</style>