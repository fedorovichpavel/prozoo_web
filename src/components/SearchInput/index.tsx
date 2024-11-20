import SearchIcon from '@/src/icons/Search';
import React, { ReactNode } from 'react'
import Button from '../Button';

interface Props {
  placeholder?: string;
  className?: string;
  inputclassName?: string;
  btnclassName?: string;
  onButtonClick?: () => void;
}

const SearchInput = ({
  placeholder = "",
  className = "",
  inputclassName = "",
  btnclassName = "",
  onButtonClick,
}: Props) => {

  const baseClassName = "text-black shadow-round rounded-lg flex items-center"
  const _inputCn = inputclassName || 'rounded-lg h-13 w-104 max-xl:w-72 py-2 px-6 font-medium outline-none'

  return (
    <div className={`${className} ${baseClassName}`}>
      <input
        className={_inputCn}
        placeholder={placeholder}
      />
      <Button
        className={`${btnclassName} relative flex items-center justify-center rounded-[50%] py-[0] px-[0] h-[2.5rem] w-10 mr-2`}
        onClick={onButtonClick}
        view='primary'
      >
        <SearchIcon className='absolute' />
      </Button>
    </div>
  )
}

export default SearchInput