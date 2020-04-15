export const state = () => ({
  // Item チェックリストの項目
  installItems: [
    {
      seg: 'install',
      id: 'install',
      name: 'Plug自動インストール'
    }
  ],
  baseItems: [
    {
      id: 'base',
      name: '基本設定',
      children: [
        { seg: 'base', id: 'clipboard', name: 'クリップボード有効化' },
        { seg: 'base', id: 'mouse', name: 'マウス有効化' },
        { seg: 'base', id: 'tabstop', name: 'tabキーの幅を2文字分に設定' },
        { seg: 'base', id: 'shiftwidth', name: 'インデント幅を2文字分に設定' },
        { seg: 'base', id: 'expandtab', name: 'tabキーでスペースを挿入' },
        { seg: 'base', id: 'ignorecase', name: '検索で大文字と小文字を区別しない' }
      ]
    }
  ],
  plugItems: [
    {
      id: 'plug',
      name: '機能の拡張',
      children: [
        { seg: 'plug', id: 'dirtree', name: 'ディレクトリツリー機能' },
        { seg: 'plug', id: 'comment', name: 'コメントアウト機能' },
        { seg: 'plug', id: 'git', name: 'git操作機能' }
      ]
    }
  ],
  visualItems: [
    {
      id: 'visual',
      name: '外観の装飾',
      children: [
        { seg: 'visual', id: 'syntax', name: 'シンタックスハイライト' },
        { seg: 'visual', id: 'ruler', name: 'カーソルの位置表示' },
        { seg: 'visual', id: 'number', name: '行番号' },
        { seg: 'visual', id: 'cursorline', name: 'カーソル行のハイライト' },
        { seg: 'visual', id: 'termguicolors', name: 'True Colorで配色する' },
        { seg: ['visual', 'plug'], id: 'indentLin', name: 'インデントを縦線で表示する' },
        { seg: ['visual', 'plug'], id: 'airline', name: 'ステータスバー表示' }
      ]
    }
  ],

  // Init 最初に選択されている項目
  installInit: [
    {
      seg: 'install',
      id: 'install',
      name: 'Plug自動インストール'
    }
  ],
  baseInit: [
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
    }
  ],
  plugInit: [
    {
      id: 'plug',
      name: '機能の拡張',
      children: [
        { seg: 'plug', id: 'nerdtree', name: 'ディレクトリツリー機能' },
        { seg: 'plug', id: 'commentary', name: 'コメントアウト機能' },
        { seg: 'plug', id: 'fugitive', name: 'git操作機能' }
      ]
    }
  ],
  visualInit: [
    {
      id: 'visual',
      name: '外観の装飾',
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
  ]
})
