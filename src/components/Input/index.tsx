import React, { ReactNode } from 'react'
import ArrowIcon from '@/src/icons/Arrow';

interface Props {
  className?: string;
  inputClassName?: string;
  max?: number | string | undefined;
  maxLength?: number | undefined;
  min?: number | string | undefined;
  minLength?: number | undefined;
  multiple?: boolean | undefined;
  name?: string | undefined;
  pattern?: string | undefined;
  placeholder?: string | undefined;
  readOnly?: boolean | undefined;
  required?: boolean | undefined;
  size?: number | undefined;
  src?: string | undefined;
  step?: number | string | undefined;
  type?: React.HTMLInputTypeAttribute | undefined;
  value?: string | readonly string[] | number | undefined;
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
  onUpArrowClick?: () => void | undefined;
  onDownArrowClick?: () => void | undefined;
}

const Input = ({
  className = "",
  inputClassName = "",
  type = undefined,
  onUpArrowClick = undefined,
  onDownArrowClick = undefined,
  ...rest
}: Props) => {

  const baseClassName = "text-black shadow-round rounded-lg flex items-center relative"
  const baseInputClassName = "rounded-lg h-12 w-45 py-2 px-2 text-center font-normal text-body-S outline-none"

  const onClick = (type: 'up' | 'down') => {
    if (type == 'up' && onUpArrowClick) {
      onUpArrowClick()
    } else if (type == 'down' && onDownArrowClick) {
      onDownArrowClick()
    }
  }

  return (
    <div className={`${className} ${baseClassName}`}>
      <input
        className={inputClassName || baseInputClassName}
        {...rest}
        type={type}
      />
      {type === 'number' && <div className='absolute flex flex-col gap-2 right-3 top-1/2 -translate-y-1/2'>
        <button onClick={() => onClick('up')} className='relative p-0 m-0 stroke-black hover:stroke-green expand-click-area-s-w'>
          <ArrowIcon strokeWidth='2' view='up' />
        </button>
        <button onClick={() => onClick('down')} className='relative p-0 m-0 stroke-black hover:stroke-green expand-click-area-s-w'>
          <ArrowIcon strokeWidth='2' />
        </button>
      </div>}
    </div>
  )
}

export default Input