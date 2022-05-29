import { default as React, useEffect, useState } from "react";
import { useAlert } from "react-alert";
import Pagination from "react-js-pagination";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectItem from "../../../components/Projects/ProjectItem";
import Spinner from "../../../components/Spinner/Spinner";
import { clearErrors, getProject } from "../../../redux/actions/projectAction";
import "../OnGoing/Ongoing.css";

const category = ["Upcoming"];
const Upcoming = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const { loading, error, projects, projectsCount, resultPerPage } =
    useSelector((state) => state.projects);

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
  }, [dispatch, error, alert, currentPage, searchKeyword]);

  console.log(projects);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="">
          <p className="my-10 text-center text-2xl  text-slate-600 md:text-4xl">
            <span className="font-semibold text-orange-500">UPCOMING</span>{" "}
            PROJECTS
          </p>
          <div className="text-center">
            {" "}
            {/* Search area  */}
            <form onSubmit={searchSubmitHandler}>
              <input
                className="border-2 border-orange-500"
                type="text"
                placeholder="Search Projects by Name ..."
                onChange={(e) => setKeyword(e.target.value)}
              />

              <button
                type="submit"
                value="Search"
                class=" right-2.5 bottom-2.5 rounded-lg bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                SEARCH
              </button>
            </form>
          </div>
          {/* Masonry  */}
          <div className="m-10 md:m-36 ">
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 1012: 3 }}
            >
              <Masonry>
                {projects &&
                  projects.map((project) => (
                    <ProjectItem
                      key={project._id}
                      project={project}
                    ></ProjectItem>
                  ))}
              </Masonry>
            </ResponsiveMasonry>
          </div>
          {/* Pagination section  */}
          {resultPerPage < projectsCount && (
            <div className="paginationBox ">
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
        </div>
      )}
    </>
  );
};

export default Upcoming;
