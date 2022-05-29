import emailjs from "@emailjs/browser";
import { default as React, useRef } from "react";
import Typical from "react-typical";
import contactImg from "../../resources/images/HomeAxisMap.JPG";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yx4a0no",
        "template_yblpowa",
        form.current,
        "PdoIKWIRLI9Z94yrs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="  my-36  grid grid-cols-1 gap-2 md:gap-6 lg:m-32 lg:mx-36  xl:grid-cols-3 xl:gap-10 2xl:mx-60 ">
      <div className="col-span-2 flex h-fit shadow-xl	">
        <img src={contactImg} alt="" />
      </div>
      <div>
        <ul className="">
          <li className="my-2 text-slate-600">
            <span className="text-xl xl:text-2xl">
              <Typical
                loop={Infinity}
                className="text-slate-600"
                wrapper="b"
                steps={["FIND US", 2000, "24 HOURS", 2000]}
              ></Typical>
            </span>
            <br />
            <span className="text-2xl xl:text-4xl">
              <span className="text-orange-500">HOME</span>
              AXIS LTD
            </span>
          </li>
          <li>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="user_name"
                className=" border-orange-500 "
                placeholder="Enter Your Name"
              />

              <input
                type="email"
                name="user_email"
                className=" border-orange-500 "
                placeholder="Enter Your Email"
              />

              <textarea
                placeholder="Your Message"
                name="message"
                className=" border-orange-500 "
              />

              <button
                type="submit"
                value="Send"
                className="mt-5 rounded-xl bg-slate-600 p-2 text-slate-200 hover:bg-slate-700 hover:text-orange-500"
              >
                <span className="flex items-center justify-center ">
                  SEND
                  <span className="flex items-center justify-center text-xl font-bold text-orange-500 ">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </span>
                </span>
              </button>
            </form>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
