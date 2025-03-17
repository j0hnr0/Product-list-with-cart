import Modal from "./_components/modal";
import ProductSection from "./_components/product-section";
import YourCartSection from "./_components/your-cart-section";

export default function Home() {
  return (
    <main className="max-w-[1216px] mx-auto flex justify-between items-start pt-10">
      <ProductSection />
      <YourCartSection />
      <Modal />
    </main>
  );
}
