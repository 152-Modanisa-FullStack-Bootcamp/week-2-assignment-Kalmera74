<template>
  <div id="app">
    <app-header />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
};
</script>

<style>
body {
  display: flex;
  justify-content: center;
}
#app {
  width: 100%;
  height: 650px;
  background-color: red;
}
</style>
