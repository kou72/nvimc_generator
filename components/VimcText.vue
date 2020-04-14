<template>
  <pre><code class="language-js">
"//*********************************************************************
"// Install vim-pulg
"//*********************************************************************
if !filereadable(expand('~/.local/share/nvim/site/autoload/plug.vim'))
  echo 'install vim-plug...'
  call system('curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim')
endif

"*****************************************************************************
" Plug Install Packages
"*****************************************************************************
call plug#begin(expand('~/.config/nvim/plugged'))
Plug 'preservim/nerdtree'
Plug 'joshdick/onedark.vim'
Plug 'Yggdroot/indentLine'
Plug 'Raimondi/delimitMate'
Plug 'sheerun/vim-polyglot'
Plug 'tpope/vim-commentary'
Plug 'vim-airline/vim-airline'
Plug 'vim-airline/vim-airline-themes'
Plug 'tpope/vim-fugitive'
Plug 'airblade/vim-gitgutter'
Plug 'w0rp/ale'
Plug 'Shougo/deoplete.nvim', { 'do': ':UpdateRemotePlugins' }
call plug#end()

" Required
filetype plugin indent on
"*****************************************************************************
" Base Setting
"*****************************************************************************
set clipboard+=unnamedplus
set mouse=a
set tabstop=2
set shiftwidth=2
set expandtab
set ignorecase
  </code></pre>
</template>
<script>
import Prism from '~/plugins/prism'
export default {
  computed: {
    selectionId() {
      return this.$store.state.checklist.selectionId
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>
<style>
.v-card {
  font-family: Courier;
  line-height: 100%;
}

code[class*='language-'] {
  box-shadow: none;
}
</style>
