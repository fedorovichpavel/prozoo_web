'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import CardLink from '../CardLink'
import { cards } from '@/src/mocks/cards'
import { publications } from '@/src/mocks/publications'
import CustomSlider from '../Slider'

type PublicationType = {
  title: string;
  subtitle: string;
  image: string;
  image_type: string;
  href: string;
  category: string;
}

const initial = {
  width: 0,
  items: 4,
  pad: 24
}
const PublicationList = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [container, setContainer] = useState(initial);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        if (containerRef.current.offsetWidth <= 576) {
          setContainer({
            width: containerRef.current.offsetWidth,
            items: 2,
            pad: 8
          });
          return
        }
        if (containerRef.current.offsetWidth <= 768) {
          setContainer({
            width: containerRef.current.offsetWidth,
            items: 3,
            pad: 8
          });
          return
        }
        if (containerRef.current.offsetWidth <= 1240) {
          setContainer({
            width: containerRef.current.offsetWidth,
            items: 3,
            pad: 24
          });
          return
        }
        setContainer({
          width: containerRef.current.offsetWidth,
          items: 4,
          pad: 24
        });
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  const containers: { publications: PublicationType[], items: string[], width: string }[] = []

  publications.forEach((publication) => {
    switch (publication.image_type) {
      case 'landscape':
        let pushed = false
        for (let cont of containers) {
          if (pushed) {
            continue
          }
          if (cont.items.includes('landscape')) {
            cont.publications.push(publication)
            const index = cont.items.indexOf('landscape');
            if (index !== -1) {
              cont.items.splice(index, 1);
            }
            pushed = true
            break
          }
        }
        if (!pushed) {
          containers.push({
            publications: [publication],
            items: ['square', 'square'],
            width: 'full'
          });
        }
        break;
      case 'square':
        let square_pushed = false
        for (let cont of containers) {
          if (square_pushed) {
            continue
          }
          if (cont.items.includes('square')) {
            cont.publications.push(publication)
            const index = cont.items.indexOf('square');
            if (index !== -1) {
              cont.items.splice(index, 1);
            }
            square_pushed = true
            break
          }
        }
        if (!square_pushed) {
          containers.push({
            publications: [publication],
            items: ['square', 'landscape'],
            width: 'full'
          });
        }
        break;
      case 'portrait':
        // Добавляем ландшафтный элемент в свой контейнер
        containers.push({
          publications: [publication],
          items: [],
          width: 'half'
        });
        break;
      default:
        break;
    }
  });

  return <div ref={containerRef} className='max-[600px]:max-h-[400px] max-[600px]:overflow-y-hidden'>
    <CustomSlider className='!mb-0' items={containers.map((item, index) => <div key={index} className={`h-full flex flex-wrap ${item.width === 'half' && 'xs:max-sm:!w-full'} xs:max-sm:!h-full`} style={{ width: item.width == 'full' ? (container.width / container.items * 2) : (container.width / container.items) }}>
      {item.publications.map((e, i) => {
        const imgCn = container.width >= 576 ? `h-full object-cover ${e.image_type != 'square' ? `w-[${(container.width / container.items * 2)}px]` : `w-[${(container.width / container.items) - container.pad}px]`}` : `h-full object-cover ${e.image_type != 'square' ? `w-[${(container.width / container.items * 2)}px]` : `w-[${(container.width / container.items) - container.pad}px]`}`
        return <CardLink
          key={i}
          withShadow
          view='publication'
          style={{ width: e.image_type != 'square' ? `${(container.width / container.items * 2)}px` : `${(container.width / container.items) - container.pad}px` }}
          className={`m-1 md:m-3 ${e.image_type != 'portrait' ? 'h-[188px] md:h-[289px]' : 'h-[384px] md:h-[600px]'}`}
          imageClassName={imgCn}
          title={e.title}
          subtitle={e.subtitle}
          href={`/blog/${e.category}/${e.href}`}
          image={e.image}
        />
      })}</div>)} arrowView='outside' settings={
        {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: false,
          autoplay: false,
          variableWidth: true,
          responsive: [
            {
              breakpoint: 1240,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
          ]
        }
      } />
  </div>
}

export default PublicationList