import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Explore from './pages/Explore.jsx'
import SignUp from './pages/SignUp.jsx'
import Notes from './pages/Notes.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>
  },
  {
    path:"/Explore",
    element:<Explore></Explore>
  },
  {
    path:"/SignUp",
    element:<SignUp></SignUp>
  },
  {
    path:"/Notes",
    element:<Notes></Notes>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
