<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1>NeoVim Config Generator</h1>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="6">
        <v-treeview
          v-model="selection"
          :items="items"
          :selection-type="selectionType"
          selectable
          return-object
          open-all
        ></v-treeview>
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-4" @click="downloadText">ダウンロード</v-btn>
        <v-card class="pa-md-4" outlined min-height="50px">
          <div v-for="node in selection" :key="node.id">
            {{ node.name }}
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    selection: [],
    items: [
      {
        id: 1,
        name: 'Root',
        children: [
          { id: 2, name: 'Child #1' },
          { id: 3, name: 'Child #2' },
          {
            id: 4,
            name: 'Child #3',
            children: [
              { id: 5, name: 'Grandchild #1' },
              { id: 6, name: 'Grandchild #2' }
            ]
          }
        ]
      }
    ]
  }),
  methods: {
    downloadText() {
      const name = this.selection.map((v) => v.name)
      const blob = new Blob([name], { type: 'text/plain' })
      const link = document.createElement('a')
      link.href = window.URL.createObjectURL(blob)
      link.download = 'init.vim.txt'
      link.click()
    }
  }
}
</script>
