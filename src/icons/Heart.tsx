import React from 'react'

type Props = {
  className?: string
}
const HeartIcon = ({ className }: Props) => {
  return (
    <svg className={className} width="25" height="23" viewBox="0 0 25 23" fill="inherit" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.66425 11.359L12.25 21.2998L21.8358 11.359C22.9014 10.254 23.5 8.75516 23.5 7.19236C23.5 3.93799 20.956 1.2998 17.8179 1.2998C16.3109 1.2998 14.8656 1.92062 13.8 3.02569L12.25 4.63314L10.7 3.02569C9.63436 1.92063 8.1891 1.2998 6.68211 1.2998C3.54397 1.2998 1 3.93799 1 7.19236C1 8.75516 1.59865 10.254 2.66425 11.359Z" stroke="inherit" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default HeartIcon