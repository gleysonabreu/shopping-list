'use client';
import { randomBytes } from 'crypto';
import { ReactNode, createContext, useEffect, useState } from "react";

export type ProductType = 'bakery' | 'meat' | 'drink' | 'vegetable' | 'fruit';
export type QuantityType = 'kilogram' | 'liter' | 'unit';

interface Product {
  id: string;
  productName: string;
  quantity: number;
  quantityType: QuantityType;
  productType: ProductType;
  done: boolean;
}

type CreateProduct = Omit<Product, 'id' | 'done'>;

interface ProductProviderContextValues {
  products: Product[];
  handleSaveProduct: (data: CreateProduct) => Promise<void>;
  handleDoneAndUndone: (id: string) => Promise<void>;
}

interface ProductProviderContextProps {
  children: ReactNode;
}

export const ProductProviderContext = createContext<ProductProviderContextValues | null>(null);

export function ProductProvider({ children }: ProductProviderContextProps) {
  const PRODUCTS_KEY = 'products';
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem(PRODUCTS_KEY);

    if(storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, [])


  useEffect(() => {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
  }, [products]);


  async function handleSaveProduct(data: CreateProduct) {
    const id = randomBytes(20).toString('hex');
    const product: Product = {
      ...data,
      done: false,
      id,
    }

    setProducts(lastState => [product, ...lastState]);
  }

  async function handleDoneAndUndone(id: string) {
    const allProducts = products;
    const findProductIndex = allProducts.findIndex(product => product.id === id);

    allProducts[findProductIndex].done = !allProducts[findProductIndex].done

    setProducts(oldState => [...allProducts]);
  }

  return (
    <ProductProviderContext.Provider value={{ products, handleSaveProduct, handleDoneAndUndone }}>
      {children}
    </ProductProviderContext.Provider>
  );
}
