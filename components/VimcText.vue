<template>
  <!-- <v-card class="pa-md-4" outlined dark min-height="50px"> -->
  <!--   <div v-if="selectionId.length"> -->
  <!--     <div>"*****************************************************</div> -->
  <!--     <div>" Base Setting</div> -->
  <!--     <div>"*****************************************************</div> -->
  <!--   </div> -->
  <!--   <div v-if="selectionId.includes('clipboard')">set clipboard+=unnamedplus</div> -->
  <!--   <div v-if="selectionId.includes('mouse')">set mouse=a</div> -->
  <!--   <div v-if="selectionId.includes('tabstop')">set tabstop=2</div> -->
  <!--   <div v-if="selectionId.includes('shiftwidth')">set shiftwidth=2</div> -->
  <!--   <div v-if="selectionId.includes('expandtab')">set expandtab</div> -->
  <!--   <div v-if="selectionId.includes('ignorecase')">set ignorecase</div> -->
  <!-- </v-card> -->
  <div>
    <pre><code class="language-vim">
"*****************************************************************************
" Install vim-pulg
"*****************************************************************************
  </code></pre>

    <pre><code class="language-js">
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
  </div>
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
</style>
