<template>
  <v-card class="pa-md-4" outlined min-height="50px">
    <div class="passing move">
      <div class="passing-bar-vimctext">
        <div v-if="this.$store.state.checklist.selectionId.includes(2)" class="passing-txt-vimctext">text1</div>
        <div v-if="this.$store.state.checklist.selectionId.includes(3)" class="passing-txt-vimctext">text2</div>
        <div v-if="this.$store.state.checklist.selectionId.includes(5)" class="passing-txt-vimctext">text3</div>
        <div v-if="this.$store.state.checklist.selectionId.includes(6)" class="passing-txt-vimctext">text4</div>
      </div>
    </div>
  </v-card>
</template>
<style>
@-webkit-keyframes passing-bar-vimctext {
  /*0% {
    left: 0;
    right: auto;
    width: 0;
  }
  50% {
    left: 0;
    right: auto;
    width: 100%;
  }*/
  0% {
    left: auto;
    right: 0;
    width: 100%;
  }
  100% {
    left: auto;
    right: 0;
    width: 0;
  }
}
@keyframes passing-bar-vimctext {
  /*0% {
    left: 0;
    width: 0;
  }
  40% {
    left: 0;
    width: 100%;
  }*/
  0% {
    left: 0;
    width: 100%;
  }
  100% {
    left: 100%;
    width: 0;
  }
}
@-webkit-keyframes passing-txt-vimctext {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes passing-txt-vimctext {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
/* css */
.passing .passing-bar-vimctext {
  position: relative;
  display: inline-block;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
.passing .passing-bar-vimctext:before {
  content: '';
  display: inline-block;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  background: #222;
}
.passing .passing-txt-vimctext {
  opacity: 0;
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  line-height: 1.5;
}
.passing.move .passing-bar-vimctext:before {
  -webkit-animation: passing-bar-vimctext 0.5s ease 0s 1 normal forwards;
  animation: passing-bar-vimctext 0.5s ease 0s 1 normal forwards;
}
.passing.move .passing-txt-vimctext {
  -webkit-animation: passing-txt-vimctext 0s ease 0s 1 normal forwards;
  animation: passing-txt-vimctext 0s ease 0s 1 normal forwards;
}
</style>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>
