import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <header className='min-h-screen' >
      <Navbar/>
    </header>

    <main>
      <Outlet/>
    </main>

    <footer>
     <Footer/>
    </footer>
    </>
  )
}

export default Layout