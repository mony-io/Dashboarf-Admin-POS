import React from "react";
import Navbar from "../navbar/Navbar";
import Sidebar from "../sidebar/Sidebar";
import { useState, useEffect } from "react";
import { AiFillDelete, AiOutlineSearch } from "react-icons/ai";
import { HiOutlinePencilAlt } from "react-icons/hi";
import ModelUpdate from "../models/ModalUpdate";
import ModelCreate from "../models/ModelCreate";
import axios from "axios";
import Swal from "sweetalert2";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState({
    id: "",
    categoryName: "",
    desc: "",
    image: "",
  });

  // show get model
  const [showModal, setShowModal] = useState(false);

  // show update model
  const [showUpdateModel, setShowUpdateModel] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("categoryName", category.categoryName);
      formData.append("desc", category.desc);
      formData.append("image", category.image);

      const res = await axios.post(
        "http://localhost:3001/categories",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (e) => {
    setCategory((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const fetchCategories = async () => {
    const res = await axios.get("http://localhost:3001/categories");
    // console.log(res);
    setCategories(res.data);
  };

  // update category function
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      let formData = new FormData();
      formData.append("categoryName", category.categoryName);
      formData.append("desc", category.desc);
      formData.append("image", category.image);

      const res = await axios.put(
        `http://localhost:3001/categories/${category.id}`,
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      //console.log(res)
      if (res.status === 201) {
        fetchCategories();
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [categories]);

  // Delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to delete...!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          axios.delete(`http://localhost:3001/categories/` + id);
        } catch (err) {
          console.log(err);
        }
        const Toast = Swal.mixin({
          toast: true,
          position: "top-end",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener("mouseenter", Swal);
            toast.addEventListener("mouseleave", Swal);
          },
        });
        Toast.fire({
          icon: "success",
          title: "Book has been deleted successfully.",
        });
        fetchCategories();
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 bg-[#aaa] h-20 flex justify-between items-center">
              <div className="flex items-center h-20 ml-4">
                <input
                  type="search"
                  className="w-28 p-1 mt-6 border outline-none text-sm rounded-l-sm"
                  placeholder="Search-Item"
                />
                <div className="h-[29px] flex items-center bg-[#555] p-[10px] py-[15px] mt-6 rounded-r-sm cursor-pointer">
                  <AiOutlineSearch color="white" size={20} />
                </div>
              </div>
              <div
                className="flex mr-12 bg-slate-50 p-1 pl-3 pr-3 mt-4 rounded-sm"
                onClick={() => setShowModal(true)}
              >
                <button
                  class="
      rounded-sm
      shadow-md
      transition
      duration-150
      ease-in-out"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Add Item
                </button>
              </div>

              {/* get model */}
              <div
                class="modal fade fixed top-12 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog relative w-auto pointer-events-none">
                  <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-sm outline-none text-current">
                    <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                      <h5
                        class="text-xl font-medium leading-normal text-gray-800"
                        id="exampleModalLabel"
                      >
                        Add Category
                      </h5>
                      <button
                        type="button"
                        class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body relative p-4">
                      <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Category Name
                        </label>
                        <input
                          type="text"
                          className="shadow-sm bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                          placeholder="Category Name"
                          name="categoryName"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="mb-6">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                          Description
                        </label>
                        <textarea
                          placeholder="Description"
                          onChange={handleChange}
                          name="desc"
                          className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        />
                      </div>
                      <div className="mb-6">
                        <label
                          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                          for="file_input"
                        >
                          Image
                        </label>
                        <input
                          onChange={(e) => {
                            setCategory((prev) => ({
                              ...prev,
                              [e.target.name]: e.target.files[0],
                            }));
                          }}
                          name="image"
                          accept="image/png, image/jpeg"
                          className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-sm cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                          id="file_input"
                          type="file"
                        />
                      </div>
                    </div>
                    <div class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                      <button
                        type="button"
                        class="px-6
          py-2.5
          bg-red-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          transition
          duration-150
          ease-in-out"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                      <button
                        type="button"
                        class="px-6
      py-2.5
      bg-blue-600
      text-white
      font-medium
      text-xs
      leading-tight
      uppercase
      rounded
      shadow-md
      transition
      duration-150
      ease-in-out
      ml-1"
                        onClick={handleClick}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <ModelCreate
                isVisible={showModal}
                onClose={() => {
                  setShowModal(false);
                }}
              >
                <form className="p-5">
                  <div className="mb-6">
                    <h1 className="text-center">Add Category</h1>
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Category Name
                    </label>
                    <input
                      type="text"
                      className="shadow-sm bg-gray-50 h-12 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                      placeholder="Category Name"
                      name="categoryName"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="mb-6">
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                      Description
                    </label>
                    <textarea
                      placeholder="Description"
                      onChange={handleChange}
                      name="desc"
                      className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    />
                  </div>
                  <div className="mb-6">
                    <label
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="file_input"
                    >
                      Image
                    </label>
                    <input
                      onChange={(e) => {
                        setCategory((prev) => ({
                          ...prev,
                          [e.target.name]: e.target.files[0],
                        }));
                      }}
                      name="image"
                      accept="image/png, image/jpeg"
                      className="block w-full text-sm p-2.5 text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                  </div>
                  <button
                    onClick={handleClick}
                    type="submit"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Submit
                  </button>
                </form>
              </ModelCreate> */}
            </div>
            <div className="col-span-4 bg-white h-[600px] m-2 overflow-auto scrollbar">
              <div className="flex flex-col">
                <div className="o sm:-mx-6 lg:-mx-8">
                  <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="overflow-hidden">
                      <table className="min-w-full border text-center">
                        <thead className="border-b">
                          <tr>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-8 py-4 "
                            >
                              Cate-Name
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-6 py-4 "
                            >
                              Description
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-6 py-4 "
                            >
                              Image
                            </th>
                            <th
                              scope="col"
                              className="text-sm font-bold text-gray-900 px-6 py-4"
                            >
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {categories.map((cate, index) => {
                            return (
                              <tr
                                key={index + 1}
                                className="border-b bg-[#bbb]"
                              >
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 ">
                                  {cate.categoryName}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                                  {cate.desc}
                                </td>
                                <td className="text-sm text-gray-900 font-light px-8 py-1 whitespace-nowrap flex justify-center">
                                  <img
                                    src={
                                      cate.photo &&
                                      `http://localhost:3001/${cate.photo}`
                                    }
                                    alt=""
                                    className="h-12 w-12 object-cover mt-[2px]"
                                  />
                                </td>
                                <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                  <div className="flex justify-center items-center">
                                    <div
                                      className="bg-blue-400 p-1 mr-2 rounded-md text-blue-100 cursor-pointer"
                                      onClick={async () => {
                                        console.log(cate.id);
                                        const res = await axios.get(
                                          `http://localhost:3001/categories/${cate.id}`
                                        );
                                        setCategory(res.data[0]);
                                        setShowUpdateModel(true);
                                      }}
                                    >
                                      <HiOutlinePencilAlt size={20} />
                                    </div>
                                    <AiFillDelete
                                      size={28}
                                      className="bg-red-400 p-[4px] text-[#ffffff] rounded-md cursor-pointer"
                                      onClick={() => handleDelete(cate.id)}
                                    />
                                    <ModelUpdate
                                      isVisible={showUpdateModel}
                                      onClose={() => {
                                        setShowUpdateModel(false);
                                      }}
                                    >
                                      <form className="p-5">
                                        <div className="mb-6">
                                          <h1 className="text-center">
                                            Update Category
                                          </h1>
                                        </div>
                                        <div className="mb-6">
                                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Category Name
                                          </label>
                                          <input
                                            type="text"
                                            className="shadow-sm bg-gray-50 border h-12 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                            placeholder="Category Name"
                                            value={category.categoryName}
                                            name="categoryName"
                                            onChange={handleChange}
                                          />
                                        </div>
                                        <div className="mb-6">
                                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Description
                                          </label>
                                          <textarea
                                            onChange={handleChange}
                                            value={category.desc}
                                            name="desc"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          />
                                        </div>
                                        <div className="mb-6">
                                          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Image
                                          </label>
                                          <input
                                            onChange={(e) => {
                                              setCategory((prev) => ({
                                                ...prev,
                                                [e.target.name]:
                                                  e.target.files[0],
                                              }));
                                            }}
                                            type="file"
                                            id=""
                                            name="image"
                                            accept="image/png, image/jpeg"
                                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                                          />
                                        </div>
                                        <button
                                          onClick={handleUpdate}
                                          type="submit"
                                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        >
                                          Update
                                        </button>
                                      </form>
                                    </ModelUpdate>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Category;
