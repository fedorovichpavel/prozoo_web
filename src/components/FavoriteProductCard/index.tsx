'use client'

import { useGlobalContext } from '@/src/context';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import Button from '../Button';
import Link from 'next/link';
import Input from '../Input';
import CartIcon from '@/src/icons/Cart';
import TrashIcon from '@/src/icons/Trash';

interface FavoriteProductCardProps {
  id: string;
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

export default function FavoriteProductCard({
  id,
  title,
  prices,
  image,
  hasBorderRight = true,
  ...rest
}: FavoriteProductCardProps) {
  const [price, setPrice] = useState(prices[0])
  const [quantity, setQuantity] = useState(1)
  const [isHovered, setHovered] = useState(false)
  const { addToCart, favorites, addToFavorites, removeFromFavorites } = useGlobalContext()

  const handleChange = (value: string) => {
    const newPrice = prices.filter(e => e.wage === value)[0]
    if (newPrice) {
      setPrice(prices.filter(e => e.wage === value)[0])
    }
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


  return (
    <div className='relative'>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`rounded-sm p-4 hover:z-30 bg-white hover:shadow-round hover:border-transparent transition_easy ${isHovered && 'absolute'} ${hasBorderRight && 'border-r border-gray'}`}
        {...rest}
      >
        <button className={`absolute top-2 right-2 stroke-black hover:stroke-danger`} onClick={() => addRemoveFavorites(id, price.wage)}><TrashIcon /></button>
        <Link href="#">
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
          <Button view='primary' onClick={() => addToCart(id, price.wage, quantity, false)} className='' icon={<CartIcon />}>
            <p className='text-white uppercase text-body-XS font-semibold'>В корзину</p>
          </Button>
        </div>
      </div>
    </div>
  );
}
