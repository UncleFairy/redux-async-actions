function counter(state = 0, { type, payload }) {
  switch (type) {
    case 'INCREMENT':
      return state + 1
    case 'ASYNC_INCREMENT':
      return state + payload.number
    case 'GET_ONE':
      return state
    default:
      return state
  }
}
export default counter
