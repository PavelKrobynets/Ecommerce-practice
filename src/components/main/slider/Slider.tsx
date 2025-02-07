"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { slides } from "@data/slides";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.scss";
import Link from "next/link";
import Image from "next/image";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination, Autoplay, Navigation]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
        pauseOnMouseEnter: true,
      }}
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet",
        bulletActiveClass: "swiper-pagination-bullet-active",
        dynamicBullets: true,
      }}
      className="mx-auto w-full overflow-hidden"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="mySwiper">
          <div
            className={`${slide.bg} h-[calc(100vh-80px)] flex flex-col lg:flex-row`}
          >
            <div className="h-1/2 lg:w-1/2 lg:h-full flex flex-col items-center justify-center gap-6">
              <p className="font-medium text-5xl">{slide.description}</p>
              <h4 className="font-bold text-7xl ">{slide.title}</h4>
              <Link
                href={slide.url}
                className="p-2 px-4 shadow-md border-[1px] bg-black text-white border-black rounded-md text-xl font-semibold uppercase"
              >
                Shop now
              </Link>
            </div>
            <div className="h-1/2 lg:w-1/2 lg:h-full">
              <Image
                src={slide.img}
                alt="slide-image"
                width={1000}
                height={1000}
                className="object-cover w-[100%] h-[100%]"
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
