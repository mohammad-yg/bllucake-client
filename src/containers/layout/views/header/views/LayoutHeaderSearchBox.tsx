import { SearchIcon } from '@/components/icons/SearchIcon'
import React from 'react'

export const LayoutHeaderSearchBox = () => {
  return (
    <div className='w-full'>
      <div className='w-full flex p-1 rounded-3xl bg-[#FAFAFA] border border-1-[#EBEAEA] color-[#9B9999] relative justify-end'>
        <input
          className='w-full absolute inset-0 color-none bg-transparent border-none outline-none mr-4'
          placeholder='جستجو...'
        />
        <div className='rounded-full bg-[#154160] w-[40px] h-[40px] flex justify-center items-center'>
          <SearchIcon />
        </div>
      </div>
    </div>
  )
}
