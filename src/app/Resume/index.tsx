import React from "react";
import { FaCalculator, FaRobot } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";

import "./style.css";
import FullCat from "../../assets/Resume/Full cat.svg";
import MobileCat from "../../assets/Landing/Landing icon (mobile).svg";
import Game from "../../assets/Resume/Game.svg";
import X from "../../assets/Resume/X.svg";

export default function Resume() {
  return (
    <section id="resume" className="page">
      <img src={Game} alt="" id="game" className="bg-image" />
      <div id="cat-container">
        <img id="small-cat" src={MobileCat} alt="" />
        <img id="large-cat" src={FullCat} alt="" />
        <img id="X" src={X} alt="" />
      </div>
      <div className="main">
        <h2 className="title">Quem sou eu? </h2>
        <div className="text-container">
          <p className="text">
            Olá a todos, meu nome é <strong>Paulo Eduardo</strong>, sou um
            estudante <strong>freelancer</strong>
            apaixonado por programação e praticamente todas as áreas de
            desenvolvimento tecnológico.
          </p>
          <p className="text">
            Atualmente estou concluindo o Ensino Médio integrado ao técnico em
            eletrônica, então possuo experiência com sistemas de{" "}
            <strong>hardware</strong> e suporte nessa área de mais baixo nível.
            Pela minha formação, também possuo interesse nas áreas de{" "}
            <strong>IOT</strong> (Internet Of Things) e{" "}
            <strong>robótica</strong>.
          </p>
          <p className="text">
            Sempre gostei muito da área de ciências exatas, tendo inclusive
            obtido medalha na <strong>OBMEP</strong>, além das áreas de ciências
            da natureza e astronomia (também obtive medalha na{" "}
            <strong>OBA</strong>).
          </p>
          <p className="text">
            Atualmente estou me dedicando ao desenvolvimento de software. Possuo
            um pouco de conhecimento com desenvolvimento de jogos
            (principalmente no estilo retrô) e de aplicações desktop, entretanto
            minha principal área de atuação é a programação web{" "}
            <strong>backend</strong> e <strong>frontend</strong>, áreas com as
            quais trabalho a cerca de 2 anos.
          </p>
        </div>
        <ul className="interest-list">
          <li className="interest">
            <FaCalculator />
          </li>
          <li className="interest">
            <FaRobot />
          </li>
          <li className="interest">
            <GoTelescope />
          </li>
        </ul>
      </div>
    </section>
  );
}
