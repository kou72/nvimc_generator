import Vue from 'vue'

Vue.prototype.$customConfig = (seg, id, map) => {
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
  autocmd FileType * :PlugInstall
endif\n`

  // plugin
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
  if (id.includes('colorscheme')) baseText += "Plug 'joshdick/onedark.vim'\n"
  if (id.includes('indentLin')) baseText += "Plug 'Yggdroot/indentLine'\n"
  if (id.includes('airline')) baseText += "Plug 'vim-airline/vim-airline'\n"
  if (id.includes('airline')) baseText += "Plug 'vim-airline/vim-airline-themes'\n"
  if (seg.includes('serv')) baseText += "Plug 'neoclide/coc.nvim', {'branch': 'release'}\n"
  if (seg.includes('plug')) baseText += 'call plug#end()\n'

  // base
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

  // vsual
  if (seg.includes('visual'))
    baseText += `\n"*****************
" Visual Settings
"*****************\n`
  if (id.includes('syntax')) baseText += 'syntax on\n'
  if (id.includes('ruler')) baseText += 'set ruler\n'
  if (id.includes('number')) baseText += 'set number\n'
  if (id.includes('cursorline')) baseText += 'set cursorline\n'
  if (id.includes('termguicolors')) baseText += 'set termguicolors\n'
  if (id.includes('colorscheme'))
    baseText += `\n" Color Schemes
colorscheme onedark\n`
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

  if (seg.includes('serv'))
    baseText += `\n"*************
" Code Check
"************
if !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-highlight'))
  autocmd FileType * :CocInstall coc-highlight
endif\n`

  if (id.includes('c'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-clangd'))
  autocmd FileType * :CocInstall coc-clangd
endif\n`

  if (id.includes('html'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-html'))
  autocmd FileType * :CocInstall coc-html
endif\n`

  if (id.includes('css'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-css'))
  autocmd FileType * :CocInstall coc-css
endif\n`

  if (id.includes('js') || id.includes('ts'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-tsserver'))
  autocmd FileType * :CocInstall coc-tsserver
endif\n`

  if (id.includes('php'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-phpls'))
  autocmd FileType * :CocInstall coc-phpls
endif\n`

  if (id.includes('python'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-python'))
  autocmd FileType * :CocInstall coc-python
endif\n`

  if (id.includes('ruby'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-solargraph'))
  autocmd FileType * :CocInstall coc-solargraph
endif\n`

  if (id.includes('scala'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-metals'))
  autocmd FileType * :CocInstall coc-metals
endif\n`

  if (id.includes('go'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-go'))
  autocmd FileType * :CocInstall coc-go
endif\n`

  if (id.includes('vue'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-vetur'))
  autocmd FileType * :CocInstall coc-vetur
endif\n`

  if (id.includes('angular'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-angular'))
  autocmd FileType * :CocInstall coc-angular
endif\n`

  if (id.includes('json'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-json'))
  autocmd FileType * :CocInstall coc-json
endif\n`

  if (id.includes('yaml'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-yaml'))
  autocmd FileType * :CocInstall coc-yaml
endif\n`

  if (id.includes('eslint'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-eslint'))
  autocmd FileType * :CocInstall coc-eslint
endif\n`

  if (id.includes('prettier'))
    baseText += `\nif !isdirectory(expand('~/.config/coc/extensions/node_modules/coc-prettier'))
  autocmd FileType * :CocInstall coc-prettier
endif\n`

  baseText += '\n' + map + '\n'
  return baseText.trim()
}
