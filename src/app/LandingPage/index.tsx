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

  async function writeName(cb: (value: any) => any, name: string) {
    cb("_");

    for (const letter of name) {
      const nextTime = Math.random() * 200 + 50;
      await delay(nextTime);
      cb((current: any) => current.slice(0, -1) + letter + "_");
    }
    cb((current: any) => current.slice(0, -1));
  }

  // Start animation
  useEffect(() => {
    (async () => {
      // Name animation
      if (window.innerWidth > 1100) {
        setNameAnimating(true);
        setFirstName("");
        setSecondName("");
        await writeName(setFirstName, "Paulo");
        await writeName(setSecondName, "< Eduardo >");
      }
      // Description animation
      setDescription("");
      setNameAnimating(false);
      await writeName(setDescription, "Desenvolvedor de softwares");
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
