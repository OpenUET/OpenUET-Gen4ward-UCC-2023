import { Form } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextareaAutosize from 'react-textarea-autosize'
import { faBookOpen, faCamera, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import chroma from 'chroma-js'

import Select from 'react-select'
const colourStyles = {
  control: (styles) => ({ ...styles, borderWidth: '2px', borderColor: 'white', backgroundColor: 'transparent' }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: isDisabled
        ? undefined
        : isSelected
        ? data.color
        : isFocused
        ? color.alpha(0.1).css()
        : undefined,
      color: isDisabled ? '#ccc' : isSelected ? (chroma.contrast(color, 'white') > 2 ? 'white' : 'black') : data.color,
      cursor: isDisabled ? 'not-allowed' : 'default',

      ':active': {
        ...styles[':active'],
        backgroundColor: !isDisabled ? (isSelected ? data.color : color.alpha(0.3).css()) : undefined
      }
    }
  },
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: color.alpha(0.1).css()
    }
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: data.color
  }),
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white'
    }
  })
}
const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
  { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }
]
function PostForm({ update }) {
  const [description, setDescription] = useState('')
  const [selectedOptions, setSelectedOptions] = useState([])
  return (
    <div className='fixed w-[100vw] h-[100vh] bg-black bg-opacity-50 flex justify-center items-center text-white '>
      <Form className='bg-black w-[40vw] h-[800px] rounded-2xl overflow-hidden'>
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-[150px] relative flex p-4 items-end mb-6 '>
          <div className='flex h-fit items-center '>
            <div className='px-6 relative'>
              <div className='w-16 bg-red-400 aspect-square rounded-full' />
              <label
                htmlFor='logo'
                className='bg-white rounded-full w-6 flex justify-center items-center bottom-0 right-6 absolute aspect-square'
              >
                <FontAwesomeIcon icon={faCamera} className='text-red-400 text-sm' />
              </label>
              <input accept='image/*' type='file' id='logo' className='hidden' />
            </div>
            <div className='flex flex-col'>
              <input
                className='bg-transparent placeholder-white font-bold outline-none text-xl  caret-white'
                placeholder='PROJECT NAME'
              />
              <input
                className='bg-transparent placeholder-white outline-none caret-white'
                placeholder='Title for your project'
              />
            </div>
          </div>
        </div>

        <div className='px-5 pb-5 flex '>
          <label htmlFor='tags' className='text-2xl mr-3'>
            <FontAwesomeIcon icon={faHashtag} className='w-6' />
          </label>
          <div className='border-2 border-white hover:border-opacity-70  rounded-lg p-1 px-2'>
            <input
              className='bg-transparent placeholder-white outline-none caret-white'
              id='tags'
              placeholder='Specific your tags here '
            />
          </div>
        </div>
        <div className='px-5 pb-5 flex'>
          <label htmlFor='text' className='text-2xl mr-3'>
            <FontAwesomeIcon icon={faBookOpen} className='w-6' />
          </label>
          <TextareaAutosize
            value={description}
            minRows={2}
            wrap='on'
            id='text'
            onChange={(e) => setDescription(e.target.value)}
            maxRows={4}
            placeholder="Write your project's description here"
            className='bg-transparent w-full h-fit overflow-hidden placeholder-white outline-none hover:border-opacity-70 caret-white border-2 border-white rounded-lg p-1 px-2'
          />
        </div>
        <div className='px-5 pb-5 flex'>
          <Select
            closeMenuOnSelect={false}
            defaultValue={selectedOptions}
            onChange={setSelectedOptions}
            isMulti
            options={colourOptions}
            styles={colourStyles}
          />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
        <div></div>
        <div></div>
      </Form>
    </div>
  )
}

export default PostForm
