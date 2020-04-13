import Vue from 'vue'

const customText = (id) => {
  let baseText = ''
  if (id.includes('clipboard')) baseText = baseText + 'test text 1\n'
  if (id.includes('mouse')) baseText = baseText + 'test text 2\n'
  if (id.includes('tabstop')) baseText = baseText + 'test text 3\n'
  if (id.includes('shiftwidth')) baseText = baseText + 'test text 4\n'
  if (id.includes('expandtab')) baseText = baseText + 'test text 4\n'
  if (id.includes('ignorecase')) baseText = baseText + 'test text 4\n'
  return baseText
}

Vue.prototype.$download = (id) => {
  const text = customText(id)
  const blob = new Blob([text], { type: 'text/plain' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = 'init.vim.txt'
  link.click()
}
