import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="flex flex-col bg-background text-white min-h-screen">

    <header >
      <Navbar/>
    </header>

    <main className='flex-grow mb-16 mt-14 '>
      <Outlet/>
    </main>

    <footer>
     <Footer/>
    </footer>

      </div>
    </>
  )
}

export default Layout