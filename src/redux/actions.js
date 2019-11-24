import api from '../api'

export const increment = () => ({
  type: 'INCREMENT',
})

//setTimeout(() => ({ type: 'ASYNC_INCREMENT', payload: { number: 5 } }), 1000)
//({type: 'ASYNC_INCREMENT', payload:{number: api.number.getNumber()}})

export const asyncIncrement = () => ({
  type: 'ASYNC_INCREMENT',
  payload: { number: api.number.getNumber() },
})
