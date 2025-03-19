import React from 'react'
import { Trash, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

function DownloadsBottomSheet({setShowBottomSheet,selectedSong,setDownloadedSongs}) {

  const handleDelete = () => {
    if(!selectedSong) return

    const storedSongs = JSON.parse(localStorage.getItem("downloadedSongs")) || [];

    const updatedSongs = storedSongs.filter(song => song.title !== selectedSong.title)

    localStorage.setItem("downloadedSongs", JSON.stringify(updatedSongs))

    setDownloadedSongs(updatedSongs)

    setShowBottomSheet(false)
  }

    const bottonShettHanlde = () => {
 
        setShowBottomSheet(false)
 
    }
  return (
    <AnimatePresence>
    <motion.div 
    className='flex flex-col w-[80%] mx-auto bg-background-secondary font-dana-bold shadow-md text-sm rounded-xl '
    initial={{y:"300%"}}
    animate={{y:0}}
    exit={{y:"300%"}}
    transition={{ duration: 0.4, ease: "easeInOut" }}
    >
        <div className='flex justify-between bg-background2 p-2 items-center rounded-xl' >
            <span className='text-primary'>گزینه ها</span>
            <X size={30} onClick={bottonShettHanlde} className='cursor-pointer' />
        </div>

        <div className='inline-flex items-center gap-3 my-8 px-4 cursor-pointer' onClick={handleDelete}>
        <Trash color='red' />
        <span>حذف از لیست دانلودها</span>
        </div>
    </motion.div>
    </AnimatePresence>
  )
}

export default DownloadsBottomSheet