/** @format */

import React from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import ScrollToTop from "react-scroll-to-top";
import Slider from "../../components/Slider/Slider";
import SliderBox from "../../components/SliderBox/SliderBox";
import Testimonial from "../../components/Testimonial/Testimonial";
import About from "../About/About";
import Contact from "../ContactUs/Contact";
import HomeProjects from "../Projects/HomeProjects/HomeProjects";

const Home = () => {
  return (
    <div className="">
      <ScrollToTop smooth color="#EA5C2B" />
      <MessengerCustomerChat pageId="110716404780746" appId="368205181770242" />
      <Slider></Slider>
      <SliderBox />
      <About></About>
      <HomeProjects />

      <Contact></Contact>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;
