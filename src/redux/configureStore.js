import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import { routerMiddleware } from 'react-router-redux'

import reducers from './reducers'
import initialState from './initialState'

let middleware = [thunk]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (history) => {
  middleware.push(routerMiddleware(history))

  return createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middleware))
  )
}
