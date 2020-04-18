import Vue from 'vue'

Vue.prototype.$customText = (seg, id) => {
  let baseText = ''
  // Plug自動インストール
  if (seg.includes('install'))
    baseText += `\n"******************
" Install vim-pulg 
"******************
if !filereadable(expand('~/.local/share/nvim/site/autoload/plug.vim'))
  echo 'install vim-plug...'
  call system('curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \\
  https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim')
endif\n`

  // 機能拡張
  if (seg.includes('plug'))
    baseText += `\n"***********************
" Plug Install Packages
"***********************
call plug#begin(expand('~/.config/nvim/plugged'))\n`
  if (id.includes('dirtree')) baseText += "Plug 'preservim/nerdtree'\n"
  if (id.includes('comment')) baseText += "Plug 'sheerun/vim-polyglot'\n"
  if (id.includes('comment')) baseText += "Plug 'tpope/vim-commentary'\n"
  if (id.includes('git')) baseText += "Plug 'tpope/vim-fugitive'\n"
  if (id.includes('git')) baseText += "Plug 'airblade/vim-gitgutter'\n"
  if (id.includes('indentLin')) baseText += "Plug 'Yggdroot/indentLine'\n"
  if (id.includes('airline')) baseText += "Plug 'vim-airline/vim-airline'\n"
  if (id.includes('airline')) baseText += "Plug 'vim-airline/vim-airline-themes'\n"
  if (seg.includes('plug')) baseText += 'call plug#end()\n'

  // 基本設定
  if (seg.includes('base'))
    baseText += `\n"**************
" Base Setting
"**************\n`
  if (id.includes('clipboard')) baseText += 'set clipboard+=unnamedplus\n'
  if (id.includes('mouse')) baseText += 'set mouse=a\n'
  if (id.includes('tabstop')) baseText += 'set tabstop=2\n'
  if (id.includes('shiftwidth')) baseText += 'set shiftwidth=2\n'
  if (id.includes('expandtab')) baseText += 'set expandtab\n'
  if (id.includes('ignorecase')) baseText += 'set ignorecase\n'

  // 外観装飾
  if (seg.includes('visual'))
    baseText += `\n"*****************
" Visual Settings
"*****************\n`
  if (id.includes('syntax')) baseText += 'syntax on\n'
  if (id.includes('ruler')) baseText += 'set ruler\n'
  if (id.includes('number')) baseText += 'set number\n'
  if (id.includes('cursorline')) baseText += 'set cursorline\n'
  if (id.includes('termguicolors')) baseText += 'set termguicolors\n'
  if (id.includes('indentLin'))
    baseText += `\n" IndentLin
let g:airline_theme = 'tomorrow'
let g:indentLine_enabled = 1
let g:indentLine_concealcursor = 0
let g:indentLine_char = '┆'
let g:indentLine_faster = 1\n`
  if (id.includes('airline'))
    baseText += `\n" vim-airline
let g:airline#extensions#branch#enabled = 1
let g:airline#extensions#ale#enabled = 1
let g:airline#extensions#tabline#enabled = 1

" Tab Line
let g:airline#extensions#tabline#show_splits = 0
let g:airline#extensions#tabline#show_buffers = 0
let g:airline#extensions#tabline#show_close_button = 0
let g:airline#extensions#tabline#tab_nr_type = 1
let g:airline#extensions#tabline#fnamemod = ':t'\n`

  return baseText.trim()
}
