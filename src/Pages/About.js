import React from "react";
import AboutUs from "../components/About Us";
import Chefs from "../components/Chefs";
import Info from "../components/Info";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Fade from "react-reveal/Fade";
import LazyLoad from "react-lazyload";

const About = () => {
  return (
    <>
      <div className="primary-bg color-light pt-5 border-top">
        <div className="container">
          <Navbar background="primary" />
        </div>
      </div>
      <LazyLoad once={true} overflow={true}>
        <Fade bottom>
          <AboutUs />
          <Info />
          <Chefs />
          <Testimonials />
        </Fade>
      </LazyLoad>
    </>
  );
};

export default About;
