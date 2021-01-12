import { Actions } from './index'

export const initialState = { numTwo: 2 }
export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case "decrement":
      return { ...state, numTwo: state.numTwo - 4 }
    case "increment":
      return { ...state, numTwo: state.numTwo + 4 }
    default:
      return state
  }
}
