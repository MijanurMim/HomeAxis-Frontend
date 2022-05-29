import { default as React, useEffect } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import ProjectItem from "../../../components/Projects/ProjectItem";
import Spinner from "../../../components/Spinner/Spinner";
import { clearErrors, getProject } from "../../../redux/actions/projectAction";
import "../OnGoing/Ongoing.css";
import "./HomeProjects.css";

const HomeProjects = () => {
  const alert = useAlert();

  const dispatch = useDispatch();

  // const [currentPage, setCurrentPage] = useState(1);

  const { loading, error, projects } = useSelector((state) => state.projects);

  // const setCurrentPageNo = (e) => {
  //   setCurrentPage(e);
  // };

  console.log(projects);
  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProject());
  }, [dispatch, error, alert]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className=" ">
            <p className="my-10 text-center text-2xl font-bold text-orange-500 md:text-4xl">
              FEATURED WORKS
            </p>
            {/* <div className="xl:mx-30 mx-5  grid  grid-cols-1 justify-items-center gap-8 lg:mx-20 lg:grid-cols-2 xl:grid-cols-3 2xl:mx-60	">
              {projects &&
                projects.map((project) => (
                  <ProjectItem
                    key={project._id}
                    project={project}
                  ></ProjectItem>
                ))}
            </div>{" "} */}

            <div className="m-10 md:mx-36 ">
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
            {/* {resultPerPage < projectsCount && (
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
            )} */}
          </div>
        </>
      )}
    </>
  );
};

export default HomeProjects;
