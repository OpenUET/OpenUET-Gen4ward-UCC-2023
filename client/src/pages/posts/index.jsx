import { Toaster } from 'react-hot-toast'
import ListingRequests from '../../components/member-list/ListingRequests'
import MembersInfo from '../../components/member-list/MembersInfo'
import MembersMenu from '../../components/member-list/MembersMenu'
import OwnerInfo from '../../components/member-list/OwnerInfo'
import NavBar from '../../components/nav/NavBar'
import './Posts.css'
import PostDetail from '../../components/post/PostDetail'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Posts() {
  const location = useLocation()
  const [post, setPost] = useState({})

  useEffect(() => {
    const id = location.pathname.split('/')[2]

    fetch('http://127.0.0.1:3333/api/posts/' + id)
      .then((res) => res.json())
      // .then(data => console.log(data))
      .then((data) => {
        setPost(data)
      })
  }, [])

  return (
    <>
      <Toaster />
      <NavBar />
      <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
        <div className='pt-28 flex gap-6'>
          <div className='flex-1 relative'>
            <PostDetail
              id={post._id}
              title={post.title}
              projectName={post.projectName}
              createdAt={post.createdAt}
              githubLink={post.githubLink}
              content={post.content}
              status={post.status}
              logoUrl={post.logo_url}
              stars={post.stars}
              tags={post.tags}
              description={post.description}
              subjectId={post.subject_id}
              coverImgUrl={post.cover_img_url}
              techs={post.techs}
            />
          </div>

          <div className='w-[30%] flex flex-col gap-4'>
            <OwnerInfo />
            <div className='relative'>
              <MembersInfo />
              {true && <MembersMenu />}
            </div>
            {true && <ListingRequests />}
          </div>
        </div>
      </div>
    </>
  )
}
