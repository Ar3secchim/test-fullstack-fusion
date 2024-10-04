import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      className={twMerge(
        `border rounded-lg p-2 focus:border-purple-500 ${className}`,
      )}
      ref={ref}
      {...props}
    />
  ),
);

export default Input;
