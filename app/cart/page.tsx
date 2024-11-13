'use client'

import BreadCrumbs from '@/src/components/BreadCrumbs';
import Button from '@/src/components/Button';
import Input from '@/src/components/Input';
import LinkButton from '@/src/components/LinkButton';
import { useGlobalContext } from '@/src/context';
import BigCartIcon from '@/src/icons/BigCart';
import TrashIcon from '@/src/icons/Trash';
import { category_products, ProductItem } from '@/src/mocks/data';
import { useMemo, useState } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export default function CartPage() {
  const { cart, addToCart, removeFromCart } = useGlobalContext();
  const productsAndQ = useMemo(() => {
    const products = []
    let total_price = 0
    for (let k in category_products) {
      for (let k2 in (category_products as any)[k]) {
        for (let ar of (category_products as any)[k][k2].items) {
          for (let pr of ar.products) {
            if (pr.id in cart) {
              const price = pr.prices.filter((e: any) => e.wage === cart[pr.id].wage)[0]
              products.push([pr, cart[pr.id].wage, cart[pr.id].quantity, price, cart[pr.id].is_disc])
              if (cart[pr.id].is_disc) {
                total_price += price.disc_amount * cart[pr.id].quantity
              } else {
                total_price += price.amount * cart[pr.id].quantity
              }
            }
          }
        }
      }
    }
    return [products, total_price]
  }, [cart])

  const removeItem = (product_id: string, wage: string, is_disc: boolean) => {
    removeFromCart(product_id, wage, is_disc)
  }

  const quantityHandler = (type: 'up' | 'down', product_id: string, wage: string, quantity: number, is_disc: boolean) => {
    removeFromCart(product_id, wage, is_disc)

    if (type === 'up') {
      addToCart(product_id, wage, quantity + 1, is_disc)
    } else {
      addToCart(product_id, wage, quantity - 1, is_disc)
    }
  }

  return (<>
    <div className='border-t border-gray'></div>
    <div className='container'>
      <BreadCrumbs
        homeElement={'Главная'}
        separator={<span className='font-normal'> / </span>}
        activeClasses='text-secondary'
        containerClasses='mt-5 flex gap-3 text-body-XS max-md:text-body-XXS'
        listClasses='hover:underline'
        linkClasses='font-normal'
        translatedRoutes={{ cart: "Корзина покупок" }}
        capitalizeLinks
      />
      <div className='flex flex-col w-full pt-5 pb-10 min-h-120'>
        <h2 className='text-header-L text-black font-bold'>Корзина</h2>
        {
          Object.keys(cart).length == 0 ?
            <div className='flex grow h-full flex-col items-center justify-center gap-5 pb-20'>
              <BigCartIcon />
              <h3 className='text-header-M max-xsm:text-header-S font-semibold text-black'>Ваша корзина пуста</h3>
              <LinkButton view='secondary-green' href='/'>Перейти на главную</LinkButton>
            </div>
            :
            <div className='grid grid-cols-4 w-full mt-5 gap-10 max-lg:flex max-lg:flex-col'>
              <div className='col-span-3 text-body-M text-black font-bold '>
                <div className='grid grid-cols-12 border-b border-gray py-3 max-lg:hidden'>
                  <p className='col-span-7'>Наименование товара</p>
                  <p className='col-span-2'>Кол-во</p>
                  <p className='col-span-3'>Цена</p>
                </div>
                {(productsAndQ[0] as any).map(([product, wage, quantity, price, is_disc]: any, i: number) => (
                  <div key={i} className='grid grid-cols-12 py-4 border-b border-gray'>
                    <div className='col-span-7 flex gap-8 max-lg:col-span-12'>
                      <img className='w-45 max-xsm:w-full max-xsm:h-fit' src={product.images[0]} alt='product' />
                      <div className='flex flex-col'>
                        <p className='max-xsm:text-body-S max-xsm:leading-4'>{product.title}</p>
                        <p className='text-gray-dark2 font-normal text-body-XS'>Артикул: {product.id}</p>
                        <p className='hidden max-lg:block font-semibold mt-2'>{is_disc ? price.disc_amount : price.amount}BYN</p>
                        <div className='hidden max-lg:flex justify-between mt-5'>
                          <Input
                            inputClassName='w-full px-0 outline-none rounded-lg font-normal'
                            className='w-20 px-4 py-2 border border-gray col-span-2 self-start shadow-none'
                            value={quantity}
                            onChange={(ev) => null}
                            type='number'
                            min={1}
                            max={999}
                            step={1}
                            placeholder='Количество'
                            onUpArrowClick={() => quantityHandler('up', product.id, wage, quantity, is_disc)}
                            onDownArrowClick={() => quantityHandler('down', product.id, wage, quantity, is_disc)}
                          />
                          <div className='col-span-3 flex justify-between items-start'>
                            <p className='font-semibold hidden lg:block'>{is_disc ? price.disc_amount : price.amount}BYN</p>
                            <button onClick={() => removeItem(product.id, wage, is_disc)} className='stroke-[#7A9388] hover:stroke-danger'>
                              <TrashIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <Input
                      inputClassName='w-full px-0 outline-none rounded-lg font-normal'
                      className='w-20 px-4 py-2 border border-gray col-span-2 self-start shadow-none max-lg:hidden'
                      value={quantity}
                      onChange={(ev) => null}
                      type='number'
                      min={1}
                      max={999}
                      step={1}
                      placeholder='Количество'
                      onUpArrowClick={() => quantityHandler('up', product.id, wage, quantity, is_disc)}
                      onDownArrowClick={() => quantityHandler('down', product.id, wage, quantity, is_disc)}
                    />
                    <div className='col-span-3 flex justify-between items-start max-lg:hidden'>
                      <p className='font-semibold hidden lg:block'>{is_disc ? price.disc_amount : price.amount}BYN</p>
                      <button onClick={() => removeItem(product.id, wage, is_disc)} className='stroke-[#7A9388] hover:stroke-danger'>
                        <TrashIcon />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className='col-span-1 text-body-M max-xsm:text-body-S text-black font-bold'>
                <p className='border-b border-gray py-3 max-xsm:text-body-XS'>Предчек</p>
                <div className='border-b border-gray py-4 flex justify-between max-xsm:text-body-XS'>
                  <p>Сумма заказа</p>
                  <p>{(productsAndQ[1] as number).toFixed(2)}BYN</p>
                </div>
                <div className='border-b border-gray py-4 flex justify-between max-xsm:text-body-XS'>
                  <p>Скидка на первый заказ (3%)</p>
                  <p>{((productsAndQ[1] as number) * 0.03).toFixed(2)}BYN</p>
                </div>
                <div className='border-b text-secondary text-body-L border-gray py-4 flex justify-between max-xsm:text-body-XS'>
                  <p>Итого</p>
                  <p>{((productsAndQ[1] as number) - Number(((productsAndQ[1] as number) * 0.03).toFixed(2))).toFixed(2)}BYN</p>
                </div>
                <div className='flex flex-col gap-5 mt-10'>
                  <Button view='primary' className='text-white !py-6'>
                    <p className='w-full text-body-M max-xsm:text-body-S'>Оформить заказ</p>
                  </Button>
                  <LinkButton className='!py-6' href='/' view='secondary-green'>
                    <p className='w-full text-body-M max-xsm:text-body-S'>Продолжить покупки</p>
                  </LinkButton>
                </div>
              </div>
            </div>
        }
      </div>
    </div>
  </>
  );
}
