<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- タイトル -->
        <Passing text="NeoVim Config Generator"></Passing>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="4">
        <!-- Auto Install -->
        <OpenCard title="Default Setting" :open="false">
          <OpenCard title="Auto Install" :open="false">
            <v-checkbox
              v-for="item in items.install"
              :key="item.id"
              v-model="selection"
              :label="item.name"
              :value="item"
              hide-details
              dense
              class="my-0"
              @change="updateConfig"
            />
          </OpenCard>
          <!-- Base Setting -->
          <OpenCard title="Base Setting" :open="false">
            <v-checkbox
              v-for="item in items.base"
              :key="item.id"
              v-model="selection"
              :label="item.name"
              :value="item"
              hide-details
              dense
              class="my-0"
              @change="updateConfig"
            />
          </OpenCard>
          <!-- Plugin -->
          <OpenCard title="Plugin" :open="false">
            <v-checkbox
              v-for="item in items.plug"
              :key="item.id"
              v-model="selection"
              :label="item.name"
              :value="item"
              hide-details
              dense
              class="my-0"
              @change="updateConfig"
            />
          </OpenCard>
          <!-- Design -->
          <OpenCard title="Visual" :open="false">
            <v-checkbox
              v-for="item in items.visual"
              :key="item.id"
              v-model="selection"
              :label="item.name"
              :value="item"
              hide-details
              dense
              class="my-0"
              @change="updateConfig"
            />
          </OpenCard>
        </OpenCard>
        <!-- languages  -->
        <OpenCard title="Supported Languages" :open="false">
          <v-checkbox
            v-for="item in items.languages"
            :key="item.id"
            v-model="selection"
            :label="item.name"
            :value="item"
            hide-details
            dense
            class="my-0"
            @change="$emit('input', $event.target.checked)"
          />
        </OpenCard>
        <!-- <CheckBoxCard :selection="selection" title="test" :items="items.base" :open="false" /> -->
        <v-checkbox
          v-for="item in items.base"
          :key="item.id"
          :label="item.name"
          :input-value="item"
          @change="updateValue(item, $event)"
        />
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
// import CheckBoxCard from '~/components/CheckBoxCard'

export default {
  components: {
    Passing,
    OpenCard
    // CheckBoxCard
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
    updateValue(item, e) {
      if (e) {
        this.selection.push(item)
      } else {
        this.selection = this.selection.filter((v) => v.id !== item.id)
      }
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
