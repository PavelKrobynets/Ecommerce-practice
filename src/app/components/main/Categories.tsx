"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";

import "swiper/css";
import "swiper/css/mousewheel";
import Link from "next/link";
import Image from "next/image";

export default function Categories() {
  return (
    <section className="flex flex-col my-16 px-5 py-20 gap-7 overflow-hidden">
      <h4 className="font-medium text-4xl capitalize">Featured products</h4>
      <Swiper
        slidesPerView={5}
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
