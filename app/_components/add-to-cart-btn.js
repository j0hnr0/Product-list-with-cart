"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function AddToCartButton() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked((prev) => !prev);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        `w-40 absolute bottom-[-25px] left-[50%] translate-x-[-50%] z-10 rounded-full 
         border-[1px] py-3 cursor-pointer
        hover:border-custom-red hover:text-custom-red`,
        {
          "bg-custom-red border-custom-red": isClicked === true,
          "bg-white border-[#AD8A85]": isClicked === false,
        }
      )}
    >
      {isClicked && (
        <div className="flex justify-between items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="2"
            fill="none"
            viewBox="0 0 10 2"
          >
            <path fill="#fff" d="M0 .375h10v1.25H0V.375Z" />
          </svg>

          <h3 className="font-red-hat-semibold font-semibold text-sm text-white">
            1
          </h3>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#fff"
              d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"
            />
          </svg>
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
