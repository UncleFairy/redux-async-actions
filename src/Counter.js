import React from 'react'
import { connect } from 'react-redux'

import { increment } from './redux/actions'

import styles from './styles.js'

function Counter({ state, increment }) {
  const { div, button, p } = styles

  return (
    <div style={div}>
      <button onClick={increment} style={button}>
        +
      </button>
      <p style={p}>{state}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  state,
})

const mapDispatchToProps = {
  increment,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter)
