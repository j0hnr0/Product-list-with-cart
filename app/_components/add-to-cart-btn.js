"use client";

import clsx from "clsx";
import Image from "next/image";
import { useState } from "react";

export default function AddToCartButton() {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(prev => !prev);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={clsx(
        `w-40 absolute bottom-[-25px] left-[50%] translate-x-[-50%] z-10 rounded-full 
        flex justify-center items-center gap-2 border-[1px] py-3 cursor-pointer
        hover:border-custom-red hover:text-custom-red`,
        {
          "bg-custom-red border-custom-red": isClicked === true,
          "bg-white border-[#AD8A85]": isClicked === false,
        }
      )}
    >
      <Image
        src="/images/icon-add-to-cart.svg"
        alt="A cart icon"
        width={20}
        height={20}
      />
      <h3 className="font-red-hat-semibold font-semibold text-sm">
        Add to Cart
      </h3>
    </button>
  );
}
