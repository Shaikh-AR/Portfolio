import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../assets/Abdul4.png";
import { FaArrowRight } from "react-icons/fa";
import "./home.css"
const Home = () => {
  return (
    <>
    <section className="home section grid">
      <img src={Profile} alt="" className="home__img" />
      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Abdul Rauf</span> Software Developer
          </h1>
          <p className="home__description">
          Hello there! I'm a passionate and dedicated Java Programmer & Software Developer, ready to bring innovation and creativity to the world of technology.I'm all about bringing new and creative ideas to the tech world. I've been learning and getting really good at different programming languages and tools. Let's chat about tech, creativity, or anything cool in the world of technology! 😊
          </p>
          <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link>
        </div>
      </div>
    </section>
    <section className="color__block">

    </section>
    </>
  );
};

export default Home;
