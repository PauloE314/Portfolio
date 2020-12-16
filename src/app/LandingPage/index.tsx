import React, { useEffect, useState } from "react";

import "./style.css";

import LandingIcon from "../../assets/Landing/Landing icon.svg";
import LandingIconMobile from "../../assets/Landing/Landing icon (mobile).svg";

import Header from "./Header";
import { delay } from "../../utils";

interface IProps {
  screen: {
    width: number;
    height: number;
  };
}

export default function LandingPage({ screen }: IProps) {
  const [landingImage, setLandingImage] = useState(LandingIcon);
  const [isMobile, setMobile] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [description, setDescription] = useState("");
  const [nameAnimating, setNameAnimating] = useState(true);

  // Handles screen resize
  function handleResize() {
    setLandingImage(screen.width <= 1100 ? LandingIconMobile : LandingIcon);
    setMobile(screen.width <= 700);
  }

  useEffect(handleResize, [screen.width]);

  // Writes some name
  async function writeName(
    cb: (value: any) => any,
    name: string,
    speed: number
  ) {
    cb("_");

    for (let i = 0; i < name.length; i++) {
      const letter = name[i];
      const appendText = i !== name.length - 1 ? letter + "_" : letter;

      await delay(speed);
      cb((current: any) => current.slice(0, -1) + appendText);
    }
  }

  // Start animation
  useEffect(() => {
    (async () => {
      // Name animation
      if (window.innerWidth > 1100) {
        setNameAnimating(true);
        setFirstName("");
        setSecondName("");
        setDescription("");

        await writeName(setFirstName, "Paulo", 100);
        await writeName(setSecondName, "< Eduardo >", 120);
      }
      // Description animation
      setDescription("");
      setNameAnimating(false);
      await writeName(setDescription, "Desenvolvedor de softwares", 70);
    })();
  }, []);

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
            {nameAnimating ? (
              <h1>
                <span>{firstName}</span>
                <div id="contrast-container">
                  <span>{secondName}</span>
                </div>
              </h1>
            ) : (
              <h1>
                <span>Paulo</span>

                <div id="contrast-container">
                  <span>
                    &lt; <span className="contrast">Eduardo</span> &gt;
                  </span>
                </div>
              </h1>
            )}

            <small>{description}</small>
          </div>

          <img src={landingImage} alt="" />
        </div>
      </div>
    </section>
  );
}
