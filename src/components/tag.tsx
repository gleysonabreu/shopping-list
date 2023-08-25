import { ProductType } from '@/contexts/product';
import { Apple, Beef, Carrot, Milk, Sandwich } from 'lucide-react';
import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

const tagBox = tv({
  base: 'inline-flex items-center gap-1 px-2 py-2 sm:px-4 sm:py-2 rounded-full',
  variants: {
    variant: {
      bakery: 'bg-support-yellow-dark text-support-yellow-light',
      vegetable: 'bg-support-green-dark text-support-green-light',
      fruit: 'bg-support-orange-dark text-support-orange-light',
      drink: 'bg-support-blue-dark text-support-blue-light',
      meat: 'bg-support-pink-dark text-support-pink-light',
    },
    checked: {
      true: 'opacity-50',
    },
  },
  defaultVariants: {
    variant: 'bakery',
    checked: false,
  },
});

type TagProps = ComponentProps<'div'> &
  VariantProps<typeof tagBox> & {
    variant: ProductType;
  };

const tagData: Record<ProductType, { icon: JSX.Element; name: string }> = {
  bakery: { icon: <Sandwich size={16} />, name: 'Padaria' },
  fruit: { icon: <Apple size={16} />, name: 'Fruta' },
  drink: { icon: <Milk size={16} />, name: 'Bebida' },
  vegetable: { icon: <Carrot size={16} />, name: 'Legume' },
  meat: { icon: <Beef size={16} />, name: 'Carne' },
};

export function Tag({ variant, checked, className, ...props }: TagProps) {
  const tag = tagData[variant];

  return (
    <div className={tagBox({ variant, checked, className })} {...props}>
      {tag.icon}
      <span className="lowercase text-xs font-bold leading-[130%] hidden sm:block">
        {tag.name}
      </span>
    </div>
  );
}
