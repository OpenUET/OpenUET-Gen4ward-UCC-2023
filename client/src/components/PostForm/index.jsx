import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import TextareaAutosize from 'react-textarea-autosize'
import { faCamera, faHashtag, faMicrochip, faSchool, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import { faReact, faJs, faHtml5, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useRef, useState } from 'react'
import chroma from 'chroma-js'
import CreatableSelect from 'react-select/creatable'
import axios from 'axios'

import Select, { components } from 'react-select'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

import 'react-quill/dist/quill.snow.css'
import './postform.css'
import { formats, modules, subjects, tagsStyles, techStyles } from '../../utils/constanceValue'
import { uploadImage } from '../../utils/uploadImage'

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
function PostForm({ update }) {
  const defaultValidate = {
    pname: true,
    title: true,
    description: true,
    content: true
  }
  const [description, setDescription] = useState('')
  const [techOptions, setTechOptions] = useState([])
  const [tagOptions, setTagOptions] = useState([])
  const [status, setStatus] = useState('ACTIVE')
  // const subject = useRef()
  const [subject, setSubject] = useState([])
  const pname = useRef()
  const title = useRef()
  const [logo, setLogo] = useState()
  const [value, setValue] = useState('')
  const [bg, setBg] = useState()
  const [validated, setValidated] = useState(defaultValidate)
  const formatCreateLabel = (inputValue) => `#${inputValue}`
  const socialLink = useRef()
  const githubLink = useRef()

  const handleTagsChange = (newValue, actionMeta) => {
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

  const handleLogo = (e) => {
    const ava = e.target.files[0]
    ava.preview = URL.createObjectURL(ava)

    setLogo(ava)
  }
  const handleBg = (e) => {
    const ava = e.target.files[0]
    ava.preview = URL.createObjectURL(ava)

    setBg(ava)
  }

  const handleSubjectChange = (newValue) => {
    console.log(newValue)
    setSubject(newValue)
  }
  const handleTechChange = (newValue, actionMeta) => {
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

  const validateAll = () => {
    const dataNeedValid = {
      pname: pname.current.value !== '',
      title: title.current.value !== '',
      description: description !== '',
      content: value !== ''
    }
    setValidated(dataNeedValid)
    return Object.values(dataNeedValid).every((d) => d === true)
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (validateAll()) {
      console.log('okay')

      const logoFile = await uploadImage(logo)
      const logoUrl = logoFile.secure_url

      const coverImgFile = await uploadImage(bg)
      const coverImgUrl = coverImgFile.secure_url

      const data = {
        projectName: pname.current.value,
        title: title.current.value,
        description: description,
        content: value,
        logo_url: logoUrl,
        cover_img_url: coverImgUrl,
        status: status,
        subject_id: subject.map((s) => s.id),
        techs: techOptions.map((t) => t.value),
        tags: tagOptions.map((t) => t.value),
        // socialLink: socialLink.current.value,
        githubLink: githubLink.current.value
      }

      axios.post('http://127.0.0.1:3333/api/posts', {
        data: data,
        userId: "64c4d435f70d4d57567f6877"
      }).then((res) => {
        console.log(res)
      })

      console.log(data)
      return
    }

    console.log('missing field')
  }

  const filterOption = (option, inputValue) => {
    // Filter options based on both id and name
    const { data } = option
    return (
      data.id.toLowerCase().includes(inputValue.toLowerCase()) ||
      data.name.toLowerCase().includes(inputValue.toLowerCase())
    )
  }

  const getOptionLabel = ({ id, name }) => (
    <div>
      {id} - {name}
    </div>
  )
  return (
    <div className='bg-black-100 inline-flex items-start justify-center gap-3 flex-1 w-full mb-20'>
      <div className='flex flex-col w-full text-white'>
        {/* Project cover */}
        <div
          className={`flex flex-col w-full h-[250px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-xl object-contain items-end justify-between mb-6 relative`}
        >
          {/* Todo: Add background placeholder */}
          <img
            src={bg?.preview || ''}
            className='absolute top-0 h-full right-[50%] translate-x-1/2 object-center object-contain'
          />
          <label
            htmlFor='bg'
            className='bg-white rounded-xl w-40 py-1 text-black-50 font-bold flex justify-center items-center bottom-2 right-4 absolute h-fit'
          >
            Edit background
          </label>
          <input accept='image/*' type='file' id='bg' onChange={handleBg} className='hidden' />
          <div className='flex flex-1'></div>
          <div className='flex items-end justify-between w-full'>
            {/* Project name */}
            <div className='flex flex-1 items-center justify-start space-x-4  ml-8 mb-8 '>
              <div className='flex items-center justify-center relative'>
                <label
                  htmlFor='logo'
                  className='bg-white rounded-full w-6 flex justify-center items-center bottom-0 right-0 absolute aspect-square'
                >
                  <FontAwesomeIcon icon={faCamera} className='text-red-400 text-sm' />
                </label>
                <input accept='image/*' type='file' id='logo' onChange={handleLogo} className='hidden' />
                <div className='w-16 h-16 rounded-full overflow-hidden '>
                  <img src={logo?.preview || ''} alt={''} className='w-full outline-none h-full object-cover' />
                </div>
              </div>
              <div className='flex flex-col items-start w-1/2 z-10 '>
                <input
                  ref={pname}
                  className={
                    `bg-transparent font-bold outline-none text-xl  caret-white w-full ` +
                    (!validated.pname ? ' placeholder:text-red-500' : '')
                  }
                  placeholder={validated.pname ? 'ENTER PROJECT NAME' : 'PROJECT NAME IS REQUIRED'}
                />
                <input
                  ref={title}
                  className={
                    'bg-transparent  outline-none caret-white w-full' +
                    (!validated.title ? ' placeholder:text-red-500' : '')
                  }
                  placeholder={validated.title ? 'Title for your project' : 'Title is required'}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project information */}
        <div className='flex justify-center text-white w-full h-auto ml-4 relative '>
          <div className='absolute top-0 bottom-0 w-[1px] bg-white rounded-full sm-max:left-12 '></div>
          <div className='inline-flex flex-1 flex-col mx-4 items-center justify-center'>
            <div className='mb-5 flex w-full'>
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

            <div className='mb-5 flex w-full'>
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

            <div className='mb-5 flex w-full'>
              <label htmlFor='subject' className='text-2xl mr-3'>
                <FontAwesomeIcon icon={faSchool} className='w-6' />
              </label>
              {/* <input
                id='subject'
                ref={subject}
                placeholder='Enter class name'
                className=' placeholder:text-white bg-transparent outline-none hover:border-opacity-70 caret-white border-2 border-white rounded-lg p-1 px-2'
              /> */}
              {/* <Select
                components={{ Option }}
                onChange={handleSubjectChange}
                placeholder={'Select your subject... '}
                options={subjects}
                value={subject}
                
              /> */}
              <Select options={subjects} isMulti styles={techStyles} onChange={handleSubjectChange} value={subject} filterOption={filterOption} getOptionLabel={getOptionLabel} />
            </div>
            <div className='mb-5 flex w-full items-center'>
              <span className='mr-2 text-lg font-bold'>Status:</span>
              <input
                type='radio'
                id='active'
                checked={status === 'ACTIVE'}
                className='mx-2 mt-1 '
                onChange={() => setStatus('ACTIVE')}
              />
              <label htmlFor='active' className=''>
                Active
              </label>
              <input
                type='radio'
                id='archived'
                checked={status === 'ARCHIVED'}
                className='mx-2 mt-1'
                onChange={() => setStatus('ARCHIVED')}
              />
              <label htmlFor='archived'>Archived</label>
            </div>
            <div className='mb-5 flex w-full'>
              <label htmlFor='subject' className='text-2xl mr-3'>
                <FontAwesomeIcon icon={faGithub} className='w-6' />
              </label>
              <input
                id='subject'
                ref={githubLink}
                placeholder='Enter github link'
                className=' placeholder:text-white bg-transparent outline-none hover:border-opacity-70 flex-1 caret-white border-2 border-white rounded-lg p-1 px-2'
              />
            </div>
            <div className='mb-5 flex w-full'>
              <label htmlFor='subject' className='text-2xl mr-3'>
                <FontAwesomeIcon icon={faShareNodes} className='w-6' />
              </label>
              <input
                id='subject'
                ref={socialLink}
                placeholder='Enter social link (Jira)'
                className=' placeholder:text-white bg-transparent outline-none hover:border-opacity-70 flex-1 caret-white border-2 border-white rounded-lg p-1 px-2'
              />
            </div>
          </div>

          <div className='flex flex-1 flex-col items-start justify-start text-white mr-4 ml-4'>
            <label
              htmlFor='text'
              className={'text-xl font-bold mr-3 mb-2' + (!validated.description ? ' text-red-500' : '')}
            >
              <h3>Description</h3>
            </label>
            <TextareaAutosize
              value={description}
              minRows={4}
              wrap='on'
              id='text'
              onChange={(e) => setDescription(e.target.value)}
              maxRows={6}
              placeholder={validated.description ? "Write your project's description here" : 'Description is required'}
              className={
                'bg-transparent w-full h-fit overflow-hidden placeholder:text-white outline-none hover:border-opacity-70 caret-white border-2 border-white rounded-lg p-1 px-2' +
                (!validated.description ? ' placeholder:!text-red-500 !border-red-500' : '')
              }
            />
          </div>
        </div>

        {/* Project detail */}
        <div className='flex flex-col border-t-[1px] border-neutral-700 mt-8'>
          <div className='flex w-full'>
            <div className='flex flex-1 mt-8 text-white text-xl font-bold'>OpenUET</div>
          </div>

          <div className='text-white w-full  placeholder:text-white  caret-white mt-4  p-1 px-2'>
            <ReactQuill
              theme='snow'
              value={value}
              style={{
                height: '600px',
                marginBottom: '80px',
                borderColor: validated.content ? 'white' : 'red !important',
                ':placeholder': {
                  color: validated.content ? 'white' : 'red '
                }
              }}
              className={!validated.content && ' invalid'}
              onChange={setValue}
              modules={modules}
              formats={formats}
              placeholder={validated.content ? 'Describe everything about your project' : 'This field is required'}
            />
          </div>
        </div>
        <button type='submit' onClick={handleSubmit} className='p-2 bg-red-400 w-32 rounded-lg font-bold'>
          Upload
        </button>
      </div>
    </div>
  )
}

export default PostForm
