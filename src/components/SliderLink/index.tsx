'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { ReactNode, useState } from "react";

type Props = {
  children: ReactNode
  href: string
  className?: string
  key?: string
}
export default function SliderLink({
  children,
  href,
  ...rest
}: Props) {
  const router = useRouter();
  const [mouseMoved, setMouseMoved] = useState(false);

  const handleClick = () => {
    if (!mouseMoved) {
      router.push(href);
    }
  };

  return (
    <span
      onMouseMove={() => setMouseMoved(true)}
      onMouseDown={() => setMouseMoved(false)}
      onMouseUp={() => handleClick()}
      style={{ textDecoration: "none", cursor: "pointer" }}
      {...rest}
    >
      {children}
    </span>
  );
}