import Image from "next/image";
import Link from "next/link";
import { IProduct } from "types/type";

export default function SingleItemCard(product: IProduct) {
  return (
    <div className="flex flex-col justify-center flex-wrap w-[45%] lg:w-[23%]">
      <Link href="#" className="flex flex-col w-full gap-2">
        <div className="relative h-80">
          {product.media.mainMedia && (
            <Image
              src={product.media.mainMedia.image.url}
              alt={product.name}
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
          )}
          {product.media.items[0] && (
            <Image
              src={product.media.items[0].image.url}
              alt={product.name}
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute"
            />
          )}
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-bold text-lg">{product.name}</p>
          <p className="font-bold text-lg">${product.price.formatted.price}</p>
        </div>
        <p className="text-sm font-medium">{product.description}</p>
      </Link>
      <button className="mt-3 py-1 w-24 border border-redish text-redish rounded-2xl hover:bg-redish hover:text-white">
        Add to Cart
      </button>
    </div>
  );
}
