import { combineReducers } from 'redux'
import * as Counter from './counter'
import * as CounterTwo from './counter_two'
import * as Posts from './posts'
import * as CounterThree from './counter_three'

export const initialState = {
  counter: Counter.initialState,
  counterTwo: CounterTwo.initialState,
  posts: Posts.initialState,
  counterThree: CounterThree.initialState
}
export const reducer = combineReducers({
  counter: Counter.reducer,
  counterTwo: CounterTwo.reducer,
  posts: Posts.reducer,
  counterThree: CounterThree.reducer,
})
