'use client';
import { ReactNode, createContext, useState } from "react";

interface Product {
  id: string;
  productName: string;
  quantity: number;
  quantityType: 'kilogram' | 'liter' | 'unit';
  productType: 'bakery' | 'meat' | 'drink' | 'vegetable' | 'fruit';
  done: boolean;
}

interface ProductProviderContextValues {
  products: Product[];
}

interface ProductProviderContextProps {
  children: ReactNode;
}

export const ProductProviderContext = createContext<ProductProviderContextValues | null>(null);

export function ProductProvider({ children }: ProductProviderContextProps) {
  const [products, setProducts] = useState<Product[]>(() => {
    const storedProducts = typeof window !== 'undefined' ? localStorage.getItem('products') : null;

    return storedProducts ? (JSON.parse(storedProducts)) as Product[] : [];
  });

  return (
    <ProductProviderContext.Provider value={{ products }}>
      {children}
    </ProductProviderContext.Provider>
  );
}
