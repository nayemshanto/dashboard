import React from "react";
import {CiSearch} from "react-icons/ci";
import {FiMenu} from "react-icons/fi";
import {IoMdNotificationsOutline} from "react-icons/io";
import User from "../../assets/user.png";

const Navbar = ({toggleSidebar}) => {
  return (
    <div className="bg-primary1 shadow-md py-4 ">
      <div className="flex justify-between items-center px-2 gap-2">
        <button onClick={toggleSidebar} className="md:hidden cursor-pointer">
          <FiMenu size={24} />
        </button>
        <div className="flex items-center justify-center bg-primary2 text-grayText px-1.5 py-1.5 gap-2 min-w-[200px] max-w-xl w-[100%] rounded-md">
          <CiSearch className="text-xl "/>
          <input type="text" className="bg-transparent w-full outline-none border-none text-gray-300" >
          </input>
        </div>
        <div className="flex items-center gap-x-2">
          <div className="relative">
            <div className="absolute top-[3px] right-[5px] w-2 h-2 rounded-full bg-red-500">
              
            </div>
            <IoMdNotificationsOutline   className="text-gray-400 text-[25px] md:text-[30px] cursor-pointer"/>

          </div>
          <img src={User} alt="user" className="w-8 h-8 rounded-full cursor-pointer" />
        </div>
       
      </div>
      
    </div>
  );
};

export default Navbar;
