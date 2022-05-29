/** @format */

import React, { useState } from "react";
import { useLocation } from "react-router";
import Projects from "../../components/Projects/Projects";

const ProjectList = () => {
  const location = useLocation();

  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");
  const cat = location.pathname.split("/")[2];

  const handleFilters = (e) => {
    const value = e.target.value;
    setFilter({
      [e.target.name]: value,
    });
  };

  console.log(filter);
  console.log(location);
  return (
    <div className="mt-10 ">
      {/* <p className="flex justify-center text-4xl">{cat.toUpperCase()}</p> */}
      <div className="flex items-center justify-center lg:justify-around">
        {/* Project Filter */}
        <div className="">
          <p className=" text-sm text-slate-600 lg:text-xl">
            Select Your Location
          </p>
          <select
            className=" border-2 border-orange-500 text-xs lg:text-lg"
            name="location"
            onChange={handleFilters}
          >
            <option className="project-sort-list " selected disabled>
              LOCATION
            </option>
            <option className="project-sort-list " value="dhanmondi">
              Dhanmondi
            </option>
            <option className="project-sort-list " value="mohammadpur">
              Mohammadpur
            </option>
            <option className="project-sort-list " value="gulshan">
              Gulshan
            </option>
            <option className="project-sort-list " value="banani">
              Banani
            </option>
            <option className="project-sort-list " value="uttora">
              Uttora
            </option>
            <option className="project-sort-list " value="lalmatia">
              Lalmatia
            </option>
          </select>
        </div>

        {/* Sorting the projects  */}
        <div className="">
          <p className=" text-sm text-slate-600 lg:text-xl">Sort Projects</p>
          <select
            className="border-2 border-orange-500 text-xs lg:text-lg"
            onChange={(e) => setSort(e.target.value)}
          >
            <option className="project-sort-list" selected disabled>
              Find By:
            </option>
            <option className="project-sort-list" value="newest">
              Newest
            </option>
            <option className="project-sort-list " value="lowPrice">
              Low Price
            </option>
            <option className="project-sort-list" value="highPrice">
              High Price
            </option>
          </select>
        </div>
      </div>

      <Projects cat={cat} filter={filter} sort={sort}></Projects>
    </div>
  );
};

export default ProjectList;
