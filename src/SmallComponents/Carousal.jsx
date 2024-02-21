import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "./carousal.css";

// import required modules
import {EffectFade, Autoplay, Pagination, Navigation } from "swiper";
import { Box, Image } from "@chakra-ui/react";
import Pic2 from "../Images&Logos/Pic2.png";
import { Link } from "react-router-dom";
export default function Carousal() {
  return (
    <>
      <Box mt={{base:"-3.5rem",md:"-1.5rem",lg:"0.8rem"}} >
      <Link to={"/products"}>
      <Swiper 
        spaceBetween={30}
        centeredSlides={true}
        effect={"Fade"}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
       
        
        modules={[EffectFade, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><Image src={Pic2} alt=""/>
        </SwiperSlide>
        <SwiperSlide><Image src="https://s7img.carters.com/is/image/carters/OKB_desktop_slot2_011723?&wid=1680" alt=""/></SwiperSlide>
        <SwiperSlide><Image src="https://s7img.carters.com/is/image/carters/OKB_desktop_slot3_011723?&wid=1680" alt=""/></SwiperSlide>
        <SwiperSlide><Image src="https://s7img.carters.com/is/image/carters/LP_Q1_desktop_slot1_010523?&wid=1680" alt=""/></SwiperSlide>
      </Swiper>
      </Link>
      </Box>
    </>
  );
}
