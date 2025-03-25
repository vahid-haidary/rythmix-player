import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';


function SplashScreen() {
    const navigate = useNavigate()

    useEffect(() => {
      const timer = setTimeout(() => {
        navigate("/home")
      }, 3000);

      return () => {
        clearTimeout(timer)
      }
    },[navigate])

  return (
    <div className='relative flex items-center justify-center overflow-hidden'>
        <motion.img src="/src/assets/splashScreen/splash1.jpg" 
        className='w-full h-full object-cover'
         alt=""
         initial={{scale: 1}}
         animate={{scale: 1.2}}
         transition={{duration: 3}}
          
          />
        <div className='absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-primary opacity-70'></div>

        <div className='absolute flex flex-col items-center gap-2'>
        <img src="/src/assets/logo/Group 1000003660.png" 
        className='w-24 h-24'
        alt="" />
        <h2 className='font-kalameh-bold text-2xl text-black'>ریتمیکس</h2>
        </div>

        <div className='absolute bottom-0 font-dana-base pb-14 text-black'>
            <h4>نسخه 1.01</h4>
        </div>
    </div>
  )
}

export default SplashScreen