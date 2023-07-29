import { useEffect, useState } from 'react'
import Post from './Post'

const ListView = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3333/api/posts')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setPosts(data))
  }, [])

  return (
    <div className="bg-black-100 flex-col inline-flex items-start justify-center gap-4 flex-1 py-4 w-full">
      {posts.map(post => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          projectName={post.projectName}
        />
      ))}
    </div>
  )
}

export default ListView
