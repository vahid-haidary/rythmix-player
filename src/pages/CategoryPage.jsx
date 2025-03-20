import React from 'react'
import categoryData from '../data/categoryData'

function CategoryPage() {
  return (
    <div className='py-8 px-4'>
        <div className='grid grid-cols-2 gap-5 gap-y-10'>
        {categoryData.map((item => (
            <div key={item.id}>
                <img className='max-w-[234px] max-h-[234px] cursor-pointer' src={item.src} alt={item.title} />
            </div>
        )))}
        </div>
    </div>
  )
}

export default CategoryPage