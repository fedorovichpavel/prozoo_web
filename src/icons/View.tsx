import React from 'react'

type Props = {
  cn?: string
}

const ViewIcon = ({ cn }: Props) => {
  return (
    <svg className={cn} width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.5 9.99951C1.5 9.99951 6.04545 1.24951 14 1.24951C21.9545 1.24951 26.5 9.99951 26.5 9.99951C26.5 9.99951 21.9545 18.7495 14 18.7495C6.04545 18.7495 1.5 9.99951 1.5 9.99951Z" stroke="#7A9388" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M14 13.7495C16.0711 13.7495 17.75 12.0706 17.75 9.99951C17.75 7.92844 16.0711 6.24951 14 6.24951C11.9289 6.24951 10.25 7.92844 10.25 9.99951C10.25 12.0706 11.9289 13.7495 14 13.7495Z" stroke="#7A9388" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ViewIcon