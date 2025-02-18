"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { wixClient } from "../../context/wixContext";
import "swiper/css";
import "swiper/css/mousewheel";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ICategories } from "../../types/type";

export default function Categories() {
  const [slidesPerView, setSlidesPerView] = useState<number>(5);
  const [categories, setCategories] = useState<ICategories[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else if (window.innerWidth < 1600) {
        setSlidesPerView(5);
      } else {
        setSlidesPerView(7);
      }
    };

    const fetchCategories = async () => {
      try {
        const wixCategories = await wixClient.collections
          .queryCollections()
          .find();

        if (!categories) {
          return null;
        }

        setCategories(wixCategories.items as ICategories[]);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      }
    };

    fetchCategories();
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="flex flex-col my-16 px-5 py-20 gap-7 overflow-hidden">
      <h4 className="font-medium text-4xl capitalize">Categories</h4>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={10}
        mousewheel={true}
        modules={[Mousewheel]}
        className="mx-auto w-full overflow-hidden"
      >
        {categories.map((category) => (
          <SwiperSlide key={category._id}>
            <Link
              href={`/shop?cat=${category.slug}`}
              className="w-full flex flex-col gap-4"
            >
              <Image
                src={category.media.mainMedia.image.url || "/placeholder.jpg"}
                alt={category.name}
                width={1000}
                height={1000}
                sizes="500px"
                className="object-cover h-[300px] rounded-sm"
              />
              <p className="text-2xl font-medium">{category.name}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
