import React from 'react'

type Props = {
  className?: string
}

const CompareIcon = ({ className }: Props) => {
  return (
    <svg className={className} width="16" height="21" viewBox="0 0 16 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="4" width="2" height="17" rx="1" fill="#333333" />
      <rect x="7" width="2" height="21" rx="1" fill="#333333" />
      <rect x="14" y="8" width="2" height="13" rx="1" fill="#333333" />
    </svg>
  )
}

export default CompareIcon