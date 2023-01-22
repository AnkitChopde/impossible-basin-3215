
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import SliderCard from './SliderCard';

export default () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={8}
      navigation
      slidesPerGroup={4}
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
          <SliderCard title="Accessories" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw48622962/productimages/1O540610.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Bottoms" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw2a5dfb17/productimages/1O975110.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Sets" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd2dd897a/productimages/1O919410.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Pajamas" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw84402156/productimages/1O541210.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Sleep & Plays" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwac2fd43c/productimages/1O541810.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Baby Gear" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw401c3229/productimages/303325.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Bath" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw7568fe4d/productimages/1N690910.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Shoes" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw4e9d15a8/productimages/1P008710.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Swimwear" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw4091ba42/productimages/1P112810.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Overalls" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw65efbd2e/productimages/1O820410.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Kid Bags" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dweb8301bd/productimages/212266.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Bedding" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw8eb75c67/productimages/1N204610_1.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Diaper Bags" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw61d5abbd/productimages/9M550510.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Jackets" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwc3949083/productimages/1O510410.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard title="Sweaters" num="12" src="https://cdn-fsly.yottaa.net/578855e32bb0ac10350004f8/www.carters.com/v~4b.295/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dw44a49f4b/productimages/1N595410.jpg?sw=354&sh=444&yocs=g_j_"/>
        </SwiperSlide>
      ...
    </Swiper>
  );
};