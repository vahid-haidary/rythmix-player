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
      <motion.div
                  initial={{ y: '100%' }}  // شروع انیمیشن از پایین
                  animate={{ y: 0 }}  // حرکت به بالا
                  exit={{ y: '100%' }}  // وقتی صفحه بسته می‌شود، انیمیشن برگشت به پایین
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 40,
                    duration: 1,
                    ease: 'easeOut',
                  }}
      >
      <Outlet/>
      </motion.div>
    </main>

    <footer>
     <Footer/>
    </footer>

      </div>
    </>
  )
}

export default Layout