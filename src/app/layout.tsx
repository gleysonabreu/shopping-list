import { Provider } from '@/components/provider';
import '../styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Lista de compras',
  description: 'Gerenciar sua lista de compras',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-600 text-gray-100`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
