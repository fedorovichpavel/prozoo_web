'use client'

import Link from 'next/link'
import React, { FC, useEffect, useRef, useState } from 'react'
import LinkButton from '../LinkButton'
import ArrowIcon from '@/src/icons/Arrow'


type NavigationItemChildren = {
  title: string,
  href: string
}
export type NavigationItem = {
  title: string,
  childrens?: NavigationItemChildren[]
  href?: string
  isButton?: boolean
}

interface NavigationProps {
  items: NavigationItem[]
  className?: string
}

const Navigation: FC<NavigationProps> = ({
  className,
  items
}) => {

  const [openedItem, setOpenedItem] = useState<string | null>(null)
  const navRef = useRef<HTMLUListElement>(null);

  const liClassName = 'cursor-pointer'
  const dropDownClassName = 'absolute top-10 bg-white p-2 rounded shadow-round max-w-40 flex flex-col z-50'

  const clickNavItem = (key: string) => {
    if (openedItem == key) {
      setOpenedItem(null)
    } else {
      setOpenedItem(key)
    }
  }

  const createNavItem = (key: string, title: string, childrens?: NavigationItemChildren[], isButton: boolean = false, href?: string) => {
    if (isButton || !childrens) {
      return isButton ? <li key={key} className={liClassName}>
        <LinkButton href={href!} view='special'>
          {title}
        </LinkButton>
      </li> : <li key={key} className={`${liClassName} px-3`}>
        <Link href={href!}>
          {title}
        </Link>
      </li>
    } else {
      return <li key={key} onClick={() => clickNavItem(key)} className={`${liClassName} flex items-center gap-3 stroke-black`}>
        <p className='hover:opacity-6'>{title}</p> <ArrowIcon view={openedItem == key ? 'up' : 'down'} />
        <ul className={`${openedItem == key ? '' : 'hidden'} ${dropDownClassName}`}>
          {childrens!.map((item, index) => (
            <Link key={`child-${index}${key}`} scroll={false} href={item.href}>
              <li key={`sub-nav-${index}${key}`} className='hover:bg-secondary-light rounded-sm p-2'>
                <p className='text-body-M leading-5 text-black font-semibold hover:text-blue'>{item.title}</p>
              </li>
            </Link>
          ))}
        </ul>
      </li>
    }
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenedItem(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className={`${className} flex gap-14 max-md:gap-8 max-sm:flex-col max-sm:items-start`}>
      <ul ref={navRef} className='flex items-center gap-4 text-body-M max-[1100px]:text-body-S text-black relative'>
        {items.map((item, index) => createNavItem(`nav${index}`, item.title, item.childrens, item.isButton, item.href))}
      </ul>
    </nav>
  )
}

export default Navigation