import React, { useMemo } from 'react'

interface ArrowIconProps {
  cn?: string;
  view?: 'up' | 'down';
  strokeWidth?: string
}

const ArrowIcon = ({
  cn,
  view = 'down',
  strokeWidth = '1.5'
}: ArrowIconProps) => {

  const iconStyles = useMemo(() => ({
    'transform': `rotate(${view === 'down' ? 0 : 180}deg)`,
    'transition': 'all 0.2s easy-out 0s'
  }), [view])

  const baseCn = "stroke-inherit"

  return (
    <svg className={cn || baseCn} style={iconStyles} width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.25 1.5L5 5.25L8.75 1.5" stroke='inherit' strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ArrowIcon
