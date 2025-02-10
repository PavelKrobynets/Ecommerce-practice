"use client";
import Image from "next/image";
import { useState } from "react";

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/19036832/pexels-photo-19036832/free-photo-of-mountain-reflection-in-lake.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/17867705/pexels-photo-17867705/free-photo-of-crowd-of-hikers-on-the-mountain-ridge-at-dusk.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/21812160/pexels-photo-21812160/free-photo-of-puerta-colonial-color-rojo-de-guanajuato-mexico.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/20832069/pexels-photo-20832069/free-photo-of-a-narrow-street-with-buildings-and-cars.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load",
  },
];

export default function ProductImages() {
  const [index, setIndex] = useState<number>(0);
  return (
    <div className="px-5">
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt="image"
          fill
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="gap-4 my-8 flex flex-row">
        {images.map((image, index) => {
          return (
            <div
              className="w-1/4 h-32 relative"
              key={image.id}
              onClick={() => setIndex(index)}
            >
              <Image
                src={image.url}
                alt="image"
                fill
                sizes="50vw"
                className="object-cover rounded-md cursor-pointer"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
