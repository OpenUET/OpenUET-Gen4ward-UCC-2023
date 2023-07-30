import React from 'react'
import { FaFilter } from "react-icons/fa";
import { FaFilterCircleXmark } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react'

const Filter = () => {
  const menuRef = useRef(null)
  const [menuOpen, setMenuOpen] = useState(false)
 
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
    
  return (
    <div className={`flex justify-end flex-shrink-0 relative`}>
      <div ref={menuRef} className='flex flex-row items-center gap-3'>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='px-3 py-2 border border-neutral-700 flex flex-row items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition'
        >
          <div className='flex-shrink-0 text-white px-2 py-1'>
            <FaFilter />
          </div>
        </button>

        <dialog
          open={menuOpen}
          className='bg-black-50 rounded-xl shadow-md w-[50vw] sm:w-[36vw] lg:w-[360px] overflow-hidden right-0 top-14 text-sm mr-0 p-0 z-10'
        >
          <div className='flex flex-col w-full cursor-pointer'>
              <>
                <div className="flex w-full">
                    <div className="w-1/3 flex border-r border-neutral-700 text-white items-center justify-start px-2 my-1 mx-1">Technology</div>
                    <input type="text" placeholder="ReactJS, TailwindCSS, ..." className="border-none outline-none text-white w-full p-2 bg-transparent"/>
                </div>
                <div className="flex w-full">
                    <div className="w-1/3 flex border-r border-neutral-700 text-white items-center justify-start px-2 my-1 mx-1">Subject</div>
                    <input type="text" placeholder="OOP, DSA, DBMS, ..." className="border-none outline-none text-white w-full p-2 bg-transparent"/>
                </div>
                <div className="flex items-center justify-start text-white my-2 mx-2">
                    <div className="flex items-center justify-center hover:bg-neutral-600 transition-colors duration-200 rounded-2xl py-1 px-2 border border-neutral-700 mr-2">
                        <FaFilterCircleXmark className="mr-2"/>
                         Clear filter
                    </div>
                    <div className="flex rounded-2xl py-1 px-2 hover:bg-neutral-600 transition-colors duration-200 border border-neutral-700 mr-2">Apply</div>
                </div>
              </>
          </div>
        </dialog>
      </div>
    </div>
  )
}

export default Filter
