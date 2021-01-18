import types from './types'
import PostsJson from './posts.json'
import { Actions } from '../actions'

export const initialState = [] as typeof PostsJson
export const reducer = (state = initialState, action: Actions) => {
  switch (action.type) {
    case types.setPosts:
      return action.posts
    default:
      return state
  }
}
