import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import GithubCallbackPage from './pages/github/callback'
import Home from './pages/home'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/github/callback' element={<GithubCallbackPage />} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
