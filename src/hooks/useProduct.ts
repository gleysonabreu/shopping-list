'use client';
import { ProductProviderContext } from '@/contexts/product';
import { useContext } from 'react';

export function useProduct() {
  const context = useContext(ProductProviderContext);

  if (!context) {
    throw new Error('useProduct must be used within an ProductProvider');
  }

  return context;
}
