/** @format */
import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Typical from "react-typical";
import { Autoplay, FreeMode, Navigation, Thumbs } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  clearErrors,
  getProjectDetails,
} from "../../redux/actions/projectAction";
import "./SingleCategoryItem.css";

const SingleProjectItem = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  // const [project, setProject] = useState({});

  const dispatch = useDispatch();

  const { id } = useParams();

  const alert = useAlert();

  const { project, loading, error } = useSelector(
    (state) => state.projectDetails
  );

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }

    dispatch(getProjectDetails(id));
  }, [dispatch, id, error, alert]);

  return (
    <div className="mx-10 my-20 grid grid-cols-1 gap-4 md:mx-20 lg:grid-cols-3  xl:mx-36 2xl:my-36  ">
      <div className=" col-span-2 shadow-xl  ">
        {project.images ? (
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            loop={true}
            spaceBetween={10}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs, Autoplay]}
            className="h-96 "
          >
            {project.images &&
              project.images.map((item, i) => (
                <SwiperSlide>
                  <img key={item._id} src={item.url} alt={`${i}`} />
                </SwiperSlide>
              ))}
          </Swiper>
        ) : (
          "NO Images Found"
        )}
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          spaceBetween={10}
          slidesPerView={4}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs, Autoplay]}
          className="h-24 md:h-36 "
        >
          {project.images &&
            project.images.map((item, i) => (
              <SwiperSlide>
                <img key={item._id} src={item.url} alt={`${i}`} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      {/* Single Project Information  */}
      <div className="  flex flex-col items-start justify-center shadow-lg hover:shadow-2xl  	">
        <ul className="mx-10 flex flex-col text-slate-600">
          <li className="text-slate-600">
            <span className="text-lg xl:text-xl">
              <Typical
                loop={Infinity}
                className="text-slate-600"
                wrapper="b"
                steps={["DETAILS", 3000, "INFORMATION", 3000]}
              ></Typical>
            </span>
            <br />
            <span className="text-lg text-orange-500 xl:text-2xl">
              {project.name}
            </span>
          </li>
          <li className="text-xl">Location: {project.category}</li>
          <li className="text-xl">Cost: {project.price}</li>
          <li className="text-slate-500">{project.description}</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleProjectItem;
