import React from 'react'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSIdeBar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
        <div className="flex">
            <LeftSideBar />
            <div className="flex w-[60%]">
                <main className="w-full">{ children }</main>
            </div>
            <RightSideBar />
        </div>
    </div>
  )
}

export default Layout
