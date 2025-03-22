"use client";

import { useQuery } from "@tanstack/react-query";
import Product from "./product";

export default function ProductSection() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await fetch("/data/data.json");

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      return response.json();
    },
  });

  return (
    <section className="max-w-[800px] border-[1px] border-red-500">
      <h1 className="text-[40px] font-bold font-red-hat-bold">Desserts</h1>
      {isLoading && (
        <div className="flex justify-center">
          <h4 className="font-red-hat-semibold">Fetching products...</h4>
        </div>
      )}
      {error && (
        <div className="flex justify-center">
          <h4 className="font-red-hat-semibold text-red-500">{error}</h4>
        </div>
      )}

      {data && (
        <div className="mt-8 flex gap-6 flex-wrap">
          {data.map((item) => (
            <Product
              key={item.name}
              id={item.name}
              imageURL={item.image.desktop}
              imageThumbnail={item.image.thumbnail}
              category={item.category}
              name={item.name}
              price={item.price}
              alt={item.name}
            />
          ))}
        </div>
      )}
    </section>
  );
}
