import { combineReducers } from 'redux'
import initialState from './initialState'

import oasis from './reducers/oasis'
import jamiroquai from './reducers/jamiroquai'

const appReducer = combineReducers({ oasis, jamiroquai })

export default (state = {}, action) => {
  if (action.type === `LOGOUT_FULFILLED`) {
    // On logout, discard everything except the router
    state = {
      ...initialState,
      router: state.router
    }
  }

  return appReducer(state, action)
}
