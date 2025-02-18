"use client";

import Image from "next/image";
import Link from "next/link";
import { IProduct } from "types/type";
import DOMPurify from "isomorphic-dompurify";
import { useState, useEffect } from "react";

export default function SingleItemCard(product: IProduct) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-col justify-center flex-wrap w-[45%] lg:w-[23%]">
        <div className="relative h-80 bg-gray-200 rounded-md animate-pulse" />
        <div className="flex flex-row justify-between mt-2">
          <div className="h-6 w-32 bg-gray-200 rounded" />
          <div className="h-6 w-20 bg-gray-200 rounded" />
        </div>
        <div className="h-4 w-full bg-gray-200 rounded mt-2" />
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center flex-wrap w-[45%] lg:w-[23%]">
      <Link href="#" className="flex flex-col w-full gap-2">
        <div className="relative h-80">
          {product.media.mainMedia && (
            <Image
              src={product.media.mainMedia.image.url || "/placeholder2.jpg"}
              alt={product.name}
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute z-10 hover:opacity-0 transition-opacity easy duration-500"
              priority
            />
          )}
          {product.media.items[0] && (
            <Image
              src={product.media.items[1].image.url || "/placeholder.jpg"}
              alt={product.name}
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute"
              priority
            />
          )}
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-bold text-lg">{product.name}</p>
          <p className="font-bold text-lg tracking-wider">
            ${product.price.formatted.price}
          </p>
        </div>
        <p
          className="text-sm font-medium"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              product.description != ""
                ? product.description.slice(0, 140) + "..."
                : "this item have no description"
            ),
          }}
        ></p>
      </Link>
      <button
        className="mt-3 py-1 w-24 border border-redish text-redish rounded-2xl  hover:bg-redish hover:text-white hover:shadow-md hover:shadow-red-200"
        onClick={() => {}}
      >
        Add to Cart
      </button>
    </div>
  );
}
