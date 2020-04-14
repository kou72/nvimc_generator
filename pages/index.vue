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
          dense
          :items="this.$store.state.checklist.items"
          selectable
          return-object
          @input="updateText"
        ></v-treeview>
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-4" @click="downloadText">ダウンロード</v-btn>
        <prism language="js">{{ vimc }}</prism>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Passing from '~/components/Passing'

export default {
  components: {
    Passing
  },
  data: () => ({
    text: 'Test Text\nSample Text',
    vimc: null
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
      this.$download(this.vimc)
    },
    updateText() {
      this.vimc = this.$customText(this.$store.state.checklist.selectionId)
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
