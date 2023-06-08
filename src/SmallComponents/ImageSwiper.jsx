import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'
// Import Swiper styles
import 'swiper/css';
import { Box, Heading, Image } from '@chakra-ui/react';

const ImageSwiper = () => {
    return (
        
        // <Image src="https://cdn-fsly.yottaa.net/578855e22bb0ac10350002d6/o~f_webp/v~4b.283.0.0/https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjY5MjEyNzIxLjU2MjgzNjI3MDk3Mi5qcGVn.jpg?w=640&h=640&fit=cover" alt=""/>
        <div >

        <Box >
        <Box>
                <Heading fontWeight="none" size="2xl"   color="#003057">show us how you</Heading>
                <Heading size="xl" color="#00A9E0" mt="3">#lovecarters</Heading>
                <Heading fontWeight="none" mt="-2" size="lg"  color="#003057">And follow our new budding brand @LittlePlanet</Heading>
        </Box>
                <Swiper
        // install Swiper modules
        modules={[Pagination, Navigation]}

        spaceBetween={5}
        slidesPerView={4}
        navigation
        slidesPerGroup={2}

        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        style={{marginTop:"20px"}}
      >
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyODQ5NzYyLjc1MDA2MDY3NTg5Ni5qcGVn.jpg?w=640&h=640&fit=cover" alt=""/> </SwiperSlide>
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjkwODE0NjY2MzkzNC5qcGVn.jpg?w=640&h=640&fit=cover" alt=""/></SwiperSlide>
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjM5MjYzMzIxMDE5LmpwZWc=.jpg?w=640&h=640&fit=cover" alt=""/></SwiperSlide>
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk3LjI0ODUyMDk0ODE5OS5qcGVn.jpg?w=640&h=640&fit=cover" alt=""/></SwiperSlide>
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk2LjQ0MDY5Mzk5MDkyOC5qcGVn.jpg?w=640&h=640&fit=cover" alt=""/> </SwiperSlide>
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk3LjI2ODc1ODUzNjk5OC5qcGVn.jpg?w=640&h=640&fit=cover" alt=""/></SwiperSlide>
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyNzY3Njk1LjM5NDAyMTM1NTg4NS5qcGVn.jpg?w=640&h=640&fit=cover" alt=""/></SwiperSlide>
        <SwiperSlide><Image src="https://images.dashhudson.com/aHR0cHM6Ly9jZG4uZGFzaGh1ZHNvbi5jb20vbWVkaWEvZnVsbC8xNjcyODQ5NzYzLjY3NzQ5MzE1NzM2LmpwZWc=.jpg?w=640&h=640&fit=cover" alt=""/></SwiperSlide>
        ...
      </Swiper>
    
        </Box>

        </div>
    
        );
}

export default ImageSwiper
