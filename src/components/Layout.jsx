import React from 'react'
import Bootstrapnavbar from './Bootstrapnavbar'
import { Outlet } from 'react-router-dom'
import Details from './Details'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
        <Bootstrapnavbar></Bootstrapnavbar>
        <Outlet></Outlet>
        <Details></Details>
        <Footer></Footer>
    </>
  )
}
