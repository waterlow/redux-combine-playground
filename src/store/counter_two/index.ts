import types from '../counter/types'

export const initialState = { numTwo: 2 }
export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.decrement:
      return { ...state, numTwo: state.numTwo - 4 }
    case types.increment:
      return { ...state, numTwo: state.numTwo + 4 }
    default:
      return state
  }
}
