import { motion } from "framer-motion";
import React from "react";

const SliderBox = () => {
  return (
    <motion.div className=" mx-20 mb-36 mt-20 grid grid-cols-1 gap-8 md:mx-28 md:-mt-20 lg:mx-48  lg:grid-cols-3  xl:mx-64 xl:-mt-24 2xl:mx-96">
      <div className="   bg-white/30  bg-opacity-90  p-10 shadow-xl backdrop-brightness-200 transition-all duration-200 hover:scale-105 ">
        <div className=" space-y-4 text-center ">
          <span className="text-6xl ">
            <ion-icon name="document-text-outline"></ion-icon>
          </span>
          <p className="text-2xl ">Landowner</p>
          <p className="">Realize the full potential of your Land.</p>
        </div>
      </div>

      <div className=" bg-white/30 bg-opacity-90 p-10 shadow-xl  backdrop-brightness-200  transition-all duration-200 hover:scale-105">
        <div className=" space-y-4 text-center ">
          <span className="text-6xl ">
            <ion-icon name="cart-outline"></ion-icon>
          </span>
          <p className="text-2xl ">Buyer</p>
          <p>Let us show you the possibilities.</p>
        </div>
      </div>

      <div className="bg-white/30 bg-opacity-90 p-10  shadow-xl  backdrop-brightness-200  transition-all duration-200 hover:scale-105">
        <div className=" space-y-4 text-center ">
          <span className="text-6xl ">
            <ion-icon name="options-outline"></ion-icon>
          </span>
          <p className="text-2xl ">Other</p>
          <p>What's on your mind? Get in touch with us.</p>
        </div>
      </div>
    </motion.div>
  );
};

export default SliderBox;
