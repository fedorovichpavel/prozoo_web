import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  href: string;
  view?: 'primary' | 'special' | 'primary-dark' | 'white' | 'secondary' | 'primary-green' | 'secondary-green' | 'green-gradient' | 'gray'
}

const LinkButton = ({
  children,
  className = "",
  href,
  onClick,
  view = 'white',
  icon,
}: Props) => {
  const baseClassNames = "h-9 flex items-center text-center text-body-S font-bold rounded-lg px-6 py-3 border-2 transition_easy";
  const bgClassNames = {
    primary: "bg-secondary hover:bg-primary text-white active:bg-button-pressed border-white",
    special: "bg-[#189356] hover:bg-primary text-white active:bg-button-pressed border-white",
    'primary-dark': "bg-primary hover:bg-secondary text-white active:bg-button-pressed border-white",
    white: "bg-white hover:opacity-80 active:bg-button-pressed border-white text-primary",
    secondary: "bg-transparent hover:bg-white hover:border-white active:bg-black border-primary text-primary",
    'primary-green': "bg-transparent hover:text-white hover:bg-secondary active:bg-black border-secondary text-secondary",
    'secondary-green': "bg-transparent hover:bg-secondary hover:text-white active:bg-black border-secondary text-secondary",
    'green-gradient': "gradient_button text-white active:bg-button-pressed border-white",
    gray: "bg-gray-light text-gray-dark2 hover:bg-secondary hover:text-white active:bg-button-pressed border-white",
  }
  const disabledClassNames = "disabled:bg-button-disabled disabled:opacity-20";
  const focusedClassNames =
    "focus-visible:ring-4 focus-visible:ring-border-focused focus-visible:outline-none";

  return (
    <Link
      href={href}
      className={`${className} ${baseClassNames} ${bgClassNames[view]} ${focusedClassNames} ${disabledClassNames}`}
      onClick={onClick}
    >
      {icon && <span className="relative -left-2">{icon}</span>}{children}
    </Link>
  );
};

export default LinkButton;
