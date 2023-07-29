import { Toaster } from "react-hot-toast";
import NavBar from '../../components/nav/NavBar'
import './Home.css'

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      <div className="text-lg text-blue-500">Home</div>
    </>
  )
}