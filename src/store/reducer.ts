import { combineReducers } from 'redux'
import * as Counter from './counter'
import * as CounterTwo from './counter_two'
import * as Posts from './posts'

export const initialState = {
  counter: Counter.initialState,
  counterTwo: CounterTwo.initialState,
  posts: Posts.initialState,
}
export const reducer = combineReducers({
  counter: Counter.reducer,
  counterTwo: CounterTwo.reducer,
  posts: Posts.reducer,
})
