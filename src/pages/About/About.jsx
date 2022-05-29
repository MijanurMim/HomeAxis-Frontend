/** @format */

import React from "react";
import Typical from "react-typical";
import aboutCover from "../../resources/images/aboutCover.jpg";

const About = () => {
  return (
    <section className="">
      {/* Top about section  */}

      <div className="mx-10 mt-20  grid grid-cols-1 gap-x-1  gap-y-10 md:h-133  md:gap-x-5 lg:mx-20  lg:grid-cols-3 lg:gap-x-10 2xl:mx-96 ">
        {/* About image section  */}
        <div className="h-96">
          <img
            src={aboutCover}
            className="h-133    shadow-xl outline outline-offset-4 outline-slate-400"
            alt=""
          />
        </div>

        {/* About Information section  */}
        <div className="col-span-2 ">
          <ul className="mt-20 space-y-5">
            <li className="text-slate-600">
              <span className="text-2xl">
                <Typical
                  loop={Infinity}
                  className="text-slate-600"
                  wrapper="b"
                  steps={["INTRODUCING", 3000, "YOUR BEST GUIDE", 3000]}
                ></Typical>
              </span>
              <br />
              <span className="text-4xl lg:text-6xl">
                <span className="text-orange-500">HOME</span>
                AXIS LTD
              </span>
            </li>

            <li className="text-xl font-bold text-slate-600">
              Our vision is to become the acknowledged go-to provider for each
              of the services we offer.
            </li>
            <li className="text-md text-slate-500">
              Our vision is to become the acknowledged go-to provider for each
              of the services we offer. We plan to do this by developing a
              deserved reputation for adopting the most intelligent approach,
              safest working... Read More
            </li>
            <li className=" text-md text-slate-500">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
              corrupti assumenda reiciendis impedit similique dolorum provident
            </li>
            <li className="bg-slate-600 text-2xl italic text-slate-600  ">
              VISIT US ANYTIME
            </li>
          </ul>
        </div>
      </div>

      {/* Base about section  */}
      <div className=" m-5 mb-36 grid grid-cols-1 gap-5 md:mt-96 lg:mt-20  lg:grid-cols-3  ">
        <div className=" p-5 shadow-lg duration-300 hover:shadow-2xl">
          <div className="flex flex-row text-2xl font-bold text-slate-600">
            <span className=" text-4xl text-orange-500">
              <ion-icon name="hourglass-outline"></ion-icon>
            </span>
            <h1>Over 10 Years</h1>
          </div>
          <div className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis numquam deserunt magnam officia quasi culpa incidunt.
          </div>
        </div>

        <div className=" p-5 shadow-lg duration-300 hover:shadow-2xl">
          <div className="flex flex-row text-2xl font-bold text-slate-600">
            <span className=" text-4xl text-orange-500">
              <ion-icon name="people-outline"></ion-icon>
            </span>
            <h1>Large Community</h1>
          </div>
          <div className="text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis numquam deserunt magnam officia quasi culpa incidunt.
          </div>
        </div>

        <div className=" p-5 shadow-lg duration-300 hover:shadow-2xl">
          <div className="flex flex-row text-2xl font-bold text-slate-600">
            <span className=" text-4xl text-orange-500">
              <ion-icon name="time-outline"></ion-icon>
            </span>
            <h1>24 Hours</h1>
          </div>
          <div className=" text-slate-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
            veritatis numquam deserunt magnam officia quasi culpa incidunt.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
