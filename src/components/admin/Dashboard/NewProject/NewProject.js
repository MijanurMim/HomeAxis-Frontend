import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  clearErrors,
  createProject,
} from "../../../../redux/actions/projectAction";
import { NEW_PROJECT_RESET } from "../../../../redux/constants/projectConstant";
import SpinnerButton from "../../../Spinner/SpinnerButton";
import Sidebar from "../../SIdebar/Sidebar";

// Project Categories
const categories = [
  "Select Project Category",
  "On Going",
  "Upcoming",
  "Completed",
];

const NewProject = () => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newProject);
  const { idToken } = useSelector((state) => state.user.user);

  const [inputs, setInputs] = useState({});
  const [images, setImages] = useState([]);
  // const [imagesPreview, setImagesPreview] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const project = { ...inputs, images: images };
  console.log(project);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Project Created Successfully");
      navigate("/admin/projects");
      dispatch({ type: NEW_PROJECT_RESET });
    }
  }, [dispatch, alert, error, navigate, success]);

  //  Create New Product Function
  const handleCreateProject = (e) => {
    e.preventDefault();

    dispatch(createProject(project, idToken));
  };

  //   Image Handler
  const createProductImagesChange = (e) => {
    const files = Array.from(e.target.files);

    setImages([]);
    // setImagesPreview([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        if (reader.readyState === 2) {
          // setImagesPreview((old) => [...old, reader.result]);
          setImages((old) => [...old, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <div className="relative m-5 grid grid-cols-1 gap-1 overflow-x-auto shadow-md sm:rounded-lg md:m-20 md:grid-cols-4 md:gap-4">
      <div className="text-end ">
        <Sidebar></Sidebar>
      </div>

      <div className="  col-span-3 flex flex-col items-center bg-slate-200 md:p-10 ">
        <p className="text-2xl text-orange-500 md:text-4xl">
          Create New Project
        </p>
        <form
          encType="multipart/form-data"
          onSubmit={handleCreateProject}
          className="my-10 "
        >
          <div className="my-5">
            <label className="ml-5 text-orange-500 ">NAME:</label>
            <br />
            <input
              type="text"
              className=" ml-5 md:w-96"
              placeholder="Enter Project Name"
              required
              name="name"
              onChange={handleChange}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-5">
            <label className=" ml-5 text-orange-500">PROJECT CODE:</label>
            <br />
            <input
              className=" ml-5 md:w-96"
              type="text"
              placeholder="Project Code"
              required
              name="projectId"
              onChange={handleChange}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className=" ml-5 text-orange-500">PRICE:</label>
            <br />
            <input
              className=" ml-5 md:w-96"
              name="price"
              type="number"
              placeholder="Enter Project Price"
              required
              // onChange={(e) => setPrice(e.target.value)}
              onChange={handleChange}
            />
          </div>

          <div className="my-5">
            <label className=" ml-5 text-orange-500">DESCRIPTION:</label>
            <br />
            <textarea
              className=" ml-5 md:w-96"
              placeholder="Enter Project Description"
              required
              name="description"
              // cols="30"
              // rows="1"
              onChange={handleChange}
              // onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className=" ml-5 text-orange-500">CATEGORIES</label>
            <br />

            <select
              name="category"
              onChange={handleChange}
              className=" ml-5 md:w-96"
            >
              {categories.map((cate) => (
                <option key={cate} value={cate}>
                  {cate}
                </option>
              ))}
            </select>
          </div>

          {/* Images */}
          <div className="my-5">
            <label className=" ml-5 text-orange-500">
              IMAGES: (You Must Choose Image File )
            </label>{" "}
            <br />
            <input
              type="file"
              name="avatar"
              accept="image/*"
              multiple
              onChange={createProductImagesChange}
              // onChange={(e) => setImages(e.target.files)}
            />
          </div>

          {/* <div className="my-5">
                {imagesPreview.map((image, index) => (
                  <img key={index} src={image} alt="Product Preview" />
                ))}
              </div> */}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading ? true : false}
              class="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 p-0.5 text-sm font-medium text-orange-500 hover:text-white focus:outline-none focus:ring-4 focus:ring-cyan-200 group-hover:from-cyan-500 group-hover:to-blue-500 dark:text-white dark:focus:ring-cyan-800"
            >
              <span class="relative rounded-md bg-white px-5 py-2.5 transition-all duration-75 ease-in group-hover:bg-opacity-0 dark:bg-gray-900">
                Create Project {loading ? <SpinnerButton /> : false}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewProject;
