'use client';
import { useProduct } from '@/hooks/useProduct';
import { Checkbox } from './checkbox';
import { NoProducts } from './no-products';

export function ShoppingList() {
  const { products } = useProduct();

  return (
    <div className="flex gap-3 flex-col">
      {products.length <= 0 ? (
        <NoProducts />
      ) : (
        products.map((product) => (
          <Checkbox key={product.id} isCheck={product.done} {...product} />
        ))
      )}
    </div>
  );
}
