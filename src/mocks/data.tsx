import { ReactNode } from "react"

export type DataCategory = {
  title: string
  breadcrumb: string
  categories: {
    title: string
    breadcrumb: string
    href: string
    image: string
  }[]
}

export const category_routes = ["koshki", "sobaki", "gryzuny", "pticy", "vetapteka"]

export const data: { [k: string]: any } = {
  "koshki": {
    "title": "Товары для кошек",
    "breadcrumb": "Кошки",
    "categories": [
      {
        "title": "Корм",
        "breadcrumb": "Корм для кошек и котов",
        "href": "korm",
        "image": "/images/korm.webp"
      },
      {
        "title": "Наполнитель",
        "breadcrumb": "Наполнитель для котов",
        "href": "napolnitel",
        "image": "/images/napolnitel.webp"
      },
      {
        "title": "Витамины и лакомства",
        "breadcrumb": "Витамины и лакомства для кошек",
        "href": "vitaminy-i-dobavki",
        "image": "/images/vitaminy.webp"
      },
      {
        "title": "Косметика и средства для ухода и гигиены",
        "breadcrumb": "Косметика и средства для ухода и гигиены",
        "href": "kosmetika-i-sredstva-po-uhodu",
        "image": "/images/kosmetika.webp"
      },
      {
        "title": "Аксессуары для кошек",
        "breadcrumb": "Аксессуары для кошек",
        "href": "aksessuary",
        "image": "/images/aksessuar.webp"
      },
    ]
  },
  "sobaki": {
    "title": "Товары для собак",
    "breadcrumb": "Собаки",
    "categories": [
      {
        "title": "Корм",
        "breadcrumb": "Корм для собак",
        "href": "korm",
        "image": "/images/korm.webp"
      },
      {
        "title": "Витамины и лакомства",
        "breadcrumb": "Витамины и лакомства для собак",
        "href": "vitaminy-i-dobavki",
        "image": "/images/vitaminy.webp"
      },
      {
        "title": "Косметика и средства для ухода и гигиены",
        "breadcrumb": "Косметика и средства для ухода и гигиены",
        "href": "kosmetika-i-sredstva-po-uhodu",
        "image": "/images/kosmetika.webp"
      },
      {
        "title": "Аксессуары для собак",
        "breadcrumb": "Аксессуары для собак",
        "href": "aksessuary",
        "image": "/images/aksessuar.webp"
      },
    ]
  },
  "gryzuny": {
    "title": "Товары для грызунов",
    "breadcrumb": "Грызуны",
    "categories": [
      {
        "title": "Корм",
        "breadcrumb": "Корм для грызунов",
        "href": "korm",
        "image": "/images/korm3.webp"
      },
      {
        "title": "Лакомства",
        "breadcrumb": "Лакомства для грызунов",
        "href": "lakomstva",
        "image": "/images/lakomstva.webp"
      },
      {
        "title": "Уход и гигиена",
        "breadcrumb": "Уход и гигиена",
        "href": "kosmetika-i-sredstva-po-uhodu",
        "image": "/images/kosmetika.webp"
      },
      {
        "title": "Аксессуары",
        "breadcrumb": "Аксессуары для грызунов",
        "href": "aksessuary",
        "image": "/images/aksessuar3.webp"
      },
    ]
  },
  "pticy": {
    "title": "Товары для птиц",
    "breadcrumb": "Птицы",
    "categories": [
      {
        "title": "Корм",
        "breadcrumb": "Корм для птиц",
        "href": "korm",
        "image": "/images/korm2.webp"
      },
      {
        "title": "Витамины и добавки",
        "breadcrumb": "Витамины и добавки для птиц",
        "href": "vitaminy-i-dobavki",
        "image": "/images/vitaminy2.webp"
      },
      {
        "title": "Лакомства",
        "breadcrumb": "Лакомства для птиц",
        "href": "lakomstva",
        "image": "/images/lakomstva.webp"
      },
      {
        "title": "Уход и гигиена",
        "breadcrumb": "Уход и гигиена",
        "href": "kosmetika-i-sredstva-po-uhodu",
        "image": "/images/kosmetika.webp"
      },
      {
        "title": "Аксессуары",
        "breadcrumb": "Аксессуары для птиц",
        "href": "aksessuary",
        "image": "/images/aksessuar2.webp"
      },
    ]
  },
  "vetapteka": {
    "title": "Ветаптека",
    "breadcrumb": "Ветаптека",
    "categories": [
      {
        "title": "Ветеринарные корма для кошек",
        "breadcrumb": "Ветеринарные корма для кошек",
        "href": "veterinarnye-korma-dlya-koshek",
        "image": "/images/vet1.webp"
      },
      {
        "title": "Ветеринарные корма для собак",
        "breadcrumb": "Ветеринарные корма для собак",
        "href": "veterinarnye-korma-dlya-sobak",
        "image": "/images/vet2.webp"
      },
      {
        "title": "Кормовые добавки",
        "breadcrumb": "Кормовые добавки",
        "href": "korm-dobavki",
        "image": "/images/vet3.webp"
      },
      {
        "title": "Вывод шерсти",
        "breadcrumb": "Вывод шерсти",
        "href": "vivod-shersti",
        "image": "/images/vet4.webp"
      },
      {
        "title": "Защита от блох и клещей",
        "breadcrumb": "Защита от блох и клещей",
        "href": "zashita-ot-bloh-i-kleshei",
        "image": "/images/vet5.webp"
      },
      {
        "title": "Успокоительные средства",
        "breadcrumb": "Успокоительные средства",
        "href": "uspokoitelnie-sredstva",
        "image": "/images/vet6.webp"
      },
    ]
  },
}

