import { Toaster } from 'react-hot-toast'

import PostForm from '../../components/PostForm'
import OwnerInfo from '../../components/member-list/OwnerInfo'
import MembersInfo from '../../components/member-list/MembersInfo'
import MembersMenu from '../../components/member-list/MembersMenu'
import ListingRequests from '../../components/member-list/ListingRequests'
import NavBar from '../../components/nav/NavBar'

function NewPost({update}) {
  return (
    <>
      <Toaster />
      <NavBar />
      <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
        <div className='pt-28 flex justify-end gap-6'>
          <PostForm update/>

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
