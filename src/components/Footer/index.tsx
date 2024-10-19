import Link from 'next/link'
import React from 'react'
import Button from '../Button'
import LinkButton from '../LinkButton'
import PhoneIcon from '@/src/icons/Phone'
import ProfileIcon from '@/src/icons/Profile'
import LogoIcon from '@/src/icons/Logo'
import CartIcon from '@/src/icons/Cart'
import SearchInput from '../SearchInput'
import Navigation from '../Navigation'
import { nav } from '@/src/mocks/navigation'
import for_buyers_data from '@/src/mocks/footer_for_buyers.json'
import info_data from '@/src/mocks/footer_usefull_info.json'
import Input from '../Input'
import InstIcon from '@/src/icons/Inst'
import TickTokIcon from '@/src/icons/TickTok'
import EmailIcon from '@/src/icons/Email'
import TimeIcon from '@/src/icons/Time'
import DeliveryIcon from '@/src/icons/Delivery'
import payment_logos from '@/src/images/payment_logos.png'


const Footer = () => {
  return (
    <footer className='pt-10 pb-5 bg-green-light2'>
      <div className='container'>
        <div className='flex flex-col xl:flex-row gap-4 justify-between border-b border-gray pb-6'>
          <div className='flex flex-col lg:flex-row items-center gap-5'>
            <h3 className='w-full lg:max-w-90 text-header-S text-dark'>Подписывайтесь на новости и получайте информацию о выгодных предложениях</h3>
            <div className='flex gap-5 w-full xs:max-xsm:flex-col'>
              <Input inputClassName='rounded-lg h-12 xs:max-lg:h-10 w-full py-2 px-2 text-center font-normal text-body-S outline-none' className='w-full max-w-120 h-full' placeholder='Введите ваш email' />
              <Button className='h-full xs:max-lg:!py-2 xs:max-xsm:justify-center' view='green'><p className='text-white'>Подписаться</p></Button>
            </div>
          </div>
          <div className='flex items-center gap-4'>
            <p className="text-header-S text-dark">Подписывайтесь на нас:</p>
            <Link href='https://www.instagram.com/prozooby/' title="Подписывайтесь в Instagram" target='_blank'><InstIcon /></Link>
            <Link href='https://www.tiktok.com/' target='_blank' title="Подписывайтесь в TikTok"><TickTokIcon /></Link>
          </div>
        </div>
      </div>
      <div className='container flex flex-col lg:flex-row'>
        <div className='xs:max-lg:w-full xs:max-lg:flex xs:max-lg:flex-col'>
          <div className='mt-0 lg:mt-5 p-6 pl-0 border-b border-r border-gray flex items-center gap-8 xs:max-lg:w-full xs:max-lg:justify-around xs:max-xsm:flex-col'>
            <LinkButton
              href="tel:+375296505151"
              view='secondary-green'
              icon={<PhoneIcon color='#00c259' />}
            >
              +375(29)650-51-31
            </LinkButton>
            <Link className='flex gap-2' href='mailto:info@prozoo.by'>
              <EmailIcon />
              <span className='text-green hover:text-green-dark2'>info@prozoo.by</span>
            </Link>
          </div>
          <div className='p-6 pl-0 border-r border-gray flex items-center gap-8 xs:max-lg:w-full xs:max-lg:justify-around xs:max-xsm:flex-col'>
            <div className='flex gap-3'>
              <TimeIcon />
              <div className='text-green'>
                <p className='leading-4 text-[11px]'>Режим работы магазина:</p>
                <p className='leading-4 text-body-XS font-bold'>Пн-Пт 09:00-18:00</p>
                <p className='leading-4 text-body-XS font-bold'>Сб-Вс - выходной</p>
              </div>
            </div>
            <div className='flex gap-3'>
              <DeliveryIcon />
              <div className='text-green'>
                <p className='leading-4 text-[11px]'>Режим работы доставки:</p>
                <p className='leading-4 text-body-XS font-bold'>Пн-Пт 10:00-22:00</p>
                <p className='leading-4 text-body-XS font-bold'>Сб-Вс - выходной</p>
              </div>
            </div>
          </div>
          <div className='border-r border-gray xs:max-lg:self-center xs:max-lg:border-none'><LogoIcon /></div>
        </div>
        <div className='grow max-w-200 xs:max-lg:mt-3 xs:max-lg:max-w-full'>
          <div className='flex gap-15 mt-5 px-10 justify-between xs:max-sm:flex-col'>
            <div className='flex flex-col'>
              <h3 className='mb-3 text-header-S text-dark'>Каталог</h3>
              {nav.map((item, i) => {
                if ('footer_title' in item) {
                  return <Link key={i} href={item.href!}>
                    <p className='text-body-S text-gray-dark2 font-normal mb-2 hover:text-green-dark2'>{item.footer_title}</p>
                  </Link>
                }
              })}
            </div>
            <div className='flex flex-col'>
              <h3 className='mb-3 text-header-S text-dark'>Покупателям</h3>
              {for_buyers_data.map((item, i) => {
                return <Link key={i} href={item.href!}>
                  <p className='text-body-S text-gray-dark2 font-normal mb-2 hover:text-green-dark2'>{item.title}</p>
                </Link>
              })}
            </div>
            <div className='flex flex-col'>
              <h3 className='mb-3 text-header-S text-dark'>Полезная информация</h3>
              {info_data.map((item, i) => {
                return <Link key={i} href={item.href!}>
                  <p className='text-body-S text-gray-dark2 font-normal mb-2 hover:text-green-dark2'>{item.title}</p>
                </Link>
              })}
            </div>
          </div>

        </div>
      </div>
      <div className='container'>
        <div className='flex flex-col w-full items-end py-4 border-b border-gray'>
          <p className='text-body-XXS text-gray-dark2 font-normal'>
            Рейтинг 5★★★★★ на основе <Link className='text-gray hover:text-dark' target="blank" rel="noreferrer noopener" href="https://goo.gl/maps/ATTHeiEJs8XtcsQ38">отзывов</Link> 12 клиентов
          </p>
          <img className='w-115' src={payment_logos.src} alt='payment logos' />
        </div>
      </div>
      <div className='container'>
        <div className='flex justify-between pt-4 gap-10 xs:max-lg:flex-col'>
          <p className='text-body-XXXS text-gray-dark2 font-normal leading-5 max-w-150'>Интернет-магазин "PROZOO". Республика Беларусь, 224013, Брестская область, г. Брест, б-р Шевченко, д. 6/1, оф. 303.  ООО «Прокормбай», УНП 291500723, Регистрация №291500723, 08.08.2017, администрацией Московского района г. Бреста. Зарегистрирован в торговом реестре Республики Беларусь 17.02.2022 №528878</p>
          <div className='flex gap-3 grow justify-end text-body-XXS font-normal'>
            <Link className='underline hover:no-underline' href='https://prozoo.by/docs/14.privacy-policy-web-site.Procorm.2022-02-21.rus.ph.pdf' target='_blank'>Политика конфиденциальности</Link>
            <Link className='underline hover:no-underline' href='https://prozoo.by/docs/public-offer.2022-02-14.final.pdf' target='_blank'>Договор оферты</Link>
            <Link className='underline hover:no-underline' href='/vozvrat' target='_blank'>Возврат</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer