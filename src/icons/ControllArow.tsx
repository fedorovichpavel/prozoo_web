import React, { useMemo } from 'react'

interface ControllArrowIconProps {
  cn?: string;
  view?: 'left' | 'right' | 'up' | 'down';
  color?: 'white' | 'green';
  strokeWidth?: string
}

const ControllArrowIcon = ({
  cn,
  view = 'left',
  color = 'green',
  strokeWidth = '2'
}: ControllArrowIconProps) => {

  const colors = {
    'white': '#fff',
    'green': '#00C259'
  }

  const views = {
    left: 0,
    right: 180,
    up: 90,
    down: 270,
  }

  const iconStyles = useMemo(() => ({
    'transform': `rotate(${views[view]}deg)`,
    'transition': 'all 0.2s easy-out 0s',
  }), [view])

  const pathColor = useMemo(() => (
    colors[color]
  ), [color])

  return (
    <svg className={cn} style={iconStyles} width="13" height="22" viewBox="0 0 13 22" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.75 21L1.75 11L11.75 1" stroke={pathColor} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default ControllArrowIcon
