<template>
  <v-card class="my-2">
    <v-card-title class="subtitle-2 py-2">
      {{ title }}
      <v-btn icon class="ml-auto" @click="open = !open">
        <v-icon>{{ open ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <div v-show="open" class="px-4 pb-4">
        <slot></slot>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: {
    open: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  }
}
</script>
