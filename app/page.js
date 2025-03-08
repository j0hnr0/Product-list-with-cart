import ProductSection from "./_components/product-section";
import YourCartSection from "./_components/your-cart-section";

export default function Home() {
  return (
    <main className="bg-custom-white">
      <div className="max-w-[1216px] mx-auto flex justify-between pt-10">
        <ProductSection />
        <YourCartSection />
      </div>
    </main>
  );
}
