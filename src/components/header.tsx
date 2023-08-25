'use client';
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import Select from "@/components/select";
import { categories } from "@/utils/categories";
import { quantityTypes } from "@/utils/quantity-types";
import { Plus, ShoppingBag } from "lucide-react";
import { Controller, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";
import { useProduct } from "@/hooks/useProduct";
import { ProductType, QuantityType } from "@/contexts/product";

type CreateItemProps = {
  quantity: number;
  productName: string;
  quantityType: string;
  productType: string;
}

const schema = z.object({
  productName: z.string({ required_error: 'Preencha o nome do produto.' }).min(3, { message: 'Digite pelo menos 3 caracteres.' }),
  quantity: z.coerce.number({ required_error: 'Digite uma quantidade' }).min(1, { message: 'Mínimo 1' }),
  quantityType: z.string(),
  productType: z.string(),
});

export function Header() {
  const createFormItem = useForm<CreateItemProps>({ resolver: zodResolver(schema), defaultValues: {
    quantityType: 'unit',
  } });
  const { handleSubmit, formState: { errors, isSubmitting }, control } = createFormItem;

  const { handleSaveProduct } = useProduct();

  const handleAddItem: SubmitHandler<CreateItemProps> = async (data) => {
    await handleSaveProduct({
      productName: data.productName,
      productType: data.productType as ProductType,
      quantity: data.quantity,
      quantityType: data.quantityType as QuantityType,
    });
  }

  return (
    <FormProvider {...createFormItem}>
      <header className="flex flex-col pt-10 pb-10 gap-8">
          <div className="flex gap-2 items-center justify-center">
            <ShoppingBag size={32} strokeWidth={3} className="text-product-purple-normal" />
            <h1 className="text-gray-100 uppercase text-2xl font-bold">Lista de compras</h1>
          </div>

          <form className="flex flex-col sm:flex-row gap-3 w-full" onSubmit={handleSubmit(handleAddItem)}>
            <div className="flex sm:w-96 w-full flex-col gap-2 text-gray-200 focus-within:text-product-purple-light">
              <label htmlFor="item" className="text-sm font-normal">Item</label>
              <Input
              name="productName"
              id="item"
              type='text'
              placeholder="Digite nome do item"
              />
            </div>

            <div className="flex gap-3 items-end">
              <div className="flex flex-col gap-2 text-gray-200">
                <label htmlFor="quantity" className="text-sm font-normal">Quantidade</label>
                <div className="flex flex-row">
                  <Input
                  name="quantity"
                  id="quantity"
                  className="rounded-r-none w-[80px]"
                  />
                  <Controller
                  control={control}
                  name="quantityType"
                  render={({ field }) => (
                    <Select
                    {...field}
                    onValueChange={field.onChange}
                    className="rounded-l-none"
                    listItems={quantityTypes}
                    />
                  )}
                  />
                </div>
              </div>

              <div className="flex flex-col w-full sm:w-28 gap-2 text-gray-200">
                <label className="text-sm font-normal">Categoria</label>
                <Controller
                  control={control}
                  name="productType"
                  render={({ field }) => (
                    <Select
                    {...field}
                    onValueChange={field.onChange}
                    className="h-[50px]"
                    listItems={categories}
                    />
                  )}
                  />
              </div>

              <div className="w-10">
                <Button type='submit' disabled={isSubmitting} rounded="full" className="p-2">
                  <Plus size={24} />
                </Button>
              </div>
            </div>
          </form>
        </header>
      </FormProvider>
  );
}
