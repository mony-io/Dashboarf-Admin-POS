import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RiHome3Fill, RiCustomerServiceFill } from "react-icons/ri";
import { FiShoppingCart } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { BsArrowRightShort } from "react-icons/bs";
import { RxDot } from "react-icons/rx";
import { MdAddShoppingCart, MdOutlineSupportAgent } from "react-icons/md";
import {FaUserAlt} from "react-icons/fa"
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOne, setSubmenuOne] = useState(false);
  const [submenuTwo, setSubmenuTwo] = useState(false);
  const [submenuThree, setSubmenuThree] = useState(false);

  const subOneHandler = () => {
    setSubmenuOne(!submenuOne);
  };

  const subTwoHandler = () => {
    setSubmenuTwo(!submenuTwo);
  };

  const subThreeHandler = () => {
    setSubmenuThree(!submenuThree);
  };

  return (
    <div
      className={`flex-2 ${
        open ? "w-56" : "w-12"
      } bg-[#404258] h-screen scrollbar relative duration-200`}
    >
      <ul className=" pt-2 text-gray-300 mt-24">
        <Link to="/">
          <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
            <span className="text-xl block float-left">
              <RiHome3Fill color="white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              } duration-200 mt-[2px]`}
            >
              Dashboard
            </span>
          </li>
        </Link>
        <Link to="/sale">
          <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
            <span className="text-xl block float-left">
              <FiShoppingCart color="white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              } duration-200 mt-[2px]`}
            >
              Sale
            </span>
          </li>
        </Link>
        <Link to="/category">
          <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
            <span className="text-xl block float-left">
              <BiCategoryAlt color="white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              } duration-200 mt-[2px]`}
            >
              Category
            </span>
          </li>
        </Link>
        <>
          <li
            onClick={subOneHandler}
            className="text-primary-text-dark relative text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline"
          >
            <span className="text-xl block float-left">
              <MdAddShoppingCart color="white" />
            </span>
            <span
              className={`text-base font-medium select-none flex-1 ${
                !open && "hidden"
              } mt-[2px]`}
            >
              Product
            </span>
            <span>
              {open && (
                <BsArrowRightShort
                  color="white"
                  className={`${submenuOne && "rotate-90"}`}
                />
              )}
            </span>
          </li>
          {submenuOne && open && (
            <div>
              <Link to="/addproduct">
                <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[18px] p-2 hover:bg-[#282A3A] focus:outline">
                  <span className="text-xl block float-left">
                    <RxDot color="white" />
                  </span>
                  <span
                    className={`text-base font-medium select-none flex-1 ${
                      !open && "hidden"
                    } mt-[2px]`}
                  >
                    add-product
                  </span>
                </li>
              </Link>
              <Link to="/lisitproducts">
              <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[18px] p-2 hover:bg-[#282A3A] focus:outline">
                <span className="text-xl block float-left">
                  <RxDot color="white" />
                </span>
                <span
                  className={`text-base select-none font-medium flex-1 ${
                    !open && "hidden"
                  } mt-[2px]`}
                >
                  list-product
                </span>
              </li>
              </Link>
            </div>
          )}
          <li
            onClick={subTwoHandler}
            className="text-primary-text-dark relative text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline"
          >
            <span className="text-xl block float-left">
              <RiCustomerServiceFill color="white" />
            </span>
            <span
              className={`text-base font-medium select-none flex-1 ${
                !open && "hidden"
              } mt-[2px]`}
            >
              Customer
            </span>
            <span>
              {open && (
                <BsArrowRightShort
                  color="white"
                  className={`${submenuTwo && "rotate-90"}`}
                />
              )}
            </span>
          </li>
          {submenuTwo && open && (
            <div>
              <Link to="/addcustomer">
                <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[18px] p-2 hover:bg-[#282A3A] focus:outline">
                  <span className="text-xl block float-left">
                    <RxDot color="white" />
                  </span>
                  <span
                    className={`text-base font-medium select-none flex-1 ${
                     !open && "hidden"
                    } mt-[2px]`}
                  >
                    add-customer
                  </span>
                </li>
              </Link>
              <Link to="/listcustomers">
              <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[18px] p-2 hover:bg-[#282A3A] focus:outline">
                <span className="text-xl block float-left">
                  <RxDot color="white" />
                </span>
                <span
                  className={`text-base select-none font-medium flex-1 ${
                    !open && "hidden"
                  } mt-[2px]`}
                >
                  list-customer
                </span>
              </li>
              </Link>
            </div>
          )}
        </>
        <Link to="/user">
          <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
            <span className="text-xl block float-left">
              <FaUserAlt color="white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              } duration-200 mt-[2px]`}
            >
              User
            </span>
          </li>
        </Link>
        <Link to="/addsupplier">
          <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline">
            <span className="text-xl block float-left">
              <MdOutlineSupportAgent color="white" />
            </span>
            <span
              className={`text-base font-medium flex-1 ${
                !open && "hidden"
              } duration-200 mt-[2px]`}
            >
              Supplier
            </span>
          </li>
        </Link>
      </ul>
      <div
        className="absolute top-6 right-[14px] cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <AiOutlineMenu size={24} color="white" />
      </div>
      <li
            onClick={subThreeHandler}
            className="text-primary-text-dark text-[#fff] relative text-xl flex items-center gap-x-4 cursor-pointer pl-[12px] p-3 hover:bg-[#282A3A] focus:outline"
          >
            <span className="text-xl block float-left">
              <RiCustomerServiceFill color="white" />
            </span>
            <span
              className={`text-base font-medium select-none flex-1 ${
                !open && "hidden"
              } mt-[2px]`}
            >
              Staff
            </span>
            <span>
              {open && (
                <BsArrowRightShort
                  color="white"
                  className={`${submenuThree && "rotate-90"}`}
                />
              )}
            </span>
          </li>
          {submenuThree && open && (
            <div className="text-[#fff]">
              <Link to="/addstaff">
                <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[18px] p-2 hover:bg-[#282A3A] focus:outline">
                  <span className="text-xl block float-left">
                    <RxDot color="white" />
                  </span>
                  <span
                    className={`text-base font-medium select-none flex-1 ${
                     !open && "hidden"
                    } mt-[2px]`}
                  >
                    add-staff
                  </span>
                </li>
              </Link>
              <Link to="/liststaff">
              <li className="text-primary-text-dark text-xl flex items-center gap-x-4 cursor-pointer pl-[18px] p-2 hover:bg-[#282A3A] focus:outline">
                <span className="text-xl block float-left">
                  <RxDot color="white" />
                </span>
                <span
                  className={`text-base select-none font-medium flex-1 ${
                    !open && "hidden"
                  } mt-[2px]`}
                >
                  list-staff
                </span>
              </li>
              </Link>
            </div>
          )}
    </div>
  );
};

export default Sidebar;
