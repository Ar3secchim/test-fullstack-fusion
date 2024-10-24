import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, label, ...props }, ref) => (
    <div className="flex flex-col gap-2 w-full">
      <label htmlFor={ref?.toString()} className="text-md font-medium">
        {label}
      </label>
      <input
        id={ref?.toString()}
        type={type}
        className={twMerge(
          ` border rounded-lg p-2 focus:border-purple-500 ${className}`,
        )}
        ref={ref}
        {...props}
      />
    </div>
  ),
);

export default Input;
