import React from 'react'
import ProfilePage from '../../components/profile/ProfilePage'
import { Toaster } from "react-hot-toast";
import NavBar from '../../components/nav/NavBar';


const Profile = () => {
  return (
    <>
    <Toaster />
    <NavBar />
    <ProfilePage />
    </>
  )
}

export default Profile