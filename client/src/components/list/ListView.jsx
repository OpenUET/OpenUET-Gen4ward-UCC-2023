import { useEffect, useState } from 'react'
import Post from './Post'
import { useCookies } from 'react-cookie';

const ListView = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['shortcut']);
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('http://127.0.0.1:3333/api/posts')
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setPosts(data))
  }, [])

  const addShortCut = (id, projectName, logoUrl) => {
    const newShortcut = !cookies.shortcut?.some(item => item.url === `/posts/${id}`)
    if (newShortcut) {
      setCookie('shortcut', [{ title: projectName, url: `/posts/${id}`, imageUrl: logoUrl }, ...cookies.shortcut?.slice(0, 4) || []])
    }
  }

  return (
    <div className="bg-black-100 flex-col inline-flex items-start justify-center gap-4 flex-1 py-4 w-full">
      {posts.map(post => (
        <div key={post._id} onClick={() => addShortCut(post._id, post.projectName, post.logo_url)} className='w-full'>
          <Post
            id={post._id}
            title={post.title}
            projectName={post.projectName}
            status={post.status}
            logoUrl={post.logo_url}
            coverImgUrl={post.cover_img_url}
            stars={post.stars}
            members={post.members}
            techs={post.techs}
            tags={post.tags}
            owner={post.owner}
          />
        </div>
      ))}
    </div>
  )
}

export default ListView
