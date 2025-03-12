"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

export default function YourCartSection() {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isClicked = true;

  return (
    <section className="w-full flex justify-end">
      <div className="w-full max-w-96 bg-white rounded-xl p-6 pb-10">
        <h2 className="font-red-hat-bold font-bold text-custom-red text-2xl">
          Your Cart ({totalQuantity})
        </h2>

        {!isClicked && (
          <div className="flex flex-col justify-center items-center mt-6">
            <Image
              src="/images/illustration-empty-cart.svg"
              className="w-full h-auto max-w-32"
              alt="Chocolate cake"
              width={128}
              height={128}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            <h4 className="mt-4 font-red-hat-semibold font-semibold text-sm text-custom-brown">
              Your added items will appear here
            </h4>
          </div>
        )}

        <div className="mt-6">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-red-hat-semibold font-semibold text-sm text-custom-black">
                Classic Tiramisu
              </h3>
              <div className="flex justify-start items-center gap-2 mt-2">
                <h3 className="font-red-hat-semibold font-semibold text-sm text-custom-red">
                  1x
                </h3>
                <h3 className="font-red-hat-regular text-sm text-custom-brown">
                  @ $5.50
                </h3>
                <h3 className="font-red-hat-semibold font-semibold text-sm text-custom-brown">
                  $5.50
                </h3>
              </div>
            </div>

            <div className="group flex justify-center items-center rounded-full bg-transparent hover:border-custom-black border-[1px] border-custom-gray w-5 h-5 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="none"
                viewBox="0 0 10 10"
              >
                <path
                  className="fill-custom-gray group-hover:fill-custom-black"
                  d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
