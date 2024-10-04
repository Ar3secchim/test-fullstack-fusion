import { ReactNode } from "react";

interface ILabelProps {
  children: ReactNode;
}
function Label({ children }: ILabelProps) {
  return (
    <span className="text-xs font-bold text-purple-950 flex items-center rounded-lg bg-purple-200  gap-2 p-2 h-fit">
      {children}
    </span>
  );
}
export default Label;
