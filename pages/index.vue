<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- タイトル -->
        <Passing text="NeoVim Config Generator"></Passing>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="4">
        <!-- Default Setting -->
        <OpenCard title="Default Setting" :open="false">
          <CheckBoxCard title="Auto Install" :items="items.install" :open="false" @emit="updateSelection($event)" />
          <CheckBoxCard title="Base Setting" :items="items.base" :open="false" @emit="updateSelection($event)" />
          <CheckBoxCard title="Plugin" :items="items.plug" :open="false" @emit="updateSelection($event)" />
          <CheckBoxCard title="Visual" :items="items.visual" :open="false" @emit="updateSelection($event)" />
        </OpenCard>
        <!-- languages  -->
        <CheckBoxCard title="Supported Languages" :items="items.languages" :open="true" @emit="updateSelection($event)" />
      </v-col>
      <v-col cols="8">
        <!-- config テキスト -->
        <prism language="js">{{ config }}</prism>
        <!-- ダウンロードボタン -->
        <v-btn class="mb-4" @click="downloadConfig">ダウンロード</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import Passing from '~/components/Passing' // 隠しボックスのアニメーション
import OpenCard from '~/components/OpenCard'
import CheckBoxCard from '~/components/CheckBoxCard'

export default {
  components: {
    Passing,
    OpenCard,
    CheckBoxCard
  },
  data: () => ({
    selection: [],
    config: null
  }),
  computed: {
    ...mapState('checklist', ['items', 'init'])
  },
  mounted() {
    this.selection = this.init
    this.updateConfig()
  },
  methods: {
    downloadConfig() {
      this.$download(this.config)
    },
    updateConfig(e) {
      const segment = this.selection.map((v) => v.seg)
      const id = this.selection.map((v) => v.id)
      this.config = this.$customText(segment.flat(), id)
    },
    updateSelection(e) {
      if (e.event) {
        this.selection.push(e.item)
      } else {
        this.selection = this.selection.filter((v) => v.id !== e.item.id)
      }
      this.updateConfig()
    }
  }
}
</script>

<style>
/* configテキストの調整 */
code[class*='language-'] {
  box-shadow: none;
  font-size: small;
  max-height: 32em;
  overflow: auto;
}
.v-application code:before {
  content: none;
}
.v-label {
  font-size: small;
}
</style>
