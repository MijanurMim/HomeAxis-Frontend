/** @format */
import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard/Dashboard";
import NewProject from "./components/admin/Dashboard/NewProject/NewProject";
import UpdateProject from "./components/admin/Dashboard/UpdateProject/UpdateProject";
import ProjectListAdmin from "./components/admin/ProjectListAdmin/ProjectListAdmin";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import SingleProjectItem from "./components/Projects/SingleProjectItem";
import PrivateRoute from "./components/Route/PrivateRoute";
import Spinner from "./components/Spinner/Spinner";
import { auth } from "./Firebase/Firebase";
import { CurrentUser } from "./Functions/AuthFunctions";
import About from "./pages/About/About";
import Contact from "./pages/ContactUs/Contact";
import Home from "./pages/Home/Home";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFound from "./pages/NotFound/NotFound";
import Completed from "./pages/Projects/Completed/Completed";
import Ongoing from "./pages/Projects/OnGoing/Ongoing";
import Upcoming from "./pages/Projects/Upcoming/Upcoming";
import Service from "./pages/Service/Service";
import { logInSuccess } from "./redux/actions/userAction";

function App() {
  // Loading User Data Before Routing Starts
  const dispatch = useDispatch();
  useEffect(() => {
    // store.dispatch(loadUser());

    const user = auth.currentUser;
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        // const uid = user.uid;
        const idtoken = await user.getIdTokenResult();

        const { accessToken, email, emailVerified } = user;

        // dispatch(logInSuccess(email, accessToken, emailVerified, null))

        await CurrentUser(idtoken.token).then((res) => {
          console.log(res.data);
          console.log(idtoken.token);
          const { name, role } = res.data;
          window.localStorage.setItem(`role`, `${role}`);
          const storedRole = localStorage.getItem("role");
          dispatch(logInSuccess(name, idtoken.token, storedRole));

          // dispatch(
          //   logInSuccess(
          //     res.data.email,
          //     idtoken.token,
          //     emailVerified,
          //     res.data.role,
          //     res.data.cart,
          //     res.data.wishlist,
          //   ),
          // )
        });
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  // Checking if user is authorized or not
  const { user, loading } = useSelector((state) => state.user);

  // Stopping others to inspect the site
  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <Router>
      {/* common for all  */}
      {/* <TopBar></TopBar> */}

      <Navbar user={user}></Navbar>

      {loading ? (
        <Spinner />
      ) : (
        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/project/:id" element={<SingleProjectItem />}></Route>

          <Route path="/ongoing" element={<Ongoing />}></Route>
          <Route path="/upcoming" element={<Upcoming />}></Route>
          <Route path="/completed" element={<Completed />}></Route>

          <Route
            path="/admin/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          ></Route>
          <Route
            path="/admin/projects"
            element={
              <PrivateRoute>
                <ProjectListAdmin />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/admin/project"
            element={
              <PrivateRoute>
                <NewProject />
              </PrivateRoute>
            }
          ></Route>

          <Route
            path="/admin/project/:id"
            element={
              <PrivateRoute>
                <UpdateProject />
              </PrivateRoute>
            }
          ></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/service" element={<Service />}></Route>

          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      )}

      {/* common for all  */}
      <Footer></Footer>
    </Router>
  );
}

export default App;
