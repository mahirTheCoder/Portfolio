import React from "react";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import Service from "./Components/Service";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};

export default page;
