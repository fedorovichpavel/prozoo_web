import React from 'react'

type Props = {
  color?: string
}

const PhoneIcon = ({
  color = "#087616"
}: Props) => {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.9995 14.4767V17.1864C19.0037 18.2223 18.0723 19.0873 17.0264 18.9929C8.00006 19 1.00006 11.935 1.00713 2.96919C0.912936 1.92895 1.77364 1.00106 2.80817 1.00009H5.52331C5.96253 0.995773 6.38834 1.151 6.72137 1.43684C7.66819 2.24949 8.27719 5.00777 8.04287 6.10428C7.85993 6.96036 6.99696 7.55929 6.41025 8.14484C7.69864 10.4062 9.57471 12.2785 11.8405 13.5644C12.4272 12.9788 13.0274 12.1176 13.8851 11.935C14.9855 11.7008 17.7615 12.3106 18.5709 13.264C18.858 13.6021 19.0105 14.0337 18.9995 14.4767Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default PhoneIcon