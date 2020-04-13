<template>
  <v-card class="pa-md-4" outlined dark min-height="50px">
    <div v-if="selectionId.length">
      <div>"*****************************************************</div>
      <div>" Base Setting</div>
      <div>"*****************************************************</div>
    </div>
    <div v-if="selectionId.includes('clipboard')">set clipboard+=unnamedplus</div>
    <div v-if="selectionId.includes('mouse')">set mouse=a</div>
    <div v-if="selectionId.includes('tabstop')">set tabstop=2</div>
    <div v-if="selectionId.includes('shiftwidth')">set shiftwidth=2</div>
    <div v-if="selectionId.includes('expandtab')">set expandtab</div>
    <div v-if="selectionId.includes('ignorecase')">set ignorecase</div>
  </v-card>
</template>
<script>
export default {
  computed: {
    selectionId() {
      return this.$store.state.checklist.selectionId
    }
  }
}
</script>
<style>
.v-card {
  font-family: Courier;
  line-height: 100%;
}
</style>
