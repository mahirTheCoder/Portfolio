"use client";
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import banner from '../../app/Images/banner.jpg'
import Image from "next/image";
import CountUp from "react-countup";
const Banner = () => {
  return (
    <>
          <section id="home" className="container ">
        <div className="both flex justify-between items-center py-15">
          <div className="flex flex-col  bg-black  px-6 ">
            <p className="text-lg text-gray-400 mb-2">Hi, I am</p>
            <h1 className="text-5xl  font-bold text-amber-500  mb-3">
              Mahir The Coder
            </h1>
            <p className="text-gray-400 max-w-xl">
              I’m a passionate web developer who loves creating modern,
              responsive, and user-friendly web experiences. Let’s build
              something amazing!
            </p>
            <div className="social flex gap-5 mt-8 mb-15">
              <a className="text-3xl text-gray-400 " href="#">
                <FaInstagram />
              </a>
              <a className="text-3xl text-gray-400 " href="#">
                <CiLinkedin />
              </a>
              <a className="text-3xl text-gray-400 " href="#">
                <FaFacebookF />
              </a>
              <a className="text-3xl text-gray-400 " href="#">
                <MdOutlineEmail />
              </a>
            </div>
            <div className="button-part flex gap-7">
              <a
                href="#"
                className="hover:bg-amber-600  text-white border-2 border-gray-500  px-5 py-2 rounded-lg font-semibold  transition"
              >
                Hire Me
              </a>
              <a
                href="#"
                className="hover:bg-amber-600 text-white border-2 border-gray-500  px-5 py-2 rounded-lg font-semibold  transition"
              >
                Download CV
              </a>
            </div>

            {/* ----------counter part----- */}
            <div className="counter-part  py-7 px-6 bg-gray-900 mt-20 rounded-2xl">
              <div className="allCounter flex justify-between items-center ">
                <div className="partOne">
                  <h2 className="text-3xl  font-bold text-amber-500 mb-2">
                    <CountUp end={5} />+
                  </h2>
                  <p>Experiences</p>
                </div>
                <div className="partOne border-l-3 border-gray-600 pl-3 ">
                  <h2 className="text-3xl font-bold text-amber-500 mb-2">
                         <CountUp end={5} />+
                  </h2>
                  <p>Project done</p>
                </div>
                <div className="partOne border-l-3 border-gray-600 pl-3  ">
                  <h2 className="text-3xl font-bold text-amber-500 mb-2">
                    <CountUp end={5} />+
                    </h2>
                  <p>Happy Clients</p>
                </div>
              </div>
            </div>
          </div>
          <div className="img-part  ">
          <Image className=' rounded-4xl' src={banner} width={500}   height={600} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner