'use client';
import * as CheckboxRadix from '@radix-ui/react-checkbox';
import { Check, Trash } from 'lucide-react';
import { useState } from 'react';
import { Tag } from './tag';
import { useProduct } from '@/hooks/useProduct';
import { Button } from './button';
import { DeleteDialog } from './delete-dialog';
import { ProductType, QuantityType } from '@/contexts/product';

interface CheckProps {
  isCheck: boolean;
  productName: string;
  quantity: number;
  quantityType: QuantityType;
  productType: ProductType;
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

    if (props.quantityType === 'unit' && props.quantity > 1) {
      return `${props.quantity} ${unit}s`;
    } else {
      return `${props.quantity} ${unit}`;
    }
  }

  function handleCheck(checkState: CheckboxRadix.CheckedState) {
    if (checkState === 'indeterminate') {
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
    <div
      data-checked={checked}
      className="flex items-center justify-between p-4  border rounded-lg bg-gray-400 border-gray-300 data-[checked=true]:bg-gray-500 data-[checked=true]border-gray-400 "
    >
      <div className="flex items-center gap-4">
        <CheckboxRadix.Root
          checked={checked}
          data-checked={checked}
          className="data-[checked=true]:border-feedback-success-normal data-[checked=true]:bg-feedback-success-normal data-[checked=true]:hover:bg-feedback-success-light data-[checked=true]:hover:border-feedback-success-light hover:bg-product-purple-dark border-product-purple-light border-2 flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-[4px] outline-none transition-all"
          onCheckedChange={handleCheck}
        >
          <CheckboxRadix.Indicator className="text-gray-100">
            <Check size={16} />
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>

        <div className="flex flex-col">
          <h1
            data-checked={checked}
            className="data-[checked=true]:text-gray-200 data-[checked=true]:line-through data-[checked=true]:font-normal text-sm text-gray-100 font-bold"
          >
            {props.productName}
          </h1>
          <span className="text-gray-200 text-xs font-normal">
            {parseProductQuantity()}
          </span>
        </div>
      </div>

      <div className="inline-flex items-center gap-3">
        <Tag variant={props.productType} checked={checked} />

        <DeleteDialog
          handleDelete={handleDeleteProduct}
          title="Deletar produto?"
          description={`Tem certeza que quer deletar o ${props.productName}?`}
        >
          <Button type="button" color="red" rounded="full" className="p-2">
            <Trash size={16} />
          </Button>
        </DeleteDialog>
      </div>
    </div>
  );
}
