import React from 'react'
import { connect } from 'react-redux'

import { increment, asyncIncrement } from './redux/actions'

import styles from './styles.js'

function Counter({ state, increment, asyncIncrement }) {
  const { div, button, p } = styles

  return (
    <div style={div}>
      <button onClick={increment} style={button}>
        +
      </button>
      <p style={p}>{state}</p>
      <button onClick={asyncIncrement} style={button}>
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
  { increment, asyncIncrement },
)(Counter)
