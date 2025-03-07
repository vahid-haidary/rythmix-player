import { SearchIcon ,CircleX} from 'lucide-react'
import React, { useState } from 'react'

function Search() {

  const [searchText, setSearchText] = useState("")

  return (
    <>
    <div className='relative' >
    <form className='px-3 my-4 h-12 relative'>

        {searchText == "" ? <SearchIcon size={32} className='text-primary absolute right-7 bottom-2.5' /> :  <CircleX size={32} className="text-white absolute right-7 bottom-2.5" />}
        <input 
        type="search"
         className='w-full h-full bg-background-accent rounded-4xl text-base font-dana-base pr-16 outline-none'
         placeholder='جست وجو کنید...'
         onChange={(e) => setSearchText(e.target.value)}
         />
         
         <button className={`bg-primary px-5 py-[10px] cursor-pointer font-dana-bold text-sm text-background-accent rounded-4xl absolute left-4 top-1 transition-opacity duration-300 
          ${searchText==""? "opacity-0 pointer-events-none":"opacity-100 pointer-events-auto"}`} >جستجو</button>
         
    </form>
    <div className='font-dana-bold text-text-primary mr-9'>
      تاریخچه جست وجو
    </div>

    <div className='flex flex-col absolute top-[160px] right-[210px]'>
    <img className='w-28 h-28' src="/src/assets/icons/cactus.svg" alt="" />
    <SearchIcon className='text-text-primary absolute top-[57px]' size={48} />
    <span className='font-dana-base mx-auto text-text-primary'>عبارتی وجود ندارد</span>
    </div>
    
    </div>
    </>
  )
}

export default Search