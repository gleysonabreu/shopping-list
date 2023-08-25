import { ComponentProps, forwardRef } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const button = tv({
  base: 'flex items-center justify-center gap-2 transition-all',
  variants: {
    size: {
      sm: 'py-1 px-3 text-xs',
      md: 'py-1.5 px-4 text-sm',
      lg: 'py-2 px-6 text-md',
    },
    color: {
      purple: 'hover:bg-product-purple-dark bg-product-purple-normal',
      red: 'hover:bg-red-500 bg-red-700 text-gray-100',
      gray: 'text-gray-100 text-sm bg-gray-600 hover:bg-gray-500',
    },
    rounded: {
      full: 'rounded-full',
      lg: 'rounded-lg',
    },
  },

  defaultVariants: {
    color: 'purple',
    size: 'lg',
    rounded: 'lg',
  },
});

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, color, rounded, children, ...rest }, forwardedRef) => {
    return (
      <button
        ref={forwardedRef}
        className={button({ className, size, color, rounded })}
        {...rest}
      >
        {children}
      </button>
    );
  },
);
