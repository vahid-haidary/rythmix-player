import React, {  } from 'react'
import { X ,ArrowDownNarrowWide,Medal,RefreshCcw,FlameKindling,Headphones,HeadphoneOff} from 'lucide-react'
import { motion } from 'framer-motion'

function SortBottomSheet({setShowBottomSheet,handleTextClick}) {

    const closeTimerHandle = () => {
        setShowBottomSheet(false)
    }


  return (
    <>
    <motion.div 
    className='w-base fixed bottom-0 left-0 right-0 mx-auto bg-background-secondary font-dana-base shadow-lg text-sm  '
        initial={{y:"100%"}}
        animate={{y:-63}}
        exit={{y:"100%"}}
        transition={{ duration: 0.3, ease: "easeInOut" }}
    >
        <div className='flex justify-between bg-background p-4'>
            <div className='flex gap-3.5'>
            <ArrowDownNarrowWide size={30} className='text-white' />
                <span className='text-primary font-dana-base text-base'>ترتیب نمایش</span>
            </div>
            <span onClick={closeTimerHandle}><X size={30}/></span>
        </div>
    <div className='pt-3 px-4'>
        <div className='flex flex-col mt-3 h-full text-text-accent *:py-6 *:cursor-pointer'>
            <div className='flex gap-3.5 items-center' onClick={() => handleTextClick("پیشنهاد ریتمیکس")}>
                    <Medal size={20} />       
                <div className='flex flex-col gap-1'>
                    <span className='!text-white'>پیشنهاد ریتمیکس</span>
                    <span className='text-tiny'>به ترتیب پیشنهاد ریتمیکس گوش دهید</span>
                </div>
            </div>
            <div className='flex gap-3.5 items-center' onClick={() => handleTextClick("اخیر افزوده شده")}>
                    <RefreshCcw size={20} />
                <div className='flex flex-col gap-1'>
                    <span className='!text-white'>اخیر افزوده شده</span>
                    <span className='text-tiny'>جدیدترین آهنگ های پلی لیست را بشنوید</span>
                </div>
            </div>
            <div className='flex gap-3.5 items-center' onClick={() => handleTextClick("محبوب ترین ها")}>
                    <FlameKindling size={20} />
                <div className='flex flex-col gap-1'>
                    <span className='!text-white'>محبوب ترین ها</span>
                    <span className='text-tiny'>به ترتیب آهنگ های مورد علاقه کاربران</span>
                </div>
            </div>
            <div className='flex gap-3.5 items-center' onClick={() => handleTextClick("بیشترین شنیده ها")}>
                    <Headphones size={20} />
                <div className='flex flex-col gap-1'>
                    <span className='!text-white'>بیشترین شنیده ها</span>
                    <span className='text-tiny'>به ترتیب آهنگ هایی که بیشتر گوش دادید</span>
                </div>
            </div>
            <div className='flex gap-3.5 items-center' onClick={() => handleTextClick("کمتر شنیده ها")}>
                    <HeadphoneOff size={20} />
                <div className='flex flex-col gap-1'>
                    <span className='!text-white'>کمتر شنیده ها</span>
                    <span className='text-tiny'>به ترتیب آهنگ هایی که کمتر گوش دادید</span>
                </div>
            </div>
        </div>
    </div>
    </motion.div>
    </>
  )
}

export default SortBottomSheet