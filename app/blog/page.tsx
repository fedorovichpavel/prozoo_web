import BreadCrumbs from '@/src/components/BreadCrumbs'
import Link from 'next/link'
import LinkButton from '@/src/components/LinkButton'
import { blog_categories, publications } from '@/src/mocks/publications'
import ViewIcon from '@/src/icons/View'
import DirectionIcon from '@/src/icons/Direction'
import CustomSlider from '@/src/components/Slider'

export default function Blog() {

  const getLinks = () => {
    return <>
      {Object.keys(blog_categories).map((e, i) => {
        if (i === 0) {
          return <LinkButton key={i} className='!px-3' view='primary' href={`/blog/${e}`}>{(blog_categories as any)[e]}</LinkButton>
        }
        return <LinkButton key={i} className='!px-3' view='gray' href={`/blog/${e}`}>{(blog_categories as any)[e]}</LinkButton>
      })}
    </>
  }

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
        translatedRoutes={{ blog: "Статьи" }}
        capitalizeLinks
      />
      <div className='flex flex-col w-full pt-5 pb-10 min-h-120'>
        <div className='flex justify-between'>
          <h2 className='text-header-L text-black font-bold'>Статьи</h2>
          <div className='flex gap-2'>
            {getLinks()}
          </div>
        </div>
        <div className='grid grid-cols-12 max-lg:flex max-lg:flex-col gap-10 my-5 text-black'>
          <div className='col-span-8'>
            <div className='flex flex-col gap-5'>
              <Link className='flex flex-col' href={`/blog/${publications[0].category}/${publications[0].href}`}><img className='rounded-sm max-lg:w-3/4 max-lg:self-center max-sm:w-full' src={publications[0].image} alt="image" /></Link>
              <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                <p>{publications[0].date}</p>
                <p className='flex gap-2 items-center'><ViewIcon />{publications[0].views}</p>
              </div>
              <Link href={`/blog/${publications[0].category}/${publications[0].href}`}><p className='text-header-XL'>{publications[0].title}</p></Link>
              <p className='text-body-M font-normal'>{publications[0].subtitle}</p>
              <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${publications[0].category}/${publications[0].href}`}>Читать больше <DirectionIcon /></Link>
            </div>
          </div>
          <div className='col-span-4 flex flex-col max-lg:flex-row max-lg:gap-5 gap-10 max-sm:flex-col'>
            {publications.slice(1, 3).map((e, i) => (
              <div key={i} className='flex flex-col gap-3 max-lg:w-full'>
                <Link className='flex flex-col' href={`/blog/${e.category}/${e.href}`}><img className='rounded-sm' src={e.image} alt="image" /></Link>
                <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                  <p>{e.date}</p>
                  <p className='flex gap-2 items-center'><ViewIcon />{e.views}</p>
                </div>
                <Link href={`/blog/${e.category}/${e.href}`}><p className='text-header-L'>{e.title}</p></Link>
                <p className='text-body-M font-normal'>{e.subtitle}</p>
                <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${e.category}/${e.href}`}>Читать больше <DirectionIcon /></Link>
              </div>
            ))}
          </div>
        </div>
        <h3 className='text-header-L text-black font-bold'>Популярные</h3>
        <div className='grid grid-cols-12 gap-10 my-5 max-lg:gap-5 max-lg:flex max-lg:flex-col text-black'>
          <div className='col-span-5'>
            <div className='flex flex-col gap-5'>
              <Link className='flex flex-col' href={`/blog/${publications[4].category}/${publications[4].href}`}><img className='rounded-sm max-lg:w-3/4 max-lg:self-center max-sm:w-full' src={publications[4].image} alt="image" /></Link>
              <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                <p>{publications[4].date}</p>
                <p className='flex gap-2 items-center'><ViewIcon />{publications[4].views}</p>
              </div>
              <Link href={`/blog/${publications[4].category}/${publications[4].href}`}><p className='text-header-XL'>{publications[4].title}</p></Link>
              <p className='text-body-M font-normal'>{publications[4].subtitle}</p>
              <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${publications[4].category}/${publications[4].href}`}>Читать больше <DirectionIcon /></Link>
            </div>
          </div>
          <div className='col-span-7 grid grid-cols-2 gap-10 max-lg:gap-5 max-sm:grid-cols-1'>
            {publications.slice(5, 9).map((e, i) => (
              <div key={i} className='flex flex-col gap-3 col-span-1 max-lg:w-full'>
                <Link className='flex flex-col' href={`/blog/${e.category}/${e.href}`}><img className='rounded-sm' src={e.image} alt="image" /></Link>
                <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                  <p>{e.date}</p>
                  <p className='flex gap-2 items-center'><ViewIcon />{e.views}</p>
                </div>
                <Link href={`/blog/${e.category}/${e.href}`}><p className='text-header-L'>{e.title}</p></Link>
                <p className='text-body-M font-normal'>{e.subtitle}</p>
                <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${e.category}/${e.href}`}>Читать больше <DirectionIcon /></Link>
              </div>
            ))}
          </div>
        </div>
        <div className='flex gap-1 justify-between'>
          <h3 className='text-header-L text-black font-bold'>Здоровье</h3>
          <LinkButton view='secondary-green' href='/blog/zdorovje'>Показать все</LinkButton>
        </div>
        <div className='grid grid-cols-12 gap-10 my-5 text-black max-lg:flex max-lg:flex-col max-lg:gap-5'>
          <div className='col-span-5'>
            <div className='flex flex-col gap-5'>
              <Link className='flex flex-col' href={`/blog/${publications[0].category}/${publications[0].href}`}><img className='rounded-sm max-lg:w-3/4 max-lg:self-center max-sm:w-full' src={publications[0].image} alt="image" /></Link>
              <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                <p>{publications[0].date}</p>
                <p className='flex gap-2 items-center'><ViewIcon />{publications[0].views}</p>
              </div>
              <Link href={`/blog/${publications[0].category}/${publications[0].href}`}><p className='text-header-XL'>{publications[0].title}</p></Link>
              <p className='text-body-M font-normal'>{publications[0].subtitle}</p>
              <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${publications[0].category}/${publications[0].href}`}>Читать больше <DirectionIcon /></Link>
            </div>
          </div>
          <div className='col-span-7 grid grid-cols-2 gap-10 max-lg:gap-5 max-sm:grid-cols-1'>
            {publications.slice(1).map((e, i) => {
              if (e.category !== "zdorovje") {
                return null
              }
              return (
                <div key={i} className='flex flex-col gap-3 col-span-1 max-lg:w-full'>
                  <Link className='flex flex-col' href={`/blog/${e.category}/${e.href}`}><img className='rounded-sm' src={e.image} alt="image" /></Link>
                  <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                    <p>{e.date}</p>
                    <p className='flex gap-2 items-center'><ViewIcon />{e.views}</p>
                  </div>
                  <Link href={`/blog/${e.category}/${e.href}`}><p className='text-header-L'>{e.title}</p></Link>
                  <p className='text-body-M font-normal'>{e.subtitle}</p>
                  <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${e.category}/${e.href}`}>Читать больше <DirectionIcon /></Link>
                </div>
              )
            })}
          </div>
        </div>
        <div className='my-5'>
          <h3 className='text-header-L text-black font-bold'>Полезно знать</h3>
          <div>
            <CustomSlider className='!mb-0 mt-5' items={publications.map((e, i) => (
              <div key={i} className='px-3 flex flex-col gap-3 col-span-1'>
                <Link className='flex flex-col' href={`/blog/${e.category}/${e.href}`}><img className='rounded-sm h-52 object-cover' src={e.image} alt="image" /></Link>
                <div className='flex gap-1 justify-between text-gray-dark2 font-medium'>
                  <p>{e.date}</p>
                  <p className='flex gap-2 items-center'><ViewIcon />{e.views}</p>
                </div>
                <Link className='flex flex-col' href={`/blog/${e.category}/${e.href}`}><p className='text-body-MD font-bold'>{e.title}</p></Link>
                <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${e.category}/${e.href}`}>Читать больше <DirectionIcon /></Link>
              </div>
            ))} arrowView='outside' settings={
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