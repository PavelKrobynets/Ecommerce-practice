import Image from "next/image";
import Link from "next/link";

export default function SingleItemCart() {
  return (
    <div className="flex flex-col justify-center flex-wrap w-[45%] lg:w-[23%]">
      <Link href="#" className="flex flex-col w-full gap-2">
        <div className="relative  h-80">
          <Image
            src={"/placeholder.jpg"}
            alt="item-image"
            fill
            sizes="25vw"
            className="object-cover rounded-md absolute z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image
            src={"/placeholder2.jpg"}
            alt="item-image"
            fill
            sizes="25vw"
            className="object-cover rounded-md absolute"
          />
        </div>
        <div className="flex flex-row justify-between">
          <p className="font-bold text-lg">item name</p>
          <p className="font-bold text-lg">$40</p>
        </div>
        <p className="text-sm font-medium">
          Lorem ipsum dolor sit amet consectetur
        </p>
      </Link>
      <button className="mt-3 py-1 w-24 border border-redish text-redish rounded-2xl hover:bg-redish hover:text-white">
        Add to Cart
      </button>
    </div>
  );
}