export type ProductItem = {
  id: string
  title: string
  type: string
  images: string[]
  in_stock: boolean
  prices: {
    amount: number
    wage: string
    disc_percent: number
    disc_amount: number
  }[]
  brand: string
  taste: string
  age: string
  category: string
  purpose: string
  diet: string
  country: string
  animal_type: string
  package_type: string
  description: ReactNode
  composition: ReactNode
}

export type SubCategoryItem = {
  title: string
  href: string
  products: ProductItem[]
}

export type CategoryItem = {
  title: string
  href: string
  breadcrumb: string
  items: SubCategoryItem[]
}

const subcategories = [
  "Сухой корм",
  "Влажный корм",
  "Ветеринарный корм",
  "Для котят",
  "Корм в мешке",
]

const subhrefs = [
  "suhoj-korm",
  "vlazhniy-korm",
  "vet-korm",
  "dlya-kotyat-korm",
  "korm-v-meshke",
]

export const brandLinks = {
  "advance": "Advance",
  "advance-vetdiet": "Advance VetDiet",
  "alpenhof": "AlpenHof",
  "animal_play_sweet": "Animal Play Sweet",
  "be_frendi": "be Frendi",
  "bunny": "Bunny",
  "canadian_cat": "Canadian Cat",
  "citoderm": "CitoDerm",
  "cliny": "Cliny",
  "flexi": "Flexi",
  "gimcat": "GIMСАT",
  "glance": "Glance",
  "harper": "Harper",
  "keratin_plus": "KERATIN+",
  "kissa": "Kissa",
  "kott": "Kott",
  "lamour": "L'AMOUR",
  "libra": "LIBRA",
  "little_one": "Little One",
  "mf_expert": "MF Expert",
  "mr_bruno": "Mr. Bruno",
  "mr_buffalo": "Mr.Buffalo",
  "mr_fresh": "Mr.Fresh",
  "natural_trainer": "NATURAL TRAINER",
  "papa_mama_pet": "Papa&Mama Pet",
  "probalance": "ProBalance",
  "prokhvost": "ProХвост",
  "relaxivet": "Relaxivet",
  "rio": "RIO",
  "sumplast": "SumPlast",
  "super_benek": "Super Benek",
  "super_benek_corn_cat": "Super Benek Corn Cat",
  "tamachi": "Tamachi",
  "unitabs": "Unitabs",
  "aksessuary": "Аксессуары",
  "alpijskie_luga": "Альпийские луга",
  "vit_aktiv": "Вит-Актив",
  "vkusnaya_miska": "Вкусная миска",
  "gpi": "Джи Пи Ай",
  "imunozal": "Имунозал",
  "kotu": "КОТУ",
  "multilakomki": "МультиЛакомки",
  "nefrolan": "Нефролан",
  "omega": "Омега",
  "stop_problema": "Стоп-проблема",
  "chistotel": "Чистотел"
};

export const brands = Object.values(brandLinks)


