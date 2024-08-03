import { useState } from 'react'
import './App.css'
import Bootstrapnavbar from './components/Bootstrapnavbar'
import Details from './components/Details'
import Footer from './components/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Start from './components/Start'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Notfound from './components/Notfound'

function App() {
  let routes = createBrowserRouter([
    {path:'/', element: <Layout></Layout>, children:[
      {path: '/home', element: <Start></Start>},
      {index: true, element: <Start></Start>},
      {path: '/about', element: <About></About>},
      {path: '/portfolio', element: <Portfolio></Portfolio>},
      {path: '/contact', element: <Contact></Contact>},
      {path: '*', element: <Notfound></Notfound>}
    ]},
    {path: '*', element: <Layout></Layout>, children:[
      {index:true, element: <Notfound></Notfound>}
    ]}
  ],
  { basename: import.meta.env.BASE_URL })

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
