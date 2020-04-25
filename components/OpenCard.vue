<template>
  <v-card class="my-2">
    <v-card-title class="subtitle-2 py-2">
      {{ title }}
      <v-btn icon class="ml-auto" @click="openState = !openState">
        <v-icon>{{ openState ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <div v-show="openState" class="px-4 pb-4">
        <slot class="slot"></slot>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    openState: false
  }),
  mounted() {
    this.openState = this.open
  }
}
</script>

<style>
.v-label {
  font-size: small;
}
.v-textarea textarea {
  font-family: monospace;
  line-height: normal;
}
</style>
