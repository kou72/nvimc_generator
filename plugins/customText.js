import Vue from 'vue'

Vue.prototype.$customText = (id) => {
  let baseText = ''
  if (id.length)
    baseText += `"//*****************************************************
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
