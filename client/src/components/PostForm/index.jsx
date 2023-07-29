import { Form } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextareaAutosize from 'react-textarea-autosize'
import { faBookOpen, faCamera, faHashtag, faMicrochip, faSchool } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJs, faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRef, useState } from 'react'
import chroma from 'chroma-js'
import CreatableSelect from 'react-select/creatable'
import Select, { components } from 'react-select'
const tagsStyles = {
  control: (styles) => ({
    ...styles,
    borderWidth: '2px',
    color: 'white !important',
    caretColor: 'white',
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderRadius: '8px'
  }),
  input: (styles) => ({
    ...styles,
    color: 'white'
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'white'
  }),
  option: (styles, { data }) => {
    const color = chroma(data.color)
    return {
      ...styles,
      backgroundColor: 'white',
      color: color.alpha(0.4).css(),
      ':hover': {
        backgroundColor: color.alpha(0.1).css()
      }
    }
  },
  multiValueRemove: (styles, { data }) => ({
    ...styles,
    color: data.color,
    ':hover': {
      backgroundColor: data.color,
      color: 'white'
    }
  }),
  multiValue: (styles, { data }) => {
    const color = chroma(data.color)

    return {
      ...styles,
      backgroundColor: color.alpha(0.4).css()
    }
  },
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      color: 'white'
    }
  }
}
const techStyles = {
  control: (styles) => ({
    ...styles,
    borderWidth: '2px',
    color: 'white',
    caretColor: 'white',
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    padding: '6px 0px',
    width: '34vw'
  }),
  option: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: 'white',
      color: 'black',
      ':hover': {
        backgroundColor: 'rgba(0,0,0,0.1)'
      }
    }
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: 'transparent'
    }
  },
  input: (styles) => ({
    ...styles,
    color: 'white'
  }),
  placeholder: (styles) => ({
    ...styles,
    color: 'white'
  }),
  multiValueLabel: (styles, { data }) => {
    return {
      ...styles,
      color: data.color
    }
  }
}
const tech = [
  { value: 'reactjs', label: 'ReactJs', icon: faReact, color: 'rgb(14, 165, 233)' },
  { value: 'js', label: 'JavaScript', icon: faJs, color: 'yellow' },
  { value: 'html', label: 'HTML', icon: faHtml5, color: 'orange' }
]
const colourOptions = [
  { value: 'ocean', label: 'Ocean', color: '#00B8D9' },
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' },
  { value: 'forest', label: 'Forest', color: '#00875A' },
  { value: 'slate', label: 'Slate', color: '#253858' },
  { value: 'silver', label: 'Silver', color: '#666666' }
]
function PostForm({ update }) {
  const [description, setDescription] = useState('')
  const [techOptions, setTechOptions] = useState([])
  const [tagOptions, setTagOptions] = useState([])
  const [status, setStatus] = useState('active')
  const subject = useRef()
  const formatCreateLabel = (inputValue) => `#${inputValue}`
    const socialLink = useRef()
    const githubLink = useRef()
  const MultiValueLabel = (props) => {
    const { data } = props
    if (data?.icon) {
      return (
        <components.MultiValueLabel {...props}>
          <FontAwesomeIcon icon={data.icon} className='text-3xl' />
        </components.MultiValueLabel>
      )
    } else {
      return (
        <components.MultiValueLabel {...props}>
          <span className='text-base'>{data.label}</span>
        </components.MultiValueLabel>
      )
    }
  }

  const handleTagsChange = (newValue, actionMeta) => {
    console.log(newValue, actionMeta)
    if (actionMeta.action === 'create-option') {
      const newOption = {
        value: newValue.at(-1).value,
        label: `#${newValue.at(-1).value}`,
        color: chroma.random().hex()
      }
      setTagOptions([...tagOptions, newOption])
    } else if (actionMeta.action === 'select-option') {
      setTagOptions([...tagOptions, newValue.at(-1)])
    } else if (actionMeta.action === 'clear') {
      setTagOptions(newValue)
    } else if (actionMeta.action === 'remove-value') {
      setTagOptions(newValue)
    }
  }

  const handleTechChange = (newValue, actionMeta) => {
    console.log(newValue, actionMeta)
    if (actionMeta.action === 'create-option') {
      const newOption = {
        value: newValue.at(-1).value,
        label: `${newValue.at(-1).value}`
      }
      setTechOptions([...techOptions, newOption])
    } else if (actionMeta.action === 'select-option') {
      setTechOptions([...techOptions, newValue.at(-1)])
    } else if (actionMeta.action === 'clear') {
      setTechOptions(newValue)
    } else if (actionMeta.action === 'remove-value') {
      setTechOptions(newValue)
    }
  }
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
                className='bg-transparent  font-bold outline-none text-xl  caret-white'
                placeholder='ENTER PROJECT NAME'
              />
              <input className='bg-transparent  outline-none caret-white' placeholder='Title for your project' />
            </div>
          </div>
        </div>

        <div className='px-5 pb-5 flex '>
          <label htmlFor='tags' className='text-2xl mr-3'>
            <FontAwesomeIcon icon={faHashtag} className='w-6' />
          </label>

          <CreatableSelect
            isMulti
            id='tags'
            placeholder='Specific your tags here '
            styles={tagsStyles}
            options={colourOptions}
            formatCreateLabel={formatCreateLabel}
            onChange={handleTagsChange}
            value={tagOptions}
          />
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
            className='bg-transparent w-full h-fit overflow-hidden placeholder:text-white outline-none hover:border-opacity-70 caret-white border-2 border-white rounded-lg p-1 px-2'
          />
        </div>
        <div className='px-5 pb-5 flex'>
          <label htmlFor='tags' className='text-2xl mr-3'>
            <FontAwesomeIcon icon={faMicrochip} className='w-6' />
          </label>
          <CreatableSelect
            components={{ MultiValueLabel }}
            isMulti
            onChange={handleTechChange}
            placeholder={'Select your technologies... '}
            options={tech}
            value={techOptions}
            styles={techStyles}
          />
        </div>
        <div className='px-5 pb-5 flex'>
          <div className='flex-1'>
            <label htmlFor='subject' className='text-2xl mr-3'>
              <FontAwesomeIcon icon={faSchool} className='w-6' />
            </label>
            <input
              id='subject'
              ref={subject}
              placeholder='Enter class name'
              className=' placeholder:text-white bg-transparent outline-none hover:border-opacity-70 caret-white border-2 border-white rounded-lg p-1 px-2'
            />
          </div>
          <div className='flex-1 flex justify-center items-center'>
            <span className='mr-2 text-lg font-bold'>Status:</span>
            <input
              type='radio'
              id='active'
              checked={status === 'active'}
              className='mx-2 mt-1 '
              onChange={() => setStatus('active')}
            />
            <label htmlFor='active' className=''>
              Active
            </label>
            <input
              type='radio'
              id='archived'
              checked={status === 'archived'}
              className='mx-2 mt-1'
              onChange={() => setStatus('archived')}
            />
            <label htmlFor='archived'>Archived</label>
          </div>
        </div>
        <div className='px-5 pb-5 flex'>
          <label htmlFor='git' className='text-2xl mr-3'>
            <FontAwesomeIcon icon={faGithub} className='w-6' />
          </label>
          <input
            id='git'
            ref={githubLink}
            placeholder='Enter github link'
            className=' placeholder:text-white bg-transparent outline-none hover:border-opacity-70 caret-white border-2 border-white rounded-lg p-1 px-2'
          />
        </div>
        <div className='px-5 pb-5 flex' >
          <label htmlFor='subject' className='text-2xl mr-3'>
            <FontAwesomeIcon icon={faSchool} className='w-6' />
          </label>
          <input
            id='subject'
            ref={socialLink}
            placeholder='Enter social link (Jira):'
            className=' placeholder:text-white bg-transparent outline-none hover:border-opacity-70 caret-white border-2 border-white rounded-lg p-1 px-2'
          />
        </div>
      </Form>
    </div>
  )
}

export default PostForm
