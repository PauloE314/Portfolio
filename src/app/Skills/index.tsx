import React from "react";
import { FaGamepad } from "react-icons/fa";
import { GoBrowser, GoGear } from "react-icons/go";
import { skills } from "../../settings";
import "./style.css";

import ParallaxImage from "../../components/ParallaxImage";
import Carousel from "./Carousel";

import BinaryImage from "../../assets/Skills/Binary.svg";

export default function Skills() {
  function handleBinaryScroll(diff: number, image: HTMLImageElement) {
    image.style.right = Math.max(-5 - 0.01 * diff, -12) + "rem";
  }

  return (
    <section id="skills" className="page">
      <h2 className="title">Habilidades</h2>
      <div className="main">
        <div id="carousel-container">
          <ParallaxImage
            id="binary"
            image={BinaryImage}
            handleScroll={handleBinaryScroll}
          />

          <Carousel list={skills} />
        </div>

        <div className="text-container">
          <p className="text">
            Possuo alta capacidade de aprendizado, estou sempre buscando coisas
            novas e novos conhecimentos nas mais diversas áreas. Minhas
            competências incluem desde programação para jogos a suporte de
            hardware.
          </p>
          <p className="text">
            Entretanto, vale destacar que as minhas principais competências e
            habilidades giram em torno da programação WEB, principalmente
            voltada para o lado backend com tecnologias como{" "}
            <strong>Django</strong> (Python) e <strong>Express.js</strong>{" "}
            (JavaScript).
          </p>
        </div>

        <ul className="interest-list">
          <li className="interest">
            <FaGamepad />
            <span>Games</span>
          </li>
          <li className="interest">
            <GoGear />
            <span>Hardware</span>
          </li>
          <li className="interest">
            <GoBrowser />
            <span>Web</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
