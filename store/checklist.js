export const state = () => ({
  // Item チェックリストの項目
  items: {
    install: [{ seg: 'install', id: 'install', name: 'Plug自動インストール' }],
    base: [
      { seg: 'base', id: 'clipboard', name: 'クリップボード有効化' },
      { seg: 'base', id: 'mouse', name: 'マウス有効化' },
      { seg: 'base', id: 'tabstop', name: 'tabキーの幅を2文字分に設定' },
      { seg: 'base', id: 'shiftwidth', name: 'インデント幅を2文字分に設定' },
      { seg: 'base', id: 'expandtab', name: 'tabキーでスペースを挿入' },
      { seg: 'base', id: 'ignorecase', name: '大文字と小文字を区別せずに検索' }
    ],
    plug: [
      { seg: 'plug', id: 'dirtree', name: 'ディレクトリツリー機能' },
      { seg: 'plug', id: 'comment', name: 'コメントアウト機能' },
      { seg: 'plug', id: 'git', name: 'git操作機能' }
    ],
    visual: [
      { seg: 'visual', id: 'syntax', name: 'シンタックスハイライト' },
      { seg: 'visual', id: 'ruler', name: 'カーソルの位置表示' },
      { seg: 'visual', id: 'number', name: '行番号' },
      { seg: 'visual', id: 'cursorline', name: 'カーソル行のハイライト' },
      { seg: 'visual', id: 'termguicolors', name: 'True Colorで配色' },
      { seg: ['visual', 'plug'], id: 'indentLin', name: 'インデントを縦線で表示' },
      { seg: ['visual', 'plug'], id: 'airline', name: 'ステータスバー表示' }
    ],
    service: [
      { seg: 'serv', id: 'c', name: 'C言語' },
      { seg: 'serv', id: 'html', name: 'HTML' },
      { seg: 'serv', id: 'css', name: 'CSS/SCSS' },
      { seg: 'serv', id: 'js', name: 'JavaScript' },
      { seg: 'serv', id: 'ts', name: 'TypeScript' },
      { seg: 'serv', id: 'php', name: 'PHP' },
      { seg: 'serv', id: 'python', name: 'Python' },
      { seg: 'serv', id: 'ruby', name: 'Ruby' },
      { seg: 'serv', id: 'scala', name: 'Scala' },
      { seg: 'serv', id: 'go', name: 'Go' },
      { seg: 'serv', id: 'vue', name: 'Vue.js' },
      { seg: 'serv', id: 'angular', name: 'Angular' },
      { seg: 'serv', id: 'json', name: 'json' },
      { seg: 'serv', id: 'yaml', name: 'yaml' },
      { seg: 'serv', id: 'eslint', name: 'ESlint' },
      { seg: 'serv', id: 'prettier', name: 'Prettier' }
    ]
  },

  // Init 最初に選択されている項目
  init: [
    { seg: 'install', id: 'install', name: 'Plug自動インストール' },
    { seg: 'base', id: 'clipboard', name: 'クリップボード有効化' },
    { seg: 'base', id: 'mouse', name: 'マウス有効化' },
    { seg: 'base', id: 'tabstop', name: 'tabキーの幅を2文字分に設定' },
    { seg: 'base', id: 'shiftwidth', name: 'インデント幅を2文字分に設定' },
    { seg: 'base', id: 'expandtab', name: 'tabキーでスペースを挿入' },
    { seg: 'base', id: 'ignorecase', name: '大文字と小文字を区別せずに検索' },
    { seg: 'plug', id: 'dirtree', name: 'ディレクトリツリー機能' },
    { seg: 'plug', id: 'comment', name: 'コメントアウト機能' },
    { seg: 'plug', id: 'git', name: 'git操作機能' },
    { seg: 'visual', id: 'syntax', name: 'シンタックスハイライト' },
    { seg: 'visual', id: 'ruler', name: 'カーソルの位置表示' },
    { seg: 'visual', id: 'number', name: '行番号' },
    { seg: 'visual', id: 'cursorline', name: 'カーソル行のハイライト' },
    { seg: 'visual', id: 'termguicolors', name: 'True Colorで配色' },
    { seg: ['visual', 'plug'], id: 'indentLin', name: 'インデントを縦線で表示' },
    { seg: ['visual', 'plug'], id: 'airline', name: 'ステータスバー表示' }
  ],

  // Mapping init
  mapInit: `"**********
" Mappings
"**********
" Insert mode move
imap <C-j> <Down>
imap <C-k> <Up>
imap <C-l> <Right>
imap <C-h> <Left>

" Switching windows
nnoremap J <C-w>ji<C-c>
nnoremap K <C-w>k
nnoremap L <C-w>l
nnoremap H <C-w>h
tnoremap K <C-\\><C-n><C-w>k

" Tabs
nnoremap <Tab> gt
nnoremap <S-Tab> gT
nnoremap <silent> <C-n> :tabnew<CR>:NERDTreeToggle<CR>

" Error
nnoremap <silent><C-o> :copen<CR>
nnoremap <silent><C-c> :cclose<CR>

" NERDTree
nnoremap <silent><C-t> :NERDTreeToggle<CR>

" terminal
nnoremap <Space> <C-w>s<C-w>j:term<CR>i
tnoremap <C-n> <C-\\><C-n>
tnoremap <Esc> <C-\\><C-n>:q<CR>
nnoremap <Esc> a<Esc>

" nnoremap F :call CocAction('format')<CR>
nnoremap F :CocCommand prettier.formatFile<CR>
`
})
