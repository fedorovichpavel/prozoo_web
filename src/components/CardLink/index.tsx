import Link from 'next/link'
import React from 'react'

type Props = {
  view?: 'card' | 'publication'
  withShadow?: boolean
  className?: string
  imageClassName?: string
  title: string
  subtitle?: string
  href: string
  image: string
  style?: React.CSSProperties
}
const CardLink = ({
  view = 'card',
  withShadow = false,
  className,
  imageClassName,
  title,
  subtitle,
  href,
  image,
  style = {}
}: Props) => {

  const textClassName = view === 'card' ? "absolute top-2 left-3 lg:top-4 lg:left-6" : "absolute left-2 bottom-1 md:bottom-4 md:left-6 p-1 md:p-2 xl:p-5"
  const titleClassName = view === 'card' ? "text-header-S lg:text-header-M xl:text-header-L text-dark" : "text-header-S xl:text-header-M text-white font-semibold xs:max-md:leading-4"

  return (
    <Link className={`${className} hover:opacity-80 relative rounded-sm flex flex-col justify-end transition_easy`} style={style} href={href}>
      {withShadow && <div className='absolute rounded-xs opacity-25 w-full h-full bg-black'></div>}
      <div className={textClassName}>
        <p className={titleClassName}>{title}</p>
        {subtitle && <p className='mt-1 text-white font-normal text-body-S xl:text-body-M xs:max-md:leading-4'>{subtitle}</p>}
      </div>
      <img className={`${imageClassName} rounded-xs`} src={image} alt={title} />
    </Link>
  )
}

export default CardLink