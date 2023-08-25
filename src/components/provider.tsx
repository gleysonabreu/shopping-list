'use client';

import { ProductProvider } from '@/contexts/product';
import { ReactNode } from 'react';

export function Provider({ children }: { children: ReactNode }) {
  return <ProductProvider>{children}</ProductProvider>;
}
