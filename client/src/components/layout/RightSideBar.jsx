import React from 'react'

const RightSideBar = () => {
  return (
    <div className="bg-black-100 flex-col inline-flex items-start justify-start gap-3 flex-1 p-4 mt-20">
      <div className="flex flex-col w-full">
        <div className="flex py-4 justify-between border-b-2 border-white">
          <div className="flex text-white text-base font-medium">
            Member
          </div>
        </div>

        {/* Member list*/}
        <div className="flex flex-col">
          <div className="flex items-center justify-start space-x-4 mt-4">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={""} alt={""} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-1 text-white">Name</div>
              <div className="flex flex-1 text-white">Student at UET</div>
            </div>
          </div>
          <div className="flex items-center justify-start space-x-4 mt-4">
            <div className="flex items-center justify-center">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={""} alt={""} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <div className="flex flex-1 text-white">Name</div>
              <div className="flex flex-1 text-white">Student at UET</div>
            </div>
          </div>

          {/* Apply button */}
          <div className="flex items-center justify-center mt-4 w-full h-auto p-3 rounded-xl bg-transparent border-2 border-green-400">
            <button className="text-green-400 uppercase text-lg">
                Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
