import Image from "next/image";
import Link from "next/link";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
}

interface Props {
  product: Product;
}

export default function SingleItemCard({ product }: Props) {
  return (
    <div className="flex flex-col justify-center flex-wrap w-[45%] lg:w-[23%]">
      <Link href="#" className="flex flex-col w-full gap-2">
        <div className="relative h-80">
          {product.images[0] && (
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute z-10 hover:opacity-0 transition-opacity easy duration-500"
            />
          )}
          {product.images[1] && (
            <Image
              src={product.images[1]}
              alt={product.name}
              fill
              sizes="25vw"
              className="object-cover rounded-md absolute"
            />
          )}
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-bold text-lg">{product.name}</p>
          <p className="font-bold text-lg">${product.price}</p>
        </div>
        <p className="text-sm font-medium">{product.description}</p>
      </Link>
      <button className="mt-3 py-1 w-24 border border-redish text-redish rounded-2xl hover:bg-redish hover:text-white">
        Add to Cart
      </button>
    </div>
  );
}
