"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const swiperData = [
  {
    img: "/Imgs/Hero/Hero1.jpg",
    title: "Innovation",
    desc: "Nous plaçons l'Innovation au cœur de nos projets pour anticiper l'avenir et créer de la valeur ajoutée.",
  },
  {
    img: "/Imgs/Hero/Hero2.png",
    title: "Responsabilité Environnementale",
    desc: "Nous réduisons l'empreinte carbone de nos clients et préservons les ressources pour l'avenir.",
  },
  {
    img: "/Imgs/Hero/Hero3.png",
    title: "Agilité",
    desc: "Les évolutions sont des opportunités. Notre réactivité nous permet de recruter et de nous adapter rapidement.",
  },
];

import HeroSlide from "./HeroSlide";
import useHeroSwiper from "./useHeroSwiper";
import ProgressContent from "./ProgressContent";

const HeroSwiper = () => {
  const { progressCircle, progressContent, onAutoplayTimeLeft } =
    useHeroSwiper();

  return (
    <div className="relative w-full h-full">
      <Swiper
        grabCursor={true}
        loop={true}
        spaceBetween={30}
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
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className=" hero-swiper h-full w-full bg-grayscale-900 "
      >
        {swiperData.map((item, index) => (
          <SwiperSlide key={index}>
            <HeroSlide slideData={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <ProgressContent
        progressCircle={progressCircle}
        // progressContent={progressContent}
      />
      {/* <HeroButton className="prevHeroButton" icon="left" />
      <HeroButton className="nextHeroButton" icon="right" /> */}
    </div>
  );
};

export default HeroSwiper;
