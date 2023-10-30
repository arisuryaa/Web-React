import React from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 text-sm font-medium text-white px-14">
      <img src="../public/img/logo.png" alt="" className="w-auto h-8" />
      <div className="flex w-2/5 justify-evenly">
        <a href="" className="">
          Home
        </a>
        <a href="" className="">
          About
        </a>
        <a href="" className="">
          Project
        </a>
        <a href="" className="">
          Contact
        </a>
      </div>
      <button className="text-xl">
        <i class="fa-regular fa-moon"></i>
      </button>
    </nav>
  );
};

export default Navbar;
