import React from 'react'

type Props = {
  color?: string
}

const ProfileIcon = ({ color = '#004E42' }: Props) => {
  return (
    <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M14 16V14.3333C14 12.4924 12.5449 11 10.75 11H4.25C2.45507 11 1 12.4924 1 14.3333V16M10.75 4.33333C10.75 6.17428 9.29493 7.66667 7.5 7.66667C5.70507 7.66667 4.25 6.17428 4.25 4.33333C4.25 2.49238 5.70507 1 7.5 1C9.29493 1 10.75 2.49238 10.75 4.33333Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>

  )
}

export default ProfileIcon