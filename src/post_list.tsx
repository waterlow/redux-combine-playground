import { useEffect, useState, VFC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPosts } from './store/posts/actions'

const PostList: VFC = () => {
  const [visibility, setVisibility] = useState(false)
  const posts = useSelector(store => store.posts)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts())
    setVisibility(true)
  }, [dispatch])

  if (!visibility) return null

  return (
    <div>
      <h1>Post List</h1>
      <div>
        {posts.map(post => (
          <>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </>
        ))}
      </div>
    </div>
  )
}

export default PostList
