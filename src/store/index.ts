import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer, initialState } from './reducer'

const store = createStore(reducer, applyMiddleware(thunk))

export type State = typeof initialState
declare module 'react-redux' {
  interface DefaultRootState extends State {}
}

export default store
