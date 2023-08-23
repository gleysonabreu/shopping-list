import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
}

export function Input({ className, ...rest }: InputProps) {
  
  return (
    <input
    {...rest}
    className={twMerge('bg-gray-500 w-full placeholder:text-gray-200 border text-gray-100 focus-within:border-product-purple-light border-gray-300 p-3 rounded-md outline-none', className)}
    />
  );
}
