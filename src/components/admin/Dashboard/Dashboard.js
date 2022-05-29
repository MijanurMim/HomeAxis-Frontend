import React from "react";
import Sidebar from "../SIdebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="relative m-5 grid grid-cols-1 gap-1 overflow-x-auto shadow-md sm:rounded-lg md:m-20 md:grid-cols-4 ">
      <div className="text-end ">
        <Sidebar></Sidebar>
      </div>
      <div className="  col-span-3 flex flex-col items-center bg-slate-200 p-20">
        <p className="text-4xl">HomeAxis LTD. Admin Dashboard</p>
        <p className="text-2xl text-orange-500">
          Only Authorized Members Allowed
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