export const category_products = {}
let idx = 0
for (let item of category_routes) {
  (category_products as any)[item] = {}
  idx += 1
  data[item].categories.forEach((k: any, y: number) => {
    (category_products as any)[item][k.href] = {
      "title": k.title,
      "breadcrumb": k.breadcrumb,
      "href": k.href,
      "items": Array(5).fill(
        {
          "title": "Сухой корм для кошек",
          "href": "suhoj-korm",
          "products": Array(10).fill({
            "id": "2738",
            "type": "Сухой корм",
            "title": "ProBalance Sterilized для стерилизованных кошек",
            "images": ["/images/products/korm_1_1.webp", "/images/products/korm_1_2.webp"],
            "in_stock": true,
            "prices": [
              {
                "amount": 130.25,
                "wage": "10 кг",
                "disc_percent": 7.4,
                "disc_amount": 120.60
              },
              {
                "amount": 24.49,
                "wage": "1.8 кг",
                "disc_percent": 7.3,
                "disc_amount": 22.70
              },
              {
                "amount": 5.91,
                "wage": "400гр",
                "disc_percent": 6.9,
                "disc_amount": 5.50
              },
            ],
            "brand": "ProBalance",
            "taste": "Курица",
            "age": "Взрослые кошки",
            "category": "Сухой корм",
            "purpose": "Основной рацион",
            "diet": "Стерилизация",
            "country": "Россия",
            "animal_type": "Кошка",
            "package_type": "Мешок",
            "short_description": "Полнорационный сбалансированный сухой премиум класса для кастрированных котов и стерилизованных кошек. Корм рекомендован для ежедневного кормления взрослых кошек всех пород.",
            "description": <div>
              <p>Полнорационный сбалансированный сухой <strong>корм ProBalance Sterilized</strong> премиум класса для кастрированных котов и стерилизованных кошек. Корм рекомендован для ежедневного кормления взрослых кошек всех пород.
                Корм Probalance Sterilized разработан практикующими ветеринарами из Дании для кормления стерилизованных и кастрированных питомцев. Согласно проведенным исследованиям, такие питомцы становятся менее подвижными, склонны к лишнему весу и возникновению мочекаменной болезни. Все это учтено в рецептуре корма.</p>
              <p>Преимущества корма:</p>
              <ul>
                <li>Баланс питательных веществ и калорий корма помогает поддерживать вес животного на оптимальном уровне.</li>
                <li>В корм входит запатентованный сбор из целебных трав, который обладает общеукрепляющим и тонизирующим свойствами и помогает иммунитету.</li>
                <li>Корм стимулирует потребление воды животным, тем самым увеличивая объем мочи и снижая риск образования камней в мочевыводящих путях (профилактика мочекаменной болезни).</li>
                <li>L-карнитин способствует сжиганию лишних жиров в организме.</li>
              </ul>
              <p>Probalance – баланс вкуса и пользы. Натуральный сбалансированный рацион на каждый день.</p>
            </div>,
            "composition": <div>
              <p>Дегидратированное мясо птицы мин. 30 % (в т. ч. из курицы мин. 23 %), рис, ячмень, протеины растительного происхождения, куриный жир, горох, жом свекловичный, натуральные вкусоароматические добавки, пивные дрожжи (источник витаминов группы В), льняное семя (источник Омега-3 и Омега-6 жирных кислот), яичный порошок, витаминно-минеральная добавка для кошек (витамины А, D3, Е, В1, В2, В3, В4, В5, В6, В9 (фолиевая кислота), В12, Н (биотин), железо, медь, цинк, марганец, йод, селен), соль, рыбий жир, фитокомозиция (календулы цветки, клюква, ромашка, алтей корень, исландский мох), таурин (для здоровья сердца и отличного зрения), лизин (помогает укреплять иммунитет), пребиотик, экстракт Юкки Шидигера (снижает запах фекалий), L-карнитин (способствует сжиганию жиров в организме).Добавки, сохраняющие продукт: мико карб, натуральные антиоксиданты (смесь токоферолов).</p>
              <p>Энергетическая ценность: 361 ккал / 100 г <br />Протеин – 32%, жир – 12%, клетчатка – 4%, зола – 6%, влажность – 10%, кальций – 1,1%, фосфор – 0,9%, витамин А - 5000 МЕ/кг, витамин D3 – 500 МЕ/кг, витамин Е – 45 мг/кг, витамин В1 (тиамин) – 5 мг, витамин В2 (рибофлавин) – 4 мг, витамин В3 (ниацин) – 7 мг, витамин В4 (холин хлорид) – 2400 мг, витамин В5 (пантотеновая кислота) – 7 мг, витамин В6 (пиридоксин) – 4 мг, витамин В9 (фолиевая кислота) – 1 мг, витамин В12 – 0,02 мг, витамин Н (биотин) – 0,1 мг, железо – 80 мг, медь – 5 мг, цинк – 75 мг, марганец – 7,5 мг, йод – 1,5 мг, селен – 0,4 мг</p>
            </div>
          }).map((e, i) => ({ ...e, id: +e.id + i + '' }))
        }
      ).map((e, i) => ({ ...e, title: subcategories[i], href: subhrefs[i], products: e.products.map((k: any, x: any) => ({ ...k, id: String(idx) + String(y) + String(i) + String(x) })) }))
    }
  })
}
