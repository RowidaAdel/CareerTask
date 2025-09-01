import React from "react";
import Title from "../../Components/Title/Title";

export default function About() {
  return (
    <div className=" bg-[#1ABC9C]  text-white  flex flex-col justify-center items-center py-50 ">
           <Title text="About Component" />
      <div className="py-6 grid lg:grid-cols-2 gap-8 place-content-center">
        <div className="w-120 p-5 md:p-0">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="w-120 p-5 md:p-0">
          <p>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </div>
  );
}
