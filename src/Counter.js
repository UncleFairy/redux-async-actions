import React from 'react'
import { connect } from 'react-redux'

import { increment, asyncIncrement } from './redux/actions'
import api from './api'

import styles from './styles.js'

function Counter({ state, dispatch }) {
  const { div, button, p } = styles

  const onHandleIncrement = () => dispatch(increment())
  const onHandleAsyncIncrement = dispatch =>
    api.number
      .getNumber()
      .then(({ data }) => dispatch(asyncIncrement(data.number)))

  return (
    <div style={div}>
      <button onClick={onHandleIncrement} style={button}>
        +
      </button>
      <p style={p}>{state}</p>
      <button onClick={() => onHandleAsyncIncrement(dispatch)} style={button}>
        +A
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

export default connect(mapStateToProps)(Counter)
