import BreadCrumbs from '@/src/components/BreadCrumbs'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LinkButton from '@/src/components/LinkButton'
import { publications, blog_categories } from '@/src/mocks/publications'
import ViewIcon from '@/src/icons/View'
import DirectionIcon from '@/src/icons/Direction'
import CustomSlider from '@/src/components/Slider'

export default function BlogPage({ params }: { params: { category: string, page: string } }) {

  const { category, page } = params

  const article = publications.filter(e => e.href === page)[0]

  if (!Object.keys(blog_categories).includes(category) || !article) {
    notFound()
  }


  return <>
    <div className='border-t border-gray'></div>
    <div className='container'>
      <BreadCrumbs
        homeElement={'Главная'}
        separator={<span className='font-normal'> / </span>}
        activeClasses='text-green'
        containerClasses='mt-5 flex gap-3 text-body-XS max-md:text-body-XXS'
        listClasses='hover:underline'
        linkClasses='font-normal'
        translatedRoutes={{ blog: "Статьи", ...blog_categories, [article.href]: article.title }}
        capitalizeLinks
      />
      <div className='flex flex-col w-full pt-5 pb-10 min-h-120'>
        <div className='flex justify-between'>
          <h2 className='text-header-XL text-black font-bold'>{article.title}</h2>
        </div>
        <div className='max-w-235 px-3 flex flex-col gap-3 col-span-1 my-5'>
          <img className='rounded-sm object-cover' src={article.image} alt="image" />
          <div className='flex gap-1 justify-between text-gray-dark2 text-body-M font-semibold'>
            <p>{article.date}</p>
            <p className='flex gap-2 items-center'><ViewIcon />{article.views}</p>
          </div>
          {article.full}
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-2 justify-between'>
            <h3 className='text-header-L text-black font-bold'>Другие статьи</h3>
            <LinkButton className='!px-3 mr-30' view='secondary-green' href={`/blog/${article.category}`}>Смотреть все статьи</LinkButton>
          </div>
          <div>
            <CustomSlider className='!mb-0 mt-4' items={publications.map((e, i) => {
              if (e.href === article.href) {
                return null
              }
              return <div key={i} className='px-3 flex flex-col gap-3 col-span-1'>
                <Link className='flex flex-col' href={`/blog/${e.category}/${e.href}`}>
                  <img className='rounded-sm h-52 object-cover' src={e.image} alt="image" />
                </Link>
                <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                  <p>{e.date}</p>
                  <p className='flex gap-2 items-center'><ViewIcon />{e.views}</p>
                </div>
                <Link href={`/blog/${e.category}/${e.href}`}><p className='text-body-MD font-bold'>{e.title}</p></Link>
                <p className='text-body-M font-normal'>{e.subtitle}</p>
                <Link className='text-green font-bold flex gap-2 items-center hover:underline' href={`/blog/${e.category}/${e.href}`}>Читать больше <DirectionIcon /></Link>
              </div>
            }).filter(e => e)} arrowView='outside' settings={
              {
                slidesToShow: 4,
                slidesToScroll: 1,
                dots: false,
                autoplay: false,
                responsive: [
                  {
                    breakpoint: 1024,
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
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
              }
            } />
          </div>
        </div>
      </div>
    </div>
  </>
}