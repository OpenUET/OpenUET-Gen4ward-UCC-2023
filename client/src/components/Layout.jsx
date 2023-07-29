import React from 'react'
import RightSideBar from './RightSideBar'
import LeftSideBar from './LeftSIdeBar'
import Navbar from './Navbar'

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <LeftSideBar />
            <div className="flex w-[60%]">
                <main className="">{ children }</main>
            </div>
            <RightSideBar />
        </div>
    </div>
  )
}

export default Layout
