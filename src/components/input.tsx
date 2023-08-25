import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { useFormContext } from 'react-hook-form';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string;
};

export function Input({ name, className, ...props }: InputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <input
      id={name}
      data-error={!!errors[name]}
      className={twMerge(
        'data-[error=true]:border-red-500 border-gray-300 bg-gray-500 w-full placeholder:text-gray-200 border text-gray-100 focus-within:border-product-purple-light p-3 rounded-md outline-none',
        className,
      )}
      {...register(name)}
      {...props}
    />
  );
}
