import { ShoppingBag } from 'lucide-react';
import { CreateProductForm } from './create-product-form';

export function Header() {
  return (
    <header className="flex flex-col pt-10 pb-10 gap-8">
      <div className="flex gap-2 items-center justify-center">
        <ShoppingBag
          size={32}
          strokeWidth={3}
          className="text-product-purple-normal"
        />
        <h1 className="text-gray-100 uppercase text-2xl font-bold">
          Lista de compras
        </h1>
      </div>

      <CreateProductForm />
    </header>
  );
}
