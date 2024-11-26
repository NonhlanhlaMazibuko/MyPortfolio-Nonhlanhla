import React, { useState } from "react";

const Card = ({
  title,
  backgroundImage,
  projectCode,
  projectDemo,
  tech,
  description,
  styles,
  setIsPopupOpen
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsOpen(!isOpen);
    setIsPopupOpen(!isOpen);
    document.body.style.overflow = isOpen ? "auto" : "hidden";
  };

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-center h-[300px] w-full shadow-xl border-2 border-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-stone-400 to-zinc-900">
        <img
          className="rounded-xl group-hover:opacity-10 object-cover h-full w-full"
          src={backgroundImage}
          alt={title}
        />
        <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <h3 className="text-2xl tracking-wider text-center">{title}</h3>
          <p className="pt-2 text-center">{tech}</p>
          <p className="pt-2 text-center">{styles}</p>

          <button
            className="p-2 text-center text-red-400 rounded-lg bg-white font-bold text-lg cursor-pointer mt-4"
            onClick={handlePopupToggle}
          >
            See Details
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-[90%] md:w-[70%] p-6 relative overflow-y-auto max-h-[90vh]">
            <button
              onClick={handlePopupToggle}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
              aria-label="Close popup"
            >
              &times;
            </button>
            <img
              className="w-full h-60 object-cover rounded-lg mb-4"
              src={backgroundImage}
              alt={title}
            />
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-4">{description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {tech.split(", ").map((technology, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-gray-200 text-gray-700 rounded-lg text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <a
                href={projectDemo}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-center text-red-400 rounded-lg bg-gray-200 font-bold text-lg"
              >
                See Live
              </a>
              <a
                href={projectCode}
                target="_blank"
                rel="noreferrer"
                className="p-2 text-center text-red-400 rounded-lg bg-gray-200 font-bold text-lg"
              >
                See Code
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;