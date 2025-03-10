"use client";

import Image from "next/image";
import AddToCartButton from "./add-to-cart-btn";
import { useState } from "react";
import clsx from "clsx";

export default function Product({ imageURL, category, name, price, alt }) {
  const [isClicked, setIsClicked] = useState(false);
  const [quantity, setQuantity] = useState(0);

  function buyProduct() {
    setIsClicked(true);

    if (quantity === 0) {
      setQuantity((prev) => prev + 1);
    }
  }

  function reduceQuantity() {
    if (quantity === 1) {
      setIsClicked(false);
    }

    if (quantity >= 1) {
      setQuantity((prev) => prev - 1);
    }
  }

  function addQuantity() {
    setQuantity((prev) => prev + 1);
  }

  return (
    <div>
      <div className="relative">
        <Image
          src={imageURL}
          className={clsx(`rounded-lg w-full h-auto max-w-[250px]`, {
            "border-[2px] border-custom-red": isClicked === true,
            "border-0 border-transparent": isClicked === false,
          })}
          alt={alt}
          width={250}
          height={240}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <AddToCartButton
          isClicked={isClicked}
          quantity={quantity}
          buyProduct={buyProduct}
          reduceQuantity={reduceQuantity}
          addQuantity={addQuantity}
        />
      </div>

      <h4 className="mt-9 font-red-hat-regular text-sm text-[#87635A]">
        {category}
      </h4>
      <h3 className="font-red-hat-semibold text-base text-[#260F08]">{name}</h3>
      <h3 className="font-red-hat-semibold text-base text-[#C73B0F]">
        ${price.toFixed(2)}
      </h3>
    </div>
  );
}
