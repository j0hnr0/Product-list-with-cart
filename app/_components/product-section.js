import Product from "./product";

export default function ProductSection() {
  return (
    <section>
      <h1 className="text-[40px] font-bold font-red-hat-bold">Desserts</h1>
      <div className="flex gap-6">
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
}
