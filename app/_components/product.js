import Image from "next/image";

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
        <div className="w-40 absolute bottom-[-25px] left-[50%] translate-x-[-50%] z-10 rounded-full flex justify-center items-center gap-2 border-[1px] border-[#AD8A85] bg-white py-3">
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
      </div>

      <h4 className="mt-9 font-red-hat-regular text-sm text-[#87635A]">
        {category}
      </h4>
      <h3 className="font-red-hat-semibold text-base text-[#260F08]">
        {name}
      </h3>
      <h3 className="font-red-hat-semibold text-base text-[#C73B0F]">
        ${price}
      </h3>
    </div>
  );
}
