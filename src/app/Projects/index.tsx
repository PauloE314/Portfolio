import React, { useRef, useState } from "react";
import { projects } from "../../settings";

import "./style.css";
import Idea from "../../assets/Projects/Ideia.svg";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

interface IProjectModalData {
  name: string;
  github: string;
  production?: string;
}

export default function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState<IProjectModalData | null>(null);

  function handleMobileActiveClick(
    name: string,
    github: string,
    production?: string
  ) {
    setShowModal(true);
    setModalData({ name, github, production });
  }

  function handleMobileDescativeClick() {
    const modal = document.getElementById("modal");

    if (modal) {
      modal.style.opacity = "0";
      setTimeout(() => {
        setModalData(null);
        setShowModal(false);
      }, 500);
    }
  }

  return (
    <>
      {showModal && modalData && (
        <ProjectModal
          github={modalData.github}
          name={modalData.name}
          production={modalData.production}
          onClickOut={handleMobileDescativeClick}
        />
      )}
      <section id="projects" className="page">
        <img id="idea" src={Idea} alt="" className="bg-image" />
        <h2 className="title">Principais projetos</h2>
        <div className="main">
          <p className="text">
            Segue a lista dos principais projetos nos quais atuei ou fui o
            criador. Serão listados projetos tanto pessoais quanto
            profissionais.
          </p>

          <ul id="project-list">
            {[...projects].map(({ image, name, tag, year, links }, id) => (
              <ProjectCard
                key={id}
                image={image}
                name={name}
                tag={tag}
                year={year}
                links={links}
                onClick={handleMobileActiveClick}
              />
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
