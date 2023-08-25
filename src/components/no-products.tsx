import { ShoppingCart } from 'lucide-react';

export function NoProducts() {
  return (
    <div className="bg-gray-400 border-gray-300 p-4 text-gray-200 rounded-lg flex items-center flex-col gap-2">
      <ShoppingCart size={32} className="text-product-purple-light" />
      <h1 className="text-lg">Sem produtos na lista.</h1>
    </div>
  );
}
