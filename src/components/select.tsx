'use client'
import React, { Ref, forwardRef } from 'react';
import * as SelectRadix from '@radix-ui/react-select';
import { ChevronDown, ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import SelectItem from './select-item';
import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';
import { useFormContext } from 'react-hook-form';


type Item = {
  name: string;
  value: string;
}

type SelectProps = SelectRadix.SelectProps & {
  listItems: Item[];
  className?: string;
  name: string;
}

function Select({ listItems, className, name, ...props }: SelectProps, forwardedRef: Ref<HTMLButtonElement>){
  const {
    formState: { errors },
  } = useFormContext();

  const mergeClasses = twMerge('inline-flex items-center uppercase focus-within:border-product-purple-light border justify-between rounded-md p-3 text-xs gap-2 bg-gray-400 text-gray-200 outline-none', className);
  return (
    <SelectRadix.Root 
    {...props}
    >
      <SelectRadix.Trigger
      ref={forwardedRef}
        className={clsx(mergeClasses, {
          'border-gray-300': !errors[name],
          'border-red-500': errors[name],
        })}
      >
        <SelectRadix.Value placeholder="Selecione" />
        <SelectRadix.Icon>
          <ChevronDown size={16} />
        </SelectRadix.Icon>
      </SelectRadix.Trigger>
      <SelectRadix.Portal>
        <SelectRadix.Content className="overflow-hidden  bg-gray-400 rounded-md border border-gray-300">
          <SelectRadix.ScrollUpButton className="flex items-center justify-center h-[25px] bg-gray-400 text-product-purple-light cursor-default">
            <ChevronUpIcon />
          </SelectRadix.ScrollUpButton>
  
          <SelectRadix.Viewport>
            {listItems.map(item => 
              <SelectItem key={item.value} value={item.value}>{item.name}</SelectItem>
            )}
          </SelectRadix.Viewport>
  
          <SelectRadix.ScrollDownButton className="flex items-center justify-center h-[25px] bg-gray-400 text-product-purple-light cursor-default">
            <ChevronDownIcon />
          </SelectRadix.ScrollDownButton>
        </SelectRadix.Content>
      </SelectRadix.Portal>
    </SelectRadix.Root>
);
}

export default forwardRef<HTMLButtonElement, SelectProps>(Select);
