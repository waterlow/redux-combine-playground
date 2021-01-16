import types from './types'
import PostsJson from './posts.json'

export const initialState = [] as typeof PostsJson
export const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case types.fetchPosts:
      // TODO: ここをAPIリクエストにする
      // https://jsonplaceholder.typicode.com/posts
      return PostsJson
    default:
      return state
  }
}
