import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/home'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<Home />} />
    </Route>
  )
)

export default function App() {
  return <div className="bg-black-100"><RouterProvider router={router} /></div>
}
