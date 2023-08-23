'use client'
import React, { ReactNode, Ref, forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import * as SelectRadix from '@radix-ui/react-select';
import { CheckIcon } from 'lucide-react';


type SelectItemProps = SelectRadix.SelectItemProps & {
  children: ReactNode;
  className?: string;
}

function SelectItem({ children, className, ...props }: SelectItemProps, forwardedRef: Ref<HTMLDivElement>) {
  return (
    <SelectRadix.Item
      className={twMerge(
        'text-sm flex hover:bg-gray-300 justify-center gap-2 flex-row-reverse text-gray-200 items-center p-2 relative select-none data-[disabled]:pointer-events-none data-[highlighted]:outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <SelectRadix.ItemIndicator className="text-product-purple-light inline-flex items-center justify-center">
        <CheckIcon size={16} />
      </SelectRadix.ItemIndicator>
      <SelectRadix.ItemText>{children}</SelectRadix.ItemText>
    </SelectRadix.Item>
  );
}


export default forwardRef<HTMLDivElement, SelectItemProps>(SelectItem);
