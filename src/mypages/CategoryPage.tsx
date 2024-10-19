import { notFound } from 'next/navigation'
import React from 'react'
import { data, DataCategory } from '../mocks/data'
import SliderLink from '../components/SliderLink'
import slider_data from '@/src/mocks/categories_slider_products.json'
import Link from 'next/link'
import CustomSlider from '../components/Slider'
import BreadCrumbs, { TBreadCrumbTranslRoute } from '../components/BreadCrumbs'

type Props = {
  category: string
}

const CategoryPage = ({ category }: Props) => {

  const category_data: DataCategory = category in data ? (data as any)[category] : null

  if (!category_data) {
    notFound()
  }

  const sliderItems = slider_data.map(item => <div><SliderLink href={item.href}>
    <img src={item.image} alt="Slider Item" />
  </SliderLink></div>)

  const translatedRoutes: TBreadCrumbTranslRoute = {}
  translatedRoutes[category] = category_data.breadcrumb

  return (
    <>
      <div className='border-t border-gray'></div>
      <div className='container'>
        <BreadCrumbs
          homeElement={'Главная'}
          separator={<span className='font-normal'> / </span>}
          activeClasses='text-green'
          containerClasses='mt-5 flex gap-3 text-body-XS max-md:text-body-XXS'
          listClasses='hover:underline'
          linkClasses='font-normal'
          translatedRoutes={translatedRoutes}
          capitalizeLinks
        />
        <div className='grid grid-cols-4 w-full pt-5 pb-10'>
          <div className='col-span-1 mr-5 max-lg:hidden'>
            <h2 className='text-header-XL text-dark font-semibold'>{category_data.title}</h2>
            <h3 className='mt-5 text-body-L font-medium'>Каталог товаров</h3>
            <div className='flex flex-col gap-1 mt-3'>
              {category_data.categories.map((item, i) =>
                <Link className='text-body-XXS text-dark hover:text-green font-medium transition_easy' key={i} href={`/${category}/${item.href}`}>{item.title}</Link>
              )}
            </div>
          </div>
          <div className='ml-5 col-span-3 max-lg:col-span-4'>
            <h2 className='text-header-XL text-dark font-semibold hidden max-lg:block mb-5'>{category_data.title}</h2>
            <div className='block w-full max-w-[100vw]'>
              {sliderItems && <CustomSlider className='block p-1 shadow-round max-lg:mb-0' items={sliderItems} settings={
                {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  fade: true,
                  dots: false,
                  arrows: false,
                  autoplay: true,
                }
              } />}
            </div>
            <div className='grid grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-2'>
              {category_data.categories.map((item, i) => (
                <Link key={i} className='text-center font-medium text-body-S' href={`/${category}/${item.href}`}>
                  <div className='flex flex-col items-center text-dark hover:text-green transition_easy'>
                    <img src={item.image} alt={item.title} />
                    <p>{item.title}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CategoryPage