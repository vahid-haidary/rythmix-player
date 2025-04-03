import React from 'react'
import categoryData from '../data/categoryData'
import { useNavigate } from 'react-router-dom'

function CategoryPage() {
  const navigate = useNavigate()
  const clickHandle =(item) => {
    navigate(`${item.id}/playlist-songs`)
  }
  return (
    <div className='py-8 px-4'>
        <div className='grid grid-cols-2 gap-5 xs:gap-y-10'>
        {categoryData.map((item => (
            <div key={item.id} onClick={() => clickHandle(item)}>
                <img className='max-w-[234px] max-xs:w-[160px] max-h-[234px] max-xs:h-[160px] cursor-pointer' src={item.src} alt={item.title} />
            </div>
        )))}
        </div>
    </div>  
  )
}

export default CategoryPage