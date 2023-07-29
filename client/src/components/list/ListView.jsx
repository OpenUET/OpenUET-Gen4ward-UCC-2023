import React from 'react'
import Post from './Post'

const ListView = () => {
  return (
    <div className="bg-black-100 flex-col inline-flex items-start justify-center gap-3 flex-1 p-4 mt-20 w-full">
      <Post></Post>
    </div>
  )
}

export default ListView
