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
import Passing from '~/components/Passing'

export default {
  components: {
    Passing // 隠しボックスのアニメーション
  },
  data: () => ({
    config: null,
    installSelection: [],
    baseSelection: [{ seg: 'base', id: 'ignorecase', name: '検索で大文字と小文字を区別しない' }]
  }),
  computed: {
    ...mapState('checklist', ['installItems', 'baseItems', 'segment', 'selectionId'])
  },
  methods: {
    downloadConfig() {
      this.$download(this.config)
    },
    updateConfig(e) {
      const mapSelection = [...this.installSelection, ...this.baseSelection]
      this.$store.commit('checklist/updateSelection', mapSelection)
      this.config = this.$customText(this.segment, this.selectionId)
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
