import React from "react";

export default function Home() {
  return (
    <div className=" bg-[#1ABC9C] py-20  text-white flex justify-center items-center text-center flex-col">
      <img
        src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg"
        className="  w-70 py-15"
      />
      <h1 className=" text-6xl font-bold">START FRAMEORK</h1>
      <div class="flex items-center py-1">
        <span class="w-10 h-1 bg-white"></span>
        <i class="fa-solid fa-star text-white mx-4"></i>
        <span class="w-10 h-1 bg-white"></span>
      </div>

      <p className=" py-1">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  );
}
