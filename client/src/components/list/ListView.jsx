import React from 'react'
import Post from './Post'

const ListView = () => {
  return (
    <div className="bg-black-100 flex-col inline-flex items-start justify-center gap-4 flex-1 py-4 w-full">
      <Post id={1}/>
      <Post id={2}/>
      <Post id={3}/>
    </div>
  )
}

export default ListView
