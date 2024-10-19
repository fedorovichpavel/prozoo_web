'use client'

import React, { ReactNode } from 'react'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

export type TBreadCrumbTranslRoute = {
  [K: string]: string;
}

type TBreadCrumbProps = {
  homeElement: ReactNode,
  separator: ReactNode,
  containerClasses?: string,
  linkClasses?: string,
  listClasses?: string,
  activeClasses?: string,
  capitalizeLinks?: boolean,
  translatedRoutes?: TBreadCrumbTranslRoute
}

const NextBreadcrumb = ({ homeElement, separator, containerClasses, linkClasses, listClasses, activeClasses, capitalizeLinks, translatedRoutes }: TBreadCrumbProps) => {

  const paths = usePathname()
  const pathNames = paths ? paths.split('/').filter(path => path) : []

  return (
    <div className='max-md:text-body-S'>
      <ul className={containerClasses}>
        <li className={listClasses}><Link className={linkClasses} href={'/'}>{homeElement}</Link></li>
        {pathNames.length > 0 && separator}
        {
          pathNames.map((link, index) => {
            let href = `/${pathNames.slice(0, index + 1).join('/')}`
            let itemClasses = paths === href ? `${listClasses} ${activeClasses}` : listClasses
            let itemLink = null
            if (translatedRoutes && link in translatedRoutes) {
              itemLink = translatedRoutes[link]
            } else {
              itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link
            }
            return (
              <React.Fragment key={index}>
                <li className={itemClasses} >
                  <Link className={linkClasses} href={href}>{itemLink}</Link>
                </li>
                {pathNames.length !== index + 1 && separator}
              </React.Fragment>
            )
          })
        }
      </ul>
    </div>
  )
}

export default NextBreadcrumb