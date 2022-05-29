import React from "react";

const TopBar = () => {
  return (
    <div className="">
      <div className="  h-26 grid grid-cols-1 justify-items-center  bg-fixed md:h-36 md:grid-cols-5 md:gap-5   xl:mx-32 ">
        <div className="py-4 md:col-span-2  md:px-10  ">
          {/*  title and logo  */}
          <div className="  flex cursor-pointer flex-row items-center  text-gray-800">
            <div className="mr-1  pt-2 text-6xl text-orange-500 lg:text-8xl">
              <ion-icon name="home-outline"></ion-icon>
            </div>
            <div className="flex flex-col">
              <div className="text-2xl lg:text-3xl">
                <span className="text-orange-500 ">HOME</span> AXIS LTD
              </div>

              <div className="text-md italic  lg:text-lg">
                No.1 Real Estate Agency of The Country
              </div>
            </div>
          </div>
        </div>

        {/* Phone and email  */}
        <div className=" flex flex-col items-center	justify-center 	 ">
          <div className="topbar-item-hover animate-bounce text-2xl  text-orange-500">
            <ion-icon name="call-outline"></ion-icon>
          </div>
          <div className="flex flex-col items-center text-base">
            <span className="font-bold">+ 880 155 240 259 3</span>
            <span className="text-sm">homeaxisltd@gmail.com</span>
          </div>
        </div>

        {/* Address  */}
        <div className="flex flex-col items-center justify-center		 ">
          <div className="topbar-item-hover animate-bounce text-2xl text-orange-500">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div className="flex flex-col items-center  text-base ">
            <span className="font-bold">Mohakhali DOHS</span>
            <span className="text-center text-sm">
              House 194, 2nd floor, Lane 01 DOHS
            </span>
          </div>
        </div>

        {/* Social Media links  */}
        <div className=" flex  items-center justify-center		 ">
          <ul className="flex cursor-pointer flex-row items-center text-xl text-gray-500	 md:flex-col ">
            <li className="topbar-item-hover text-blue-600">
              <ion-icon name="logo-facebook"></ion-icon>
            </li>
            <li className=" topbar-item-hover">
              <ion-icon name="logo-instagram"></ion-icon>
            </li>
            <li className="topbar-item-hover text-[#26a7de]">
              <ion-icon name="logo-twitter"></ion-icon>
            </li>
            <li className=" topbar-item-hover">
              <ion-icon name="mail-outline"></ion-icon>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
