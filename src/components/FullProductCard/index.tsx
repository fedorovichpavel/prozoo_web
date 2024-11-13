'use client'

import { useGlobalContext } from '@/src/context';
import { Collapse, Dialog, MenuItem, Rating, Select, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { useState } from 'react';
import Button from '../Button';
import Link from 'next/link';
import Input from '../Input';
import CartIcon from '@/src/icons/Cart';
import HeartIcon from '@/src/icons/Heart';
import { ProductItem } from '@/src/mocks/data';
import CustomVerticalSlider from '../VerticalSlider';
import CheckIcon from '@/src/icons/Check';
import InfoIcon from '@/src/icons/Info';
import ArrowIcon from '@/src/icons/Arrow';
import RateForm from '@/src/components/RateForm';
import LogoIcon from '@/src/icons/Logo';
import LinkButton from '../LinkButton';

interface FullProductCardProps {
  product: ProductItem
}

const descriptionKeys = [
  "Описание товара",
  "Состав",
  "Отзывов (0)",
]
const descriptionByKeys = [
  <div>
    <p>Полнорационный сбалансированный сухой <strong>корм ProBalance Sterilized</strong> премиум класса для кастрированных котов и стерилизованных кошек. Корм рекомендован для ежедневного кормления взрослых кошек всех пород.
      Корм Probalance Sterilized разработан практикующими ветеринарами из Дании для кормления стерилизованных и кастрированных питомцев. Согласно проведенным исследованиям, такие питомцы становятся менее подвижными, склонны к лишнему весу и возникновению мочекаменной болезни. Все это учтено в рецептуре корма.</p>
    <p className='my-3 font-bold'>Преимущества корма:</p>
    <ul className='list-disc pl-10'>
      <li>Баланс питательных веществ и калорий корма помогает поддерживать вес животного на оптимальном уровне.</li>
      <li>В корм входит запатентованный сбор из целебных трав, который обладает общеукрепляющим и тонизирующим свойствами и помогает иммунитету.</li>
      <li>Корм стимулирует потребление воды животным, тем самым увеличивая объем мочи и снижая риск образования камней в мочевыводящих путях (профилактика мочекаменной болезни).</li>
      <li>L-карнитин способствует сжиганию лишних жиров в организме.</li>
    </ul>
    <p className='mt-3'>Probalance – баланс вкуса и пользы. Натуральный сбалансированный рацион на каждый день.</p>
  </div>,
  <div>
    <p>Дегидратированное мясо птицы мин. 30 % (в т. ч. из курицы мин. 23 %), рис, ячмень, протеины растительного происхождения, куриный жир, горох, жом свекловичный, натуральные вкусоароматические добавки, пивные дрожжи (источник витаминов группы В), льняное семя (источник Омега-3 и Омега-6 жирных кислот), яичный порошок, витаминно-минеральная добавка для кошек (витамины А, D3, Е, В1, В2, В3, В4, В5, В6, В9 (фолиевая кислота), В12, Н (биотин), железо, медь, цинк, марганец, йод, селен), соль, рыбий жир, фитокомозиция (календулы цветки, клюква, ромашка, алтей корень, исландский мох), таурин (для здоровья сердца и отличного зрения), лизин (помогает укреплять иммунитет), пребиотик, экстракт Юкки Шидигера (снижает запах фекалий), L-карнитин (способствует сжиганию жиров в организме).Добавки, сохраняющие продукт: мико карб, натуральные антиоксиданты (смесь токоферолов).</p>
    <p className='mt-3'>Энергетическая ценность: 361 ккал / 100 г</p>
    <p>Протеин – 32%, жир – 12%, клетчатка – 4%, зола – 6%, влажность – 10%, кальций – 1,1%, фосфор – 0,9%, витамин А - 5000 МЕ/кг, витамин D3 – 500 МЕ/кг, витамин Е – 45 мг/кг, витамин В1 (тиамин) – 5 мг, витамин В2 (рибофлавин) – 4 мг, витамин В3 (ниацин) – 7 мг, витамин В4 (холин хлорид) – 2400 мг, витамин В5 (пантотеновая кислота) – 7 мг, витамин В6 (пиридоксин) – 4 мг, витамин В9 (фолиевая кислота) – 1 мг, витамин В12 – 0,02 мг, витамин Н (биотин) – 0,1 мг, железо – 80 мг, медь – 5 мг, цинк – 75 мг, марганец – 7,5 мг, йод – 1,5 мг, селен – 0,4 мг</p>
  </div>,
  <RateForm />,
]

export default function FullProductCard({
  product
}: FullProductCardProps) {
  const [open, setOpen] = useState(false);
  const [descriptionKey, setDescriptionKey] = useState(0);
  const [price, setPrice] = useState(product.prices[0])
  const [quantity, setQuantity] = useState(1)
  const [quantity2, setQuantity2] = useState(1)
  const { addToCart, compares, addToCompares, removeFromCompares, favorites, addToFavorites, removeFromFavorites } = useGlobalContext()
  const [dialogOpened, setDialogOpened] = useState<string | null>(null)

  const handleChange = (value: string) => {
    const newPrice = product.prices.filter(e => e.wage === value)[0]
    if (newPrice) {
      setPrice(product.prices.filter(e => e.wage === value)[0])
    }
  }

  const handleAddToCart = (product_id: string, wage: string, quantity: number, is_disc: boolean, title: string) => {
    addToCart(product_id, wage, quantity, is_disc)
    setDialogOpened(title)
  }

  const quantityHandler = (type: 'up' | 'down', kind: 1 | 2 = 1) => {
    if (kind === 1) {
      if (type === 'up') {
        setQuantity(prev => prev + 1)
      } else {
        setQuantity(prev => prev <= 1 ? 1 : prev - 1)
      }
    } else {
      if (type === 'up') {
        setQuantity2(prev => prev + 1)
      } else {
        setQuantity2(prev => prev <= 1 ? 1 : prev - 1)
      }
    }
  }

  const addRemoveFavorites = (product_id: string, wage: string) => {
    if (product_id in favorites) {
      removeFromFavorites(product_id, wage)
    } else {
      addToFavorites(product_id, wage)
    }
  }

  const addRemoveCompares = (product_id: string, wage: string) => {
    if (product_id in compares) {
      removeFromCompares(product_id, wage)
    } else {
      addToCompares(product_id, wage)
    }
  }


  return (
    <div>
      <Dialog classes={{ paper: 'max-xsm:!mx-0' }} onClose={() => setDialogOpened(null)} open={!!dialogOpened}>
        <div className='p-10 max-w-115 flex flex-col items-center gap-2 max-xsm:p-5'>
          <button className='absolute top-4 right-4' onClick={() => setDialogOpened(null)}>
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23.75 6.25L6.25 23.75M6.25002 6.25L23.75 23.75" stroke="#d8e4df" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <LogoIcon />
          <p className='mt-5'>Товар добавлен в корзину</p>
          <p className='text-center font-bold border-t border-gray pt-5 mt-3 mb-5'>{dialogOpened}</p>
          <Button view='secondary-green' onClick={() => setDialogOpened(null)} className='w-full py-5'>
            <p className='text-body-M font-bold text-center w-full'>Продолжить покупки</p>
          </Button>
          <LinkButton view='primary' onClick={() => setDialogOpened(null)} className='w-full py-5' href='/cart'>
            <p className='text-white text-body-M font-bold text-center w-full'>Перейти к оформлению</p>
          </LinkButton>
        </div>
      </Dialog>
      <div className='grid grid-cols-10 w-full mt-10 gap-8'>
        <div className='ml-44 col-span-4'>
          <div className='relative'>
            <CustomVerticalSlider
              className='block'
              items={
                product.images.map(e => (<img className='transition_easy !duration-1000 hover:scale-110' src={e} key={e} alt='image' />))
              }
              dotsItems={
                product.images.map(e => (<img src={e} key={e} alt='image' />))
              }
              settings={
                {
                  className: 'py-5',
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  dots: true,
                  arrows: true,
                  autoplay: false,
                  infinite: false
                }
              }
              inner_jsx={
                <button className={`${product.id in favorites ? 'fill-danger stroke-danger' : 'fill-none'} absolute top-4 z-40 right-4 bg-secondary-light4 p-3 rounded-lg stroke-black hover:stroke-danger`} onClick={() => addRemoveFavorites(product.id, price.wage)}><HeartIcon /></button>
              }
            />
          </div>
        </div>
        <div className='col-span-6'>
          <p className='text-body-XS font-normal text-gray-dark2'>Артикул: {product.id}</p>
          <h3 className='mt-3'>{product.type} {product.title}, {product.taste}, {price.wage}</h3>
          <p className='text-secondary flex gap-2 items-center mt-2 text-body-XS font-bold'>
            <CheckIcon />
            В наличии
          </p>
          <div className='my-5'>
            brand
          </div>
          <div className='flex gap-3 items-center'>
            <Rating name="read-only" value={0} readOnly />
            <button className={`text-secondary text-body-S font-normal border-b border-secondary border-dashed hover:border-transparent`} onClick={() => addRemoveCompares(product.id, price.wage)}>
              <p className='leading-6'>{product.id in compares ? "Удалить из сравнения" : "Добавить в сравнение"}</p>
            </button>
            {product.id in compares && <Link className='text-secondary text-body-S font-normal border-b border-secondary border-dashed hover:border-transparent' href='/compare-product'>
              <p className='leading-6'>Сравнить товары ({Object.keys(compares).length})</p>
            </Link>}
          </div>
          <p className='mt-5'>{price.wage}</p>
          <p className='my-3 text-body-XXS font-normal text-gray-dark'>Упаковка, вес</p>
          <Select
            color='secondary'
            size='small'
            classes={{
              select: "!font-semibold"
            }}
            value={price.wage}
            onChange={(e, _) => handleChange(e.target.value)}
          >
            {product.prices.map((e, i) => <MenuItem key={i} value={e.wage}>{e.wage}</MenuItem>)}
          </Select>
          <div className='my-3 py-3 border-t border-gray'>
            <div className='grid grid-cols-11 px-4 py-4 gap-2'>
              <div className='col-span-3'>
                <p className='font-normal text-body-XS'>Цена за 1 ед</p>
                <p className='mt-3 font-bold text-body-L'>{price.amount}BYN</p>
              </div>
              <div className='col-span-2'>
                <p className='font-normal text-body-XS'>Кол-во</p>
                <Input
                  inputClassName='w-full px-0 py-2 outline-none rounded-lg'
                  className='w-20 px-4 border border-gray shadow-none mt-1'
                  value={quantity}
                  onChange={(e) => null}
                  type='number'
                  min={1}
                  max={999}
                  step={1}
                  placeholder='Количество'
                  onUpArrowClick={() => quantityHandler('up')}
                  onDownArrowClick={() => quantityHandler('down')}
                />
              </div>
              <div className='col-span-3 bg-secondary-light5 p-3 rounded-xs'>
                <p className='font-normal text-body-XS'>Стоимость</p>
                <p className='font-bold text-body-L'>{(price.amount * quantity).toFixed(2)}BYN</p>
              </div>
              <div className='col-span-3 flex items-center justify-center'>
                <Button onClick={() => handleAddToCart(product.id, price.wage, quantity, false, product.title)} view='primary' className='!h-14 !w-14 !p-0 !m-0 flex justify-center'>
                  <CartIcon />
                </Button>
              </div>
            </div>
            <div className='grid grid-cols-11 px-4 py-4 gap-2 bg-secondary-light5 rounded-tr-xs rounded-tl-xs'>
              <div className='col-span-3'>
                <p className='font-normal text-body-XS'>Цена за 1 ед при самовывозе</p>
                <p className='font-medium text-body-S line-through text-gray-dark2'>
                  {price.amount}BYN
                </p>
                <p className='flex items-center gap-3 font-bold text-body-L text-danger'>
                  {price.disc_amount}BYN
                  <span className='rounded-sm bg-danger text-white px-3 text-body-XXXS leading-5'>- {price.disc_percent}%</span>
                </p>
              </div>
              <div className='col-span-2'>
                <p className='font-normal text-body-XS'>Кол-во</p>
                <Input
                  inputClassName='w-full px-0 py-2 outline-none rounded-lg'
                  className='w-20 px-4 border border-gray shadow-none mt-1 bg-white'
                  value={quantity2}
                  onChange={(e) => null}
                  type='number'
                  min={1}
                  max={999}
                  step={1}
                  placeholder='Количество'
                  onUpArrowClick={() => quantityHandler('up', 2)}
                  onDownArrowClick={() => quantityHandler('down', 2)}
                />
              </div>
              <div className='col-span-3 bg-secondary-light4 p-3 rounded-xs'>
                <p className='font-normal text-body-XS'>Стоимость</p>
                <p className='font-bold text-body-L'>{(price.disc_amount * quantity2).toFixed(2)}BYN</p>
              </div>
              <div className='col-span-3 flex items-center justify-center'>
                <Button onClick={() => handleAddToCart(product.id, price.wage, quantity, true, product.title)} view='primary' className='!h-14 !w-14 !p-0 !m-0 flex justify-center'>
                  <CartIcon />
                </Button>
              </div>
            </div>
            <div className='p-4 flex items-center gap-2 bg-secondary-light5 border-t border-gray rounded-br-xs rounded-bl-xs'>
              <InfoIcon />
              <p className='text-secondary text-body-XXS font-bold'>Кол-во ед. в уп. - 1 шт. Минимальное кол-во для заказа упаковкой - 1 шт.</p>
            </div>
          </div>
          <div className='font-medium'>
            <div className='flex justify-between items-center border-b border-gray py-3'>
              <p className='text-gray-dark3'>Бренд</p>
              <p className='text-black font-medium'>{product.brand}</p>
            </div>
            <div className='flex justify-between items-center border-b border-gray py-3'>
              <p className='text-gray-dark3'>Вкус</p>
              <p className='text-black font-medium'>{product.taste}</p>
            </div>
            <div className={`flex justify-between items-cente py-3 ${open && 'border-b border-gray'}`}>
              <p className='text-gray-dark3'>Возраст</p>
              <p className='text-black font-medium'>{product.age}</p>
            </div>
            <Collapse className='flex flex-col' in={open} timeout="auto" unmountOnExit classes={
              {
                wrapperInner: "flex flex-col"
              }
            }>
              <div className='flex justify-between items-center border-b border-gray py-3'>
                <p className='text-gray-dark3'>Категория товара</p>
                <p className='text-black font-medium'>{product.category}</p>
              </div>
              <div className='flex justify-between items-center border-b border-gray py-3'>
                <p className='text-gray-dark3'>Назначение</p>
                <p className='text-black font-medium'>{product.purpose}</p>
              </div>
              <div className='flex justify-between items-center border-b border-gray py-3'>
                <p className='text-gray-dark3'>Специальная диета</p>
                <p className='text-black font-medium'>{product.diet}</p>
              </div>
              <div className='flex justify-between items-center border-b border-gray py-3'>
                <p className='text-gray-dark3'>Страна производитель</p>
                <p className='text-black font-medium'>{product.country}</p>
              </div>
              <div className='flex justify-between items-center border-b border-gray py-3'>
                <p className='text-gray-dark3'>Тип питомца</p>
                <p className='text-black font-medium'>{product.animal_type}</p>
              </div>
              <div className='flex justify-between items-center py-3'>
                <p className='text-gray-dark3'>Тип упаковки</p>
                <p className='text-black font-medium'>{product.package_type}</p>
              </div>
            </Collapse>
            <div className='flex justify-center border-b border-gray pb-3'>
              <button className='flex items-center gap-2 mt-2 text-body-M text-dark hover:text-primary font-bold max-w-fit stroke-black' onClick={() => setOpen(prev => !prev)}>
                {open ? <p>Скрыть все</p> : <p>Показать все</p>}
                {open ? <ArrowIcon view='up' /> : <ArrowIcon view='down' />}
              </button>
            </div>
          </div>
          <div className='my-5 text-body-XXS flex flex-wrap gap-3'>
            <Link className='border border-dark rounded-sm py-1 px-2' href='/koshki'>
              Кошки
            </Link>
            <Link className='border border-dark rounded-sm py-1 px-2' href='/koshki'>
              Корм
            </Link>
            <Link className='border border-dark rounded-sm py-1 px-2' href='/koshki'>
              Сухой корм
            </Link>
            <Link className='border border-dark rounded-sm py-1 px-2' href='/koshki'>
              Для стерилизованных и кастрированных котов
            </Link>
            <Link className='border border-dark rounded-sm py-1 px-2' href='/koshki'>
              Корм ProBalance
            </Link>
            <Link className='border border-dark rounded-sm py-1 px-2' href='/koshki'>
              Корм премиум класса
            </Link>
            <Link className='border border-dark rounded-sm py-1 px-2' href='/koshki'>
              Корм в мешке
            </Link>
          </div>
        </div>
      </div>
      <ToggleButtonGroup
        className='my-4'
        color='secondary'
        size='small'
        value={price.wage}
        exclusive
        onChange={(ev, value) => setDescriptionKey(value)}
        aria-label="Platform"
      >
        {descriptionKeys.map((e, i) => (
          <ToggleButton classes={{
            root: `!rounded-none !border-t-0 !border-l-0 !border-r-0 !border-b-4 hover:!bg-transparent ${descriptionKey === i ? '!border-secondary' : '!border-gray'}`
          }} className="!px-5" key={i} value={i}>
            <p className={`text-body-M px-10 ${descriptionKey === i ? 'text-secondary font-semibold' : 'text-black font-medium'}`}>{e}</p>
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
      <div className='text-dark font-normal my-3'>
        {descriptionByKeys[descriptionKey]}
      </div>
    </div>
  );
}
