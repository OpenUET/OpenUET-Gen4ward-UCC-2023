import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Post from '../post-list/Post'
import Avatar from './Avatar'

const SKILLS = [
  'ReactJS',
  'Java',
  'Javascript',
  'Project Management',
  'NodeJS',
  'Python',
  'C++',
  'C#',
  'C',
  'HTML',
  'CSS',
  'TailwindCSS',
  'Bootstrap',
  'MaterialUI',
  'MongoDB',
  'SQL',
  'PostgreSQL',
  'MySQL',
  'Firebase',
  'AWS',
  'Google Cloud',
  'Azure',
  'Docker',
  'Kubernetes',
  'Git',
  'Github',
  'Gitlab',
  'Bitbucket',
  'Jira',
  'Confluence',
  'Figma',
  'Adobe XD',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'Adobe Lightroom',
  'Adobe InDesign',
  'Adobe Audition',
  'Microsoft Word',
  'Microsoft Excel',
  'Microsoft Powerpoint',
  'Microsoft Outlook',
  'Microsoft Teams',
  'Microsoft OneNote'
]

const shuffled = SKILLS.sort(() => 0.5 - Math.random())
const skillList = shuffled.slice(0, 10)

const ProfilePage = (size = 32) => {
  const [profile, setProfile] = useState(null)
  const [projects, setProjects] = useState([])
  const [mostStarredProjects, setMostStarredProjects] = useState([])

  const { id } = useParams()
  useEffect(() => {
    // Todo: change backend url
    axios
      .get(`http://127.0.0.1:3333/api/users/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setProfile(data)
      })
    axios
      .get(`http://127.0.0.1:3333/api/posts/owner/${id}`)
      .then((res) => res.data)
      .then((data) => {
        console.log(data)
        setProjects(data)

        const sortedData = data.sort((a, b) => b.stars.length - a.stars.length)
        setMostStarredProjects(sortedData.slice(0, Math.min(sortedData.length, 6)))
      })
  }, [id])

  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex w-2/3 h-auto rounded-2xl bg-black-50 mt-24 py-6'>
        <div className='flex flex-col w-2/3 border-r border-neutral-700'>
          {/* Avatar */}
          <div className='flex mt-2 ml-8'>
            <div className='flex-shrink-0'>
              <Avatar size={64} src={profile?.avatarUrl} className='' />
            </div>
            <div className='flex flex-col ml-4 text-white text-2xl justify-center'>
              <div className='flex'>{profile?.fullname}</div>
              <div className='flex'>Student at UET</div>
            </div>
            <div className='flex items-center justify-start ml-4'>
              {/* <FaPencilAlt className='text-white text-sm ml-4 cursor-pointer' /> */}
            </div>
          </div>

          <div className='flex flex-col mx-8 mt-8 pb-8 text-white'>
            <div className='flex items-center justify-start text-xl mb-6'>
              Description
              {/* <FaPencilAlt className='text-white text-sm ml-4 cursor-pointer' /> */}
            </div>
            <div className='flex items-center justify-start'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
              {/* <FaPencilAlt className='text-white text-2xl ml-4 cursor-pointer' /> */}
            </div>
          </div>
        </div>
        <div className='flex flex-col mx-8 mt-2 pb-8 text-white'>
          <div className='flex items-center justify-start text-xl mb-6'>
            Skills
            {/* <FaPencilAlt className='text-white text-sm ml-4 cursor-pointer' /> */}
          </div>
          <div className='flex flex-wrap gap-2' style={{ width: '350px' }}>
            {skillList.map((skill) => (
              <div className='flex rounded-2xl px-4 py-1 bg-transparent border border-white mr-2'>{skill}</div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex flex-col w-2/3 h-auto rounded-2xl mt-12 pb-6'>
        <div className='flex text-white text-xl ml-8 mb-4'>
          Most Starred Projects ({mostStarredProjects?.length || 0})
        </div>
        <div className='flex flex-col pb-2 gap-3'>
          {projects.map((post, index) => (
            <Post
              key={index}
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
          ))}
        </div>
      </div>
      <div className='flex flex-col w-2/3 h-auto rounded-2xl mt-2 pb-6'>
        <div className='flex text-white text-xl ml-8 mb-4'>All Projects ({projects.length})</div>
        <div className='flex flex-col w-full h-auto gap-3'>
          {projects.map((post, index) => (
            <Post
              key={index}
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
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
