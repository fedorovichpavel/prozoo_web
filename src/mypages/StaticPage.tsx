import { notFound } from 'next/navigation'
import React from 'react'
import BreadCrumbs, { TBreadCrumbTranslRoute } from '../components/BreadCrumbs'
import { static_pages, StaticPageT } from '../mocks/static_pages'

type Props = {
  page: string
}

const StaticPage = ({ page }: Props) => {

  const page_data: StaticPageT = page in static_pages ? (static_pages as any)[page] : null

  if (!page_data) {
    notFound()
  }

  const translatedRoutes: TBreadCrumbTranslRoute = {}
  translatedRoutes[page] = page_data.title

  return page === 'about-us' ? page_data.jsx :
    <>
      <div className='border-t border-gray'></div>
      <div className='container'>
        <BreadCrumbs
          homeElement={'Главная'}
          separator={<span className='font-normal'> / </span>}
          activeClasses='text-secondary'
          containerClasses='mt-5 flex gap-3 text-body-XS max-md:text-body-XXS'
          listClasses='hover:underline'
          linkClasses='font-normal'
          translatedRoutes={translatedRoutes}
          capitalizeLinks
        />
        {page_data.jsx}
      </div>
    </>

}

export default StaticPage