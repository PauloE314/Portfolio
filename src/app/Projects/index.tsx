import React, { useRef, useState } from "react";
import { projects } from "../../settings";

import "./style.css";
import Idea from "../../assets/Projects/Ideia.svg";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import ParallaxImage from "../../components/ParallaxImage";

interface IProjectModalData {
  name: string;
  github: string;
  production?: string;
}

interface IProps {
  screen: { width: number; height: number };
}

export default function Projects({ screen }: IProps) {
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

  function handleParallax(diff: number, image: HTMLImageElement) {
    let change = 8 - diff * 0.015;

    if (screen.width < 700) {
      change -= 3;
    }

    image.style.top = change + "rem";
    image.style.left = change + "rem";
    image.style.transform = `rotate(${change * 2}deg)`;
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
        <ParallaxImage id="idea" image={Idea} handleScroll={handleParallax} />
        {/* <img id="idea" src={Idea} alt="" className="bg-image" /> */}
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
