import React from 'react';
import './feature.css';
import Srishti from "../../img/srishti.png";
import Nrithya from "../../img/nrithiya.png";
import ProShow from "../../img/proshow.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Keyboard,Autoplay  } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function FeaturedEvents() {
  return (
    <div>
        <div className="abh">
          <div className="wner"></div>
          <h3>Featured Events</h3>
        </div>
        <Swiper
        cssMode={false}
        navigation={true}
        pagination={true}
        mousewheel={{releaseOnEdges: true}}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide className='swipsli'><img className='featurepadam' src={Srishti} alt="Srishti"/></SwiperSlide>
        <SwiperSlide><img className='featurepadam' src={Nrithya} alt="Srishti"/></SwiperSlide>
        <SwiperSlide><img className='featurepadam' src={ProShow} alt="Srishti"/></SwiperSlide>
        {/* <SwiperSlide><img className='featurepadam' src={Srishti} alt="Srishti"/></SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
    </div>
  )
}

export default FeaturedEvents