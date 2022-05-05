<template>
  <div id="app">
    <headername></headername>
    <router-view></router-view>
    <footername></footername>
  </div>
</template>

<script>
import headername from "@/components/header";
import footername from "@/components/footername";
export default {
  name: "App",
  components: {
    headername,
    footername,
  },
};
</script>

<style>
</style>
