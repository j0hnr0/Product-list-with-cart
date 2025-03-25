import ProductSection from "./_components/product-section";
import YourCartSection from "./_components/your-cart-section";

export default function Home() {
  return (
    <main className="max-w-[1216px] mx-auto flex justify-between items-start pt-10
    max-1191:px-5 max-1191:gap-4
    max-1001:max-w-[688px] max-1001:flex-col max-1001:px-0">
      <ProductSection />
      <YourCartSection />
    </main>
  );
}
