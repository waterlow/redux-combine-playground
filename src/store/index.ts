import { createStore } from 'redux'
import { reducer, initialState } from './reducer'

const store = createStore(reducer)

type State = typeof initialState
declare module 'react-redux' {
  interface DefaultRootState extends State {}
}

export default store
