import { ThunkAction } from 'redux-thunk'
import { setPosts } from './actions'
import PostsJson from './posts.json'
import { State } from '../index'
import { Action } from 'redux'

export const fetchPosts = (): ThunkAction<void, State, unknown, Action<string>> => (
  async (dispatch) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: typeof PostsJson = await res.json();
    dispatch(setPosts(data))
  }
)
