import { Checkbox } from "@/components/checkbox";
import { Header } from "@/components/header";

export default function Home() {
  return (
    <main className="max-w-3xl w-full mx-auto p-6">
      <Header />

      <div className="flex gap-3 flex-col">
        <Checkbox
        id="string"
        isCheck={true}
        productName="Maçã"
        productType="fruit"
        quantity={1}
        quantityType="unit"
        />
        <Checkbox
        id="string"
        isCheck={false}
        productName="Maçã"
        productType="fruit"
        quantity={1}
        quantityType="unit"
        />
        <Checkbox
        id="string"
        isCheck={false}
        productName="Maçã"
        productType="fruit"
        quantity={1}
        quantityType="unit"
        />
      </div>
    </main>
  )
}
