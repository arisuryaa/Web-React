import React from "react";
const ContactHome = () => {
  return (
    <div className="flex justify-center w-full mt-5 min-h-fit">
      <div className="flex w-2/5 text-white justify-evenly">
        <a href="Github" className="px-2.5 py-1 text-md border-2 border-white  rounded-full hover:bg-violet-700 transition-all duration-150">
          <i class="fa-brands fa-github"></i>
        </a>
        <a href="Github" className="px-2.5 py-1 text-md border-2 border-white  rounded-full hover:bg-purple-400 transition-all duration-150">
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a href="Github" className="px-2.5 py-1 text-md border-2 border-white  rounded-full hover:bg-blue-600 transition-all duration-150">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a href="Github" className="px-2.5 py-1 text-md border-2 border-white  rounded-full hover:bg-blue-400 transition-all duration-150">
          <i class="fa-brands fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactHome;
