import React from 'react'
import LeftSideBar from './LeftSIdeBar'

const Layout = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-[5.25rem]">
      <div className="flex gap-6">
        <div className='flex-1 hidden md:block'>
          <LeftSideBar />
        </div>
        <div className="flex w-full md:w-[70%]">
          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
