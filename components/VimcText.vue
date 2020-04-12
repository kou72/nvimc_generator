<template>
  <v-card class="pa-md-4" outlined min-height="50px">
    <div v-if="this.$store.state.checklist.selectionId.includes(2)">text1</div>
    <div v-if="this.$store.state.checklist.selectionId.includes(3)">text2</div>
    <div v-if="this.$store.state.checklist.selectionId.includes(5)">text3</div>
    <div v-if="this.$store.state.checklist.selectionId.includes(6)">text4</div>
  </v-card>
</template>
