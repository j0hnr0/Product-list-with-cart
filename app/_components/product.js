import Image from "next/image";
import AddToCartButton from "./add-to-cart-btn";

export default function Product({ imageURL, category, name, price, alt }) {
  return (
    <div>
      <div className="relative">
        <Image
          src={imageURL}
          className="w-full h-auto max-w-[250px] rounded-lg"
          alt={alt}
          width={250}
          height={240}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <AddToCartButton />
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
