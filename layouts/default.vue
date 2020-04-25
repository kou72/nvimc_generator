<template>
  <v-app id="background">
    <nuxt />
  </v-app>
</template>

<script>
export default {
  mounted() {
    this.$addTriangleTo(document.getElementById('background'))
  }
}
</script>
<style>
.container {
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
}
</style>
