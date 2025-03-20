"use client";

import Image from "next/image";
import { useSelector } from "react-redux";

export default function ModalContent() {
  const productObject = useSelector((state) => state.cart.items);
  const orderTotal = useSelector((state) => state.cart.orderTotal);

  return (
    <div className="mt-8 bg-custom-gray2 p-6 pt-2 rounded-lg">
      {productObject &&
        Object.keys(productObject).length > 0 &&
        Object.entries(productObject).map(
          ([productId, product]) =>
            product.quantity > 0 && (
              <div key={productId}>
                <div className="mt-4 flex justify-between items-center">
                  <div className="flex justify-start items-center gap-4">
                    <Image
                      src={product.thumbnail}
                      className="w-full max-w-12 rounded-sm"
                      alt={productId}
                      width={48}
                      height={48}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    <div>
                      <h5 className="text-custom-black font-red-hat-semibold font-semibold text-sm">
                        {productId}
                      </h5>
                      <div className="mt-2 flex justify-start items-start gap-2">
                        <h5 className="text-custom-red font-red-hat-semibold font-semibold text-sm">
                          {product.quantity}x
                        </h5>
                        <h5 className="text-custom-brown font-red-hat-regular text-sm">
                          @ ${product.price.toFixed(2)}
                        </h5>
                      </div>
                    </div>
                  </div>

                  <h4 className="font-red-hat-semibold font-semibold text-base text-custom-black">
                    ${product.totalPrice.toFixed(2)}
                  </h4>
                </div>

                <hr className="mt-4 h-[1px] w-full bg-custom-white" />
              </div>
            )
        )}

      <div className="mt-6 flex justify-between items-center">
        <h5 className="font-red-hat-regular text-sm text-custom-black">
          Order Total
        </h5>
        <h3 className="text-custom-black font-red-hat-bold font-bold text-2xl">
          ${orderTotal.toFixed(2)}
        </h3>
      </div>
    </div>
  );
}
