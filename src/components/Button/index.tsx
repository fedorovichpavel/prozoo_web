import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  view?: 'primary' | 'secondary' | 'green' | 'green2' | 'primary-green' | 'secondary-green' | 'green-gradient' | 'gray'
}

const Button = ({
  children,
  icon,
  className = "",
  onClick,
  type,
  disabled,
  view = 'primary',
}: Props) => {
  const baseClassNames = "h-9 flex items-center text-center text-body-S font-bold rounded-lg px-6 py-3 border-2 transition_easy";
  const bgClassNames = {
    primary: "bg-white hover:opacity-80 active:bg-button-pressed border-white text-green-dark2",
    secondary: "bg-transparent hover:bg-white hover:border-white active:bg-black border-green-dark2 text-green-dark2",
    'primary-green': "bg-transparent hover:text-white hover:bg-green active:bg-black border-green text-green",
    'secondary-green': "bg-transparent hover:bg-green hover:text-white active:bg-black border-green text-green",
    green: "bg-green hover:bg-green-dark2 text-white active:bg-button-pressed border-green hover:border-green-dark2",
    'green-gradient': "gradient_button text-white active:bg-button-pressed border-white",
    green2: "bg-green2 hover:bg-green-dark2 active:bg-button-pressed border-green hover:border-green-dark2",
    gray: "bg-gray-light text-gray-dark2 hover:bg-green hover:text-white active:bg-button-pressed border-white",
  }
  const disabledClassNames = "disabled:bg-button-disabled disabled:opacity-50";
  const focusedClassNames =
    "focus-visible:ring-4 focus-visible:ring-border-focused focus-visible:outline-none";

  return (
    <button
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={`${baseClassNames} ${bgClassNames[view]} ${focusedClassNames} ${disabledClassNames} ${className}`}
    >
      {icon && <span className="relative -left-2">{icon}</span>}{children}
    </button>
  );
};

export default Button;
