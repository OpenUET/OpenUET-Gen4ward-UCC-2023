import React from 'react'
import Avatar from './Avatar'
import { useDispatch, useSelector } from 'react-redux'
import { AUTH_ACTIONS, selectUser } from '../../redux/slices/authSlice'
import { FaPencilAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';


const ProfilePage = (   
    size = 32,
    avatar_url,
    full_name,
    
) => {
  const [profile, setProfile] = useState(null);

  const {id} = useParams()
  console.log(id)
  useEffect(() => {
      // Todo: change backend url
      axios.get(`http://127.0.0.1:3333/api/users/${id}`)
        .then(res => res.data)
        .then(data => {
            console.log(data)
            setProfile(data)
        })
  }, [id])

  return (
        <div className="flex flex-col justify-center items-center"> 
            <div className="flex w-2/3 h-auto rounded-2xl bg-black-50 mt-24 py-6">
                <div className="flex flex-col w-2/3 border-r border-neutral-700">
                    {/* Avatar */}
                    <div className="flex mt-2 ml-8">
                        <div className='flex-shrink-0'>
                        <Avatar size={64} src={profile?.avatarUrl} className=""/>
                    </div> 
                        <div className="flex flex-col ml-4 text-white text-2xl justify-center">
                            <div className="flex">Name</div>
                            <div className="flex">Student at UET</div>
                        </div>
                        <div className="flex items-center justify-start ml-4">
                            <FaPencilAlt className="text-white text-sm ml-4 cursor-pointer"/>
                        </div>
                    </div>

                    <div className="flex flex-col mx-8 mt-8 pb-8 text-white">
                        <div className="flex items-center justify-start text-xl mb-6">
                            Description
                            <FaPencilAlt className="text-white text-sm ml-4 cursor-pointer"/>
                        </div>
                        <div className="flex items-center justify-start">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            <FaPencilAlt className="text-white text-2xl ml-4 cursor-pointer"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mx-8 mt-2 pb-8 text-white">
                    <div className="flex items-center justify-start text-xl mb-6">
                        Skills
                        <FaPencilAlt className="text-white text-sm ml-4 cursor-pointer"/>
                    </div>
                    <div className="flex">
                        <div className="flex rounded-2xl px-4 py-1 bg-transparent border border-white mr-2">ReactJS</div>
                        <div className="flex rounded-2xl px-4 py-1 bg-transparent border border-white mr-2">TailwindCSS</div>
                        <div className="flex rounded-2xl px-4 py-1 bg-transparent border border-white mr-2">NodeJS</div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col w-2/3 h-auto rounded-2xl mt-12 pb-6">
                <div className="flex text-white text-xl ml-8 mb-4">Most Starred Projects</div>
                <div className="flex overflow-x-auto pb-2">

                </div>
            </div>
            <div className="flex flex-col w-2/3 h-auto rounded-2xl mt-2 pb-6">
                <div className="flex text-white text-xl ml-8 mb-4">All Projects</div>
                <div className="flex flex-col w-full h-auto">

                </div>
            </div>
        </div>
  )
}

export default ProfilePage