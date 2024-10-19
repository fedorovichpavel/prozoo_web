'use client'

import BreadCrumbs from '@/src/components/BreadCrumbs';
import LinkButton from '@/src/components/LinkButton';
import FavoriteProductCard from '@/src/components/FavoriteProductCard';
import { useGlobalContext } from '@/src/context';
import EmptyHeartIcon from '@/src/icons/EmptyHeart';
import { category_products } from '@/src/mocks/data';
import { useMemo } from 'react';

export default function WishlistPage() {
  const { favorites } = useGlobalContext();

  const productsAndQ = useMemo(() => {
    const products = []
    let total_price = 0
    for (let k in category_products) {
      for (let k2 in (category_products as any)[k]) {
        for (let ar of (category_products as any)[k][k2].items) {
          for (let pr of ar.products) {
            if (pr.id in favorites) {
              const price = pr.prices.filter((e: any) => e.wage === favorites[pr.id].wage)[0].amount
              products.push([pr, favorites[pr.id].wage, price])
              total_price += price
            }
          }
        }
      }
    }
    return products
  }, [favorites])

  return (<>
    <div className='border-t border-gray'></div>
    <div className='container'>
      <BreadCrumbs
        homeElement={'Главная'}
        separator={<span className='font-normal'> / </span>}
        activeClasses='text-green'
        containerClasses='mt-5 flex gap-3 text-body-XS max-md:text-body-XXS'
        listClasses='hover:underline'
        linkClasses='font-normal'
        translatedRoutes={{ wishlist: "Избранное" }}
        capitalizeLinks
      />
      <div className='flex flex-col w-full pt-5 pb-10 min-h-120'>
        <h2 className='text-header-L text-black font-bold'>Избранные товары</h2>
        {
          Object.keys(favorites).length == 0 ?
            <div className='flex grow h-full flex-col items-center justify-center gap-5 pb-20'>
              <EmptyHeartIcon />
              <h3 className='text-header-M max-xsm:text-header-S font-semibold text-black'>У вас еще нет избранных товаров</h3>
              <LinkButton view='secondary-green' href='/koshki'>Перейти в каталог</LinkButton>
            </div>
            :
            <div className='grid grid-cols-5 w-full mt-5 mb-20 gap-10'>
              {productsAndQ.map(([el, wage, price], i: number) => (
                <FavoriteProductCard
                  key={i}
                  id={el.id}
                  title={`${el.title}, ${el.taste}`}
                  image={el.images[0]}
                  prices={el.prices}
                />
              ))}
            </div>
        }
      </div>
    </div>
  </>
  );
}
