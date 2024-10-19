'use client'

import React, { useState } from 'react'
import Filters, { FilterProps } from '../Filters'
import { Drawer } from '@mui/material'

const FiltersMobile = (props: FilterProps) => {
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(prev => !prev)
  }

  return (
    <div className='hidden max-lg:block'>
      <button className='px-3 h-8 border border-gray rounded-md text-body-S font-bold' onClick={() => toggleDrawer()}>Фильтры</button>
      <Drawer classes={{ paper: 'max-w-170 w-full relative' }} open={open} onClose={() => toggleDrawer()}>
        <button className='absolute top-4 right-4' onClick={() => toggleDrawer()}>
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M23.75 6.25L6.25 23.75M6.25002 6.25L23.75 23.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className='flex justify-center px-4 py-8'><Filters {...props} /></div>
      </Drawer>
    </div>
  )
}

export default FiltersMobile