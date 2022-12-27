import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const ListCustomers = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <h2>Hello</h2>
        </div>
      </div>
    </>
  );
};

export default ListCustomers;
