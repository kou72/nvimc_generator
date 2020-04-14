<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Passing text="NeoVim Config Generator"></Passing>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="6">
        <v-treeview v-model="bindSelection" :items="items" dense selectable return-object @input="updateText"></v-treeview>
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-4" @click="downloadText">ダウンロード</v-btn>
        <prism language="js">{{ text }}</prism>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Passing from '~/components/Passing'

export default {
  components: {
    Passing
  },
  data: () => ({
    text: null
  }),
  computed: {
    ...mapState('checklist', ['items', 'selection', 'selectionId']),
    bindSelection: {
      get() {
        return this.selection
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
      this.text = this.$customText(this.selectionId)
    }
  }
}
</script>
<style>
code[class*='language-'] {
  box-shadow: none;
  font-size: small;
}
.v-application code:before {
  content: none;
}
</style>
