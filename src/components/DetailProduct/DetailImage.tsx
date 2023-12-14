import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface DetailImageProps {
  imageUrl: string[];
}

const DetailImage = ({ imageUrl }: DetailImageProps) => {
  return (
    <div className="w-[756px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        {imageUrl?.map((image, i) => (
          <SwiperSlide>
            <img key={i} src={image} alt="상세이미지" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default DetailImage;
