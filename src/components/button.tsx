import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
}

export function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
    {...rest}
    className="flex items-center justify-center gap-2 p-2 rounded-full hover:bg-product-purple-dark bg-product-purple-normal transition-all">
      {children}
    </button>
  );
}
