import api from '../api'

export const increment = () => ({
  type: 'INCREMENT',
})

export const setAsyncNumber = number => ({
  type: 'ASYNC_INCREMENT',
  payload: { number },
})

export const asyncIncrement = () => dispatch =>
  api.number
    .getNumber()
    .then(({ data }) => dispatch(setAsyncNumber(data.number)))
