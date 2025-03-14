import React from 'react'
import { useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const getTitle = () => {
    switch(location.pathname){
      case "home":
        return "ریتمیکس";
      case "/playlist":
        return "پلی لیست";
      case "/search":
        return "جست و جو";
      case "/downloads":
        return "دانلود شده ها";
      case "/myrythmix":
        return "ریتمیکس من";
      default:
        return "ریتمیکس"
      
    }
  }
  return (
    <div className='max-w-base fixed top-0 left-0 right-0 mx-auto h-[56px] w-full bg-background-secondary flex justify-center items-center font-dana-base text-lg z-10'>
      <h1>{getTitle()}</h1>
    </div>
  )
}

export default Navbar