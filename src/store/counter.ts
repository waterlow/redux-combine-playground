import { Actions } from './index'

const types = {
  increment: 'increment',
  decrement: 'decrement',
} as const

export const increment = () => ({ type: types.increment })
export const decrement = () => ({ type: types.decrement })

export const initialState = { num: 0 }
export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case types.decrement:
      return { ...state, num: state.num - 1 }
    case types.increment:
      return { ...state, num: state.num + 1 }
    default:
      return state
  }
}
