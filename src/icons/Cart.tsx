import React from 'react'

type Props = {
  className?: string
  stroke?: string
}

const CartIcon = ({ className, stroke = 'white' }: Props) => {
  return (
    <svg className={className} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.1711 17.0263C16.9066 17.0263 15.8816 18.0513 15.8816 19.3158C15.8816 20.5802 16.9066 21.6053 18.1711 21.6053C19.4355 21.6053 20.4605 20.5802 20.4605 19.3158C20.4605 18.0513 19.4355 17.0263 18.1711 17.0263ZM18.1711 17.0263H7.14414C6.57446 17.0263 6.09147 16.6074 6.01091 16.0435L5.66071 13.5921M1 1H3.86184L4.18891 3.28947M4.18891 3.28947H4.43421H22.75L19.3158 13.5921H6.15132H5.66071M4.18891 3.28947L5.66071 13.5921M11.3026 19.3158C11.3026 20.5802 10.2776 21.6053 9.01316 21.6053C7.74872 21.6053 6.72368 20.5802 6.72368 19.3158C6.72368 18.0513 7.74872 17.0263 9.01316 17.0263C10.2776 17.0263 11.3026 18.0513 11.3026 19.3158Z" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default CartIcon