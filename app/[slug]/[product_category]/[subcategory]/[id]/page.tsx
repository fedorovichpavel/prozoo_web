import BreadCrumbs, { TBreadCrumbTranslRoute } from '@/src/components/BreadCrumbs'
import { category_products, SubCategoryItem, data, DataCategory, ProductItem, CategoryItem } from '@/src/mocks/data'
import { notFound } from 'next/navigation'
import FullProductCard from '@/src/components/FullProductCard'

export default function SlugPage({ params }: { params: { slug: string, product_category: string, subcategory: string, id: string } }) {
  const { slug, product_category, subcategory, id } = params

  let _products = null
  let _subcategory: SubCategoryItem | null = null
  let _product: ProductItem | null = null

  if (slug in category_products && product_category in (category_products as any)[slug]) {
    _products = (category_products as any)[slug][product_category]
    _subcategory = (_products as CategoryItem).items.filter(e => e.href === subcategory)[0]
    _product = (_subcategory as SubCategoryItem).products.filter(e => e.id === id)[0]
    if (!_product) {
      notFound()
    }
  } else {
    notFound()
  }

  const category_data: DataCategory = slug in data ? (data as any)[slug] : null

  const translatedRoutes: TBreadCrumbTranslRoute = {}
  translatedRoutes[product_category] = _products.breadcrumb
  translatedRoutes[subcategory] = _subcategory.title
  translatedRoutes[slug] = category_data.breadcrumb
  translatedRoutes[id] = _product.title

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
      <div className='pt-5 pb-10'>
        <FullProductCard
          product={_product}
        />
      </div>
    </div>
  </>
}