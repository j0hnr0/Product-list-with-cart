import Image from "next/image";

export default function Product({ imageURL, category, name, price, alt }) {
  return (
    <div>
      <div>
        <Image
          src="/images/image-waffle-desktop.jpg"
          className="w-full h-auto max-w-[250px] rounded-lg"
          alt="test"
          width={250}
          height={240}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
    </div>
  );
}
