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
  arrowView?: 'inside' | 'outside'
  isExpanded?: boolean
}

interface ICustomArrowProps extends CustomArrowProps {
  isHovered?: boolean
}

function SampleNextArrow(props: ICustomArrowProps) {
  const { isHovered, onClick } = props;

  const baseClassName = 'slick-next before:absolute before:hidden relative transition_easy z-10'
  const hoveredClassName = isHovered ? '!right-14 opacity-100' : '!right-0 opacity-0'

  return (
    <div
      className={`${baseClassName} ${hoveredClassName}`}
      onClick={onClick}
    >
      <div className={"flex opacity-70 hover:opacity-100 items-center absolute bg-white p-3 rounded-lg w-9 h-9"}>
        <ControllArrowIcon view="right" />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: ICustomArrowProps) {
  const { isHovered, onClick } = props;

  const baseClassName = 'slick-prev before:absolute before:hidden relative transition_easy z-10'
  const hoveredClassName = isHovered ? '!left-14 opacity-100' : '!left-0 opacity-0'

  return (
    <div
      className={`${baseClassName} ${hoveredClassName}`}
      onClick={onClick}
    >
      <div className={"flex opacity-70 hover:opacity-100 items-center absolute bg-white p-3 rounded-lg w-9 h-9"}>
        <ControllArrowIcon view="left" />
      </div>
    </div>
  );
}

function OutsideNextArrow(props: ICustomArrowProps) {
  const { isHovered, onClick } = props;
  const [divHover, setDivHover] = useState(false)

  const baseClassName = `slick-next before:absolute before:hidden relative transition_easy z-10 !right-4 !-top-10`

  return (
    <div
      className={`${baseClassName}`}
      onClick={onClick}
    >
      <div
        className={"flex items-center absolute bg-white hover:bg-green p-3 border-2 border-green rounded-lg w-9 h-9 transition_easy"}
        onMouseEnter={() => setDivHover(true)}
        onMouseLeave={() => setDivHover(false)}
      >
        <ControllArrowIcon strokeWidth='3' view="right" cn="transition_easy" color={divHover ? 'white' : 'green'} />
      </div>
    </div>
  );
}

function OutsidePrevArrow(props: ICustomArrowProps) {
  const { isHovered, onClick } = props;
  const [divHover, setDivHover] = useState(false)

  const baseClassName = 'slick-next before:absolute before:hidden relative transition_easy z-10 !right-16 !-top-10'

  return (
    <div
      className={`${baseClassName}`}
      onClick={onClick}
    >
      <div
        className={"flex items-center absolute bg-white hover:bg-green p-3 border-2 border-green rounded-lg w-9 h-9 transition_easy"}
        onMouseEnter={() => setDivHover(true)}
        onMouseLeave={() => setDivHover(false)}
      >
        <ControllArrowIcon strokeWidth='3' view="left" cn="transition_easy" color={divHover ? 'white' : 'green'} />
      </div>
    </div>
  );
}

function customDot(index: number, currentSilde: number) {

  const activeClassName = currentSilde === index ? "bg-green w-4 h-4" : "bg-gray w-2 h-2 before:w-4 before:h-4 before:content-[''] before:absolute before:-top-1 before:-left-1"

  return <div className="w-full h-full flex items-center justify-center">
    <div className={` relative ${activeClassName} rounded-lg hover:bg-green transition_easy`}></div>
  </div>
}

const CustomSlider = ({
  className,
  settings,
  items,
  arrowView = 'inside',
  isExpanded = false
}: Props) => {
  const [isHovered, setHovered] = useState<boolean>(false)
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
    nextArrow: arrowView == 'inside' ? <SampleNextArrow isHovered={isHovered} /> : <OutsideNextArrow isHovered={isHovered} />,
    prevArrow: arrowView == 'inside' ? <SamplePrevArrow isHovered={isHovered} /> : <OutsidePrevArrow isHovered={isHovered} />,
    beforeChange: (_: number, nextSlide: number) => setActiveSlide(nextSlide),
    customPaging: (i: number) => customDot(i, activeSilde),
    dotsClass: "slick-dots !-bottom-11 !flex items-center justify-center",
    ...settings
  };

  const baseClassName = isExpanded ? "slider-expanded" : ""

  return (
    <div
      className={`slider-container mb-16 ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Slider {..._settings} className={baseClassName}>
        {items.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}
      </Slider>
    </div>
  );
}

export default CustomSlider;