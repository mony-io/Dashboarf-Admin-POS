import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";

const AddSupplier = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <h3 className="h-16 ml-6 flex items-center text-xl">បន្ថែមការផ្គត់ផ្គង់</h3>
          <div className="grid grid-cols-4 gap-4 ml-6 mr-6 bg-[#DDDDDD] h-[630px] border-t-4 border-t-blue-400">
            <div className="col-span-2">
              <h3 className="text-md m-2 my-6 text-gray-600">
                សូមបញ្ចូលពត៍មានខាងក្រោម
              </h3>
              <div className="flex flex-col m-2 ml-6 mt-4">
                <label htmlFor="text" className="text-sm mb-1">
                  ឈ្មោះអ្នកផ្គត់ផ្គង់
                </label>
                <input type="text" className="outline-none h-8 p-2" />
              </div>
              <div className="flex flex-col m-2 ml-6 mt-4">
                <label htmlFor="text" className="text-sm mb-1">
                  ឈ្មោះក្រុមហ៊ុន
                </label>
                <input type="text" className="outline-none h-8 p-2" />
              </div>
              <div className="flex flex-col m-2 ml-6 mt-4">
                <label htmlFor="text" className="text-sm mb-1">
                  អុីម៉ែល
                </label>
                <input type="text" className="outline-none h-8 p-2" />
              </div>
              <div className="flex flex-col m-2 ml-6 mt-4">
                <label htmlFor="text" className="text-sm mb-1">
                  លេខទូរសព្ទ
                </label>
                <input type="text" className="outline-none h-8 p-2" />
              </div>
              <div className="flex flex-col m-2 ml-6 mt-4">
                <label htmlFor="text" className="text-sm mb-1">
                  អាស័យដ្ថានទី​-១
                </label>
                <input type="text" className="outline-none h-8 p-2" />
              </div>
              <div className="flex flex-col m-2 ml-6 mt-4">
                <label htmlFor="text" className="text-sm mb-1">
                  អាស័យដ្ថានទី​-២
                </label>
                <input type="text" className="outline-none h-8 p-2" />
              </div>
            </div>
            <div className="col-span-2 mt-14"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddSupplier;
