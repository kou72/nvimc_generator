<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Passing text="NeoVim Config Generator"></Passing>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="6">
        <v-treeview
          v-model="selection"
          :items="this.$store.state.checklist.items"
          selectable
          return-object
          @input="updateText"
        ></v-treeview>
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-4" @click="downloadText">ダウンロード</v-btn>
        <VimcText />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Passing from '~/components/Passing'
import VimcText from '~/components/VimcText'

export default {
  components: {
    Passing,
    VimcText
  },
  data: () => ({
    text: 'Test Text\nSample Text'
  }),
  computed: {
    selection: {
      get() {
        return this.$store.state.checklist.selection
      },
      set(value) {
        this.$store.commit('checklist/updateSelection', value)
      }
    }
  },
  methods: {
    downloadText() {
      this.$download(this.text)
    },
    updateText() {
      if (this.$store.state.checklist.selectionId.includes(2)) {
        this.text = this.text + '\nAdd Text'
      }
    }
  }
}
</script>
<!-- <style> -->
<!-- .v-card { -->
<!--   white-space: pre-line; -->
<!-- } -->
<!-- </style> -->
