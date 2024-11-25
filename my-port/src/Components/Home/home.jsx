import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";

const Home = () => {
  return (
    <div id="home"
    style={{
      backgroundImage: `url(${process.env.PUBLIC_URL}/Assets/home_bg/images.jpg)`,
      backgroundColor: '#d1c5d2',
      backgroundSize: "cover",
      backgroundPosition: "fullscreen",
      backgroundRepeat: "no-repeat",
      width: "100%",
      height: "100vh",
      
      }}
     className="relative w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-1 pt-14 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-4xl font-extrabold font-sans">
            Hello there. I'm <span className="text-purple-900">Nonhlanhla Mazibuko</span>
          </h1>
          <h1 className="py-4 text-4xl font-semibold font-sans p-1">A Data Professional and Software Developer</h1>

          <p className="py-4 text-lg text-black-700 max-w-[70%] m-auto leading-relaxed tracking-wide space-y-2 p-1">
            with competencies in Data Analytics, Data Engineering, and software development.
            I am passionate about building data pipelines, interactive dashboards,
            and functional web applications that are user-friendly.
          </p>
          <div className="flex space-x-4 mt-4 justify-center">
            <a
              href="https://www.linkedin.com/in/nonhlanhla-mazibuko"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 transition-transform"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/NonhlanhlaMazibuko"
              target="_blank"
              rel="noreferrer"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 transition-transform"
            >
              <FaGithub />
            </a>
            <a
              href="#contact"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 transition-transform"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;