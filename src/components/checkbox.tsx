'use client'
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check, MoreVertical } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import { Tag, TagTypes } from './tag';

interface CheckProps {
  isCheck: boolean;
  productName: string;
  quantity: number;
  quantityType: 'kilogram' | 'liter' | 'unit';
  productType: TagTypes;
  id: string;
}

export function Checkbox(props: CheckProps) {
  const [checked, setChecked] = useState(props.isCheck);

  return (
    <div className={clsx('flex items-center justify-between p-4  border rounded-lg', {
      'bg-gray-400 border-gray-300': !checked,
      'bg-gray-500 border-gray-400': checked
    })}>
      <div className='flex items-center gap-4'>
        <CheckboxRadix.Root
          className={clsx("border-2 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] outline-none transition-all", {
            'hover:bg-product-purple-dark border-product-purple-light': !checked,
            'border-feedback-success-normal bg-feedback-success-normal hover:bg-feedback-success-light hover:border-feedback-success-light': checked
          })}
          checked={checked}
          onCheckedChange={value => value === 'indeterminate' ? setChecked(false) : setChecked(value)}
        >
          <CheckboxRadix.Indicator className="text-gray-100">
            <Check size={16} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
        
        <div className='flex flex-col'>
          <h1 className={clsx('text-sm', {
            'text-gray-100 font-bold': !checked,
            'text-gray-200 line-through': checked
          })}>{props.productName}</h1>
          <span className='text-gray-200 text-xs font-normal'>{props.quantity} {props.quantityType}</span>
        </div>
      </div>

      <div className='inline-flex items-center gap-3'>
        <Tag type={props.productType} isChecked={checked} />
        <button><MoreVertical className='text-product-purple-light' /></button>
      </div>
    </div>
  );
}
