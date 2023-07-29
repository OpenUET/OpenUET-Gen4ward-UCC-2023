import { Toaster } from "react-hot-toast";
import NavBar from '../../components/nav/NavBar'
import './Home.css'
import Layout from "../../components/layout/Layout";
import ListView from "../../components/list/ListView";
import PostDetail from "../../components/post/PostDetail";

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      {/* <Layout>
        <ListView></ListView>
      </Layout> */}
      <PostDetail />
    </>
  )
}