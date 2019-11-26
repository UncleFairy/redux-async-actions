export const increment = () => ({
  type: 'INCREMENT',
})

export const getNumber = () => ({
  type: 'GET_NUMBER',
})

export const asyncIncrement = number => ({
  type: 'ASYNC_INCREMENT',
  payload: number,
})
