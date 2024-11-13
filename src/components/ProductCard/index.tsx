'use client'

import { useGlobalContext } from '@/src/context';
import { Dialog, Divider, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import Button from '../Button';
import Link from 'next/link';
import Input from '../Input';
import CartIcon from '@/src/icons/Cart';
import HeartIcon from '@/src/icons/Heart';
import ArrowIcon from '@/src/icons/Arrow';
import LogoIcon from '@/src/icons/Logo';
import LinkButton from '../LinkButton';

interface ProductCardProps {
  id: string;
  href: string;
  title: string;
  image: string;
  key: string | number;
  prices: {
    amount: number;
    wage: string;
    disc_percent: number;
    disc_amount: number;
  }[]
  hasBorderRight?: boolean
}

export default function ProductCard({
  id,
  href,
  title,
  prices,
  image,
  hasBorderRight = true,
  ...rest
}: ProductCardProps) {
  const [price, setPrice] = useState(prices[0])
  const [quantity, setQuantity] = useState(1)
  const [isHovered, setHovered] = useState(false)
  const [dialogOpened, setDialogOpened] = useState<string | null>(null)
  const { addToCart, compares, addToCompares, removeFromCompares, favorites, addToFavorites, removeFromFavorites } = useGlobalContext()

  const handleChange = (value: string) => {
    const newPrice = prices.filter(e => e.wage === value)[0]
    if (newPrice) {
      setPrice(prices.filter(e => e.wage === value)[0])
    }
  }

  const handleAddToCart = (product_id: string, wage: string, quantity: number, is_disc: boolean, title: string) => {
    addToCart(product_id, wage, quantity, is_disc)
    setDialogOpened(title)
  }

  const quantityHandler = (type: 'up' | 'down') => {
    if (type === 'up') {
      setQuantity(prev => prev + 1)
    } else {
      setQuantity(prev => prev <= 1 ? 1 : prev - 1)
    }
  }

  const addRemoveFavorites = (product_id: string, wage: string) => {
    if (product_id in favorites) {
      removeFromFavorites(product_id, wage)
    } else {
      addToFavorites(product_id, wage)
    }
  }

  const addRemoveCompares = (product_id: string, wage: string) => {
    if (product_id in compares) {
      removeFromCompares(product_id, wage)
    } else {
      addToCompares(product_id, wage)
    }
  }


  return (
    <div className='relative'>
      <Dialog classes={{ paper: 'max-xsm:!mx-0' }} onClose={() => setDialogOpened(null)} open={!!dialogOpened}>
        <div className='p-10 max-w-115 flex flex-col items-center gap-2 max-xsm:p-5'>
          <button className='absolute top-4 right-4' onClick={() => setDialogOpened(null)}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.75 6.25L6.25 23.75M6.25002 6.25L23.75 23.75" stroke="#d8e4df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <LogoIcon />
          <p className='mt-5'>Товар добавлен в корзину</p>
          <p className='text-center font-bold border-t border-gray pt-5 mt-3 mb-5'>{dialogOpened}</p>
          <Button view='secondary-green' onClick={() => setDialogOpened(null)} className='w-full py-5'>
            <p className='text-body-M font-bold text-center w-full'>Продолжить покупки</p>
          </Button>
          <LinkButton view='primary' onClick={() => setDialogOpened(null)} className='w-full py-5' href='/cart'>
            <p className='text-white text-body-M font-bold text-center w-full'>Перейти к оформлению</p>
          </LinkButton>
        </div>
      </Dialog>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`rounded-sm p-4 hover:z-30 bg-white hover:shadow-round hover:border-transparent transition_easy ${isHovered && 'absolute'} ${hasBorderRight && 'border-r border-gray'}`}
        {...rest}
      >
        <button className={`${id in favorites ? 'fill-danger stroke-danger' : 'fill-none'} absolute top-2 right-2 stroke-black hover:stroke-danger`} onClick={() => addRemoveFavorites(id, price.wage)}><HeartIcon /></button>
        <Link href={href}>
          <img src={image} alt={title} />
          <h3 className='text-black'>{title}</h3>
        </Link>
        <ToggleButtonGroup
          className='my-4'
          color="success"
          size='small'
          value={price.wage}
          exclusive
          onChange={(ev, value) => handleChange(value)}
          aria-label="Platform"
        >
          {prices.map((price_, i) => (
            <ToggleButton key={price_.wage} value={price_.wage}>
              {price_.wage}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
        <p className='text-body-L text-black font-bold'>{price.amount}BYN</p>
        <div className='mt-2 flex gap-3 text-gray-dark2 text-body-XXXS font-medium'>
          <Link className='underline' href="#"> Отзывов (0)</Link>
          <button className={`${id in compares ? 'text-secondary' : ''} underline`} onClick={() => addRemoveCompares(id, price.wage)}>{id in compares ? "В сравнении" : "В сравнение"}</button>
        </div>
        <div className={`lg:hidden my-5 flex gap-3 flex-col justify-between`}>
          <div className='flex flex-row-reverse gap-1 justify-between'>
            <button onClick={() => quantityHandler('up')} className='border border-gray relative p-3 rounded-lg m-0 stroke-black'>
              <ArrowIcon strokeWidth='2' view='up' />
            </button>
            <p>{quantity}</p>
            <button onClick={() => quantityHandler('down')} className='border border-gray relative p-3 rounded-lg m-0 stroke-black'>
              <ArrowIcon strokeWidth='2' />
            </button>
          </div>
          <Button view='primary' onClick={() => handleAddToCart(id, price.wage, quantity, false, title)} className='justify-center' icon={<CartIcon />}>
            <p className='text-white text-body-XS font-bold'>В корзину</p>
          </Button>
        </div>
        <div className={`${!isHovered && 'hidden'} my-5 flex justify-between`}>
          <Input
            inputClassName='w-full px-0 outline-none rounded-lg'
            className='w-16 px-4 border border-gray'
            value={quantity}
            onChange={(e) => null}
            type='number'
            min={1}
            max={999}
            step={1}
            placeholder='Количество'
            onUpArrowClick={() => quantityHandler('up')}
            onDownArrowClick={() => quantityHandler('down')}
          />
          <Button view='primary' onClick={() => handleAddToCart(id, price.wage, quantity, false, title)} className='' icon={<CartIcon />}>
            <p className='text-white uppercase text-body-XS font-semibold'>В корзину</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
