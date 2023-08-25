'use client'
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check, Trash } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import { Tag, TagTypes } from './tag';
import { useProduct } from '@/hooks/useProduct';
import { Button } from './button';
import { DeleteDialog } from './delete-dialog';

interface CheckProps {
  isCheck: boolean;
  productName: string;
  quantity: number;
  quantityType: 'kilogram' | 'liter' | 'unit';
  productType: TagTypes;
  id: string;
}

export function Checkbox(props: CheckProps) {
  const { handleDoneAndUndone, handleDelete } = useProduct();
  const [checked, setChecked] = useState(props.isCheck);

  function parseProductQuantity() {
    const quantityUnits = {
      kilogram: 'kg',
      liter: 'L',
      unit: 'unidade',
    };
    
    const unit = quantityUnits[props.quantityType];

    if(props.quantityType === 'unit' && props.quantity > 1) {
      return `${props.quantity} ${unit}s`;
    } else {
      return `${props.quantity} ${unit}`;
    }
  }

  function handleCheck(checkState: CheckboxRadix.CheckedState) {
    if(checkState === 'indeterminate') {
      setChecked(false);
    } else {
      setChecked(checkState);
    }

    handleDoneAndUndone(props.id);
  }

  async function handleDeleteProduct() {
    await handleDelete(props.id);
  }

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
          onCheckedChange={handleCheck}
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
          <span className='text-gray-200 text-xs font-normal'>{parseProductQuantity()}</span>
        </div>
      </div>

      <div className='inline-flex items-center gap-3'>
        <Tag type={props.productType} isChecked={checked} />
        
        <DeleteDialog
        handleDelete={handleDeleteProduct}
        title='Deletar produto?'
        description={`Tem certeza que quer deletar o ${props.productName}?`}
        >
          <Button type='button' color='red' rounded='full' className='p-2'>
            <Trash size={16} />
          </Button>
        </DeleteDialog>
      </div>
    </div>
  );
}
