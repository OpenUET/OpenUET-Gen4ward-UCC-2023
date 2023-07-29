import ImageResize from 'quill-image-resize-module-react'
import { Quill } from 'react-quill'
import chroma from 'chroma-js'
Quill.register('modules/imageResize', ImageResize)
export const modules = {
  //syntax: true,
  toolbar: [
    [{ size: [] }],
    [{ header: [1, 2, 3, 4, 5, false] }, 'bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    [
      {
        color: [
          '#111111',
          '#FF0000',
          '#001F3F',
          '#0074D9',
          '#7FDBFF',
          '#39CCCC',
          '#3D9970',
          '#2ECC40',
          '#01FF70',
          '#FFDC00',
          '#FF851B',
          '#FF4136',
          '#85144B',
          '#F012BE',
          '#B10DC9',
          '#AAAAAA'
        ]
      },
      {
        background: ['yellow', 'orange']
      }
    ],
    ['link', 'image', 'code-block'],
    ['clean']
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  },
  imageResize: {
    displaySize: true,
    parchment: Quill.import('parchment'),
    modules: ['Resize', 'DisplaySize', 'Toolbar']
  }
}
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
export const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'video'
]

export const tagsStyles = {
  control: (styles) => ({
    ...styles,
    borderWidth: '2px',
    color: 'white !important',
    caretColor: 'white',
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderRadius: '8px'
  }),
  container: (styles, { data }) => {
    return {
      ...styles,
      width: '60%'
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
  option: (styles, { data }) => {
    console.log(data)
    if (data?.color) {
      const color = chroma(data.color)
      return {
        ...styles,
        backgroundColor: 'white',
        color: color.alpha(0.4).css(),
        ':hover': {
          backgroundColor: color.alpha(0.1).css()
        }
      }
    } else {
      return {
        ...styles,
        backgroundColor: 'white',
        color: 'black',
        ':hover': {
          backgroundColor: 'rgba(0,0,0,0.1)'
        }
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
export const techStyles = {
  control: (styles) => ({
    ...styles,
    borderWidth: '2px',
    color: 'white',
    caretColor: 'white',
    borderColor: 'white',
    backgroundColor: 'transparent',
    borderRadius: '8px',
    padding: '6px 0px',
    width: '100%'
  }),
  container: (styles, { data }) => {
    return {
      ...styles,
      width: '100%'
    }
  },

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

const fetchSubject = async () => {
  const a = await fetch('../../../subject.json')
  const b = await a.json()
    return b

}
export const subjects = await fetchSubject()
