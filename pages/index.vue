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
        <v-treeview
          v-model="bindSelection"
          :items="baseItems"
          dense
          selectable
          return-object
          @input="updateConfig"
        ></v-treeview>
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
    config: null
  }),
  computed: {
    ...mapState('checklist', ['baseItems', 'selection', 'baseSelectionId']),
    // storeのselectionへと双方向バインド
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
    downloadConfig() {
      this.$download(this.config)
    },
    updateConfig() {
      this.config = this.$customText(this.baseSelectionId)
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
