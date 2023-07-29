import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import PostForm from './components/PostForm'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<PostForm/>} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
