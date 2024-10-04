import { ReactNode } from "react";

interface ILayoutRootProps {
  children: ReactNode;
}

function LayoutRoot({ children }: ILayoutRootProps) {
  return <section className="flex flex-col gap-3">{children}</section>;
}

export default LayoutRoot;
