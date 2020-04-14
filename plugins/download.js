import Vue from 'vue'

Vue.prototype.$download = (text) => {
  const blob = new Blob([text], { type: 'text/plain' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = 'init.vim.txt'
  link.click()
}
