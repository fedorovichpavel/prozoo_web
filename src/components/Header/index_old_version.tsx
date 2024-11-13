'use client'

import Link from 'next/link'
import React, { useState } from 'react'
import Button from '../Button'
import LinkButton from '../LinkButton'
import PhoneIcon from '@/src/icons/Phone'
import ProfileIcon from '@/src/icons/Profile'
import LogoIcon from '@/src/icons/Logo'
import CartIcon from '@/src/icons/Cart'
import SearchInput from '../SearchInput'
import Navigation from '../Navigation'
import { nav } from '@/src/mocks/navigation'
import mobile_navigation_data from '@/src/mocks/mobile_navigation.json'
import { useGlobalContext } from '@/src/context'
import CompareIcon from '@/src/icons/Compare'
import HeartIcon from '@/src/icons/Heart'
import { Drawer } from '@mui/material'
import MobileNavigation from '../MobileNavigation'
import TimeIcon from '@/src/icons/Time'
import SearchIcon from '@/src/icons/Search'

const Header = () => {
  const { cart, compares, favorites } = useGlobalContext()
  const [open, setOpen] = useState(false)

  const toggleDrawer = () => {
    setOpen(prev => !prev)
  }

  return (
    <header className=''>
      <div className='bg-gradient-nav relative min-h-30 lg:min-h-full lg:h-13 rounded-br rounded-bl'>
        <div className='container justify-between relative h-full !pt-0 hidden lg:flex'>
          <div className='flex justify-between items-center gap-7 text-white text-body-XS lg:max-xxl:mt-4' id='#top_nav'>
            <Link className='hover:opacity-80' href="/bonusy-i-skidki">Бонусы и скидки</Link>
            <Link className='hover:opacity-80' href="/blog" >Статьи</Link>
            <Link className='hover:opacity-80' href="/about-us" >О магазине</Link>
            <Link className='hover:opacity-80' href="/optovye-pokupki" >Опт</Link>
            <Link className='hover:opacity-80' href="/dostavka-i-oplata" >Доставка и оплата</Link>
          </div>
          <div className='bg-white w-72 absolute top-0 left-[50%] -translate-x-1/2 text-center py-2 rounded-br-mdm rounded-bl-mdm lg:max-xxl:w-50 lg:max-xxl:py-1'>
            <Link href="/bonusy-i-skidki">
              <p className='text-secondary-dark2 text-body-S'>На первый заказ -3%</p>
            </Link>
          </div>
          <div className='flex py-2 items-center gap-5'>
            <LinkButton
              className='lg:max-xl:text-body-XS'
              href="tel:+375296505151"
              view='secondary'
              icon={<PhoneIcon />}
            >
              +375(29)650-51-31
            </LinkButton>
            <span className='h-full w-[1px] bg-primary '></span>
            <Button
              className='lg:max-xl:text-body-XS'
              icon={<ProfileIcon />}
            >
              Войти
            </Button>
          </div>
        </div>
        <div className='lg:hidden flex items-start min-h-25'>
          <button className='p-4' onClick={() => toggleDrawer()}>
            <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.33333 5.41699H21.6667M4.33333 13.0003H21.6667M4.33333 20.5837H21.6667" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <Drawer classes={{ paper: 'max-w-170 w-full relative' }} open={open} onClose={() => toggleDrawer()}>
            <button className='absolute top-4 right-4' onClick={() => toggleDrawer()}>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.75 6.25L6.25 23.75M6.25002 6.25L23.75 23.75" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className='w-full flex flex-col items-center mb-2'>
              <LogoIcon className='w-32' />
              <Button
                view='primary'
                className='lg:max-xl:text-body-XS'
                icon={<ProfileIcon color='#fff' />}
              >
                <p className='text-white'>Войти</p>
              </Button>
            </div>
            <MobileNavigation setOpen={toggleDrawer} items={mobile_navigation_data} />
            <div className='flex gap-3 items-center my-5 mx-4'>
              <TimeIcon />
              <div className='text-secondary'>
                <p className='leading-4 text-[11px]'>Режим работы магазина:</p>
                <p className='leading-4 text-body-XS font-bold'>Пн-Пт 09:00-18:00</p>
                <p className='leading-4 text-body-XS font-bold'>Сб-Вс - выходной</p>
              </div>
            </div>
            <div className='flex items-start mx-4 mb-5'>
              <LinkButton
                href="tel:+375296505151"
                view='secondary-green'
                icon={<PhoneIcon color='#004E42' />}
              >
                +375(29)650-51-31
              </LinkButton>
            </div>
          </Drawer>
          <div className='bg-white w-50 absolute top-0 left-[50%] -translate-x-1/2 text-center py-1 rounded-br-mdm rounded-bl-mdm'>
            <Link href="/bonusy-i-skidki">
              <p className='text-secondary-dark2 text-body-XS'>На первый заказ -3%</p>
            </Link>
          </div>
          <div className='absolute top-6 left-[50%] -translate-x-1/2'>
            <Link href="/">
              <LogoIcon color='white' className='w-32' />
            </Link>
          </div>
          <div className='flex flex-col gap-3 absolute right-8 top-3'>
            <Link className='bg-white rounded-lg p-[6px] flex items-center w-8 h-8' href='/cart'>
              <CartIcon stroke="#343a40" />
            </Link>
            <Link className='fill-none stroke-dark bg-white rounded-lg p-[6px] flex items-center w-8 h-8' href='/wishlist'>
              <HeartIcon />
            </Link>
          </div>
        </div>
      </div>
      <div className='container hidden lg:block'>
        <div className='relative flex items-center justify-between py-10'>
          <div>
            <SearchInput
              className='ml-5'
              placeholder='Поиск по магазину...'
            />
          </div>
          <div className='absolute top-4 left-[50%] -translate-x-1/2'>
            <Link href="/">
              <LogoIcon />
            </Link>
          </div>
          <div className='flex items-center gap-6'>
            <Link
              href='/compare-product'
              className='relative flex flex-col items-center gap-3'
            >
              <span className='absolute flex items-center justify-center text-body-XXXS rounded-lg w-4 h-4 bg-primary text-white -top-2 right-5'>{Object.keys(compares).length}</span>
              <CompareIcon />
              <p className='text-body-XS'>Сравнения</p>
            </Link>
            <Link
              href='/wishlist'
              className='relative flex flex-col items-center gap-3 stroke-black'
            >
              <span className='absolute flex items-center justify-center text-body-XXXS rounded-lg w-4 h-4 bg-primary text-white -top-2 right-5'>{Object.keys(favorites).length}</span>
              <HeartIcon className='h-5 fill-none' />
              <p className='text-body-XS'>Избранное</p>
            </Link>
            <LinkButton
              href='/cart'
              view='primary'
              className='py-6'
            >
              <>
                <span className='border-r border-secondary-light3 pr-4'>
                  <CartIcon />
                </span>
                <p className='text-white ml-3 max-xl:hidden'>Корзина</p>
                <p className='text-white max-xl:ml-3'>&nbsp;({Object.keys(cart).length})</p>
              </>
            </LinkButton>
          </div>
        </div>
      </div>
      <div className='container lg:hidden block !z-10 !my-5'>
        <div className='flex justify-center py-3'>
          <SearchInput btnclassName='!w-7 !h-7' className='self-end h-9 !shadow-none border border-gray' inputclassName='rounded-lg h-8 py-1 px-2 font-normal text-body-S outline-none' placeholder='Поиск по магазину...' />
        </div>
      </div>
      <div className='container hidden lg:block !z-10 !mb-3'>
        <Navigation
          items={nav}
        />
      </div>
    </header>
  )
}

export default Header