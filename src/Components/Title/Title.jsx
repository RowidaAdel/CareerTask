import React from "react";

export default function Title({ text }) {
  return (
    <div>
      <h2
        className="text-center uppercase text-4xl mt-4 font-extrabold tracking-widest"
        style={{ fontFamily: "Dancing Script", color: "#2b3d4f" }}
      >
        {text}
      </h2>

      <div className="flex items-center justify-center my-3">
        {/* left line */}
        <div className="w-28 h-[3px]" style={{ backgroundColor: "#2b3d4f" }} />

        {/* star */}
        <span
          className="mx-3 text-2xl"
          style={{ color: "#2b3d4f", fontSize: "30px" }}
        >
          ★
        </span>

        {/* right line */}
        <div className="w-28 h-[3px]" style={{ backgroundColor: "#2b3d4f" }} />
      </div>
    </div>
  );
}
