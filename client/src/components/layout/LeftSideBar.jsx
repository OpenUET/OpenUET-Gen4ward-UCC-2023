import React, { useState } from 'react';
import { useCookies } from 'react-cookie';

const RightSideBar = () => {
  const [active, setActive] = useState("");
  const [cookies, setCookie, removeCookie] = useCookies(['shortcut']);

  const handleClick = (name) => {
    setActive(name);
  }

  return (
    <div className="flex-col flex items-start justify-start gap-3 py-4">
      <div className="flex flex-col w-full">
        <a href="/newpost">
          <div className={`text-blue-500 hover:text-blue-400 flex items-center justify-center p-4 rounded-xl cursor-pointer border-2 border-blue-500 hover:border-blue-400 transition-colors duration-400`}>
            New Post
          </div>
        </a>
      </div>

      <div className="flex flex-col w-full">
        <div className="flex py-4 justify-between">
          <div className="flex text-white uppercase">
            Shorcut
          </div>
          <div className="w-8 h-8 flex-shrink-0 cursor-pointer hover:opacity-80">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 17" fill="none">
              <path opacity="0.4" d="M11.7333 0.5H4.26667C1.54311 0.5 0 2.04311 0 4.76667V12.2333C0 14.9498 1.536 16.5 4.26667 16.5H11.7333C14.4569 16.5 16 14.9498 16 12.2333V4.76667C16 2.04311 14.4569 0.5 11.7333 0.5Z" fill="#5577FF" />
              <path d="M10.6564 9.06667H8.5996V11.1056C8.5996 11.4339 8.33115 11.7 7.99999 11.7C7.66883 11.7 7.40037 11.4339 7.40037 11.1056V9.06667H5.34362C5.03473 9.03496 4.79999 8.77692 4.79999 8.46906C4.79999 8.1612 5.03473 7.90316 5.34362 7.87145H7.39392V5.83893C7.42591 5.53271 7.68621 5.3 7.99676 5.3C8.30731 5.3 8.56762 5.53271 8.5996 5.83893V7.87145H10.6564C10.9652 7.90316 11.2 8.1612 11.2 8.46906C11.2 8.77692 10.9652 9.03496 10.6564 9.06667Z" fill="#5577FF" />
            </svg>
          </div>
        </div>

        <div className="flex flex-col">
          {cookies.shortcut && cookies.shortcut.map((item, index) => (
            <a href={item.url} key={index} className="flex items-center justify-between space-x-4 mt-4">
              <div className="flex items-center justify-center">
                <div className="w-10 h-10 rounded-full overflow-hidden border bg-white">
                  <img src={item.imageUrl || 'https://cdn4.iconfinder.com/data/icons/seo-outline-422/50/innovation-gear-lightbulb-idea-technology-512.png'} alt={"Shortcut icon"} className="w-full h-full object-cover" />
                </div>
                <div className="flex flex-1 text-white text-lg ml-4">{item.title}</div>
              </div>
              {/* <div className="flex items-center">
                <div className="flex flex-1 text-white">Noti</div>
              </div> */}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RightSideBar
