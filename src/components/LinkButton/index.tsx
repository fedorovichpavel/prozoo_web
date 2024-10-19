import Link from "next/link";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
  className?: string;
  href: string;
  view?: 'primary' | 'secondary' | 'green' | 'primary-green' | 'secondary-green' | 'green-gradient' | 'gray'
}

const LinkButton = ({
  children,
  className = "",
  href,
  onClick,
  view = 'primary',
  icon,
}: Props) => {
  const baseClassNames = "h-9 flex items-center text-center text-body-S font-bold rounded-lg px-6 py-3 border-2 transition_easy";
  const bgClassNames = {
    primary: "bg-white hover:opacity-80 active:bg-button-pressed border-white text-green-dark2",
    secondary: "bg-transparent hover:bg-white hover:border-white active:bg-black border-green-dark2 text-green-dark2",
    'primary-green': "bg-transparent hover:text-white hover:bg-green active:bg-black border-green text-green",
    'secondary-green': "bg-transparent hover:bg-green hover:text-white active:bg-black border-green text-green",
    green: "bg-green hover:bg-green-dark2 text-white active:bg-button-pressed border-white",
    'green-gradient': "gradient_button text-white active:bg-button-pressed border-white",
    gray: "bg-gray-light text-gray-dark2 hover:bg-green hover:text-white active:bg-button-pressed border-white",
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
