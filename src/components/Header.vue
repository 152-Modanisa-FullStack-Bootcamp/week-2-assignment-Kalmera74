<template>
  <div class="header">
    <router-link class="link" to="/favorites/bootcamp">Favorites</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  height: 50px;
  background-color: #f5f5f5;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 10px 20px 10px 40px;
}

#search {
  width: 350px;
  height: 35px;
  background-color: green;
}

.link {
  width: 150px;
  height: 25px;
  text-align: center;
  font-size: 25px;
}
</style>