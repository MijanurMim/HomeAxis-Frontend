/** @format */
import { getAuth, signOut } from "firebase/auth";
import { useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../redux/actions/userAction";

const Navbar = ({ user }) => {
  const { role } = user || {};
  const alert = useAlert();

  const auth = getAuth();

  //    Handle Logout
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout("empty"));

    console.log("logout clicked");

    signOut(auth)
      .then(() => {
        // Sign-out successful.
        localStorage.removeItem("role");
        alert.success("Logged Out Successfully");
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        alert.error(error);
      });
  };

  let [open, setOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 left-0 z-50 w-full  shadow-md ">
        <div className="  items-center justify-around bg-gray-800 py-4 md:flex md:py-8  md:px-0  ">
          {/* Navbar title and logo  */}
          <div className="    flex cursor-pointer items-center  justify-center text-gray-300">
            <span className=" text-xl text-orange-500">
              <ion-icon name="home-outline"></ion-icon>
            </span>
            <span className="text-orange-500 ">HOME</span> AXIS LTD
          </div>

          {/* Navbar Icon  */}
          <div
            onClick={() => setOpen(!open)}
            className="absolute right-10 top-6 cursor-pointer text-3xl text-gray-200 transition-all md:hidden "
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>

          <div className=" ">
            {/* Navbar Items  */}
            <ul
              className={`lg-px-5 absolute  z-[-1] w-full  px-10 pb-12  transition-all  duration-500 ease-in  md:static   md:z-auto md:flex md:items-center md:space-x-1 md:pb-0 lg:space-x-8 
          ${open ? "top-24 opacity-100" : "top-[-800px]"} md:opacity-100  `}
            >
              <li>
                <Link to="/" className="nav-hover-effect " aria-current="page">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-hover-effect ">
                  About Us
                </Link>
              </li>

              {/* Dropdown  */}
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="text-white-700 nav-hover-effect flex w-full items-center justify-start border-b py-2 pr-4 pl-3 font-medium md:w-auto  md:border-0 md:p-0  md:hover:bg-transparent"
                >
                  <span className="flex justify-start">
                    Our Projects
                    <span className="">
                      <ion-icon name="chevron-down-outline"></ion-icon>
                    </span>
                  </span>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownNavbar"
                  className="z-10 hidden w-44 list-none justify-start divide-y divide-gray-100 rounded bg-white text-base shadow "
                >
                  <ul className="">
                    <li>
                      <Link to={`/ongoing`} className="nav-sub-items">
                        On Going
                      </Link>
                    </li>
                    <li>
                      <Link to={`/completed`} className="nav-sub-items">
                        Completed
                      </Link>
                    </li>
                    <li>
                      <Link to={`/upcoming`} className="nav-sub-items">
                        Upcoming
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* SERVICES */}
              {/* <li>
                <Link to="/contact" classNameName="nav-hover-effect">
                  SERVICES
                </Link>
              </li> */}

              <li>
                <Link to="/contact" className="nav-hover-effect">
                  Contact Us
                </Link>
              </li>
              {role === "admin" && (
                <li>
                  <Link to="/admin/projects" className="nav-hover-effect">
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
          <div className=" flex cursor-pointer items-center  justify-center text-gray-300">
            {role === "admin" ? (
              <button onClick={handleLogout} className="nav-hover-effect">
                Logout
                <span className="text-orange-500">
                  <ion-icon name="log-out-outline"></ion-icon>
                </span>
              </button>
            ) : (
              <Link to="/login" className="nav-hover-effect">
                Login
                <span className="text-orange-500">
                  <ion-icon name="log-in-outline"></ion-icon>
                </span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
