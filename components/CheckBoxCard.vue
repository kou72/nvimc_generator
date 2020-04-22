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
        <v-checkbox
          v-for="item in items"
          :key="item.id"
          :label="item.name"
          :input-value="item"
          hide-details
          dense
          class="my-0"
          @change="pushUpdate(item, $event)"
        />
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
    },
    items: {
      type: Array,
      required: true
    }
  },
  data: () => ({
    openState: false
  }),
  mounted() {
    this.openState = this.open
  },
  methods: {
    pushUpdate(i, e) {
      this.$emit('emit', { item: i, event: e })
    }
  }
}
</script>
