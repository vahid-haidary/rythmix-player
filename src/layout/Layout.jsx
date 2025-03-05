import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <div className="max-w-base mx-auto flex flex-col bg-background text-white min-h-screen">

    <header >
      <Navbar/>
    </header>

    <main className='flex-grow'>
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