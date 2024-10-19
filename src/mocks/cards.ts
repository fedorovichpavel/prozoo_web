import cat from '@/src/images/category-cat.jpg'
import dog from '@/src/images/category-dog.jpg'
import hamster from '@/src/images/category-hamster.png'
import bird from '@/src/images/category-bird.png'

export const cards = [
  {
    "title": "Собакам",
    "href": "sobaki",
    "image": dog.src,
    "className": ""
  },
  {
    "title": "Кошкам",
    "href": "/koshki",
    "image": cat.src,
    "className": ""
  },
  {
    "title": "Птицам",
    "href": "/pticy",
    "image": bird.src,
    "className": "bg-[#a3e579]"
  },
  {
    "title": "Грызунам",
    "href": "/gryzuny",
    "image": hamster.src,
    "className": "bg-[#ecdd59]"
  },
]