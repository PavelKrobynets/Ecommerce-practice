import Image from "next/image";
export default function Banner() {
  return (
    <section className="bg-pink-100 ">
      <div className="flex justify-between h-64 relative fixed-w md:px-[5rem] lg:px-[10rem]">
        <div className="flex flex-col items-start justify-center gap-4  w-2/3">
          <h5 className="text-5xl font-semibold lg:text-7xl">
            Grad up to 50% off on <br />
            Selected Products
          </h5>
          <button className="rounded-full bg-redish text-white text-xl lg:text-3xl font-semibold px-5 py-2">
            Buy now
          </button>
        </div>
        <div className="w-1/3 relative">
          <Image
            src={"/woman.png"}
            alt="woman-image"
            fill
            className="object-cover lg:object-contain"
          />
        </div>
      </div>
    </section>
  );
}
