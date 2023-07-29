import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './components/Layout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={
      <>
      <div className="bg-black-100 w-full h-screen">
        <Layout />
      </div>
      </>
    } />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
