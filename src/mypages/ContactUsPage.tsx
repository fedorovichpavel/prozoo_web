'use client'

import React from 'react'
import Link from 'next/link'
import { Box, TextField } from '@mui/material'
import Button from '../components/Button'

const ContactUsPage = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }


  return <div><div className="flex max-lg:flex-col text-black font-normal jusctify-beetwen gap-40 py-5">
    <div className='w-full'>
      <h2 className='text-header-XL font-medium text-dark'>Контакты</h2>
      <p className='mt-10'>PROZOO - это единственный в своем роде интернет-магазин зоотоваров, отличительной чертой которого является не совсем привычный для Республики Беларусь, но весьма популярный в Европе формат "Cash and Carry".</p>
      <p className='text-body-L font-bold mt-10'>ООО "Прокормбай"</p>
      <div className='flex items-center gap-4'>
        <svg className='w-5 h-5' version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M82 214 c-26 -18 -30 -69 -6 -102 14 -20 14 -22 -4 -22 -13 0 -22
					-11 -29 -35 l-11 -35 88 0 88 0 -11 35 c-6 19 -17 35 -24 35 -12 0 -11 -3 1
					-16 34 -33 20 -44 -54 -44 -38 0 -70 4 -70 9 0 25 15 41 37 41 13 0 21 -4 18
					-10 -3 -6 4 -10 16 -10 12 0 19 3 16 6 -4 4 5 20 18 36 44 53 24 128 -35 128
					-9 0 -26 -7 -38 -16z m66 -10 c29 -20 28 -61 -3 -99 l-25 -30 -25 30 c-31 38
					-32 79 -3 99 12 9 25 16 28 16 3 0 16 -7 28 -16z"></path>
            <path d="M103 179 c-15 -15 -5 -39 17 -39 22 0 32 24 17 39 -6 6 -14 11 -17
					11 -3 0 -11 -5 -17 -11z m32 -8 c7 -12 -12 -24 -25 -16 -11 7 -4 25 10 25 5 0
					11 -4 15 -9z"></path>
          </g>
        </svg>
        <p className='leading-5 mt-5'>Республика Беларусь, 224013, Брестская область, г. Брест, б-р Шевченко, д. 6/1, оф. 303</p>
      </div>
      <div className='flex items-start gap-4 mt-5'>
        <svg className='w-5 h-5' version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M15 220 c-30 -34 -12 -84 54 -151 70 -69 119 -85 154 -50 l21 21 -27
					27 c-24 24 -30 26 -48 15 -17 -11 -25 -11 -45 3 -13 8 -31 26 -39 39 -14 20
					-14 28 -3 45 11 17 9 24 -12 46 -28 30 -32 31 -55 5z"></path>
          </g>
        </svg>
        <div className='flex w-full justify-between max-lg:justify-start max-md:flex-wrap gap-10 max-lg:gap-4'>
          <div className='flex flex-col'>
            <p className='mb-3'>Телефоны интернет-магазина:</p>
            <Link className='text-info hover:text-green' href='tel:+375290000000'>+375 (29) 000-00-00</Link>
            <Link className='text-info hover:text-green' href='tel:+375290000000'>+375 (29) 000-00-00</Link>
          </div>
          <div className='flex flex-col'>
            <p className='mb-3'>Телефоны отдела продаж:</p>
            <Link className='text-info hover:text-green' href='tel:+375290000000'>+375 (29) 000-00-00</Link>
            <Link className='text-info hover:text-green' href='tel:+375290000000'>+375 (29) 000-00-00</Link>
          </div>
        </div>
      </div>
      <div className='flex items-start gap-4 mt-5'>
        <svg className='w-5 h-5' version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet" >
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M75 231 c-45 -20 -70 -60 -70 -112 0 -42 5 -53 33 -81 28 -28 39 -33
82 -33 43 0 54 5 82 33 28 28 33 39 33 82 0 42 -5 54 -31 81 -33 33 -92 46
-129 30z m116 -40 c64 -65 20 -171 -71 -171 -58 0 -100 42 -100 100 0 91 106
135 171 71z"></path>
            <path d="M110 154 c0 -25 7 -41 23 -55 31 -26 45 -24 19 4 -13 14 -22 36 -22
55 0 18 -4 32 -10 32 -5 0 -10 -16 -10 -36z"></path>
          </g>
        </svg>
        <div>
          <p>Пн.-Пт.: 9.00 - 20.30</p>
          <p className='mt-3'>Сб.-Вс.: 9.00 - 19.30</p>
        </div>
      </div>
      <div className='flex items-start gap-4 mt-5'>
        <svg className='w-5 h-5' version="1.0" xmlns="http://www.w3.org/2000/svg" width="24.000000pt" height="24.000000pt" viewBox="0 0 24.000000 24.000000" preserveAspectRatio="xMidYMid meet">
          <g transform="translate(0.000000,24.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
            <path d="M0 195 c0 -2 27 -23 60 -45 l60 -41 60 41 c33 22 60 43 60 45 0 3
					-54 5 -120 5 -66 0 -120 -2 -120 -5z"></path>
            <path d="M0 120 l0 -52 33 21 c17 11 32 25 32 31 0 6 -15 20 -32 31 l-33 21 0
					-52z"></path>
            <path d="M205 150 c-38 -25 -38 -36 3 -61 l32 -21 0 51 c0 28 -1 51 -2 51 -2
					0 -16 -9 -33 -20z"></path>
            <path d="M42 75 l-47 -30 63 -3 c34 -2 90 -2 125 0 l62 3 -44 29 c-60 38 -100
					39 -159 1z"></path>
          </g>
        </svg>
        <Link className='text-info hover:text-green' href='mailto:info@prozoo.by'>info@prozoo.by</Link>
      </div>
      <p className='mt-5'>Юр. Адрес: Республика Беларусь, 224013. Брестская область, г. Брест, б-р Шевченко, д. 6/1, оф. 303.</p>
      <p className='mt-5'>УНП 291500723</p>
    </div>
    <div className='w-full'>
      <img className='max-lg:w-90 max-lg:mx-auto' src="/images/static_pages/contact_logo.webp" alt="image" />
      <p className='mt-5 text-gray-dark3 text-body-MD'>Написать нам</p>
      <Box
        className='flex flex-col gap-3 mt-5'
        component="form"
        onSubmit={handleSubmit}
        autoComplete="off"
      >
        <TextField
          size='small'
          variant="outlined"
          label="Ваше имя"
          color='secondary'
          required
        />
        <TextField
          size='small'
          variant="outlined"
          label="E-Mail адрес"
          color='secondary'
          required
        />
        <TextField
          label='Ваше сообщение'
          className='mt-2'
          multiline
          required
          rows={6}
          size='small'
          variant="outlined"
          color='secondary'
        />
        <Button
          className='self-end !py-5 mt-4'
          view='green'
        >
          <p className='text-white text-body-M'>Отправить</p>
        </Button>
      </Box>
    </div>
  </div>
    <h3 className='text-header-L text-black'>Пункт самовывоза</h3>
    <iframe className='border-none mb-20' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9389.176319028991!2d27.6468586!3d53.9620453!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc503f2c134d77f39!2z0KLQvtCy0LDRgNGLINC00LvRjyDQttC40LLQvtGC0L3Ri9GFINCyINCc0LjQvdGB0LrQtSAtIHByb3pvby5ieQ!5e0!3m2!1sru!2sby!4v1660561391100!5m2!1sru!2sby" width="100%" height="450" allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
  </div>
}

export default ContactUsPage