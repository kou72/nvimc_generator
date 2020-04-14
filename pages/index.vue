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
        <v-treeview v-model="installSelection" :items="installItems" dense selectable return-object @input="updateConfig"></v-treeview>
        <v-treeview v-model="baseSelection" :items="baseItems" dense selectable return-object @input="updateConfig"></v-treeview>
      </v-col>
      <v-col cols="6">
        <!-- config テキスト -->
        <v-btn class="mb-4" @click="downloadConfig">ダウンロード</v-btn>
        <prism language="js">{{ config }}</prism>
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
    config: null,
    installSelection: [],
    baseSelection: []
  }),
  computed: {
    ...mapState('checklist', ['installItems', 'baseItems', 'installInit', 'baseInit'])
  },
  mounted() {
    this.installSelection = this.installInit
    this.baseSelection = this.baseInit
  },
  methods: {
    downloadConfig() {
      this.$download(this.config)
    },
    updateConfig(e) {
      const concatSelection = [...this.installSelection, ...this.baseSelection]
      const segment = concatSelection.map((v) => v.seg)
      const id = concatSelection.map((v) => v.id)
      this.config = this.$customText(segment, id)
    }
  }
}
</script>

<style>
/* configテキストの調整 */
code[class*='language-'] {
  box-shadow: none;
  font-size: small;
}
.v-application code:before {
  content: none;
}
</style>
