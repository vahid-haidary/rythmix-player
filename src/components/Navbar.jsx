import { Settings } from 'lucide-react';
import React from 'react';
import { useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();

  const getTitle = () => {
    switch (location.pathname) {
      case "/home":
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
        return "ریتمیکس";
    }
  };

  return (
    <div className='max-w-base fixed top-0 left-0 right-0 mx-auto h-[56px] w-full bg-background-secondary flex justify-between items-center font-dana-base text-lg z-10 px-4'>
      {location.pathname === "/myrythmix" && (
        <Settings className='text-primary cursor-pointer' />
      )}
      <div className='flex-1 flex justify-center'>
        <h1>{getTitle()}</h1>
      </div>
    </div>
  );
}

export default Navbar;