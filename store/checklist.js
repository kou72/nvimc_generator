export const state = () => ({
  items: [
    {
      id: 1,
      name: 'Root',
      children: [
        { id: 2, name: 'Child #1' },
        { id: 3, name: 'Child #2' },
        {
          id: 4,
          name: 'Child #3',
          children: [
            { id: 5, name: 'Grandchild #1' },
            { id: 6, name: 'Grandchild #2' }
          ]
        }
      ]
    }
  ],
  selection: ['bbbb']
})
export const getters = {
  list(state) {
    return state.items
  }
}
export const mutations = {
  updateSelection(state, value) {
    state.selection = value
  }
}
