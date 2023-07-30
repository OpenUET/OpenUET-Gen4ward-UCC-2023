import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import axios from 'axios'
import DOMPurify from 'dompurify'
import React, { useEffect, useState } from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { FaPencilAlt } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import image from '../../assets'
import { selectUser } from '../../redux/slices/authSlice'
import { techOptions } from '../../utils/techOptions'
import getTimeDiff from '../../utils/timeDiff'
import './PostDetail.css'

const PostDetail = ({
  id,
  title,
  projectName,
  createdAt,
  githubLink,
  content,
  status,
  logoUrl,
  stars,
  tags,
  description,
  subjectId,
  coverImgUrl,
  techs
}) => {
  const { userInfo } = useSelector(selectUser)
  const [star, setStar] = useState(Boolean(stars?.find((star) => star === userInfo._id)))
  const [starNumber, setStarNumber] = useState(stars?.length)
  const sanitizedData = (data) => ({
    __html: DOMPurify.sanitize(data)
  })

  useEffect(() => {
    setStar(Boolean(stars?.find((star) => star === userInfo._id)))
    setStarNumber(stars?.length)
  }, [stars])

  const handleClickStar = () => {
    axios
      .patch(`http://127.0.0.1:3333/api/posts/${id}/star?userId=${userInfo._id}`)
      .then((res) => {
        setStarNumber(star ? starNumber - 1 : starNumber + 1)
        setStar(!star)
      })
      .catch(console.error)
  }
  const navigate = useNavigate()

  return (
    <div className='flex flex-col'>
      {/* Project cover */}
      <div
        style={{ '--image-url': `url(${coverImgUrl || image.defaultBg})` }}
        className='bg-[image:var(--image-url)] bg-cover flex flex-col w-full h-[30vh] rounded-xl items-end justify-between mb-6'
      >
        <div className='flex flex-1'></div>
        <div className='flex items-end justify-between w-full'>
          {/* Project name */}
          <div className='flex flex-1 items-center justify-start space-x-4 ml-8 mb-8'>
            <div className='flex items-center justify-center'>
              <div className='w-16 h-16 rounded-full overflow-hidden'>
                <img src={logoUrl || image.defaultLogo} alt={''} className='w-full h-full object-cover' />
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <div className='flex flex-1 text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                {projectName}
              </div>
              <div className='flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{title}</div>
            </div>
          </div>

          {/* Project status */}
          <div className='flex flex-1 justify-center mr-8 mb-8'>
            <div className='flex flex-col items-start mr-12'>
              <div className='flex flex-1 font-bold text-white uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                Star
              </div>
              <div className='flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{starNumber}</div>
            </div>
            <div onClick={() => handleClickStatus()} className='flex flex-col items-start mr-12 uppercase'>
              <div className='flex flex-1 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Status</div>
              <div className='flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{status}</div>
            </div>
            <div className='flex flex-col items-start mr-12 uppercase'>
              <div className='flex flex-1 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                Tracked Time
              </div>
              <div className='flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                {getTimeDiff(new Date(), new Date(createdAt))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project information */}
      <div className='flex justify-center text-white w-full h-auto ml-4'>
        <div className='inline-flex flex-1 flex-col items-center justify-center'>
          <div className='flex items-center justify-start w-full mb-4'>
            <div className='flex w-1/4'>Created at</div>
            <div className='flex'>{new Date(createdAt).toDateString()}</div>
          </div>

          <div className='flex items-center justify-start w-full mb-4'>
            <div className='flex w-1/4'>Tech Stack</div>
            <div className='flex items-center justify-start space-x-4'>
              <div className='flex items-center justify-center'>
                {techs?.slice(0, 3).map((tech, index) => {
                  const techOption = techOptions.find((techOption) => techOption.value === tech)
                  return (
                    <div key={index} className='w-6 h-6 rounded-full overflow-hidden mr-1'>
                      <FontAwesomeIcon key={index} icon={techOption?.icon} className={`text-white`} />
                    </div>
                  )
                })}
                {techs?.length > 3 && (
                  <div className='overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    + {techs?.length - 3}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='flex items-center justify-start w-full mb-4'>
            <div className='flex w-1/4'>Tags</div>
            <div className='flex items-center justify-start'>
              <div className='flex items-center justify-center'>
                {tags?.slice(0, 3).map((tag, index) => (
                  <div
                    key={index}
                    className='drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white'
                  >
                    {tag}
                  </div>
                ))}
                {tags?.length > 3 && (
                  <div className='overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    + {tags?.length - 3}
                  </div>
                )}
                {tags?.length === 0 && (
                  <div className='overflow-hidden text-white text-right drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>
                    -
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className='flex items-center justify-start w-full mb-4'>
            <div className='flex w-1/4'>License</div>
            <div className='flex'>MIT</div>
          </div>

          <div className='flex items-center justify-start w-full mb-4'>
            <div className='flex w-1/4'>Subject</div>
            <div className='flex'>{subjectId?.join()}</div>
          </div>
        </div>

        <div className='flex flex-1 flex-col items-start justify-start text-white mr-4'>
          <div className='flex w-full'>Description</div>
          <div className='flex w-full'>{description}</div>
        </div>
      </div>

      {/* Project detail */}
      <div className='flex flex-col border-t-[1px] border-neutral-700 mt-8'>
        <div className='flex w-full'>
          <div className='flex flex-1 mt-8 text-white text-xl font-bold'>{projectName}</div>
          <div className='flex flex-1 items-end justify-end w-full'>
            <div
              onClick={() => navigate('/updatepost')}
              className='flex items-center justify-center cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2'
            >
              <FaPencilAlt className='mr-1' />
              Edit
            </div>
            <div
              onClick={() => handleClickStar()}
              className={`${
                star == true ? 'text-yellow-400 border-yellow-400' : ''
              } flex items-center justify-center cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2`}
            >
              {star == true ? <AiFillStar className={`mr-1 scale-up-center`} /> : <AiOutlineStar className={`mr-1`} />}
              Star
            </div>
            {status == 'ARCHIVED' ? (
              <div className='flex cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2'>
                Fork
              </div>
            ) : (
              <></>
            )}
            <div className='flex cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1'>
              <a href={githubLink}>Visit Github</a>
            </div>
          </div>
        </div>
        <div className='flex flex-col w-full mt-8 text-white' dangerouslySetInnerHTML={sanitizedData(content)} />
      </div>
    </div>
  )
}

export default PostDetail
