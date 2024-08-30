import React from "react";

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  icon?: React.ReactNode;
  text?: string;
  primary?: boolean;
  secondary?: boolean;
  disabled?: boolean;
  loading?: boolean;
  ariaLabel?: string;
};

export function Button({
  children,
  onClick,
  type = "button",
  className = "",
  icon,
  text,
  primary,
  secondary,
  disabled,
  ariaLabel,
}: ButtonProps) {
  const primaryBtn =
    "flex bg-orange-300 hover:bg-orange-400 hover:ease-in-out duration-300 text-xl hover:text-white py-3 px-4 border border-orange-300 hover:border-transparent rounded mb-2 md:mb-0 disabled:opacity-50 disabled:cursor-not-allowed";
  const secondaryBtn =
    "flex bg-transparent hover:bg-orange-400 hover:ease-in-out duration-300 text-xl hover:text-white py-3 px-4 border border-orange-300 hover:border-transparent rounded mb-2 md:mb-0 disabled:opacity-50 disabled:cursor-not-allowed";

  const buttonClass = `${
    primary ? primaryBtn : secondary ? secondaryBtn : ""
  } ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClass}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {icon && <span className="self-center">{icon}</span>}
      {text && <span>{text}</span>}
      {children}
    </button>
  );
}
