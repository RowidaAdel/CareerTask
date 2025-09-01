import React from "react";

export default function Footer() {
  return (
    <div>
      <div className=" bg-[#2C3E50] flex flex-col  lg:flex-row text-center gap-5 justify-center items-center  text-white py-10">
        <div className=" flex justify-center items-center flex-col   lg:me-20 ">
          <h1 className=" text-4xl font-semibold  ">LOCATION</h1>
          <p className=" text-xl py-1"> 2215 John Daniel Drive</p>
          <span className=" py-2 text-xs">Clark, MO 65243</span>
        </div>
        <div className=" flex flex-col justify-center items-center lg:me-20 ">
          <h1 className=" text-4xl font-semibold">AROUND THE WEB</h1>
          <div className="flex space-x-4 py-3">
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <i className="fa-brands fa-facebook text-white"></i>
            </div>
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <i className="fa-brands fa-twitter text-white"></i>
            </div>
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <i className="fa-brands fa-linkedin-in text-white"></i>
            </div>
            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center">
              <i className="fa-solid fa-earth-asia text-white"></i>
            </div>
          </div>
        </div>
        <div className=" flex flex-col justify-center items-center w-90 text-center">
          <h1 className=" text-4xl font-semibold ">ABOUT FREELANCER</h1>
          <p className=" py-3 ">
            Freelance is a free to use, licensed Bootstrap theme created by
            Route
          </p>
        </div>
      </div>
      <div className=" text-white py-8 bg-[#141D25] text-center">
        <h1>Copyright © Your Website 2021</h1>
      </div>
    </div>
  );
}
