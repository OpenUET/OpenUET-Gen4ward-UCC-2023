import React from 'react'

const Post = () => {

  return (
    <a href="/post" className="w-full">
        <div className="flex flex-col w-full h-[12.375rem] bg-black-50 rounded-xl items-start justify-between">
            <div className="flex items-start justify-between w-full">
            {/* Project name */}
            <div className="flex flex-1 items-center justify-start space-x-4 ml-8 mt-8">
                <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <img src={""} alt={""} className="w-full h-full object-cover" />
                </div>
                </div>
                <div className="flex flex-col items-start">
                <div className="flex flex-1 text-white">OpenUET</div>
                <div className="flex flex-1 text-white">Project Title</div>
                </div>
            </div>
            
            {/* Project status */}
            <div className="flex flex-1 justify-center mr-8 mt-8">
                <div className="flex flex-col items-start mr-12">
                <div className="flex flex-1 text-white uppercase">Star</div>
                <div className="flex flex-1 text-white">100</div>
                </div>
                <div className="flex flex-col items-start mr-12 uppercase">
                <div className="flex flex-1 text-white">Status</div>
                <div className="flex flex-1 text-white">Active</div>
                </div>
                <div className="flex flex-col items-start mr-12 uppercase">
                <div className="flex flex-1 text-white">Members</div>
                <div className="flex flex-1 items-center justify-start space-x-4">
                        <div className="flex items-center justify-center">
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                            <img src={""} alt={""} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                            <img src={""} alt={""} className="w-full h-full object-cover" />
                        </div>
                        <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                            <img src={""} alt={""} className="w-full h-full object-cover" />
                        </div>
                        <div className="overflow-hidden text-white text-right">+3</div>
                        </div>
                </div>
                </div>
            </div>
            </div>

            <div className="flex flex-col justify-start items-start mt-4">
            {/* Project Techs */}
            <div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-4">
                <div className="flex items-center justify-center">
                <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                    <img src={""} alt={""} className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                    <img src={""} alt={""} className="w-full h-full object-cover" />
                </div>
                <div className="w-6 h-6 rounded-full overflow-hidden mr-1">
                    <img src={""} alt={""} className="w-full h-full object-cover" />
                </div>
                <div className="overflow-hidden text-white text-right">+3</div>
                </div>
            </div>

            {/* Project tags */}
            <div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-8">
                <div className="flex items-center justify-center">
                <div className="whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
                    Profitable
                </div>
                <div className="whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
                    AI
                </div>
                <div className="whitespace-nowrap text-white w-auto h-auto rounded-2xl overflow-hidden px-3 py-1 mr-1 bg-transparent border-2 border-white">
                    1 Person
                </div>
                </div>
            </div>
            </div>
        </div>
    </a>
  )
}

export default Post
