import { Toaster } from "react-hot-toast";
import NavBar from '../../components/nav/NavBar'
import './Home.css'
import Layout from "../../components/layout/Layout";
import Post from "../../components/list/Post";
import ListView from "../../components/list/ListView";

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Layout>
        <ListView></ListView>
      </Layout>
      <div className="text-lg text-blue-500">Home</div>
    </>
  )
}