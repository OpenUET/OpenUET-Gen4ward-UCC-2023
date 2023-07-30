import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GithubCallbackPage from './pages/github/callback'
import Home from './pages/home'
import Posts from './pages/posts'
import NewPost from './pages/newpost'
import Profile from './pages/profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/github/callback' element={<GithubCallbackPage />} />
      <Route exact path='/posts/:id' element={<Posts />} />
      <Route exact path='/newpost' element={<NewPost />} />
      <Route exact path='/updatepost' element={<NewPost update/>}/>
      <Route exact path='/profile/:id' element={<Profile />} />
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
