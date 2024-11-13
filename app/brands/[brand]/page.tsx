import BreadCrumbs, { TBreadCrumbTranslRoute } from '@/src/components/BreadCrumbs'
import { category_products, SubCategoryItem, data, DataCategory, ProductItem, CategoryItem, brands, brandLinks } from '@/src/mocks/data'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import slider_data from '@/src/mocks/categories_slider_products.json'
import SliderLink from '@/src/components/SliderLink'
import CustomSlider from '@/src/components/Slider'
import ProductCard from '@/src/components/ProductCard'
import CustomAccordion from '@/src/components/CustomAccordion'
import SortIcon from '@/src/icons/Sort'
import Filters from '@/src/components/Filters'
import { MenuItem, Select } from '@mui/material'
import FiltersMobile from '@/src/components/FiltersMobile'

export default function BrandPage({ params }: { params: { brand: string } }) {
  const { brand } = params

  const slug = 'koshki'
  const product_category = 'korm'

  let _product = null
  let _brand = null

  if (brand in brandLinks) {
    _product = (category_products as any)["koshki"]["korm"]
    _brand = (brandLinks as any)[brand]
  } else {
    notFound()
  }

  const sliderItems = slider_data.map(item => <div><SliderLink href={item.href}>
    <img src={item.image} alt="Slider Item" />
  </SliderLink></div>)

  const translatedRoutes: TBreadCrumbTranslRoute = {}
  translatedRoutes['brand'] = 'Производитель'
  translatedRoutes[brand] = _brand

  const sliderHitItems = _product.items.map((item: SubCategoryItem, i: number) => (
    item.products.slice(0, 6).map((el: ProductItem, i: number) => (
      <div key={i} className='mx-2'>
        <ProductCard
          href={`/${slug}/${product_category}/${item.href}/${el.id}`}
          hasBorderRight={false}
          key={i}
          id={el.id}
          title={`${el.title}, ${el.taste}`}
          image={el.images[0]}
          prices={el.prices}
        />
      </div>

    ))
  )).flat()

  return <>
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
      <div className='grid grid-cols-4 max-lg:flex max-lg:flex-col w-full pt-5 pb-10'>
        <div className='col-span-1 mr-5 max-lg:px-5'>
          <h2 className='text-header-XL text-dark font-medium max-lg:mb-5'>{_brand}</h2>
          <Filters className="mt-5 max-lg:hidden" brands={brands} withBrands={false} />
        </div>
        <div className='ml-5 col-span-3'>
          <div className='flex gap-3 items-center mb-5'>
            <div className='hidden md:flex gap-5 items-center mb-5'>
              <p className='text-body-XS'>Сортировать по:</p>
              <Link className="text-body-XS text-dark hover:text-secondary font-medium transition_easy" href={`#`}>Популярные</Link>
              <Link className="text-body-XS text-dark hover:text-secondary font-medium transition_easy" href={`#`}>Новинки</Link>
              <Link className="text-body-XS text-dark hover:text-secondary font-medium transition_easy" href={`#`}>Акции</Link>
              <Link className="text-body-XS text-dark hover:text-secondary font-medium transition_easy flex items-center" href={`#`}>
                Цена <SortIcon />
              </Link>
            </div>
            <div className='md:hidden block'>
              <Select
                color='secondary'
                size='small'
                classes={{
                  select: "!font-semibold !py-1"
                }}
                value={1}
              >
                <MenuItem key={1} value={1}>Популярные</MenuItem>
                <MenuItem key={2} value={2}>Новинки</MenuItem>
                <MenuItem key={3} value={3}>Акции</MenuItem>
                <MenuItem key={4} value={4}>Цена <SortIcon /></MenuItem>
              </Select>
            </div>
            <div className='mb-5 max-md:mb-0'>
              <FiltersMobile brands={brands} withBrands={false} />
            </div>
          </div>
          <div className='block w-full max-w-[100vw]'>
            {sliderItems && <CustomSlider className='block p-2 shadow-round' items={sliderItems} settings={
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
          <div className='grid grid-cols-4 max-xl:grid-cols-3 max-sm:grid-cols-2 max-xsm:grid-cols-1 gap-y-4'>
            {_product.items.map((item: SubCategoryItem, i: number) => (
              item.products.map((el: ProductItem, i: number) => (
                <ProductCard
                  href={`/${slug}/${product_category}/${item.href}/${el.id}`}
                  key={i}
                  id={el.id}
                  title={`${el.title}, ${el.taste}`}
                  image={el.images[0]}
                  prices={el.prices}
                />
              ))
            ))}
          </div>
        </div>
      </div>
      <div className='my-10'>
        <h3 className='text-header-L text-black font-bold'>Хиты продаж</h3>
        <div className='block w-full max-w-[100vw]'>
          <CustomSlider
            className='block max-lg:max-h-[680px] max-lg:overflow-hidden max-md:!mb-5'
            isExpanded
            items={sliderHitItems}
            arrowView='outside'
            settings={
              {
                className: 'py-5',
                slidesToShow: 5,
                slidesToScroll: 1,
                dots: false,
                arrows: true,
                autoplay: false,
                infinite: false,
                responsive: [
                  {
                    breakpoint: 992,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 820,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 425,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                    }
                  },
                ]
              }
            }
          />
        </div>
      </div>
    </div>
  </>
}