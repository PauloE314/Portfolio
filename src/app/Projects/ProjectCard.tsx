import React from "react";
import { AiOutlineGlobal, AiFillGithub } from "react-icons/ai";

interface IProps {
  name: string;
  year: number;
  tag: string;
  image: string;
  onClick: (name: string, github: string, production?: string) => any;
  links: {
    github: string;
    production?: string;
  };
}

export default function Project({
  name,
  year,
  tag,
  image,
  links,
  onClick,
}: IProps) {
  // Handles mobile click
  function handleMobileClick() {
    if (window.innerWidth < 700) {
      onClick(name, links.github, links.production);
    }
  }

  return (
    <li className="card" onClick={handleMobileClick}>
      <div className="card-data">
        <div className="image-container">
          <img src={image} alt={name} />
          <div className="button-container">
            <a
              href={links.github}
              className={links.github && links.production ? "left" : ""}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub />
            </a>
            {links.production && (
              <a
                href={links.production}
                className="right"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineGlobal />
              </a>
            )}
          </div>
        </div>
        <div className="card-body">
          <div className="data-container">
            <h3>
              <a
                href={links.github}
                className={links.github && links.production ? "left" : ""}
                target="_blank"
                rel="noopener noreferrer"
              >
                {name}
              </a>
            </h3>
            <small>{year}</small>
          </div>
          <div className="tag-container">
            <h4 className="tag">{tag}</h4>
          </div>
        </div>
      </div>
    </li>
  );
}
