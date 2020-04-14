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
        { seg: 'base', id: 'ignorecase', name: '検索で大文字と小文字を区別しない' }
      ]
    }
  ]
})
