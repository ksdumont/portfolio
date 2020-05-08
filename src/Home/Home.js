import React from "react";
import Nav from "../Nav/Nav";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <Nav />
      <header>
        <h1>Keith Dumont</h1>
      </header>
      <section className="img-about">
        <img
          src="images/face-sketch.jpg"
          alt="face sketch"
          className="sketch-image"
        />
        <p className="about-paragraph">
          I am a Full Stack Web Developer. I have a strong passion for learning
          and love solving problems. I am proficient in HTML, CSS, Javascript,
          React, Jquery, Node, Express, Knex, and PostgreSQL. When I’m not
          coding, I am a Licensed Occupational Therapist and Registered Yoga
          Instructor. I enjoy playing music, travelling, exploring nature, and
          being upside down. You can also check me out{" "}
          <a
            href="https://keithdumont.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
        </p>
      </section>
    </section>
  );
};

export default Home;
