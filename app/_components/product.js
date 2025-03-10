"use client";

import Image from "next/image";
import AddToCartButton from "./add-to-cart-btn";
import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { buyProduct, reduceQuantity, addQuantity } from "../store/features/counterSlice";

export default function Product({ imageURL, category, name, price, alt }) {
  const isClicked = useSelector((state) => state.cart.isClicked);
  const quantity = useSelector((state) => state.cart.quantity);

  const dispatch = useDispatch();

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
          buyProduct={() => dispatch(buyProduct())}
          reduceQuantity={() => dispatch(reduceQuantity())}
          addQuantity={() => dispatch(addQuantity())}
        />
      </div>

      <h4 className="mt-9 font-red-hat-regular text-sm text-[#87635A]">
        {category}
      </h4>
      <h3 className="font-red-hat-semibold text-base text-custom-black">{name}</h3>
      <h3 className="font-red-hat-semibold text-base text-custom-red">
        ${price.toFixed(2)}
      </h3>
    </div>
  );
}
