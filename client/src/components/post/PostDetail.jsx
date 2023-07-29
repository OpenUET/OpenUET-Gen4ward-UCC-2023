import React from 'react'

const PostDetail = () => {
  return (
    <div className="bg-black-100 inline-flex items-start justify-center gap-3 flex-1 p-4 w-full">
        <div className="flex flex-col">
            {/* Project cover */}
            <div className="bg-[url('/images/Nachoneko.jpg')] bg-cover flex flex-col w-full h-[12.375rem] rounded-xl items-end justify-between mb-6">
                <div className="flex flex-1"></div>
                <div className="flex items-end justify-between w-full">
                    {/* Project name */}
                    <div className="flex flex-1 items-center justify-start space-x-4 ml-8 mb-8">
                        <div className="flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden">
                            <img src={""} alt={""} className="w-full h-full object-cover" />
                        </div>
                        </div>
                        <div className="flex flex-col items-start">
                        <div className="flex flex-1 text-white text-2xl font-bold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">OpenUET</div>
                        <div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Project Title</div>
                        </div>
                    </div>
                
                    {/* Project status */}
                    <div className="flex flex-1 justify-center mr-8 mb-8">
                        <div className="flex flex-col items-start mr-12">
                            <div className="flex flex-1 font-bold text-white uppercase drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Star</div>
                            <div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">100</div>
                        </div>
                        <div className="flex flex-col items-start mr-12 uppercase">
                            <div className="flex flex-1 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Status</div>
                            <div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Active</div>
                        </div>
                        <div className="flex flex-col items-start mr-12 uppercase">
                            <div className="flex flex-1 font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">Tracked Time</div>
                            <div className="flex flex-1 text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">10h 20m</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Project information */}
            <div className="flex justify-center text-white w-full h-auto ml-4">
                <div className="inline-flex flex-1 flex-col items-center justify-center">
                    <div className="flex items-center justify-start w-full mb-4">
                        <div className="flex w-1/4">Created at</div>
                        <div className="flex">Time</div>
                    </div>

                    <div className="flex items-center justify-start w-full mb-4">
                        <div className="flex w-1/4">Tech Stack</div>
                        <div className="flex items-center justify-start space-x-4">
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

                    <div className="flex items-center justify-start w-full mb-4">
                        <div className="flex w-1/4">Tags</div>
                        <div className="flex items-center justify-start">
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

                    <div className="flex items-center justify-start w-full mb-4">
                        <div className="flex w-1/4">License</div>
                        <div className="flex">MIT</div>
                    </div>

                    <div className="flex items-center justify-start w-full mb-4">
                        <div className="flex w-1/4">Object</div>
                        <div className="flex">OOP</div>
                    </div>
                </div>

                <div className="flex flex-1 flex-col items-start justify-start text-white mr-4">
                    <div className="flex w-full">Description</div>
                    <div className="flex w-full">Lorem Ipsum dolor si amet</div>
                </div>
            </div>

            {/* Project detail */}
            <div className="flex flex-col border-t-[1px] border-neutral-700 mt-8">
                <div className="flex w-full">
                    <div className="flex flex-1 mt-8 text-white text-xl font-bold">OpenUET</div>
                    <div className="flex flex-1 items-end justify-end w-full">
                        <div className="flex cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2">Star</div>
                        <div className="flex cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1 mr-2">Fork</div>
                        <div className="flex cursor-pointer bg-transparent rounded-2xl border-2 border-white text-white px-4 py-1">Visit Github</div>
                    </div>
                </div>
                <div className="flex w-full mt-8 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac facilisis libero, in aliquam enim. Fusce nec venenatis orci. Praesent placerat nisi et purus rutrum, eget porttitor massa vulputate. Nulla ultricies vestibulum diam et aliquam. Nulla faucibus eleifend commodo. Suspendisse at orci lectus. Duis ac varius ante. Nunc rhoncus nulla et risus fermentum, nec pellentesque ipsum cursus. Donec sed massa mollis metus viverra faucibus.

Aliquam auctor id ex ut fermentum. Suspendisse suscipit velit dui, nec lobortis ante condimentum nec. Curabitur bibendum augue quis risus tempus, sed sodales nulla gravida. Donec dapibus mi nec blandit placerat. Fusce lobortis fringilla arcu eu cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec semper nibh varius accumsan tincidunt. Duis fermentum justo nec libero ultricies mollis sit amet sit amet turpis. Aenean purus sem, luctus nec sollicitudin nec, pharetra nec turpis. Morbi mollis malesuada mollis. Nunc neque massa, cursus ac nisi vitae, hendrerit sollicitudin est. Aliquam ac fermentum orci, nec posuere ipsum.

Quisque a magna pretium, interdum odio eget, faucibus orci. Etiam erat lectus, tristique id sagittis nec, vehicula at tellus. Nunc ut cursus lacus. Praesent fermentum ornare orci, sit amet sodales ipsum ullamcorper et. Morbi auctor convallis scelerisque. Duis vel odio vel leo posuere efficitur. Fusce eleifend fermentum ligula at faucibus. Aliquam pulvinar blandit laoreet. Nulla tristique ex dui, eget vehicula nisl sodales at. Pellentesque pellentesque, erat vitae mollis dictum, libero arcu malesuada sem, et pharetra turpis mi non magna. Nullam ac massa neque. Suspendisse iaculis posuere orci, vel iaculis arcu pulvinar sit amet. Mauris lacus est, finibus viverra risus vitae, molestie cursus massa.
                </div>
            </div>
        </div>
    </div>
  )
}

export default PostDetail
