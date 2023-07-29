import React from 'react'
import RightSideBar from '../post/RightSideBar'
import LeftSideBar from './LeftSIdeBar'

const Layout = ({ children }) => {
  return (
    <div>
        <div className="flex">
            <LeftSideBar />
            <div className="flex w-[60%]">
                <main className="w-full">{ children }</main>
            </div>
            <div className="bg-black-100 flex-col inline-flex items-start justify-start gap-3 flex-1 p-4 mt-20"></div>
        </div>
    </div>
  )
}

export default Layout
