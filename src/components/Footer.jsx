import React from 'react'
import {House ,Download,Search,User,ListMusic} from "lucide-react"

function Footer() {
  return (
    <div 
    className='h-16 w-full bg-background-secondary flex justify-around font-dana-reg text-text-primary
    *:flex *:flex-col *:justify-center *:items-center *:text-center *:gap-1 *:cursor-pointer *:focus:text-primary'>
      
      {/* Download-Btn */}
      <button className=''>
        <Download size={28} strokeWidth={3} />
        <span className='text-tiny'>دانلودها</span>
      </button>

      {/* Search-btn */}
      <button className=''>
        <Search size={28} strokeWidth={2.25} />
        <span className='text-tiny'>جست و جو</span>
      </button>

      {/* House-btn */}
      <button className=''>
        <House size={28} strokeWidth={3} />
        <span className='text-tiny'>خانه</span>
      </button>

      {/* PlayList-btn */}
      <button className=''>
        <ListMusic size={28} strokeWidth={2.25} />
        <span className='text-tiny'>پلی‌لیست‌ها</span>
      </button>

      {/* User-btn */}
      <button className=''>
        <User size={28} strokeWidth={2.25} />
        <span className='text-tiny'>ریتمیکس‌من</span>
      </button>

    </div>
  )
}

export default Footer