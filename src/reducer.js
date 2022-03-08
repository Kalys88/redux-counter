const reducer = (store = 0, action) => {
  switch (action.type) {
    case 'INC':
      return store + 1
    case 'DEC':
      return store - 1
    default:
      return store
  }
}

export default reducer;