import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
<<<<<<< HEAD
import Layout from './components/Layout'
=======
import Home from './pages/home'
>>>>>>> 0439adad3484a6197be9f31f6519d23ff0468f41


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
<<<<<<< HEAD
      <Route exact path='/' element={
      <>
      <div className="bg-black-100 w-full h-screen">
        <Layout>

        </Layout>
      </div>
      </>
    } />
=======
      <Route exact path='/' element={<Home />} />
>>>>>>> 0439adad3484a6197be9f31f6519d23ff0468f41
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
