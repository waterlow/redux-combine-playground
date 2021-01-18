import types from './types'
import { createAction } from 'redux-actions'

export const plusThree = createAction(types.plusThree)
export const minusThree = createAction(types.minusThree)
export const jump = createAction<{ count: number }>(types.jump)
export const showMessage = createAction<{ message: string }>(types.jump)
