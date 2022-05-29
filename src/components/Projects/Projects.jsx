/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import ProjectItem from "./ProjectItem";

const Projects = ({ cat, filter, sort }) => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // if there is a project category then it will fetch only them otherwise it will fetch every project
  useEffect(() => {
    const getProjects = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:4000/api/projects?category=${cat}`
            : "http://localhost:4000/api/projects"
        );
        console.log(res);
        setProjects(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    getProjects();
  }, [cat]);
  //  Filtering the projects according to location
  useEffect(() => {
    cat &&
      setFilteredProjects(
        projects.filter((item) =>
          Object.entries(filter).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [projects, cat, filter]);

  // Sorting the projects according to Price and date
  useEffect(() => {
    if (sort === "newest") {
      setFilteredProjects((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "lowPrice") {
      setFilteredProjects((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProjects((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <div className="">
      <h1 className="my-10 text-center text-2xl font-bold text-orange-500">
        {cat} PROJECTS
      </h1>
      <div className="xl:mx-30 mx-5  grid  grid-cols-1 justify-items-center gap-8 lg:mx-20 lg:grid-cols-2 xl:grid-cols-3 2xl:mx-60 	">
        {cat
          ? filteredProjects.map((item) => (
              <ProjectItem item={item} key={item.id}></ProjectItem>
            ))
          : projects
              .slice(0, 6)
              .map((item) => (
                <ProjectItem item={item} key={item.id}></ProjectItem>
              ))}
      </div>
    </div>
  );
};

export default Projects;
