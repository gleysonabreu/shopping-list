import { Header } from '@/components/header';
import { ShoppingList } from '@/components/shopping-list';

export default function Home() {
  return (
    <main className="max-w-3xl w-full mx-auto p-6">
      <Header />
      <ShoppingList />
    </main>
  );
}
