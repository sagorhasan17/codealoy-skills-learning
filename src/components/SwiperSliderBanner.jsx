"use client";

import { Swiper, SwiperSlide } from "swiper/react";

// styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Banner from "./Banner";

const SwiperSliderBanner = () => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="w-full h-full relative"
      >
        <SwiperSlide className="w-full h-full">
          <Banner />
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
          <Banner />
        </SwiperSlide>

        <SwiperSlide className="w-full h-full">
          <Banner />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperSliderBanner;
