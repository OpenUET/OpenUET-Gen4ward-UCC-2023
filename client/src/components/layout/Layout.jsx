import React from 'react'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSIdeBar'

const Layout = ({ children }) => {
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-20">
      <div className="flex">
        <LeftSideBar />
        <div className="flex w-[70%]">
          <main className="w-full">{children}</main>
        </div>
      </div>
    </div>
  )
}

export default Layout
