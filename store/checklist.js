export const state = () => ({
  baseItems: [
    {
      id: 'base',
      name: '基本設定',
      children: [
        { id: 'clipboard', name: 'クリップボード有効化' },
        { id: 'mouse', name: 'マウス有効化' },
        { id: 'tabstop', name: 'tabキーの幅を2文字分に設定' },
        { id: 'shiftwidth', name: 'インデント幅を2文字分に設定' },
        { id: 'expandtab', name: 'tabキーでスペースが挿入される' },
        { id: 'ignorecase', name: '検索で大文字と小文字を区別しない' }
      ]
    }
  ],
  selection: [],
  baseSelectionId: []
})

export const mutations = {
  updateSelection(state, value) {
    state.selection = value
    state.baseSelectionId = value.map((v) => v.id)
  }
}
