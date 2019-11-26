export const increment = () => ({
  type: 'INCREMENT',
})

export const getNumber = () => ({
  type: 'GET_NUMBER',
})

export const getOne= () => ({
  type: 'GET_ONE',
})

export const asyncIncrement = number => ({
  type: 'ASYNC_INCREMENT',
  payload: number,
})
