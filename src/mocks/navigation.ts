import { brandLinks } from "./data";

export const nav = [
  {
    "title": "Кошки",
    "footer_title": "Для кошек",
    "card_title": "Кошкам",
    "href": "/koshki",
    "childrens": [
      {
        "title": "Корм",
        "href": "/koshki/korm/"
      },
      {
        "title": "Наполнитель",
        "href": "/koshki/napolnitel/"
      },
      {
        "title": "Витамины и лакомства",
        "href": "/koshki/vitaminy-i-dobavki/"
      },
      {
        "title": "Косметика и средства для ухода и гигиены",
        "href": "/koshki/kosmetika-i-sredstva-po-uhodu/"
      },
      {
        "title": "Аксессуары",
        "href": "/koshki/aksessuary/"
      },
      {
        "title": "Все товары раздела \"Кошки\"",
        "href": "/koshki/"
      }
    ]
  },
  {
    "title": "Собаки",
    "footer_title": "Для собак",
    "card_title": "Собакам",
    "href": "sobaki",
    "childrens": [
      {
        "title": "Корм",
        "href": "/sobaki/korm/"
      },
      {
        "title": "Витамины и лакомства",
        "href": "/sobaki/vitaminy-i-dobavki/"
      },
      {
        "title": "Косметика и средства для ухода и гигиены",
        "href": "/sobaki/kosmetika-i-sredstva-po-uhodu/"
      },
      {
        "title": "Аксессуары",
        "href": "/sobaki/aksessuary/"
      },
      {
        "title": "Все товары раздела \"Собаки\"",
        "href": "/sobaki/"
      }
    ]
  },
  {
    "title": "Грызуны",
    "footer_title": "Для грызунов",
    "card_title": "Грызунам",
    "href": "/gryzuny",
    "childrens": [
      {
        "title": "Корм",
        "href": "/gryzuny/korm/"
      },
      {
        "title": "Лакомства",
        "href": "/gryzuny/lakomstva/"
      },
      {
        "title": "Уход и гигиена",
        "href": "/gryzuny/kosmetika-i-sredstva-po-uhodu/"
      },
      {
        "title": "Аксессуары",
        "href": "/gryzuny/aksessuary/"
      },
      {
        "title": "Все товары раздела \"Грызуны\"",
        "href": "/gryzuny/"
      }
    ]
  },
  {
    "title": "Птицы",
    "footer_title": "Для птиц",
    "card_title": "Птицам",
    "href": "/pticy",
    "childrens": [
      {
        "title": "Корм",
        "href": "/pticy/korm/"
      },
      {
        "title": "Витамины и добавки",
        "href": "/pticy/vitaminy-i-dobavki/"
      },
      {
        "title": "Лакомства",
        "href": "/pticy/lakomstva/"
      },
      {
        "title": "Уход и гигиена",
        "href": "/pticy/kosmetika-i-sredstva-po-uhodu/"
      },
      {
        "title": "Аксессуары",
        "href": "/pticy/aksessuary/"
      },
      {
        "title": "Все товары раздела \"Птицы\"",
        "href": "/pticy/"
      }
    ]
  },
  {
    "title": "Ветаптека",
    "href": "/vetapteka",
    "childrens": [
      {
        "title": "Ветеринарные корма для кошек",
        "href": "/vetapteka/veterinarnye-korma-dlya-koshek"
      },
      {
        "title": "Ветеринарные корма для собак",
        "href": "/vetapteka/veterinarnye-korma-dlya-sobak"
      },
      {
        "title": "Кормовые добавки",
        "href": "/vetapteka/korm-dobavki"
      },
      {
        "title": "Вывод шерсти",
        "href": "/vetapteka/vivod-shersti"
      },
      {
        "title": "Защита от блох и клещей",
        "href": "/vetapteka/zashita-ot-bloh-i-kleshei"
      },
      {
        "title": "Успокоительные средства",
        "href": "/vetapteka/uspokoitelnie-sredstva"
      },
      {
        "title": "Все товары раздела \"Ветаптека\"",
        "href": "/vetapteka/"
      }
    ]
  },
  {
    "title": "Очень большие покупки!",
    "href": "/optovye-pokupki/"
  },
  {
    "title": "По брендам",
    "childrens": Object.entries(brandLinks).map(([k, v]) => ({ "title": v, "href": `/brands/${k}` }))
  },
  {
    "title": "Акции",
    "href": "/specials/",
    "isButton": true
  }
]