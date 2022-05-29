/** @format */

import { motion } from "framer-motion";
import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  default as sliderImg1,
  default as sliderImg3,
} from "../../resources/images/project-images/Slider-images/slider-1.jpg";
import sliderImg2 from "../../resources/images/project-images/Slider-images/slider-2.jpg";
import sliderImg4 from "../../resources/images/project-images/Slider-images/slider-3.jpg";
import "./Slider.css";

const Slider = () => {
  return (
    <>
      <div className="container-1  opacity-90 ">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="xl:h-screen"
        >
          <SwiperSlide>
            <img src={sliderImg1} alt="" />

            <motion.div className="hero-text h-40 w-1/2 	pt-5  md:h-96 md:pt-20	 ">
              <h1 className="ml-20 text-left text-xl text-slate-700 lg:text-4xl">
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>

              <p className="ml-20 text-left  text-sm text-slate-100 sm:text-2xl md:mt-5 md:text-4xl  2xl:text-6xl">
                Apartment tailored to your highest standards
              </p>
            </motion.div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={sliderImg2} alt="" />
            <div className="hero-text h-40 w-1/2 	pt-5  md:h-96 md:pt-20	 ">
              <h1 className="ml-20 text-left text-xl text-slate-700 lg:text-4xl">
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>

              <p className="ml-20 text-left  text-sm text-slate-100 sm:text-2xl md:mt-5 md:text-4xl  2xl:text-6xl">
                Commitment to quality and attention to detail
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={sliderImg3} alt="" />
            <div className="hero-text h-40 w-1/2 	pt-5  md:h-96 md:pt-20	 ">
              <h1 className="ml-20 text-left text-xl text-slate-700 lg:text-4xl">
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>

              <p className="ml-20 text-left  text-sm text-slate-100 sm:text-2xl md:mt-5 md:text-4xl  2xl:text-6xl">
                Apartment Tailored To Your Highest Standards
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <img src={sliderImg4} alt="" />
            <div className="hero-text h-40 w-1/2 	pt-5  md:h-96 md:pt-20	 ">
              <h1 className="ml-20 text-left text-xl text-slate-700 lg:text-4xl">
                <span className="text-lg md:text-3xl lg:text-6xl">
                  <span className="text-orange-500">HOME</span>
                  AXIS LTD
                </span>
              </h1>

              <p className="ml-20 text-left  text-sm text-slate-100 sm:text-2xl md:mt-5 md:text-4xl  2xl:text-6xl">
                Commitment to quality and attention to detail
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
