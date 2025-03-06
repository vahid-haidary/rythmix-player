import React from 'react'
import {Share2,Shuffle,Repeat,EllipsisVertical,Timer,Heart,Download} from "lucide-react"
import { motion } from 'framer-motion'

function PlayerControls() {
  return (
    <>
    <section className='w-full px-3 mx-auto bg-background-secondary h-screen'>

      {/* player controls */}
      <div className=' bg-background rounded-b-4xl px-7 h-[90%] '>

        {/* image & curve container */}
      <div className='flex flex-col items-center justify-center'>
        <button className=''>
          <img src="/src/assets/icons/curve.svg" alt="curve.svg" />
        </button>

          <div className='max-w-full min-h-[33.5vh] w-[34.25vh] shadow-lg shadow-gray-900 my-1.5 rounded-2xl'>
            <img className='rounded-2xl' src="https://rythmix-files.storage.c2.liara.space/cover_list/Novan.jpg" alt="" />
          </div>
      </div>

          {/* title container */}
        <div className='flex flex-col self-start mt-[7.5vh] font-dana-base'>
            <div className='flex items-center gap-3'>
            <span className='block w-2 h-2 rounded-full bg-white' ></span>
            <span className='text-lg'>شیدا</span>
            </div>

            <div className='flex items-center gap-3'>
            <span className='block w-2 h-2 rounded-full bg-primary' ></span>
            <span className='text-primary text-tiny'>علیرضا قربانی</span>
            </div>
        </div>

        <div className='flex flex-col gap-6'>
          <div className='flex justify-end items-center '>
            <div className='rounded-full bg-primary w-10 h-10 p-2'>
              <motion.div 
                  animate={{scale: [1, 0.95, 0.9, 0.95, 1]}}
                  transition={{duration:0.5, repeat:Infinity, ease:[0.4, 0, 0.2, 1]}}>
                <Share2 size={24} color="#000000" strokeWidth={1.5} />
              </motion.div>
            </div>
          </div>

            {/* controler player */}
          <div>

              {/* Timeline & Timer container */}
            <div className='flex flex-col gap-3 font-dana-bold relative '>
              <div className='w-full h-0.5 bg-text-primary rounded-full relative'>
                <span className='bg-primary h-3 w-3 block rounded-full absolute left-0 -top-1.5' ></span>
                </div>
              <div className='flex justify-between'>
                <span>4.32</span>
                <span>00.10</span>
              </div>
            </div>

            {/* controler Buttons */}
            <div className='flex justify-between items-center mt-5'>
             <Shuffle size={20} color="#ffffff" strokeWidth={1.75} />
              <img className='h-7 w-7' src="/src/assets/icons/next.svg" alt="" />
              <img className='w-[70px] h-[70px]'  src="/src/assets/icons/play.svg" alt="" />
              {/* <span><img className='w-[70px] h-[70px]' src="/src/assets/icons/pause.svg" alt="" /></span> */}
              <img className='h-7 w-7' src="/src/assets/icons/previous.svg" alt="" />
             <Repeat size={20} color="#ffffff" strokeWidth={1.75} />
            </div>
          </div>

        </div>
        </div>

      {/* buttons bottom */}
      <div className='h-[10%] flex justify-between items-center pt-5 pb-1 px-7 text-text-primary  '>
        <button className='focus:text-primary'>
        <EllipsisVertical size={28} />    
        </button>

        <button className='focus:text-primary'>
        <Heart size={28} strokeWidth={2.5} />
        </button>

        <div className='flex flex-col items-center text-sm'>
          <span className='text-white font-kalameh-bold'>متن</span>
          <span className='font-kalameh-base'>هم‌زمان</span>
        </div>

          <button className='focus:text-primary'>
          <Timer size={28} />
          </button>
          
          <button className='focus:text-primary'>
           <Download size={28}  strokeWidth={1.75} />
          </button>
      </div>

    </section>
    </>
  )
}

export default PlayerControls