import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route exact path='/' element={<></>} />
    </Route>
  )
)

export default function App() {
  return <RouterProvider router={router} />
}
