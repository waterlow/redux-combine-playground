import types from './types'
import PostsJson from './posts.json'

export const setPosts = (posts: typeof PostsJson) => ({ type: types.setPosts, posts })
