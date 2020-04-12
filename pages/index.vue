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
          :selection-type="selectionType"
          selectable
          return-object
          open-all
        ></v-treeview>
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-4" @click="downloadText">ダウンロード</v-btn>
        <v-card class="pa-md-4" min-height="50px">
          {{ this.$store.state.checklist.selection }}
        </v-card>
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
      const name = this.$store.state.checklist.selection.map((v) => v.name)
      const blob = new Blob([name], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'init.vim.txt'
      link.click()
    }
  }
}
</script>
