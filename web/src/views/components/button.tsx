import * as React from "react";
import { twMerge } from "tailwind-merge";

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> { }

function Button({ children, className, ...props }: IButtonProps) {
  return (
    <button
      className={twMerge(
        `disabled:opacity-65 disabled:hover:bg-purple-700 w-full bg-purple-700 text-white  p-2 rounded-lg hover:bg-purple-200 font-medium ${className}`,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
