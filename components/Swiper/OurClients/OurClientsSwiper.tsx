"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const swiperData = [
  "/Imgs/Hero/Hero1.jpg",
  "/Imgs/Hero/Hero2.png",
  "/Imgs/Hero/Hero1.jpg",
  "/Imgs/Hero/Hero2.png",
  "/Imgs/Hero/Hero1.jpg",
  "/Imgs/Hero/Hero2.png",
  "/Imgs/Hero/Hero1.jpg",
  "/Imgs/Hero/Hero2.png",
  "/Imgs/Hero/Hero1.jpg",
  "/Imgs/Hero/Hero2.png",
  "/Imgs/Hero/Hero1.jpg",
  "/Imgs/Hero/Hero2.png",
  "/Imgs/Hero/Hero1.jpg",
  "/Imgs/Hero/Hero2.png",
];

import OurClientsSlide from "./OurClientsSlide";

const OurClientsSwiper = () => {
  return (
    <div className="relative w-full h-full">
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween="10"
        slidesPerView={3}
        breakpoints={{
          576: {
            slidesPerView: 4,
          },
          768: {
            slidesPerView: 4,
          },
          992: {
            slidesPerView: 5,
          },
          1200: {
            slidesPerView: 7,
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
        className=" our-clients-swiper h-full w-full !py-10 "
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
