'use client'

import { Box, Rating, TextField } from '@mui/material'
import React, { useState } from 'react'
import Button from '../Button'

const RateForm = () => {
  const [rate, setRate] = useState(0)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <div className='flex flex-col max-w-155 w-full gap-3'>
      <p className='text-gray-dark3 text-body-XXS'>Нет отзывов об этом товаре.</p>
      <p className='text-header-L font-bold my-2'>Написать отзыв</p>
      <Box
        className='flex flex-col gap-3'
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          placeholder='Ваше имя'
          size='small'
          variant="outlined"
          color='secondary'
          required
        />
        <TextField
          placeholder='Ваш отзыв'
          className='mt-2'
          multiline
          required
          rows={4}
          size='small'
          variant="outlined"
          color='secondary'
        />
        <p className='mt-3 text-gray-dark3 text-body-XXS'>Оцените</p>
        <Rating
          value={rate}
          onChange={(e, val) => setRate(val || 0)}
        />
        <Button
          className='self-end !py-5'
          view='green'
        >
          <p className='text-white text-body-M'>Отправить</p>
        </Button>
      </Box>
    </div>
  )
}

export default RateForm