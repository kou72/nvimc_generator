<template>
  <prism language="js">{{ vimc }}</prism>
</template>
<script>
export default {
  data() {
    return {
      vimc: `"//*****************************************************************************
"// Install vim-pulg
"//*****************************************************************************
if !filereadable(expand('~/.local/share/nvim/site/autoload/plug.vim'))
  echo 'install vim-plug...'
  call system('curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim')
endif`
    }
  }
}
</script>
<style>
code[class*='language-'] {
  box-shadow: none;
  font-size: x-small;
}
</style>
