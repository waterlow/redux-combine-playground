import { handleActions, Reducer } from 'redux-actions'
import types from './types'

export const initialState = { count: 0, message: '' }
type State = typeof initialState
const plusThreeHandler: Reducer<State, {}> = (state) => ({ ...state, count: state.count + 3 })
const minusThreeHandler: Reducer<State, {}> = (state) => ({ ...state, count: state.count - 3 })
const mergePayload: Reducer<State, State> = (state, { payload }) => ({ ...state, ...payload })
const reducerMap = {
  [types.plusThree]: plusThreeHandler,
  [types.minusThree]: minusThreeHandler,
  [types.jump]: mergePayload,
  [types.showMessage]: mergePayload,
}
export const reducer = handleActions(reducerMap, initialState);
