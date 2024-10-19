'use client'

import React, { FC, useCallback, useEffect, useRef, useState } from 'react'
import ArrowIcon from '@/src/icons/Arrow'
import { Collapse, Divider, List, ListItem, ListItemButton } from '@mui/material'


type MobileNavigationItemChildren = {
  title: string,
  href: string
}
export type MobileNavigationItem = {
  title: string,
  childrens?: MobileNavigationItemChildren[]
  href?: string
  isButton?: boolean
}

interface MobileNavigationProps {
  items: MobileNavigationItem[]
  setOpen: () => void;
  className?: string
}

const MobileNavigation: FC<MobileNavigationProps> = ({
  className,
  setOpen,
  items
}) => {

  const [openedItem, setOpenedItem] = useState<string | null>(null)
  const navRef = useRef<HTMLUListElement>(null);

  const liClassName = 'cursor-pointer'

  const clickNavItem = (key: string) => {
    if (openedItem === key) {
      setOpenedItem(null)
    } else {
      setOpenedItem(key)
    }
  }

  const createNavEl = useCallback((key: string, title: string, childrens?: MobileNavigationItemChildren[], isButton: boolean = false, href?: string) => {
    if (!childrens) {
      return <ListItemButton className='w-full' LinkComponent='a' href={href!} onClick={() => setOpen()}>
        {title}
      </ListItemButton>
    } else {
      return <>
        <ListItemButton className='w-full stroke-black' onClick={() => clickNavItem(key)}>
          {title} <ArrowIcon cn='ml-2' view={openedItem == key ? 'up' : 'down'} />
        </ListItemButton>
        <Collapse className='flex flex-col w-full' in={openedItem === key} timeout="auto" unmountOnExit classes={
          {
            wrapperInner: "flex flex-col"
          }
        }>
          <List className='flex flex-col'>
            {childrens!.map((item, index) => (
              <ListItem key={`child-${index}${key}`} className='!py-0 text-body-S'>
                <ListItemButton className='w-full' LinkComponent='a' href={item.href}>
                  {item.title}
                </ListItemButton>
              </ListItem>))}
          </List>
        </Collapse>
      </>
    }
  }, [openedItem])

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

    <List>
      {items.map((e, i) => (<React.Fragment key={i}><ListItem className='flex flex-col !items-start' disablePadding>
        {createNavEl(`nav${i}`, e.title, e.childrens, e.isButton, e.href)}
      </ListItem>
        <Divider />
      </React.Fragment>))}
    </List>
    // <nav className={`${className} flex gap-14 max-md:gap-8 max-sm:flex-col max-sm:items-start`}>
    //   <ul ref={navRef} className='flex flex-col items-center gap-4 text-body-M text-black relative'>
    //     {items.map((item, index) => createNavItem(`nav${index}`, item.title, item.childrens, item.isButton, item.href))}
    //   </ul>
    // </nav>
  )
}

export default MobileNavigation