import React, { useState, useEffect } from "react";

const Navbar = ({ isPopupOpen }) => {
  const [shadow, setShadow] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90);
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

  if (isPopupOpen) {
    return null;
  }

  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        borderRadius: "10px",
        border: "1px solid rgba(255, 255, 255, 0.18)",
      }}
      className={`fixed w-full h-20 z-[100] flex items-center ${
        shadow ? "shadow-xl" : ""
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center h-full">
        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center w-full space-x-10 text-sm uppercase">
          <li className="hover:border-b">
            <a href="/#home">Home</a>
          </li>
          <li className="hover:border-b">
            <a href="/#about">About</a>
          </li>
          <li className="hover:border-b">
            <a href="/#skills">Skills</a>
          </li>
          <li className="hover:border-b">
            <a href="/#projects">Projects</a>
          </li>
          <li className="hover:border-b">
            <a href="/#contact">Contact</a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="w-6 h-1 bg-gray-700 mb-1"></div>
          <div className="w-6 h-1 bg-gray-700 mb-1"></div>
          <div className="w-6 h-1 bg-gray-700"></div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed left-0 top-0 w-full h-screen bg-black bg-opacity-70 z-[99]">
          <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 ease-in duration-500">
            <div className="flex w-full justify-between items-center">
              <h2 className="text-xl font-semibold">Menu</h2>
              <div
                className="cursor-pointer text-gray-600"
                onClick={() => setMenuOpen(false)}
              >
                ✕
              </div>
            </div>
            <ul className="mt-10 space-y-6 uppercase">
              <li onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
                <a href="/#home">Home</a>
              </li>
              <li onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
                <a href="/#about">About</a>
              </li>
              <li onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
                <a href="/#skills">Skills</a>
              </li>
              <li onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
                <a href="/#projects">Projects</a>
              </li>
              <li onClick={() => setMenuOpen(false)} className="hover:text-blue-500">
                <a href="/#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;