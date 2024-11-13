import React from 'react'
import BreadCrumbs from '../components/BreadCrumbs'

const AboutUsPage = () => {
  return (
    <div className='text-black mb-20'>
      <div className='border-t border-gray'></div>
      <img className='absolute right-0 left-0 w-screen max-w-full z-0 hidden xl:block' src="/images/static_pages/about_top_bg.svg" alt="image" />
      <div className='container'>
        <BreadCrumbs
          homeElement={'Главная'}
          separator={<span className='font-normal'> / </span>}
          activeClasses='text-secondary'
          containerClasses='mt-5 flex gap-3 text-body-XS max-md:text-body-XXS'
          listClasses='hover:underline'
          linkClasses='font-normal'
          translatedRoutes={{ 'about-us': "О компании" }}
          capitalizeLinks
        />
        <div className='pb-10 mb-5'>
          <div className="flex flex-row-reverse xl:flex-row items-center gap-3 pt-20 xl:pt-0 max-md:flex-col-reverse">
            <div className='lg:hidden absolute top-0 left-0 bottom-0 w-full bg-secondary-light5 z-[-1]'></div>
            <div>
              <h3 className='text-header-XXL font-semibold mb-4'>О компании</h3>
              <p className='font-normal'>PROZOO – это единственный в своем роде интернет-магазин зоотоваров, отличительной чертой которого является не совсем привычный для Республики Беларусь, но весьма популярный в Европе формат «Cash and Carry». Мы специализируемся на продаже товаров для любимых питомцев оптом и мелким оптом, и за счет этого предлагаем специальные выгодные условия.</p>
            </div>
            <div className='min-w-40 max-md:mr-0 xl:shrink-0 mr-55 max-md:max-w-48'>
              <img src="/images/static_pages/about_1.svg" alt="image" />
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className=''>
          <h3 className='text-header-XL font-semibold'>Наша миссия</h3>
          <div className='relative flex gap-24'>
            <div className='flex flex-col xl:flex-row gap-8 items-start mt-20'>
              <p className='text-[100px] max-xsm:text-[60px] font-bold text-secondary leading-none'>01</p>
              <p className='font-normal py-2'>Основная миссия нашего бренда PROZOO – забота о Вас и Ваших питомцах, которые давно вошли в нашу жизнь и стали ее неотъемлемой частью. Вы растите своих питомцев с любовью и вниманием, стремитесь дать им самое лучшее, а мы успешно работаем с известными производителями товаров для животных всего мира и готовы помогать Вам в этом. Мы предлагаем лучшее для лучших.</p>
            </div>
            <div className='shrink-0 items-center max-md:absolute max-md:top-0 max-md:right-0 max-md:max-w-48'>
              <img src="/images/static_pages/about_2.svg" alt="image" />
            </div>
            <img className='absolute -bottom-15 left-20 z-0 hidden xl:block' src="/images/static_pages/about_line_1.svg" alt="image" />
          </div>
          <div className='relative flex flex-row-reverse gap-24'>
            <div className='flex gap-8 items-start mt-20 max-md:flex-col'>
              <p className='text-[100px] max-xsm:text-[60px] font-bold text-secondary leading-none'>02</p>
              <p className='font-normal py-2'>Мы верим в силу нашего взаимовыгодного сотрудничества, готовы внимательно слушать и основывать все наши действия и поступки на этике, уважении и взаимопонимании, чтобы выстроить вместе с Вами долгосрочные и доверительные отношения. В связи с этим видим необходимым организацию стабильности в выполнении Ваших заказов, обеспечение полного и необходимого Вам качественного ассортимента товаров и своевременной доставки. Мы ценим Ваше время.</p>
            </div>
            <div className='shrink-0 items-center max-md:absolute max-md:top-0 max-md:right-0 max-md:max-w-48'>
              <img src="/images/static_pages/about_3.svg" alt="image" />
            </div>
            <img className='absolute -bottom-15 left-30 z-0 hidden xl:block' src="/images/static_pages/about_line_2.svg" alt="image" />
          </div>
          <div className='relative flex gap-24'>
            <div className='flex gap-8 items-start mt-20 max-md:flex-col'>
              <p className='text-[100px] max-xsm:text-[60px] font-bold text-secondary leading-none'>03</p>
              <p className='font-normal py-2'>Своей главной задачей мы видим предоставить Вам выгоду. А значит: понять Ваши потребности и помочь найти лучшие решения по наиболее привлекательным ценам. Мы вдохновляемся Вашими успехами и готовы способствовать их достижению!</p>
            </div>
            <div className='shrink-0 items-center max-md:absolute max-md:top-0 max-md:right-0 max-md:max-w-48'>
              <img src="/images/static_pages/about_4.svg" alt="image" />
            </div>
          </div>
          <div className='mt-10'>
            <h3 className='text-header-XL mb-6 font-semibold'>Наши преимущества</h3>
            <div className='flex flex-wrap justify-center gap-5'>
              <div className='flex flex-col items-center p-10 max-w-115 bg-secondary-light5 rounded-md max-md:p-4'>
                <div className='bg-white p-10 rounded-lg'>
                  <img src="/images/static_pages/about_adv_1.svg" alt="image" />
                </div>
                <p className='font-bold mt-8 text-[22px] leading-7'>Реализуем качественные товары широкого ассортимента</p>
                <p className='mt-4 font-normal'>Главное преимущество заказа у нас – стабильное наличие всего заявленного ассортимента товаров, независимо от нестабильности в мировой экономике.</p>
              </div>
              <div className='flex flex-col items-center p-10 max-w-115 bg-secondary-light5 rounded-md max-md:p-4'>
                <div className='bg-white p-10 rounded-lg'>
                  <img src="/images/static_pages/about_adv_2.svg" alt="image" />
                </div>
                <p className='font-bold mt-8 text-[22px] leading-7'>Отпускаем продукцию оптом и мелким оптом на особо выгодных условиях</p>
                <p className='mt-4 font-normal'>Чем больше Вы покупаете, тем больше выгод Вы получаете. Специально для Вас мы разработали систему скидок, благодаря которой Вы сможете купить товар по привлекательным ценам.</p>
              </div>
              <div className='flex flex-col items-center p-10 max-w-115 bg-secondary-light5 rounded-md max-md:p-4'>
                <div className='bg-white p-10 rounded-lg'>
                  <img src="/images/static_pages/about_adv_3.svg" alt="image" />
                </div>
                <p className='font-bold mt-8 text-[22px] leading-7'>Доставляем продукцию в соответствии с 5 правилами эффективной доставки</p>
                <p className='mt-4 font-normal'>Мы обучаем наших сотрудников тому уровню сервиса, к которому Вы привыкли; мотивируем наших курьеров работать лучше; не боимся аутсорсинга тогда, когда количество заказов непредсказуемо или слишком велико, чтобы Вы могли получить свой заказ вовремя; общаемся с клиентами и соблюдаем договоренности; учитываем территориальный фактор.</p>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <h3 className='text-header-XL mb-6 font-semibold'>Наши отзывы</h3>
            <div className='flex flex-wrap justify-center gap-5'>
              <div className='flex flex-col p-10 max-w-115 bg-secondary-light5 rounded-md max-md:p-4'>
                <p className='font-bold mt-8 text-[22px] leading-7'>Алексей</p>
                <p className='mt-4 font-normal'>Заказываю в этом зоомагазине товары уже второй раз. Нравятся цены по сравнению с другими магазинами и подходящий ассортимент: у нас кот и собака, все питаются не самыми распространенными супер премиум кормами + покупаем разнообразные средства по уходу. Здесь можно купить все в одном месте, что очень удобно.</p>
              </div>
              <div className='flex flex-col p-10 max-w-115 bg-secondary-light5 rounded-md max-md:p-4'>
                <p className='font-bold mt-8 text-[22px] leading-7'>Елизавета</p>
                <p className='mt-4 font-normal'>Самое наилучшее,всё доставлено,сроки не плохие на корма,курьер отзванивался и привез без задержки по времени.щенок доволен:-) мы и дальше планируем с вами работать.</p>
              </div>
              <div className='flex flex-col p-10 max-w-115 bg-secondary-light5 rounded-md max-md:p-4'>
                <p className='font-bold mt-8 text-[22px] leading-7'>Вячеслав</p>
                <p className='mt-4 font-normal'>Хороший ассортимент,заказ составил 14 позиций,не высокие цены,была возможность кое-что взять со скидкой,при хорошем сроке годности и был приложен нужный подарок.</p>
              </div>
            </div>
          </div>
          <div className='mt-10'>
            <h3 className='text-header-XL mb-6 font-semibold'>Образец документа, подтверждающего оплату:</h3>
            <img src="/images/static_pages/dostavka_check.jpg" alt="image" />
          </div>
          <div className='mt-10'>
            <h3 className='text-header-XL mb-6 font-semibold'>Наши сертификаты:</h3>
            <img className='max-w-170 w-full' src="/images/static_pages/about_cert.jpg" alt="image" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUsPage