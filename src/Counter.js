import React from 'react'
import { connect } from 'react-redux'

import { increment, asyncIncrement } from './redux/actions'

import styles from './styles.js'

function Counter({ state, dispatch }) {
  const { div, button, p } = styles

  return (
    <div style={div}>
      <button onClick={() => dispatch(increment())} style={button}>
        +
      </button>
      <p style={p}>{state}</p>
      <button onClick={() => dispatch(asyncIncrement())} style={button}>
        +A
      </button>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

export default connect(
  mapStateToProps,
  null,
)(Counter)
