import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <>
        <Header/>
        <div style={{minHeight:'100vh'}}>
          <Outlet/>
        </div>
          
        <Footer/>
    </>
  )
}

export default Layout