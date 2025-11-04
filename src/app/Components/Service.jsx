import React from "react";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";

const Service = () => {
  return (
    <>
      <section id="Service" className="container">
        <div className="content  mt-[110px]">
          <h2 className="text-4xl font-bold font text-center mb-20 font-sans">
            Tech Stack I Use
          </h2>

          <div className="skill-part flex justify-between mb-10 flex-wrap">

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-amber-600 pb-8">
                <FaHtml5 />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                HTML & CSS
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
                Core building blocks of mordern web design with responsive
                layouts.{" "}
              </p>
            </div>

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-blue-400 pb-8">
                <FaReact  />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
               React.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
              Building first and dynamic user interface usingreact components and hooks.
              </p>
            </div>

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-white pb-8">
                <SiNextdotjs />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                Next.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
              Creating SEO-friendly and high-performance web apps with Next.js framework
              </p>
            </div>

            
          </div>
          <div className="skill-part flex justify-between mb-10 flex-wrap">

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-amber-600 pb-8">
                <FaHtml5 />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
              Node.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
                Core building blocks of mordern web design with responsive
                layouts.{" "}
              </p>
            </div>

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-blue-400 pb-8">
                <FaReact  />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
               React.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
              Building first and dynamic user interface usingreact components and hooks.
              </p>
            </div>

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-white pb-8">
                <SiNextdotjs />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                Next.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
              Creating SEO-friendly and high-performance web apps with Next.js framework
              </p>
            </div>

            
          </div>
          <div className="skill-part flex justify-between mb-10 flex-wrap">

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-amber-600 pb-8">
                <FaHtml5 />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                HTML & CSS
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
                Core building blocks of mordern web design with responsive
                layouts.{" "}
              </p>
            </div>

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-blue-400 pb-8">
                <FaReact  />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
               React.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
              Building first and dynamic user interface usingreact components and hooks.
              </p>
            </div>

            <div className="partone w-[350px] h-[322px] px-7 flex flex-col justify-center bg-gray-900  rounded-xl ">
              <button className="text-5xl text-white pb-8">
                <SiNextdotjs />
              </button>
              <h2 className="text-2xl font-bold pb-4 text-amber-600 font-sans">
                Next.js
              </h2>
              <p className="  text-xl font-sans font-medium text-[#575757] w-[300px]">
              Creating SEO-friendly and high-performance web apps with Next.js framework
              </p>
            </div>

            
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
