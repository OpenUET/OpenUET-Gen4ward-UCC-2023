import React from 'react'
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="flex ml-16 px-4 py-2 h-[2.5rem] w-[80%] rounded-2xl bg-black-50 border border-neutral-700">
        <input type="text" placeholder="Explore projects" className="w-full bg-transparent border-none text-white outline-none" />
        <div className="flex items-center justify-center text-neutral-400 cursor-pointer">
            <FaSearch />
        </div>
    </div>
  )
}

export default SearchBar
