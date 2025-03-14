import React from 'react'
import {House ,Download,Search,User,ListMusic} from "lucide-react"
import { Link, useLocation } from 'react-router-dom'

function Footer() {
  const location = useLocation()
  return (
    <div 
    className='h-16 w-full max-w-base fixed bottom-0 left-0 right-0 mx-auto z-20 bg-background-secondary flex justify-around font-dana-reg text-text-primary
    *:flex *:flex-col *:justify-center *:items-center *:text-center *:gap-1 *:cursor-pointer *:focus:text-primary'>
      
      {/* Download-Btn */}
      <Link to="downloads" className=''>
        <Download size={28} strokeWidth={3} />
        <span className='text-tiny'>دانلودها</span>
      </Link>

      {/* Search-btn */}
      <Link to="search" className=''>
        <Search size={28} strokeWidth={2.25} />
        <span className='text-tiny'>جست و جو</span>
      </Link>

      {/* House-btn */}
      <Link to="home" className={`${location.pathname === "/home" || location.pathname == "/" ? "text-primary" : "text-text-primary"}`}>
        <House size={28} strokeWidth={3} />
        <span className='text-tiny'>خانه</span>
      </Link>

      {/* PlayList-btn */}
      <Link to="playlist" className=''>
        <ListMusic size={28} strokeWidth={2.25} />
        <span className='text-tiny'>پلی‌لیست‌ها</span>
      </Link>

      {/* User-btn */}
      <Link to="myrythmix" className=''>
        <User size={28} strokeWidth={2.25} />
        <span className='text-tiny'>ریتمیکس‌من</span>
      </Link>

    </div>
  )
}

export default Footer