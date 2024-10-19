import BreadCrumbs, { TBreadCrumbTranslRoute } from '@/src/components/BreadCrumbs'
import { category_products, SubCategoryItem, data, DataCategory, ProductItem, CategoryItem, brands } from '@/src/mocks/data'
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

export default function SlugPage({ params }: { params: { slug: string, product_category: string } }) {
  const { slug, product_category } = params

  let _product = null

  if (slug in category_products && product_category in (category_products as any)[slug]) {
    _product = (category_products as any)[slug][product_category]
  } else {
    notFound()
  }

  const category_data: DataCategory = slug in data ? (data as any)[slug] : null

  const sliderItems = slider_data.map(item => <div><SliderLink href={item.href}>
    <img src={item.image} alt="Slider Item" />
  </SliderLink></div>)

  const translatedRoutes: TBreadCrumbTranslRoute = {}
  translatedRoutes[product_category] = _product.breadcrumb
  translatedRoutes[slug] = category_data.breadcrumb

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
        activeClasses='text-green'
        containerClasses='mt-5 flex gap-3 text-body-XS max-md:text-body-XXS'
        listClasses='hover:underline'
        linkClasses='font-normal'
        translatedRoutes={translatedRoutes}
        capitalizeLinks
      />
      <div className='grid grid-cols-4 max-lg:flex max-lg:flex-col w-full pt-5 pb-10'>
        <div className='col-span-1 mr-5 max-lg:px-5'>
          <h2 className='text-header-XL text-dark font-medium'>{_product.title}</h2>
          <div className='max-lg:hidden flex flex-col gap-1 mt-5'>
            {_product.items.map((item: CategoryItem, i: number) =>
              <Link className="text-body-XS text-dark hover:text-green font-medium transition_easy before:content-['—'] before:text-green before:pr-2" key={i} href={`/${slug}/${product_category}/${item.href}`}>{item.title}</Link>
            )}
          </div>
          <div className='hidden max-lg:flex flex-wrap gap-2 my-5'>
            {_product.items.map((item: CategoryItem, i: number) =>
              <Link className="text-body-XS text-dark font-medium border border-gray-dark2 px-1 rounded-md" key={i} href={`/${slug}/${product_category}/${item.href}`}>{item.title}</Link>
            )}
          </div>
          <Filters className="mt-5 max-lg:hidden" brands={brands} />
        </div>
        <div className='ml-5 col-span-3'>
          <div className='flex gap-3 items-center mb-5'>
            <div className='hidden md:flex gap-5 items-center'>
              <p className='text-body-XS'>Сортировать по:</p>
              <Link className="text-body-XS text-dark hover:text-green font-medium transition_easy" href={`#`}>Популярные</Link>
              <Link className="text-body-XS text-dark hover:text-green font-medium transition_easy" href={`#`}>Новинки</Link>
              <Link className="text-body-XS text-dark hover:text-green font-medium transition_easy" href={`#`}>Акции</Link>
              <Link className="text-body-XS text-dark hover:text-green font-medium transition_easy flex items-center" href={`#`}>
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
            <div>
              <FiltersMobile brands={brands} />
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
      {slug === "koshki" && product_category === "korm" && <div className='text-body-M'>
        <h3 className='text-header-XL max-md:text-header-L text-black font-bold mb-1'>Корм для кошек: как выбирать, хранить и давать питомцу еду</h3>
        <p className='font-normal text-gray-dark'>Разнообразие брендов кормов для кошек часто вводит владельцев домашних животных в ступор. Неопытные котовладельцы делают акцент на стоимости и приобретают корма эконом-класса, что может пагубно сказаться на желудочно-кишечном тракте и общем здоровье домашнего любимца. Вот как правильно купить корм для кошек в интернет-магазине Беларуси и обеспечить питомцу качественное пропитание.</p>
        <h3 className='text-header-L max-md:text-header-M text-black font-bold mt-3 mb-1'>Виды корма для котов: по типу, назначению и классу</h3>
        <p className='font-normal text-gray-dark mb-2'>Перед тем, как купить корм для котов оптом или в розницу, следует больше узнать о доступных разновидностях и производителях. По типу или структуре питания кошачья еда делится на два вида:</p>
        <ul className='font-normal text-gray-dark list-disc ml-10 mb-2'>
          <li>Сухой кошачий корм – отличается экономичностью, удобством кормления, сбалансированный, бывает эконом класса,  премиум и супер-премиум;</li>
          <li>Влажный или консервированный – больше подходит для котят, пожилых животных и кошек с заболеваниями ЖКТ или почек.</li>
        </ul>
        <p className='font-normal text-gray-dark mb-2'> По периодичности кормления или назначению также можно выбирать из двух групп, представленных в каталоге кормов для кошек:</p>
        <ul className='font-normal text-gray-dark list-disc ml-10 mb-2'>
          <li>Повседневные – сухие и влажные виды питания с разнообразными вкусами, используются для ежедневного кормления питомца;</li>
          <li>Ветеринарные – только по назначению врача, заказать такой корм для кошек можно в качестве лечебного, при избыточном весе, наличии ряда аллергических реакций, проблем с пищеварительным трактом или мочекаменной болезни.</li>
        </ul>
        <p className='font-normal text-gray-dark mb-2'>Чтобы купить корм для кошек оптом, важно знать о его классе и пользе, которую он принесет питомцу. В противном случае неправильная диета или некачественная еда навредят питомцу. Класс корма для котов определяется исходя из факторов:</p>
        <ul className='font-normal text-gray-dark list-disc ml-10 mb-2'>
          <li>Процент усвояемости – соотношение количества съеденной пищи к количеству переваренной (определяется по фекалиям животного);</li>
          <li>Количество белка в продукте – много белка не только повышает усвояемость, но и насыщает организм питомца витаминами, энергией, делает котенка активным, ускоряет его развитие;</li>
          <li>Степень экструзии – чем лучше измельчен корм для кошек, тем проще его кушать и пищеварение быстрее справится с порцией еды.</li>
        </ul>

        <p className='font-normal text-gray-dark mb-2'> В каталоге магазина предложены следующие классы корма для животных всех возрастов и пород:</p>
        <ul className='font-normal text-gray-dark list-disc ml-10 mb-2'>
          <li>Эконом – корм по доступной цене, где основная доля белка здесь поступает от субпродуктов из курицы, а также из соевых добавок.</li>
          <li>Премиум – оптимальный корм для котов по средней цене. Усваивается на 50%, в состав включены настоящее мясо и качественные злаки. Здесь допустимо содержание только натуральных и безопасных добавок или красителей. Линейка представлена брендами ADVANCE, PROBALANCE, MR. BUFFALO, GLANCE, NATURAL TRAINER и иными.</li>
          <li>Супер-премиум – очень питательный корм, полезный для здоровья питомца и рекомендованными ветеринарами-диетологами. Благодаря высокой пищевой ценности и уровню усвояемости до 85% - это полноценная и вкусная еда, которой можно кормить всех домашних любимцев. </li>
          <li>Холистик – купить гиперпремиум корм для кошек в Минске можно по выгодной цене. Здесь только 20% натуральных и питательных добавок, все остальное – чистое мясо. В консервах и сухом корме минимальное количество злаковых, много витаминов и минералов. </li>
        </ul>
        <p className='font-normal text-gray-dark mb-2'>Чтобы купить корм для кошек по оптовым ценам с доставкой, свяжитесь с нашими операторами.</p>

        <h3 className='text-header-L max-md:text-header-M text-black font-bold mt-3 mb-1'>Как выбрать подходящий корм для кошек?</h3>
        <ul className='font-normal text-gray-dark list-disc ml-10 mb-2'>
          <li>Чтобы котик был в хорошем состоянии, здоровый и активный, его рацион нужно распределить – около 75% сухого корма, дополнить 25% влажного.</li>
          <li>До того как купить кошачий корм, изучите состав. Чем больше натуральных ингредиентов, тем лучше. В рационе взрослого кота должно быть не менее 30% белка от общей доли пищи. Беременным кошкам следует давать больше еды. Если у питомца проблемы с почками, число протеинов стоит снизить.</li>
          <li>Обращайте внимание на то, какие предпочтения у домашнего любимца. В каталоге сайта представлены сухие и влажные корма с индейкой, говядиной, рыбой, кроликом, курицей и другими вкусами.</li>
          <li>Для стерилизованных кошек и котов, а также питомцев с чувствительной системой пищеварения рекомендуется покупать специальные корма, рекомендованные ветеринаром. Если есть конкретные диагностированные заболевания, мешающие качественному перевариванию пищи, ветеринар может назначить гипоаллергенный корм.</li>
          <li>Подбор еды косвенно зависит от породы и возраста животного. Котятам положены калорийные виды пищи, обогащенные витаминами, взрослые кошки едят обычную сбалансированную еду, пожилым питомцам назначают особые линейки кормов для профилактики и даже лечения возможных недугов.</li>
        </ul>
        <p className='font-normal text-gray-dark mb-2'>Бренды, представленные у нас на сайте: ADVANCE, PROBALANCE, PROХвост, NATURAL TRAINER, GLANCE.</p>
        <p className='font-normal text-gray-dark mb-2'>Мы реализуем товары от премиум и супер-премиум класса. Основные поставщики: ADVANCE, PROBALANCE, MR. BUFFALO, GLANCE. Наш сайт предлагает большой ассортимент кормов для кошек с доставкой, купить качественный товар для питомца можно онлайн. На сайте можно покупать корма как поштучно, так и мелким оптом. </p>

        <table className="max-w-170 mx-auto my-15 table-fixed text-black font-normal">
          <tbody>
            <tr>
              <td className='p-2 border border-gray'><span>✅&nbsp;Бренды</span><br /></td>
              <td className='p-2 border border-gray'><span>Advance, NATURAL TRAINER, ProХвост, ProBalance, Mr. Buffalo и другие</span><br /></td>
            </tr>
            <tr>
              <td className='p-2 border border-gray'><span>✅ Возраст</span><br /></td><td className='p-2 border border-gray'><span>Взрослые кошки и котята</span><br /></td>
            </tr>
            <tr>
              <td className='p-2 border border-gray'><span>✅ Типы кормов</span><br /></td><td className='p-2 border border-gray'><span>Сухой, влажный, ветеринарный, премиум и суперпремиум класса</span><br /></td>
            </tr>
            <tr>
              <td className='p-2 border border-gray'><span>✅ Особые корма</span><br /></td><td className='p-2 border border-gray'><span>Для стерилизованных и кастрированных кошек</span><br /></td>
            </tr>
            <tr>
              <td className='p-2 border border-gray'><span>✅ Объемы</span><br /></td><td className='p-2 border border-gray'><span>От 85 гр до 15 кг</span><br /></td>
            </tr>
            <tr>
              <td className='p-2 border border-gray'><span>✅ Вкусы</span><br /></td><td className='p-2 border border-gray'><span>Курица, индейка, кролик, говядина, лосось, ягненок, тунец</span><br /></td>
            </tr>
          </tbody>
        </table>
        <h3 className='text-header-L max-md:text-header-M text-black font-bold mb-5'>Часто задаваемые вопросы</h3>
        <CustomAccordion className='max-w-170 mb-10 text-normal stroke-black' items={[
          { title: "Как правильно кормить кошек кормом?", body: "Рекомендовано делить суточную норму на 2-3 равных части и выдавать корм в миску питомца. Граммовка на вес животного написана на упаковке. Если кот оставляет еду, но при этом ведет себя активно, снизьте суточную норму." },
          { title: "Как хранить корм для кошек?", body: "Храните продукт в закрытой упаковке или герметичной форме. Требуемая температура 22-25°, влажность в помещении не должна быть выше 70%. Не стоит закупать корма более чем на месяц, чтобы они не прогоркли, не покрылись налетом и не потеряли пищевую ценность." },
          { title: "Как перевести кошку на сухой корм?", body: "Если питомец привык к натуральной пище, приучать к новому виду питания нужно постепенно. К стандартному рациону добавляйте гранулы сухого корма одновременно снижая объем порции домашнего или сырого питания. Выбирайте качественный корм и со временем любимец привыкнет. Перед тем, как купить корм для кота в Минске, стоит посетить ветеринара для обследования животного – возможно питомцу понадобится особая диета." },
          { title: "Сколько раз в день кормить кошку?", body: "Котят кормят часто, но малыми порциями. Малыши активные и требуют много пищи для активного роста. Им требуется 4-5 приемов еды. Взрослые особи едят 1-3 раза в сутки, пожилые коты — один раз. Здесь много зависит от активности питомца. Если кошка часто гуляет на улице или активно играет дома, можно кормить чаще, но стоит следить за ее весом." },
        ]} />
      </div>}
    </div>
  </>
}