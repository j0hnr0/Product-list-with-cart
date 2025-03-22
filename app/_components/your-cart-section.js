"use client";

import Image from "next/image";
import { useSelector } from "react-redux";
import CartContent from "./cart-content";

export default function YourCartSection() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <section className="w-full flex justify-end border-[1px] border-red-500">
      <div className="w-full max-w-96 bg-white rounded-xl p-6 pb-10">
        <h2 className="font-red-hat-bold font-bold text-custom-red text-2xl">
          Your Cart ({totalQuantity})
        </h2>

        {totalQuantity === 0 && (
          <div className="flex flex-col justify-center items-center mt-6">
            <Image
              src="/images/illustration-empty-cart.svg"
              className="w-full h-auto max-w-32"
              alt="Empty shopping cart"
              width={128}
              height={128}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <h4 className="mt-4 font-red-hat-semibold font-semibold text-sm text-custom-brown">
              Your added items will appear here
            </h4>
          </div>
        )}

        <CartContent />
      </div>
    </section>
  );
}
