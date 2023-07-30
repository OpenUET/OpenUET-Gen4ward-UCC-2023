import { Toaster } from 'react-hot-toast'
import { useEffect, useState } from "react";
import PostForm from '../../components/PostForm'
import OwnerInfo from '../../components/member-list/OwnerInfo'
import MembersInfo from '../../components/member-list/MembersInfo'
import MembersMenu from '../../components/member-list/MembersMenu'
import ListingRequests from '../../components/member-list/ListingRequests'
import NavBar from '../../components/nav/NavBar'
import { useParams } from 'react-router-dom';

function NewPost({update}) {
  const [post,setPost] = useState()
  const {id} = useParams()
  useEffect(() => {
    if(update) {
    
      fetch('http://127.0.0.1:3333/api/posts/' + id)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => {
          setPost(data)
        })
    }
   
  }, [])

  return (
    <>
      <Toaster />
      <NavBar />
      <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
        <div className='pt-28 flex justify-end gap-6'>
          <PostForm data={post}/>

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

export default NewPost
