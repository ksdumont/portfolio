import React from "react";
import "./Project.css";

const Project = props => {
  return (
    <section className="project">
      <h2>{props.name}</h2>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <img src={props.image} alt="project screenshot" />
      </a>
      <p className="project-text">{props.text}</p>
      <p className="tech">{props.tech}</p>
      <a
        className="github"
        href={props.repo}
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </a>
    </section>
  );
};

export default Project;
