import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: 'purple' | 'red';
}

export function Button({ children, variant = 'purple', ...rest }: ButtonProps) {
  return (
    <button
    {...rest}
    className={clsx("flex items-center justify-center gap-2 p-2 rounded-full transition-all", {
      "hover:bg-product-purple-dark bg-product-purple-normal": variant === 'purple',
      "hover:bg-red-500 bg-red-700": variant === 'red',
    })}>
      {children}
    </button>
  );
}
