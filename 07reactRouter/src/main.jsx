import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider } from 'react-router-dom'
import home from './components/home/home.jsx'
import about from './components/about/about.jsx'
import layout from './layout.jsx'




import Contact from './components/contact/contact.jsx'
import {createBrowserRouter} from 'react-router-dom'

const Home=home
const About=about
const Layout=layout
const router= createBrowserRouter([{
  path:'/',
  element:<Layout/>,
  children:[
    {
      path:"",
      element:<Home/>
    },
    {
      path:"about",
      element:<About/>
    },
    {
      path:"contact",
      element:<Contact/>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={router}/>
  </StrictMode>
)
