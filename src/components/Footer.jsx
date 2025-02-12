import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#1f2328] text-white flex flex-col justify-center items-center py-4  w-full">
      <div className="logo font-bold ">
        <span className="text-green-500 text-2xl font-bold"> &lt;</span>
        <span className="text-xl">Secure</span>
        <span className="text-green-500 text-2xl">Pass / &gt;</span>
      </div>
      <div className="flex justify-center items-center ">
        Created by <img className="w-7 mx-2 " src="/icons/heart.png" alt="" />
        <span className="font-bold">Gaurav</span>
        <img className="w-7 mx-2 " src="/icons/heart.png" alt="" />
        <span className="font-bold">Aatish</span>
      </div>
    </div>
  );
};

export default Footer;
