<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- タイトル -->
        <Passing text="NeoVim Config Generator"></Passing>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="6">
        <!-- チェックボックス -->
        <v-treeview v-model="selection" :items="Items" dense selectable return-object @input="updateConfig"></v-treeview>
      </v-col>
      <v-col cols="6">
        <!-- config テキスト -->
        <prism language="js">{{ config }}</prism>
      </v-col>
      <v-col cols="12">
        <v-btn class="mb-4" @click="downloadConfig">ダウンロード</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Passing from '~/components/Passing' // 隠しボックスのアニメーション

export default {
  components: {
    Passing
  },
  data: () => ({
    selection: [],
    config: null
  }),
  computed: {
    ...mapState('checklist', ['Items', 'Init'])
  },
  mounted() {
    this.selection = this.Init
  },
  methods: {
    downloadConfig() {
      this.$download(this.config)
    },
    updateConfig(e) {
      const segment = this.selection.map((v) => v.seg)
      const id = this.selection.map((v) => v.id)
      this.config = this.$customText(segment.flat(), id)
    }
  }
}
</script>

<style>
/* configテキストの調整 */
code[class*='language-'] {
  box-shadow: none;
  font-size: x-small;
}
.v-application code:before {
  content: none;
}
</style>
