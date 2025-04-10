import React from 'react'
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'
import { motion } from 'framer-motion' 

function Layout() {
  return (
    <>
      <div className="flex flex-col bg-background text-white min-h-screen">

    <header >
      <Navbar/>
    </header>

    <main className='flex-grow mb-16 mt-14 '>
      <div
            initial={{ y: '100%' }} 
            animate={{ y: 0 }} 
            exit={{ y: '100%' }} 
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 40,
              duration: 1,
              ease: 'easeOut',
            }}
      >
      <Outlet/>
      </div>
    </main>

    <footer>
     <Footer/>
    </footer>

      </div>
    </>
  )
}

export default Layout