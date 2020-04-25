<template>
  <v-app id="background">
    <nuxt />
  </v-app>
</template>

<script>
// background image
export default {
  mounted() {
    this.$addTriangleTo(document.getElementById('background'))
  }
}
</script>
<style>
/* Fade In Animation */
body {
  animation: fadeIn 2s ease 0s 1 normal;
  -webkit-animation: fadeIn 2s ease 0s 1 normal;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
