import React, { useEffect, useState } from "react";

import "./style.css";

import LandingIcon from "../../assets/Landing icon.svg";
import LandingIconMobile from "../../assets/Landing icon (mobile).svg";

import useScreen from "../../utils/useScreen";
import Header from "./Header";

interface IProps {
  isMobile?: boolean;
}

export default function LandingPage(props: IProps) {
  const [landingImage, setLandingImage] = useState(LandingIcon);
  const [isMobile, setMobile] = useState(false);

  const screen = useScreen();

  // Handles screen resize
  function handleResize() {
    setLandingImage(screen.width <= 1100 ? LandingIconMobile : LandingIcon);
    setMobile(screen.width <= 700);
  }

  useEffect(handleResize, [screen.width]);

  return (
    <section id="landing" className="page">
      {/* Header */}

      <Header isMobile={isMobile}>
        <ul id="header-list">
          <li>
            <a className="neon" href="#skills">
              {" "}
              Habilidades
            </a>{" "}
          </li>
          <li>
            <a className="neon" href="#projects">
              {" "}
              Projetos
            </a>{" "}
          </li>
          <li>
            <a className="neon" href="#resume">
              {" "}
              Resumo
            </a>{" "}
          </li>
          <li>
            <a className="neon" href="#contact">
              {" "}
              Contato
            </a>{" "}
          </li>
        </ul>
      </Header>

      {/* Content */}
      <div id="main-container">
        <div id="main-content">
          <div>
            <h1>
              <span>Paulo</span>
              <div id="contrast-container">
                <span>
                  &lt; <span className="contrast">Eduardo</span> &gt;
                </span>
              </div>
            </h1>
            <small>Desenvolvedor de softwares</small>
          </div>

          <img src={landingImage} alt="" />
        </div>
      </div>
    </section>
  );
}
