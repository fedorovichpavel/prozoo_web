// pages/index.tsx
import { gql } from '@apollo/client';
import CustomSlider from '@/src/components/Slider';
import main_slider_data from '@/src/mocks/main_slider.json'
import { cards } from '@/src/mocks/cards'
import CardLink from '@/src/components/CardLink';
import BrandsList from '@/src/components/BrandsList';
import PublicationList from '@/src/components/PublicationList';
import LinkButton from '@/src/components/LinkButton';
import SliderLink from '@/src/components/SliderLink';

const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      price
      image
    }
  }
`;

export default async function HomePage() {

  // const { loading, error, data } = await query({ query: GET_PRODUCTS });

  return (
    <div className="product-list">
      <div className='container'>
        <CustomSlider items={main_slider_data.map(item => <div>
          <SliderLink href={item.href}><img className='rounded-md overflow-hidden' src={item.image} alt="image" /></SliderLink>
        </div>)} />
      </div>
      <div className='container'>
        <div className='flex xs:max-lg:flex-wrap xs:max-lg:gap-5 justify-between pt-10 pb-20 xs:max-lg:pb-8 xs:max-lg:pt-2 text-center'>
          <div className='w-full flex justify-center'>
            <div className='max-w-68'>
              <h3 className='text-header-M mb-5 text-dark'>Первая цена от производителя</h3>
              <p className='text-body-M text-gray-dark2 font-medium'>Первые поставщики известных брендов с собственным производством в РБ</p>
            </div>
          </div>
          <div className='lg:border-r lg:border-l xs:max-lg:border-t xs:max-lg:border-b xs:max-lg:py-2 border-gray w-full flex justify-center'>
            <div className='max-w-68'>
              <h3 className='text-header-M mb-5 text-dark'>Лучшее предложение для заводчиков</h3>
              <p className='text-body-M text-gray-dark2 font-medium'>Уникальное ценовое и лучшее ассортиментное предложение для заводчиков, волонтеров, а также продуманных хозяевов.</p>
            </div>
          </div>
          <div className='w-full flex justify-center'>
            <div className='max-w-68'>
              <h3 className='text-header-M mb-5 text-dark'>Уникальный ассортимент в РБ</h3>
              <p className='text-body-M text-gray-dark2 font-medium'>В нашем каталоге корма для животных произведенные на основании научного подхода</p>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='mb-10'>
          <h3 className='mb-8 text-header-L text-dark font-bold'>Питомцы</h3>
          <div className='grid grid-cols-1 md:grid-cols-12 xs:max-md:gap-3 gap-10 px-5 xs:max-lg:flex-col'>
            <div className='md:col-span-4 flex flex-col w-full'>
              <CardLink
                className={`${cards[0].className} h-full xs:max-md:pb-3 pb-10 xs:max-md:w-full`}
                imageClassName='xs:max-md:h-45 object-cover'
                title={cards[0].title}
                href={cards[0].href}
                image={cards[0].image}
              />
              <CardLink
                className={`${cards[1].className} h-full xs:max-md:w-full`}
                imageClassName='xs:max-md:h-45 object-cover'
                title={cards[1].title}
                href={cards[1].href}
                image={cards[1].image}
              />
            </div>
            <div className='md:col-span-8 flex w-full gap-10 xs:max-md:gap-3'>
              <CardLink
                className={`${cards[2].className} w-full`}
                title={cards[2].title}
                href={cards[2].href}
                image={cards[2].image}
              />
              <CardLink
                className={`${cards[3].className} w-full`}
                title={cards[3].title}
                href={cards[3].href}
                image={cards[3].image}
              />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='py-10'>
          <h3 className='mb-4 text-header-L text-dark font-bold'>Наши бренды</h3>
          <div className='border rounded-sm border-gray'>
            <CustomSlider className='!mb-0' items={BrandsList()} arrowView='outside' settings={
              {
                slidesToShow: 6,
                slidesToScroll: 1,
                dots: false,
                autoplay: false,
                responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 5,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll: 1,
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1
                    }
                  }
                ]
              }
            } />
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='py-10 relative'>
          <h3 className='mb-4 xs:max-sm:mb-15 text-header-L text-dark font-bold'>Публикации</h3>
          <LinkButton href='/blog' view='primary-green' className='absolute right-25 top-10 xs:max-sm:right-auto xs:max-sm:left-1 xs:max-sm:top-20'>Смотреть все</LinkButton>
          <PublicationList />
        </div>
      </div>
    </div>
  );
}
