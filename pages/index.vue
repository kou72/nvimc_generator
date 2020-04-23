<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- タイトル -->
        <Passing text="NeoVim Config Generator"></Passing>
        <v-divider class="mt-8"></v-divider>
      </v-col>
      <v-col cols="5">
        <!-- Auto Install -->
        <OpenCard title="Default Setting" :open="false">
          <OpenCard title="Auto Install" :open="true">
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
          <OpenCard title="Base Setting" :open="true">
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
          <OpenCard title="Plugin" :open="true">
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
          <OpenCard title="Visual" :open="true">
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
        <!-- service  -->
        <OpenCard title="Serport Service" :open="true">
          <p class="caption ma-0">*node.js is required!</p>
          <v-row>
            <v-col>
              <div v-for="(item, index) in items.service" :key="item.id">
                <v-checkbox
                  v-if="index % 2 == 0"
                  v-model="selection"
                  :label="item.name"
                  :value="item"
                  hide-details
                  dense
                  class="my-0"
                  @change="updateConfig"
                />
              </div>
            </v-col>
            <v-col>
              <div v-for="(item, index) in items.service" :key="item.id">
                <v-checkbox
                  v-if="index % 2 == 1"
                  v-model="selection"
                  :label="item.name"
                  :value="item"
                  hide-details
                  dense
                  class="my-0"
                  @change="updateConfig"
                />
              </div>
            </v-col>
          </v-row>
        </OpenCard>
        <OpenCard title="Mapping" :open="false">
          <!-- mapping -->
          <v-textarea class="body-2" :value="map" rows="12" filled hide-details @input="updateMap"></v-textarea>
        </OpenCard>
      </v-col>
      <v-col cols="7">
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

export default {
  components: {
    Passing,
    OpenCard
  },
  data: () => ({
    selection: [],
    config: null,
    map: null
  }),
  computed: {
    ...mapState('checklist', ['items', 'init', 'mapInit'])
  },
  mounted() {
    this.selection = this.init
    this.map = this.mapInit
    this.updateConfig()
  },
  methods: {
    downloadConfig() {
      this.$download(this.config)
    },
    updateConfig(e) {
      const segment = this.selection.map((v) => v.seg)
      const id = this.selection.map((v) => v.id)
      this.config = this.$customConfig(segment.flat(), id, this.map)
    },
    updateMap(e) {
      this.map = e
      this.updateConfig()
    }
  }
}
</script>

<style>
/* configテキストの調整 */
code[class*='language-'] {
  box-shadow: none;
  font-size: x-small;
  max-height: 48em;
  overflow: auto;
}
.v-application code:before {
  content: none;
}
.v-label {
  font-size: small;
}
.v-textarea textarea {
  font-family: monospace;
  line-height: normal;
}
</style>
