import React from "react";
import {
  FaEnvelopeOpen,
  FaPhoneSquareAlt,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import "./contact.css";

const Contact = () => {
  return (
    <section className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="container__data">
          <h3 className="contact__title">Connect !</h3>

          <p className="contact__description">
            Hello! I'm Abdul Rauf, a Engineering graduate excited about starting
            a career in software development. If you need a dedicated and quick
            learner who thrives in a team, you're in the right place.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />

              <div>
                <span className="info__title">Main me</span>
                <h4 className="info__desc">ar.eng.developer@gmail.com</h4>
              </div>
            </div>

            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />

              <div>
                <span className="info__title">Call me</span>
                <h4 className="info__desc">+91 7303976722</h4>
              </div>
            </div>
          </div>

          <div className="contact__socials">
            <a
              href="https://github.com/Shaikh-AR?tab=overview"
              target="_main"
              className="contact__social-link"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/rauf-shaikh/"
              target="_main"
              className="contact__social-link"
            >
              <FaLinkedin />
            </a>
            
            {/* <a href="https://facebook.com" className="contact__social-link">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com" className="contact__social-link">
              <FaTwitter />
            </a>
            <a href="https://youtube.com" className="contact__social-link">
              <FaYoutube />
            </a> */}
          </div>
        </div>

        <form
          action="https://formspree.io/f/xvoepanw"
          method="POST"
          className="contact__form"
        >
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            <div className="form__input-div">
              <input
                type="text"
                name="subject"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>
          <div className="form__input-div">
            <textarea
              type="text"
              name="message"
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            send Message
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
