import { Toaster } from "react-hot-toast";
import ListView from "../../components/post-list/ListView";
import NavBar from '../../components/nav/NavBar';
import LeftSideBar from '../../components/layout/LeftSideBar';
import './Home.css';

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4 pt-[5.25rem]">
        <div className="flex gap-6">
          <div className='flex-1 hidden md:block'>
            <LeftSideBar />
          </div>
          <div className="flex w-full md:w-[70%]">
            <main className="w-full">
              <ListView />
            </main>
          </div>
        </div>
      </div>
    </>
  )
}