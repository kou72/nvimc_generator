import Vue from 'vue'

Vue.prototype.$download = (name) => {
  const blob = new Blob([name], { type: 'text/plain' })
  const link = document.createElement('a')
  link.href = window.URL.createObjectURL(blob)
  link.download = 'init.vim.txt'
  link.click()
}
