import Image from "next/image";
export default function SingleItemCart() {
  return (
    <div className="flex flex-col justify-center gap-1">
      <Image
        src={"/placeholder.jpg"}
        alt="item-image"
        width={500}
        height={500}
        className="w-[300px] h-[300px] object-cover rounded-md"
      />
      <div className="flex flex-row justify-between">
        <p className="font-bold text-lg">item name</p>
        <p className="font-bold text-lg">$40</p>
      </div>
      <p className="text-sm font-medium">
        Lorem ipsum dolor sit amet consectetur
      </p>
      <button className="mt-2 py-1 w-24 border border-redish text-redish rounded-2xl">
        Add to Cart
      </button>
    </div>
  );
}
