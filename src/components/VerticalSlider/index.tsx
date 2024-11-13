'use client'

import React, { ReactNode, useState } from "react";
import Slider, { CustomArrowProps, Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ControllArrowIcon from "@/src/icons/ControllArow";

type Props = {
  className?: string
  settings?: Settings
  items: ReactNode[]
  dotsItems: ReactNode[]
  arrowView?: 'inside' | 'outside'
  isExpanded?: boolean
  inner_jsx?: ReactNode
}

function OutsideNextArrow(props: CustomArrowProps) {
  const { onClick } = props;
  const [divHover, setDivHover] = useState(false)

  const baseClassName = 'absolute cursor-pointer before:absolute before:hidden relative transition_easy z-30 !-left-[35%] !right-0 !bottom-10'

  return (
    <div
      className={`${baseClassName}`}
      onClick={onClick}
    >
      <div
        className={"flex items-center absolute bg-white hover:bg-secondary p-3 border border-secondary rounded-lg w-8 h-8 transition_easy"}
        onMouseEnter={() => setDivHover(true)}
        onMouseLeave={() => setDivHover(false)}
      >
        <ControllArrowIcon strokeWidth="4" view="down" cn="transition_easy" color={divHover ? 'white' : 'green'} />
      </div>
    </div>
  );
}

function OutsidePrevArrow(props: CustomArrowProps) {
  const { onClick } = props;
  const [divHover, setDivHover] = useState(false)

  const baseClassName = 'slick-prev before:absolute before:hidden relative transition_easy z-20 !-left-[35%] !top-0'

  return (
    <div
      className={`${baseClassName}`}
      onClick={onClick}
    >
      <div
        className={"flex items-center absolute bg-white hover:bg-secondary p-3 border border-secondary rounded-lg w-8 h-8 transition_easy"}
        onMouseEnter={() => setDivHover(true)}
        onMouseLeave={() => setDivHover(false)}
      >
        <ControllArrowIcon strokeWidth="4" view="up" cn="transition_easy" color={divHover ? 'white' : 'green'} />
      </div>
    </div>
  );
}

function customDot(index: number, item: ReactNode, currentSilde: number) {

  const activeClassName = currentSilde === index ? "" : "grayscale opacity-70 hover:opacity-100"

  return <div className={`w-25 h-25 flex items-center justify-center ${activeClassName}`}>
    {item}
    {/* <div className={` relative ${activeClassName} rounded-lg hover:bg-secondary transition_easy`}></div> */}
  </div>
}

const CustomVerticalSlider = ({
  className,
  settings,
  items,
  dotsItems,
  isExpanded = false,
  inner_jsx = null
}: Props) => {
  const [activeSilde, setActiveSlide] = useState<number>(0)

  const _settings = {
    dots: true,
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    vertical: true,
    verticalSwiping: true,
    adaptiveHeight: true,
    nextArrow: <OutsideNextArrow />,
    prevArrow: <OutsidePrevArrow />,
    beforeChange: (_: number, nextSlide: number) => setActiveSlide(nextSlide),
    customPaging: (i: number) => customDot(i, dotsItems[i], activeSilde),
    dotsClass: "slick-dots !top-15 !-left-[90%] !flex flex-col gap-28 z-20 items-center justify-start",
    ...settings
  };

  const baseClassName = isExpanded ? "slider-expanded" : ""

  return (
    <div
      className={`slider-container relative mb-16 ${className} w-100`}
    >
      {inner_jsx}
      <Slider {..._settings} className={baseClassName}>
        {items.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
      </Slider>
    </div>
  );
}

export default CustomVerticalSlider;