<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <Passing text="NeoVim Config Generator"></Passing>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="6">
        <v-treeview v-model="selection" :items="this.$store.state.checklist.items" selectable return-object></v-treeview>
      </v-col>
      <v-col cols="6">
        <v-btn class="mb-4" @click="downloadText">ダウンロード</v-btn>
        <v-btn class="mb-4" @click="updateText">アップデートテキスト</v-btn>
        <v-card class="pa-md-4" min-height="50px">
          <div v-for="node in this.$store.state.checklist.selection" :key="node.id">
            {{ node.name }}
          </div>
        </v-card>
        <v-card class="pa-md-4" min-height="50px">{{ text }}</v-card>
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
      this.text = this.text + '\nAdd Text'
    }
  }
}
</script>
<style>
.v-card {
  white-space: pre-line;
}
</style>
