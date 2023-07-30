import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GithubCallbackPage from './pages/github/callback'
import Home from './pages/home'
import Posts from './pages/posts'
import NewPost from './pages/newpost'
import PrivateRoute from './components/PrivateRoute'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/github/callback' element={<GithubCallbackPage />} />
      <Route exact path='/posts/:id' element={<Posts />} />
      <Route
        exact
        path='/newpost'
        element={
         
            <NewPost />
        }
      />
      <Route exact path='/updatepost/:id' element={<NewPost update />} />
    </Route>
  )
)

export default function App() {
  return (
    <div className='bg-black-100 min-h-screen'>
      <RouterProvider router={router} />
    </div>
  )
}
