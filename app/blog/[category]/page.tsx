import BreadCrumbs from '@/src/components/BreadCrumbs'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LinkButton from '@/src/components/LinkButton'
import { publications, blog_categories } from '@/src/mocks/publications'
import ViewIcon from '@/src/icons/View'
import DirectionIcon from '@/src/icons/Direction'

export default function BlogCategory({ params }: { params: { category: string } }) {

  const { category } = params

  if (!Object.keys(blog_categories).includes(category)) {
    notFound()
  }

  const getLinks = () => {
    return <>
      {Object.keys(blog_categories).map((e, i) => {
        if (e === category) {
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
        translatedRoutes={{ blog: "Статьи", ...blog_categories }}
        capitalizeLinks
      />
      <div className='flex flex-col w-full pt-5 pb-10 min-h-120'>
        <div className='flex justify-between'>
          <h2 className='text-header-L text-black font-bold'>Статьи</h2>
          <div className='flex gap-2'>
            {getLinks()}
          </div>
        </div>
        <div className='flex flex-wrap gap-10 my-5 text-black max-md:justify-center'>
          {publications.map((e, i) => {
            if (e.category !== category) {
              return null
            }
            return <div key={i} className='w-80 px-3 flex flex-col gap-3 col-span-1'>
              <Link className='flex flex-col' href={`/blog/${e.category}/${e.href}`}><img className='rounded-sm h-52 object-cover' src={e.image} alt="image" /></Link>
              <div className='flex gap-1 justify-between text-gray-dark2 text-body-S font-medium'>
                <p>{e.date}</p>
                <p className='flex gap-2 items-center'><ViewIcon cn='h-4' />{e.views}</p>
              </div>
              <Link href={`/blog/${e.category}/${e.href}`}><p className='text-body-M font-semibold'>{e.title}</p></Link>
              <Link className='text-secondary font-bold flex gap-2 items-center hover:underline' href={`/blog/${e.category}/${e.href}`}>Читать больше <DirectionIcon /></Link>
            </div>
          })}
        </div>
      </div>
    </div>
  </>
}