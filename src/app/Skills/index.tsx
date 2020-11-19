import React from "react";
import { FaGamepad } from "react-icons/fa";
import { GoBrowser, GoGear } from "react-icons/go";
import Carrossel from "./Carrossel";

import "./style.css";

export default function Skills() {
  return (
    <section id="skills" className="page">
      <h2 className="title">Habilidades</h2>
      <div className="main">
        <Carrossel list={[]} />

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

        <ul id="big-skills">
          <li className="neon">
            <FaGamepad />
            <span>Games</span>
          </li>
          <li className="neon">
            <GoGear />
            <span>Hardware</span>
          </li>
          <li className="neon">
            <GoBrowser />
            <span>WEB</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
