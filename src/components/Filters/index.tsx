'use client'

import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Collapse, Input, InputAdornment, OutlinedInput, Slider } from '@mui/material';
import ArrowIcon from '@/src/icons/Arrow';
import Button from '../Button';

export type FilterProps = {
  brands: string[]
  className?: string
  withBrands?: boolean
}

type BrandT = { id: number; item: string; }
const defaultPrices = [0.1, 680]

export default function Filters({ brands, className, withBrands = true }: FilterProps) {
  const defaultChecked = Array(brands.length).fill(false)

  const [checked, setChecked] = React.useState(defaultChecked);
  const [open, setOpen] = React.useState(false);
  const [FromToPrice, setFromToPrice] = React.useState([...defaultPrices]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    setChecked(prev => {
      const arr = [...prev]
      arr[index] = event.target.checked
      return arr
    })
  };

  const _brands = React.useMemo(() => {
    const first: BrandT[] = []
    const sec: BrandT[] = []

    brands.forEach((e, i) => {
      if (i <= 5) {
        first.push({ id: i, item: e })
      } else {
        sec.push({ id: i, item: e })
      }
    })

    return {
      first, sec
    }
  }, [])

  const rand_count = React.useMemo(() => {
    return [46, 32, 50, 26, 22, 36, 49, 19, 22, 16, 31, 10, 34, 50, 0, 32, 50, 25, 3, 48, 46, 32, 50, 26, 22, 36, 49, 19, 22, 16, 31, 10, 34, 50, 0, 32, 50, 25, 3, 48, 46, 32, 50, 26, 22, 36, 49, 19, 22, 16, 31, 10, 34, 50, 0, 32, 50, 25, 3, 48]
  }, [])

  const filterButton = React.useMemo(() => {
    if (FromToPrice[0] === defaultPrices[0] && FromToPrice[1] === defaultPrices[1] && checked.filter(e => e === true).length === 0) {
      return false
    }
    return true
  }, [FromToPrice, checked])


  const getLabel = (name: string, i: number) => {
    const num = rand_count[i]
    const span = num !== 0 ? `+${num}` : `${num}`

    return <span className='flex justify-between w-full text-body-S font-semibold'>
      <span>{name}</span>
      {!checked[i] && <span className='text-body-XXXS font-medium bg-gray py-1 px-2 rounded-mdm'>{span}</span>}
    </span>
  }

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setFromToPrice((newValue as number[]));
  };

  const handleInputChange = (index: number, event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const newValue = [...FromToPrice];
    newValue[index] = event.target.value === '' ? 0 : Number(event.target.value);
    setFromToPrice(newValue);
  };

  const handleBlur = () => {
    if (FromToPrice[0] < 0.1) {
      setFromToPrice([0.1, FromToPrice[1]]);
    }
    if (FromToPrice[1] > 680) {
      setFromToPrice([FromToPrice[0], 680]);
    }
  };

  const resetFilters = () => {
    setChecked(defaultChecked)
    setFromToPrice(defaultPrices)
  }

  const resetBtnCn = !filterButton ? "text-gray-dark2 hover:cursor-not-allowed" : "text-gray-dark"

  return (
    <div className={`${className} max-w-[290px]`}>
      <h3 className='text-header-M text-black mb-3'>Фильтры</h3>
      {withBrands && <><p className='text-black font-bold'>Бренд</p>
        <div className="flex flex-col mt-3">
          {_brands.first.map((e, i) => (
            <FormControlLabel
              classes={{
                label: "w-full",
              }}
              key={i}
              label={getLabel(e.item, e.id)}
              control={<Checkbox size='small' color='secondary' checked={checked[e.id]} onChange={(ev) => handleChange(ev, e.id)} />}
            />
          ))}
          <Collapse className='flex flex-col' in={open} timeout="auto" unmountOnExit classes={
            {
              wrapperInner: "flex flex-col"
            }
          }>
            {_brands.sec.map((e, i) => (
              <FormControlLabel
                classes={{
                  label: "w-full",
                }}
                key={i}
                label={getLabel(e.item, e.id)}
                control={<Checkbox size='small' color='secondary' checked={checked[e.id]} onChange={(ev) => handleChange(ev, e.id)} />}
              />
            ))}
          </Collapse>
          <button className='flex items-center gap-2 mt-2 text-body-S text-green hover:text-green-dark2 font-normal max-w-fit stroke-black' onClick={() => setOpen(prev => !prev)}>
            {open ? <p>Скрыть</p> : <p>Показать еще {_brands.sec.length}</p>}
            {open ? <ArrowIcon view='up' /> : <ArrowIcon view='down' />}
          </button>
        </div></>}
      <p className='text-black font-bold mt-5 mb-3'>Цена</p>
      <div className='flex'>
        <OutlinedInput
          size='small'
          color='secondary'
          className='!rounded-r-none'
          classes={{
            "focused": "shadow-round-green"
          }}
          value={FromToPrice[0]}
          onChange={(event) => handleInputChange(0, event)}
          onBlur={handleBlur}
          inputProps={{
            step: 0.1,
            min: 0.1,
            max: 680,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <span className='bg-gray-light border-gray-dark2 border-opacity-50 border-t border-b text-gray-dark2 flex items-center px-2 font-normal text-body-S'>-</span>
        <OutlinedInput
          size='small'
          color='secondary'
          className='!rounded-none'
          classes={{
            "focused": "shadow-round-green"
          }}
          value={FromToPrice[1]}
          onChange={(event) => handleInputChange(1, event)}
          onBlur={handleBlur}
          inputProps={{
            step: 0.1,
            min: 0.1,
            max: 680,
            type: "number",
            "aria-labelledby": "input-slider",
          }}
        />
        <span className='bg-gray-light border-gray-dark2 border-opacity-50 border-t border-r border-b text-gray-dark flex items-center px-2 rounded-r-[4px] font-normal text-body-S'>BYN</span>
      </div>
      <Slider
        className='mt-4 px-5'
        color='secondary'
        style={{ color: "#00c259" }}
        classes={{
          thumb: 'shadown-round border border-white border-2'
        }}
        value={FromToPrice}
        min={0.1}
        max={680}
        onChange={handleSliderChange}
        valueLabelDisplay="auto"
      />
      <div className='flex justify-between'>
        <div className='flex flex-col gap-1 items-center relative'>
          <div className='w-[2px] h-3 bg-gray-dark2 opacity-50'></div>
          <p className='text-body-XXS font-normal absolute -bottom-5'>{defaultPrices[0]}</p>
        </div>
        <div className='flex flex-col gap-1 items-center relative'>
          <div className='w-[2px] h-1 bg-gray-dark2 opacity-50'></div>
          <p className='text-body-XXS font-normal text-gray-dark2 absolute -bottom-5'>{(defaultPrices[1] / 5 * 2).toFixed(2)}</p>
        </div>
        <div className='flex flex-col gap-1 items-center relative'>
          <div className='w-[2px] h-1 bg-gray-dark2 opacity-50'></div>
          <p className='text-body-XXS font-normal text-gray-dark2 absolute -bottom-5'>{(defaultPrices[1] / 5 * 3).toFixed(2)}</p>
        </div>
        <div className='flex flex-col gap-1 items-center relative'>
          <div className='w-[2px] h-1 bg-gray-dark2 opacity-50'></div>
          <p className='text-body-XXS font-normal text-gray-dark2 absolute -bottom-5'>{(defaultPrices[1] / 5 * 4).toFixed(2)}</p>
        </div>
        <div className='flex flex-col gap-1 items-center relative'>
          <div className='w-[2px] h-3 bg-gray-dark2 opacity-50'></div>
          <p className='text-body-XXS font-normal absolute -bottom-5'>{defaultPrices[1]}</p>
        </div>
      </div>
      <div className='flex gap-3 mt-15 justify-between'>
        <button
          className={`${resetBtnCn} font-normal`}
          disabled={!filterButton}
          onClick={() => resetFilters()}
        >Сбросить</button>
        <Button
          view='green'
          className={`px-1 font-normal text-white rounded-xs ${!filterButton && 'cursor-not-allowed'}`}
          disabled={!filterButton}
        >
          Выберите фильтры
        </Button>
      </div>
    </div>
  );
}
