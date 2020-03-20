import React, { Component } from "react";
import Nav from "../Nav/Nav";
import Project from "../Project/Project";
import "./Portfolio.css";
import projects from "../projectStore";

class Portfolio extends Component {
  state = {
    projects
  };

  render() {
    return (
      <div className="portfolio">
        <Nav />
        <h1>Projects</h1>
        <div className="projects">
          {this.state.projects.map((project, i) => (
            <Project
              key={i}
              name={project.name}
              image={project.image}
              link={project.link}
              text={project.text}
              repo={project.repo}
              tech={project.tech}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Portfolio;
