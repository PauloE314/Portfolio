import React from "react";

import "./style.css";
import ProjectCard from "./ProjectCard";
import { projects } from "../../settings";

export default function Projects() {
  return (
    <section id="projects" className="page">
      <h2 className="title">Principais projetos</h2>
      <div className="main">
        <p className="text">
          Segue a lista dos principais projetos nos quais atuei ou fui o
          criador. Serão listados projetos tanto pessoais quanto profissionais.
        </p>

        <ul id="project-list">
          {[...projects].map(({ image, name, tag, year }, id) => (
            <ProjectCard
              key={id}
              image={image}
              name={name}
              tag={tag}
              year={year}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
