"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const swiperData = [
  "/Imgs/OurClient/Client1.png",
  "/Imgs/OurClient/Client2.png",
  "/Imgs/OurClient/Client1.png",
  "/Imgs/OurClient/Client2.png",
  "/Imgs/OurClient/Client1.png",
  "/Imgs/OurClient/Client2.png",
  "/Imgs/OurClient/Client1.png",
  "/Imgs/OurClient/Client2.png",
  "/Imgs/OurClient/Client1.png",
  "/Imgs/OurClient/Client2.png",
  "/Imgs/OurClient/Client1.png",
  "/Imgs/OurClient/Client2.png",
];

import OurClientsSlide from "./OurClientsSlide";

const OurClientsSwiper = () => {
  return (
    <div className="relative w-full h-full">
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween="30"
        slidesPerView={2}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
          1200: {
            slidesPerView: 5,
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: `.prevHeroButton`,
          nextEl: `.nextHeroButton`,
        }}
        centeredSlidesBounds={true}
        centerInsufficientSlides={true}
        modules={[Autoplay, Pagination, Navigation]}
        className=" our-clients-swiper h-full w-full !pb-16 "
      >
        {swiperData.map((item, index) => (
          <SwiperSlide key={index}>
            <OurClientsSlide img={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default OurClientsSwiper;
