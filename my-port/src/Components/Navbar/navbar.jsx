import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90);
    window.addEventListener("scroll", handleShadow);
    return () => window.removeEventListener("scroll", handleShadow);
  }, []);

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
      </div>
    </div>
  );
};

export default Navbar;