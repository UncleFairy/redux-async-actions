import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import App from './App'
import rootReducer from './redux/reducer.'
import { rootSaga } from './sagas'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose

const sagaMiddleware = createSagaMiddleware()
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(rootReducer, enhancer)
sagaMiddleware.run(rootSaga)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
)
