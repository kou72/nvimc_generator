<template>
  <v-card class="pa-md-4" min-height="50px">
    <div>
      <no-ssr>
        <vue-typer
          v-if="this.$store.state.checklist.selectionId.includes(2)"
          :repeat="0"
          :type-delay="10"
          text="ここに表示させたいテキストを記述しよう！"
        ></vue-typer>
        <br v-if="this.$store.state.checklist.selectionId.includes(2)" />
        <vue-typer
          v-if="this.$store.state.checklist.selectionId.includes(3)"
          :repeat="0"
          :type-delay="10"
          text="Sample text"
        ></vue-typer>
        <br v-if="this.$store.state.checklist.selectionId.includes(3)" />
        <vue-typer
          v-if="this.$store.state.checklist.selectionId.includes(5)"
          :repeat="0"
          :type-delay="10"
          text="Sample text 2"
        ></vue-typer>
        <br v-if="this.$store.state.checklist.selectionId.includes(5)" />
        <vue-typer
          v-if="this.$store.state.checklist.selectionId.includes(6)"
          :repeat="0"
          :type-delay="10"
          text="Sample text 3"
        ></vue-typer>
        <br v-if="this.$store.state.checklist.selectionId.includes(6)" />
      </no-ssr>
    </div>
  </v-card>
</template>
<style>
.v-card {
  font-size: small;
}
</style>
