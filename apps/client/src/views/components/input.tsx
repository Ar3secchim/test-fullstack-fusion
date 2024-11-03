import { Info } from "lucide-react";
import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

import Button from "./button";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const showTooltip = () => (
  <div className="w-52 absolute left-0 mb-2 hidden group-hover:block bg-white border border-gray-300 p-2 rounded shadow-lg text-sm">
    O nome do herói tem que ser do universo da marvel e o nome tem quer ser em
    inglês. Exemplo: Storm, Beast, Thor, etc.
  </div>
);

const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ className, type, label, ...props }, ref) => (
    <div className="flex flex-col gap-2 w-full">
      {label === "Nome" ? (
        <label
          htmlFor={ref?.toString()}
          className="text-md font-medium flex items-center"
        >
          {label}
          <div className="relative group">
            <Button
              type="button"
              className="w-4 p-1 bg-transparent rounded-full hover:bg-transparent mr-2"
            >
              <Info size={14} color="#a855f7" />
            </Button>
            {showTooltip()}
          </div>
        </label>
      ) : (
        <label
          htmlFor={ref?.toString()}
          className="text-md font-medium flex items-center"
        >
          {label}
        </label>
      )}

      <input
        id={ref?.toString()}
        type={type}
        className={twMerge(
          `border rounded-lg p-2 focus:border-purple-500 ${className}`,
        )}
        ref={ref}
        {...props}
      />
    </div>
  ),
);

export default Input;
