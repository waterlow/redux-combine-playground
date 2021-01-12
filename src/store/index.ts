import { createStore, combineReducers } from 'redux'
import * as Counter from './counter'
import * as CounterTwo from './counter_two'

const initialState = {
  counter: Counter.initialState,
  counterTwo: CounterTwo.initialState
}
const reducer = combineReducers({ counter: Counter.reducer, counterTwo: CounterTwo.reducer })

const store = createStore(reducer)

type State = typeof initialState
declare module 'react-redux' {
  interface DefaultRootState extends State {}
}

type Unwrap<T> = T extends { [K in keyof T]: infer U } ? U : never
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
    ? ReturnType<T[K]>
    : never
}
type CreatorsToActions<T> = Unwrap<ReturnTypes<T>>

const creators = { increment: Counter.increment, decrement: Counter.decrement}
export type Actions = CreatorsToActions<typeof creators>

export default store
