import Vue from 'vue'

Vue.prototype.$customText = (seg, id) => {
  let baseText = ''
  // install セグメント
  if (seg.includes('install'))
    baseText += `\n"//*****************************************************
"// Install vim-pulg
"//*****************************************************
if !filereadable(expand('~/.local/share/nvim/site/autoload/plug.vim'))
  echo 'install vim-plug...'
  call system('curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim')
endif\n`

  // base セグメント
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
