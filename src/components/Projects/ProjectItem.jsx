/** @format */

import React from "react";
import { Link } from "react-router-dom";

const ProjectItem = ({ project }) => {
  const { name, _id, images, category } = project;
  return (
    <div className="mx-2 mt-3 mb-2  transition-all duration-300    ease-in-out hover:bg-gray-200">
      {/* Overlay test  */}
      <div class="relative">
        <a class="absolute inset-0 z-10 flex flex-col items-center justify-center bg-white bg-opacity-90 text-center opacity-0 duration-200 hover:opacity-100">
          {category}
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">
            {name}
          </h5>
          {/* <p>{price}</p> */}

          {/* <p className="mb-3 font-normal text-gray-700  ">{description}</p> */}
          <Link to={`/project/${_id}`}>
            <button className="0 group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 p-0.5 text-sm font-medium text-gray-900  transition-all duration-75 hover:text-white focus:outline-none focus:ring-4  focus:ring-pink-200 ">
              <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
                <span className="flex items-center justify-center ">
                  PROJECT DETAILS
                  <span className="flex items-center justify-center text-xl font-bold text-orange-500">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </span>
                </span>
              </span>
            </button>
          </Link>

          {/* <h1 class="tracking-wider">
            {name}
            {category}
            <p>{price}</p>
          </h1>
          <p class="mx-auto">Description</p>

          <button class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500  ">
            <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
             
            </span>
          </button> */}
        </a>
        <a href="#" class="relative">
          <div class=" content-center">
            <img
              // className=" display:block h-full w-full rounded-t-lg   backdrop-blur-sm md:rounded-none md:rounded-t-lg "
              style={{ width: "100%", display: "block" }}
              src={images[0].url}
              alt={name}
            />
          </div>
        </a>
      </div>

      {/* Card  */}
      {/* <a href="/" className="   " />
      <img
        className="h-96 w-full rounded-t-lg object-cover   backdrop-blur-sm md:rounded-none md:rounded-t-lg "
        src={images[0].url}
        alt={name}
      />
      <div className="flex flex-col justify-between p-4 leading-normal ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-orange-500 ">
          {name}
        </h5>
        {category}
        <p>{price}</p>

        <p className="mb-3 font-normal text-gray-700  ">{description}</p>
        <Link to={`/project/${_id}`}>
          <button className="0 group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-slate-500 to-slate-600 p-0.5 text-sm font-medium text-gray-900  transition-all duration-75 hover:text-white focus:outline-none focus:ring-4  focus:ring-pink-200 ">
            <span className="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
              <span className="flex items-center justify-center ">
                PROJECT DETAILS
                <span className="flex items-center justify-center text-xl font-bold text-orange-500">
                  <ion-icon name="arrow-forward-outline"></ion-icon>
                </span>
              </span>
            </span>
          </button>
        </Link>
      </div> */}
    </div>
  );
};

export default ProjectItem;
