import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className=" flex   flex-col items-center bg-slate-300 py-20 text-xl md:h-screen ">
      <div className="text-sm">
        <Link to="/admin/projects">
          <button class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500  ">
            <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
              ALL PROJECTS
            </span>
          </button>
        </Link>
      </div>

      <div className="text-sm">
        <Link to="/admin/project">
          {" "}
          <button class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500  ">
            <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 ">
              CREATE PROJECT
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
