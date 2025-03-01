import Image from "next/image";

export default function Product({ imageURL, category, name, price, alt }) {
  return (
    <div>
      <div>
        <Image
          src="/images/image-waffle-desktop.jpg"
          width={250}
          height={240}
          className="rounded-lg"
          alt="test"
        />
      </div>
    </div>
  );
}
