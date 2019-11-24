export const increment = () => ({
  type: 'INCREMENT',
})

export const asyncIncrement = number => ({
  type: 'ASYNC_INCREMENT',
  payload: { number },
})
