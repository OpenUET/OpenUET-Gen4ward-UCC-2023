import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home'
import Posts from './pages/posts'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/posts/:id' element={<Posts />} />
    </Route>
  )
)

export default function App() {
  return <div className='bg-black-100 min-h-screen'><RouterProvider router={router} /></div>
}
