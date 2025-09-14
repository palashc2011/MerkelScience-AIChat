import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function CustomButton({ children, style={}, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
        m-0 p-0
        bg-transparent
        outline-none
        !focus:outline-none
        !focus:border-none
        !focus:ring-0
        ${className}
      `}
      style={{
        // border: "none",
        ...style,
      }}
    >
      {children}
    </button>
  );
}