import Image from "next/image";
export default function CartItem() {
  return (
    <div className="flex flex-row items-center justify-between gap-3">
      <Image
        src="/placeholder.jpg"
        alt="product-image"
        width={100}
        height={100}
        className="h-20 object-cover w-1/3"
      />
      <div className="flex flex-col  w-2/3">
        <div className="flex flex-row justify-between">
          <p className="text-lg font-bold">Some product</p>
          <p className="text-lg font-semibold">$40.5</p>
        </div>
        <p className="font-medium">available</p>
        <div className="flex flex-row justify-between mt-3">
          <p>Qt 1</p>
          <button className="text-blue-700 text-md">Remove</button>
        </div>
      </div>
    </div>
  );
}
