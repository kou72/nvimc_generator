<template>
  <!-- 基本設定 -->
  <v-card class="my-2">
    <v-card-title>
      {{ title }}
      <v-btn icon class="ml-auto" @click="show = !show">
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-title>
    <v-expand-transition>
      <div v-show="show" class="px-4 pb-4">
        <slot></slot>
      </div>
    </v-expand-transition>
  </v-card>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data: () => ({
    show: true
  })
}
</script>
