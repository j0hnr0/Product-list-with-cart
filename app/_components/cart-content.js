"use client";

import { useSelector } from "react-redux";

export default function CartContent() {
  const productObject = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const orderTotal = useSelector((state) => state.cart.orderTotal);

  return (
    <div>
      {productObject &&
        Object.keys(productObject).length > 0 &&
        Object.entries(productObject).map(
          ([productId, product]) =>
            product.quantity > 0 && (
              <div key={productId}>
                <div className="mt-6 flex justify-between items-center">
                  <div>
                    <h3 className="font-red-hat-semibold font-semibold text-sm text-custom-black">
                      {productId}
                    </h3>
                    <div className="flex justify-start items-center gap-2 mt-2">
                      <h3 className="font-red-hat-semibold font-semibold text-sm text-custom-red">
                        {product.quantity}x
                      </h3>
                      <h3 className="font-red-hat-regular text-sm text-custom-brown">
                        @ ${product.price.toFixed(2)}
                      </h3>
                      <h3 className="font-red-hat-semibold font-semibold text-sm text-custom-brown">
                        ${product.totalPrice.toFixed(2)}
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

                <hr className="w-full h-[1px] border-custom-white2 mt-4" />
              </div>
            )
        )}

      {totalQuantity > 0 && (
        <div>
          <div className="mt-6 flex justify-between items-center">
            <h3 className="font-red-hat-regular text-sm text-custom-black">
              Order Total
            </h3>
            <h1 className="font-red-hat-bold font-bold text-2xl text-custom-black">
              ${orderTotal.toFixed(2)}
            </h1>
          </div>

          <div className="mt-6 w-full rounded-lg bg-custom-gray2 py-4 flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="20"
              fill="none"
              viewBox="0 0 21 20"
            >
              <path
                fill="#1EA575"
                d="M8 18.75H6.125V17.5H8V9.729L5.803 8.41l.644-1.072 2.196 1.318a1.256 1.256 0 0 1 .607 1.072V17.5A1.25 1.25 0 0 1 8 18.75Z"
              />
              <path
                fill="#1EA575"
                d="M14.25 18.75h-1.875a1.25 1.25 0 0 1-1.25-1.25v-6.875h3.75a2.498 2.498 0 0 0 2.488-2.747 2.594 2.594 0 0 0-2.622-2.253h-.99l-.11-.487C13.283 3.56 11.769 2.5 9.875 2.5a3.762 3.762 0 0 0-3.4 2.179l-.194.417-.54-.072A1.876 1.876 0 0 0 5.5 5a2.5 2.5 0 1 0 0 5v1.25a3.75 3.75 0 0 1 0-7.5h.05a5.019 5.019 0 0 1 4.325-2.5c2.3 0 4.182 1.236 4.845 3.125h.02a3.852 3.852 0 0 1 3.868 3.384 3.75 3.75 0 0 1-3.733 4.116h-2.5V17.5h1.875v1.25Z"
              />
            </svg>

            <h3 className="font-red-hat-regular text-sm text-custom-black">
              This is a <b>carbon-neutral</b> delivery.
            </h3>
          </div>

          <button
            type="button"
            className="mt-6 w-full rounded-full py-4 text-center bg-custom-red cursor-pointer"
          >
            <h3 className="font-red-hat-semibold font-semibold text-base text-white">
              Confirm Order
            </h3>
          </button>
        </div>
      )}
    </div>
  );
}
