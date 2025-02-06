"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Categories() {
  const [slidesPerView, setSlidesPerView] = useState<number>(5);

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

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
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
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
        <SwiperSlide>
          <Link href="/product" className="w-full flex flex-col gap-4">
            <Image
              src={"/placeholder2.jpg"}
              alt="category-image"
              width={200}
              height={200}
              sizes="100px"
              className="object-cover"
            />
            <p className="text-2xl font-medium">All products</p>
          </Link>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
