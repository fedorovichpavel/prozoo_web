'use client'

import BreadCrumbs from '@/src/components/BreadCrumbs';
import Button from '@/src/components/Button';
import LinkButton from '@/src/components/LinkButton';
import { useGlobalContext } from '@/src/context';
import EmptyCompareIcon from '@/src/icons/EmptyCompare';
import TrashIcon from '@/src/icons/Trash';
import { category_products } from '@/src/mocks/data';
import { Rating } from '@mui/material';
import { useMemo } from 'react';

export default function ComparePage() {
  const { compares, addToCompares, removeFromCompares } = useGlobalContext();

  const productsAndQ = useMemo(() => {
    const products = []
    let total_price = 0
    for (let k in category_products) {
      for (let k2 in (category_products as any)[k]) {
        for (let ar of (category_products as any)[k][k2].items) {
          for (let pr of ar.products) {
            if (pr.id in compares) {
              const price = pr.prices.filter((e: any) => e.wage === compares[pr.id].wage)[0].amount
              products.push([pr, compares[pr.id].wage, price])
              total_price += price
            }
          }
        }
      }
    }
    return products
  }, [compares])

  const removeItem = (product_id: string, wage: string) => {
    removeFromCompares(product_id, wage)
  }

  const productsTable = useMemo(() => {
    if (productsAndQ.length === 0) {
      return null
    }
    const rows = [
      [<div className='p-3'></div>],
      [<p className='p-3 text-[18px] max-md:text-[16px] font-bold'>Общая информация</p>],
      [<p className='p-3 font-semibold'>Описание</p>],
      [<p className='p-3 text-[18px] max-md:text-[16px] font-bold'>Основные</p>],
      [<p className='p-3 font-semibold'>Вкус</p>],
      [<p className='p-3 font-semibold'>Возраст</p>],
      [<p className='p-3 font-semibold'>Категория товара</p>],
      [<p className='p-3 font-semibold'>Назначение</p>],
      [<p className='p-3 font-semibold'>Специальная диета</p>],
      [<p className='p-3 font-semibold'>Страна производитель</p>],
      [<p className='p-3 font-semibold'>Тип питомца</p>],
      [<p className='p-3 font-semibold'>Тип упаковки</p>],
      [<p className='p-3 text-[18px] max-md:text-[16px] font-bold'>Размер и вес</p>],
      [<div className='p-3'></div>],
      [<p className='p-3 font-semibold'>Размер</p>],
    ]

    for (let i in productsAndQ) {
      const [pr, wage, price] = productsAndQ[i]
      rows[0].push(<div className='relative border-l border-gray p-3'>
        <button onClick={() => removeItem(pr.id, wage)} className='stroke-[#7A9388] hover:stroke-danger absolute top-4 right-4 bg-secondary-light4 rounded-lg p-1'>
          <TrashIcon />
        </button>
        <img className='min-w-72' src={pr.images[0]} alt='image' />
        <p className='font-bold my-3'>{pr.brand}</p>
        <p className='my-3 text-gray-dark3'>{pr.title}</p>
        <p className='my-4 font-bold text-body-L max-md:text-body-M'>{price}BYN</p>
        <Rating value={0} readOnly />
      </div>)
      rows[1].push(<div ></div>)
      rows[2].push(<p className='border-l border-gray p-3'>{pr.short_description}</p>)
      rows[3].push(<div></div>)
      rows[4].push(<p className='border-l border-gray p-3'>{pr.taste}</p>)
      rows[5].push(<p className='border-l border-gray p-3'>{pr.age}</p>)
      rows[6].push(<p className='border-l border-gray p-3'>{pr.category}</p>)
      rows[7].push(<p className='border-l border-gray p-3'>{pr.purpose}</p>)
      rows[8].push(<p className='border-l border-gray p-3'>{pr.diet}</p>)
      rows[9].push(<p className='border-l border-gray p-3'>{pr.country}</p>)
      rows[10].push(<p className='border-l border-gray p-3'>{pr.animal_type}</p>)
      rows[11].push(<p className='border-l border-gray p-3'>{pr.package_type}</p>)
      rows[12].push(<div></div>)
      rows[13].push(<p className='border-l border-gray p-3'>{wage}</p>)
      rows[14].push(<p className='border-l border-gray p-3'>0.00см x 0.00см x 0.00см</p>)
    }
    return rows
  }, [productsAndQ])

  const handleClearAll = () => {
    for (let pr in compares) {
      removeItem(pr, compares[pr].wage)
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
        translatedRoutes={{ 'compare-product': "Сравнение товаров" }}
        capitalizeLinks
      />
      <div className='flex gap-3 justify-between pt-5'>
        <h2 className='text-header-L max-md:text-header-M text-black font-bold'>Сравнение товаров</h2>
        {Object.keys(compares).length > 0 &&
          <Button
            className='hover:underline !text-black'
            onClick={() => handleClearAll()}
          >
            <p className='text-black font-medium text-body-M max-md:text-body-S'>Очистить список сравнения</p>
          </Button>}
      </div>
      <div className='flex flex-col w-full pb-10 min-h-120 overflow-scroll'>
        {
          Object.keys(compares).length == 0 ?
            <div className='flex grow h-full flex-col items-center justify-center gap-5 pb-20'>
              <EmptyCompareIcon className='w-20 h-20' />
              <h3 className='text-header-M max-xsm:text-header-S font-semibold text-black'>Добавьте товары в сравнение</h3>
              <LinkButton view='secondary-green' href='/koshki'>Перейти в каталог</LinkButton>
            </div>
            :
            <table className='w-full mt-5 gap-10 overflow-x-auto text-black'>
              <tbody className='font-normal'>
                {productsTable && productsTable.map((e, i) => (
                  <tr className={`${[1, 3, 12].includes(i) && 'bg-secondary-light4'} max-md:text-body-S`} key={i}>
                    {e.map((k, x) => (<td className={`p-0 ${x === 0 && 'w-60'}`} key={x}>{k}</td>))}
                  </tr>))}
              </tbody>
            </table>
        }
      </div>
    </div>
  </>
  );
}
