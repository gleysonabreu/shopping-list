import { InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { useFormContext } from 'react-hook-form';
import clsx from "clsx";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
}

export function Input(props: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const mergeClasses = twMerge('bg-gray-500 w-full placeholder:text-gray-200 border text-gray-100 focus-within:border-product-purple-light p-3 rounded-md outline-none', props.className);
  
  return (
    <input
    {...props}
    id={props.name}
    className={clsx(mergeClasses, {
      'border-gray-300': !errors[props.name],
      'border-red-500': errors[props.name],
    })}
    {...register(props.name)}
    />
  );
}
