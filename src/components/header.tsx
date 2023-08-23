import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Select } from "@/components/select";
import { categories } from "@/utils/categories";
import { quantityTypes } from "@/utils/quantity-types";
import { Plus } from "lucide-react";

export function Header() {
  return (
    <header className="flex flex-col pt-10 pb-10 gap-8">
        <h1 className="text-gray-100 text-2xl font-bold">Lista de compras</h1>

        <form className="flex flex-col sm:flex-row gap-3 w-full">
          <div className="flex sm:w-96 w-full flex-col gap-2 text-gray-200 focus-within:text-product-purple-light">
            <label htmlFor="item" className="text-sm font-normal">Item</label>
            <Input id="item" type='text' placeholder="Digite nome do item" />
          </div>

          <div className="flex gap-3 items-end">
            <div className="flex flex-col gap-2 text-gray-200">
              <label htmlFor="quantity" className="text-sm font-normal">Quantidade</label>
              <div className="flex flex-row">
                <Input id="quantity" className="rounded-r-none w-[80px]" />
                <Select className="rounded-l-none" defaultValue="unit" listItems={quantityTypes} />
              </div>
            </div>

            <div className="flex flex-col w-full sm:w-28 gap-2 text-gray-200">
              <label className="text-sm font-normal">Categoria</label>
              <Select listItems={categories} className="h-[50px]" />
            </div>

            <div className="w-10">
              <Button type='submit'>
                <Plus size={24} />
              </Button>
            </div>
          </div>
        </form>
      </header>
  );
}
