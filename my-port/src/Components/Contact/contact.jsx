import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="tracking-widest uppercase py-4">Contact</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <h1 className="py-8 pt-20">
                  I am always available for a chat about new projects and technologies, please feel free to leave a message or get in touch
                </h1>
              </div>
              <div>
                <p className="uppercase pt-15 text-center">Connect With Me</p>
                <div className="flex items-center justify-center py-4">
                  <a
                    href="https://www.linkedin.com/in/nonhlanhla-mazibuko-879636214/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </a>
                  <a
                    href="https://github.com/NonhlanhlaMazibuko"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form action="https://formspree.io/f/mjkvrpob" method="post" className="max-w-md mx-auto">
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                    name="Your Name"
                    placeholder="Full name"
                    maxlength="100"
                    aria-label="Full name"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="number"
                      name="Your Number"
                      maxlength="10"
                      placeholder="Cellphone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    placeholder="Email Address"
                    name="Your Email"
                  />
                </div>
                <div className="flex flex-col py-2 ">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                    placeholder="Leave a message"
                    name="Your Message"
                  ></textarea>
                </div>
                <button className=" w-full p-4 text-blue-400 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12 ">
          <a href="/#home">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-stone-800" size={20} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;