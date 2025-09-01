import React, { useState } from "react";
import Title from "../../Components/Title/Title";

export default function Portfolio() {
  const images = Object.values(
    import.meta.glob("../../assets/images/*.{png,jpg,jpeg,jfif,PNG,JPEG}", {
      eager: true,
    })
  ).map((img) => img.default);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedImg, setSelectedImg] = useState(null);

  function openModal(img) {
    setSelectedImg(img);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setSelectedImg(null);
  }

  return (
 <div className="py-40 flex flex-col justify-center items-center">
      <Title text="Portfolio Component" />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 px-8 py-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => openModal(src)}
          >
            <img
              src={src}
              alt={`portfolio-${index}`}
              className="w-full h-auto rounded-lg shadow-md"
            />

            <div
              className="absolute top-0 left-0 w-full h-full bg-[#19AB8E] bg-opacity-70 
                opacity-0 transition-opacity duration-300 ease-in-out 
                flex items-center justify-center group-hover:opacity-100"
            >
              <i className="fa-solid fa-plus fa-4x text-white"></i>
            </div>
          </div>
        ))}
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg max-w-3xl w-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-red-600 text-2xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImg}
              alt="Selected"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}
