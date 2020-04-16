export const state = () => ({
  // Item チェックリストの項目
  Items: [
    {
      seg: 'install',
      id: 'install',
      name: 'Plug自動インストール'
    },
    {
      id: 'base',
      name: '基本設定',
      children: [
        { seg: 'base', id: 'clipboard', name: 'クリップボード有効化' },
        { seg: 'base', id: 'mouse', name: 'マウス有効化' },
        { seg: 'base', id: 'tabstop', name: 'tabキーの幅を2文字分に設定' },
        { seg: 'base', id: 'shiftwidth', name: 'インデント幅を2文字分に設定' },
        { seg: 'base', id: 'expandtab', name: 'tabキーでスペースを挿入' },
        { seg: 'base', id: 'ignorecase', name: '大文字と小文字を区別せずに検索' }
      ]
    },
    {
      id: 'plug',
      name: '機能拡張',
      children: [
        { seg: 'plug', id: 'dirtree', name: 'ディレクトリツリー機能' },
        { seg: 'plug', id: 'comment', name: 'コメントアウト機能' },
        { seg: 'plug', id: 'git', name: 'git操作機能' }
      ]
    },
    {
      id: 'visual',
      name: '外観装飾',
      children: [
        { seg: 'visual', id: 'syntax', name: 'シンタックスハイライト' },
        { seg: 'visual', id: 'ruler', name: 'カーソルの位置表示' },
        { seg: 'visual', id: 'number', name: '行番号' },
        { seg: 'visual', id: 'cursorline', name: 'カーソル行のハイライト' },
        { seg: 'visual', id: 'termguicolors', name: 'True Colorで配色' },
        { seg: ['visual', 'plug'], id: 'indentLin', name: 'インデントを縦線で表示' },
        { seg: ['visual', 'plug'], id: 'airline', name: 'ステータスバー表示' }
      ]
    }
  ],

  // Init 最初に選択されている項目
  Init: [
    { seg: 'install', id: 'install' },
    { seg: 'base', id: 'clipboard' },
    { seg: 'base', id: 'mouse' },
    { seg: 'base', id: 'tabstop' },
    { seg: 'base', id: 'shiftwidth' },
    { seg: 'base', id: 'expandtab' },
    { seg: 'base', id: 'ignorecase' },
    { seg: 'plug', id: 'dirtree' },
    { seg: 'plug', id: 'comment' },
    { seg: 'plug', id: 'git' },
    { seg: 'visual', id: 'syntax' },
    { seg: 'visual', id: 'ruler' },
    { seg: 'visual', id: 'number' },
    { seg: 'visual', id: 'cursorline' },
    { seg: 'visual', id: 'termguicolors' },
    { seg: ['visual', 'plug'], id: 'indentLin' },
    { seg: ['visual', 'plug'], id: 'airline' }
  ]
})
