import { Toaster } from "react-hot-toast";
import NavBar from '../../components/nav/NavBar'
import './Home.css'
import MembersInfo from "../../components/member-list/MembersInfo";
import OwnerInfo from "../../components/member-list/OwnerInfo";
import MembersMenu from "../../components/member-list/MembersMenu";
import ListingRequests from "../../components/member-list/ListingRequests";

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
        <div className="pt-28 flex justify-end">

          <div className="w-1/3 flex flex-col gap-4">
            <OwnerInfo />

            <div className="relative">
              <MembersInfo />
              {true && (
                <MembersMenu />
              )}
            </div>

            {true && (
              <ListingRequests />
            )}
          </div>
        </div>
      </div>
    </>
  )
}