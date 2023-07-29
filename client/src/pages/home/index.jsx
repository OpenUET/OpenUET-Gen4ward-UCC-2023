import { Toaster } from "react-hot-toast";
import Layout from "../../components/layout/Layout";
import ListView from "../../components/list/ListView";
import NavBar from '../../components/nav/NavBar';
import './Home.css';

export default function Home() {
  return (
    <>
      <Toaster />
      <NavBar />
      <Layout>
        <ListView/>
      </Layout>
    </>
  )
}