import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { clearErrors, getProject } from "../../../redux/actions/projectAction";
import Spinner from "../../Spinner/Spinner";
import Sidebar from "../SIdebar/Sidebar";
import ProjectListAdminData from "./ProjectListAdminData";

const ProjectListAdmin = () => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { error, projects, loading, projectsCount, resultPerPage } =
    useSelector((state) => state.projects);
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const { category } = useParams();

  //  Search Handler
  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      setSearchKeyword(keyword);
    }
  };

  //  Pagination handler
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProject(searchKeyword, currentPage, category));
  }, [dispatch, alert, error, currentPage, category, searchKeyword]);
  console.log(projects);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="relative m-5 grid grid-cols-1 gap-1 overflow-x-auto shadow-md sm:rounded-lg md:m-20 md:grid-cols-4 md:gap-4">
          <div>
            {/* Sidebar Section  */}
            <Sidebar />
          </div>

          <div className="col-span-3">
            <form onSubmit={searchSubmitHandler}>
              <label
                for="default-search"
                class="sr-only mb-2 text-sm font-medium text-gray-900 "
              >
                Search
              </label>
              <div class="relative">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    class="h-5 w-5 text-gray-500 dark:text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
                <input
                  onChange={(e) => setKeyword(e.target.value)}
                  type="search"
                  id="default-search"
                  placeholder="Search Projects By Name..."
                  class="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                />
                <button
                  type="submit"
                  value="Search"
                  class="absolute right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  SEARCH
                </button>
              </div>
            </form>
            {/* Search area  */}
            {/* <form onSubmit={searchSubmitHandler}>
              <input
                type="text"
                placeholder="Search Product by Name ..."
                onChange={(e) => setKeyword(e.target.value)}
              />

              <button
                type="submit"
                value="Search"
                class="mr-2 mb-2 rounded-lg bg-gradient-to-r from-red-400 via-red-500 to-red-600 px-5 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-red-500/50 hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-red-300 dark:shadow-lg dark:shadow-red-800/80 dark:focus:ring-red-800"
              >
                <ion-icon name="search-outline"></ion-icon>
              </button>
            </form> */}

            <table class="mt-3 w-full border-2 text-left text-sm text-gray-500 shadow-2xl dark:text-gray-400">
              <thead class=" text-md bg-gray-400 uppercase text-gray-700 md:text-lg">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    PROJECT NAME
                  </th>
                  <th scope="col" class="px-6 py-3">
                    COST
                  </th>
                  <th scope="col" class="px-6 py-3">
                    CATEGORY
                  </th>
                  <th scope="col" class="px-6 py-3">
                    EDIT
                  </th>
                  <th scope="col" class="px-6 py-3">
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody>
                {projects &&
                  projects.map((project) => (
                    <ProjectListAdminData
                      key={project._id}
                      project={project}
                    ></ProjectListAdminData>
                  ))}

                {resultPerPage < projectsCount && (
                  <div>
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={projectsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    ></Pagination>
                  </div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectListAdmin;
