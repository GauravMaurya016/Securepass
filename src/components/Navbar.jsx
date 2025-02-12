import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-[#1f2328] text-white ">
      <div className="mycontainer flex flex-row justify-between items-center px-4 py-4 h-14 ">
      <div className="logo font-bold">
        <span className="text-green-500 text-2xl font-bold"> &lt;</span>
         <span className="text-xl">Secure</span> 
        <span className="text-green-500 text-2xl">Pass / &gt;</span>
        </div>
      {/* <ul className="">
        <li className="flex flex-row gap-4">
          <a className="hover:font-bold" href="/">Home</a>
          <a className="hover:font-bold" href="/">About</a>
          <a className="hover:font-bold" href="/">Contact</a>
        </li>
      </ul> */}
      <button className="text-white h-12 bg-green-500 my-5 rounded-full  flex items-center justify-center  ring-white ring-1">
        <img className="invert p-1  w-10" src="/icons/github.svg" alt="github logo" />
        <span className="font-bold px-2 ">Github</span>
        
      </button>
      </div>
    </nav>

  );
};

export default Navbar;
