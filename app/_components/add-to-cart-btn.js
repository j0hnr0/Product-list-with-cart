"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function AddToCartButton() {
  const [isClicked, setIsClicked] = useState(false);

  function buyProduct() {
    setIsClicked(true);
  }

  function reduceAmountClick() {
    setIsClicked(false);
  }

  return (
    <button
      type="button"
      onClick={buyProduct}
      className={clsx(
        `w-40 absolute bottom-[-25px] left-[50%] translate-x-[-50%] z-10 rounded-full 
         border-[1px] py-3
        hover:border-custom-red hover:text-custom-red`,
        {
          "bg-custom-red border-custom-red cursor-default": isClicked === true,
          "bg-white border-[#AD8A85] cursor-pointer": isClicked === false,
        }
      )}
    >
      {isClicked && (
        <div className="flex justify-between items-center px-3">
          <div
            onClick={(e) => {
              e.stopPropagation();
              reduceAmountClick();
            }}
            className="group flex justify-center items-center rounded-full bg-transparent hover:bg-white border-[1px] border-white w-5 h-5 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="2"
              fill="none"
              viewBox="0 0 10 2"
            >
              <path
                className="fill-white group-hover:fill-custom-red"
                d="M0 .375h10v1.25H0V.375Z"
              />
            </svg>
          </div>

          <h3 className="font-red-hat-semibold font-semibold text-sm text-white">
            1
          </h3>
          <div className="group flex justify-center items-center rounded-full bg-transparent hover:bg-white border-[1px] border-white w-5 h-5 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="none"
              viewBox="0 0 10 10"
            >
              <path
                className="fill-white group-hover:fill-custom-red"
                d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
              />
            </svg>
          </div>
        </div>
      )}

      {!isClicked && (
        <div className="flex justify-center items-center gap-2">
          <Image
            src="/images/icon-add-to-cart.svg"
            alt="A cart icon"
            width={20}
            height={20}
          />
          <h3 className="font-red-hat-semibold font-semibold text-sm">
            Add to Cart
          </h3>
        </div>
      )}
    </button>
  );
}
