<template>
  <div class="page-container">
    <!-- Title -->
    <section class="area">
      <div class="title">
        <h1>
          NeoVimC Generator
        </h1>
        <p class="discription">step1 : custom config</p>
        <p class="discription">step2 : download</p>
        <p class="discription">step3 : open neovim</p>
      </div>
    </section>
    <!-- Contents -->
    <section class="area">
      <v-row>
        <v-col cols="6" class="checkbox">
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
            <p class="caption ma-0">*node.jsが必須です!</p>
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
        <v-col cols="6" class="config">
          <!-- config テキスト -->
          <prism language="js">{{ config }}</prism>
        </v-col>
      </v-row>
    </section>
    <section class="area">
      <v-row>
        <v-col cols="3" class="download-area">
          <!-- ダウンロードボタン -->
          <v-btn class="download" dark outlined depressed fab @click="downloadConfig">
            <v-icon size="4vw">mdi-download</v-icon>
          </v-btn>
          <p class="discription">download</p>
        </v-col>
        <!-- ファイルコピー -->
        <v-col cols="6" class="download-area">
          <prism class="shell">> mv ~/Downloads/init.vim.txt ~/.config/nvim/init.vim</prism>
          <p class="discription">move file</p>
          <!-- githubリンク -->
          <v-btn class="github" outlined :href="documentURL" target="_blank">
            document
            <v-icon right>mdi-github</v-icon>
          </v-btn>
        </v-col>
        <!-- ファイルを開く -->
        <v-col cols="3" class="download-area">
          <prism class="shell">> nvim</prism>
          <p class="discription">open file</p>
        </v-col>
      </v-row>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import OpenCard from '~/components/OpenCard'

export default {
  components: {
    OpenCard
  },
  data: () => ({
    selection: [],
    config: null,
    map: null,
    documentURL: 'https://github.com/kou72/nvimc_generator'
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
h1 {
  font-size: 8vw;
  font-weight: 100;
  font-family: unset;
  margin-top: 30vh;
  margin-bottom: 20vh;
}
.discription {
  font-size: 2vw;
  font-weight: 300;
  font-family: unset;
}
.title {
  text-align: center;
}
.checkbox {
  max-height: 90vh;
  overflow: auto;
  padding-top: 0;
  padding-bottom: 0;
}
.config {
  max-height: 90vh;
  overflow: auto;
  padding-top: 0;
  padding-bottom: 0;
  font-size: x-small;
}
.download-area {
  text-align: center;
}
/* テキストを上から52%の位置で揃える */
.download-area .download {
  background-color: #00000080;
  width: 20vh;
  height: 20vh;
  margin-top: 30vh;
  margin-bottom: 2vh;
}
.download-area .shell {
  height: 8vh;
  margin-top: 36vh;
  margin-bottom: 8vh;
}
.download-area .github {
  margin-top: 25vh;
}

.v-label {
  font-size: small;
}

/* configテキストの調整 */
code[class*='language-'] {
  box-shadow: none;
}
.v-application code:before {
  content: none;
}

/* フルスクリーンスクロールスナップ */
.page-container {
  width: 100%;
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}
.area {
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
  padding-top: 3vh;
  padding-right: 5%;
  padding-left: 5%;
}
</style>
