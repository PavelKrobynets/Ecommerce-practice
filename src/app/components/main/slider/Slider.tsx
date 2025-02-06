"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { slides } from "../../../data/slides";

import "swiper/css";
import "swiper/css/pagination";
import "./slider.scss";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

export default function Slider() {
  const [slidesPerView, setSlidesPerView] = useState(1);

  useEffect(() => {
    const updateSlidesPerView = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSlidesPerView(1);
      } else if (width < 768) {
        setSlidesPerView(2);
      } else if (width < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };

    updateSlidesPerView(); // Set initial value
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

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
