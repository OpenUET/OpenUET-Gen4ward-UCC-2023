import { useState } from "react";
import Logo from "./Logo";
import UserMenu from "./UserMenu";
import Notification from "./Notification";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [session, setSession] = useState(null);

  return (
    <nav className="fixed bg-black-100 w-full z-10 shadow-sm py-4 border-b-[1px] border-neutral-700">
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="flex flex-row items-center justify-between gap-2 md:gap-6">
          <div className="lg:flex-1 flex">
            <Logo />
          </div>

          <div className="flex flex-[2] items-center gap-2 w-full md:w-auto">
            <SearchBar />
          </div>

          <div className="lg:flex-1 flex gap-2 items-center justify-end">
            <Notification session={session}/>
            <UserMenu session={session}/>
          </div>
        </div>
      </div>
    </nav>
  )
}
