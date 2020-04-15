import Vue from 'vue'

Vue.prototype.$customText = (seg, id) => {
  let baseText = ''
  // Plug自動インストール
  if (seg.includes('install'))
    baseText += `\n"//*****************************************************
"// Install vim-pulg
"//*****************************************************
if !filereadable(expand('~/.local/share/nvim/site/autoload/plug.vim'))
  echo 'install vim-plug...'
  call system('curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim')
endif\n`

  // 機能の拡張
  if (seg.includes('plug'))
    baseText += `\n"//*****************************************************
"// Plug Install Packages
"//*****************************************************
call plug#begin(expand('~/.config/nvim/plugged'))\n`
  if (id.includes('dirtree')) baseText += "Plug 'preservim/nerdtree'\n"
  if (id.includes('comment')) baseText += "Plug 'sheerun/vim-polyglot'\n"
  if (id.includes('comment')) baseText += "Plug 'tpope/vim-commentary'\n"
  if (id.includes('git')) baseText += "Plug 'tpope/vim-fugitive'\n"
  if (seg.includes('plug')) baseText += 'call plug#end()\n'

  // 基本設定
  if (seg.includes('base'))
    baseText += `\n"//*****************************************************
"// Base Setting
"//*****************************************************\n`
  if (id.includes('clipboard')) baseText += 'set clipboard+=unnamedplus\n'
  if (id.includes('mouse')) baseText += 'set mouse=a\n'
  if (id.includes('tabstop')) baseText += 'set tabstop=2\n'
  if (id.includes('shiftwidth')) baseText += 'set shiftwidth=2\n'
  if (id.includes('expandtab')) baseText += 'set expandtab\n'
  if (id.includes('ignorecase')) baseText += 'set ignorecase\n'

  return baseText.trim()
}
