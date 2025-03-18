import React from 'react'
import { X ,Moon} from 'lucide-react'
import { motion } from 'framer-motion'

function TimerBottomSheet({setShowTimer}) {

    const closeTimerHandle = () => {
      setShowTimer(false)
    }

  return (
    <motion.div 
    className='w-full h-[450px] bg-background-secondary font-dana-bold shadow-md text-sm  '
        initial={{y:"100%"}}
        animate={{y:0}}
        exit={{y:"100%"}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
    >
        <div className='flex justify-between bg-background p-4'>
            <div className='flex gap-3.5'>
                <span className='text-white'><Moon /></span>
                <span className='text-primary font-dana-base text-base'>تایمر خواب</span>
            </div>
            <span onClick={closeTimerHandle}><X size={30}/></span>
        </div>
    <div className='pt-3 px-4'>
    <h3 className='text-white'>متوقف کردن پس از :</h3>
        <div className='flex flex-col mt-3 h-full text-primary divide-y-1 divide-gray-500 *:py-6'>
            <span>5 دقیقه</span>
            <span>10 دقیقه</span>
            <span>15 دقیقه</span>
            <span>30 دقیقه</span>
            <span>45 دقیقه</span>
        </div>
    </div>
    </motion.div>
  )
}

export default TimerBottomSheet