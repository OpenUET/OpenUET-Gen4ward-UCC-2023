import { Toaster } from "react-hot-toast";
import NavBar from '../../components/nav/NavBar'
import './Home.css'
import Layout from "../../components/layout/Layout";
import ListView from "../../components/list/ListView";

export default function PostView() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Layout>
      </Layout>
    </>
  )
}