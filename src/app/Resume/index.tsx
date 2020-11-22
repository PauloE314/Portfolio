import React from "react";
import { FaCalculator, FaRobot } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";

import "./style.css";
import FullCat from "../../assets/Resume/Full cat.svg";
import MobileCat from "../../assets/Landing/Landing icon (mobile).svg";
import Game from "../../assets/Resume/Game.svg";
import X from "../../assets/Resume/X.svg";
import ParallaxImage from "../../components/ParallaxImage";

interface IProps {
  screen: {
    width: number;
    height: number;
  };
}

export default function Resume({ screen }: IProps) {
  function handleGameParallax(diff: number, image: HTMLImageElement) {
    const change = 0.03 * diff;

    image.style.right = -15 + change + "rem";
    image.style.transform = `rotate(${45 - change * 2}deg)`;
  }

  function handleXParallax(diff: number, image: HTMLImageElement) {
    const change = 0.02 * diff;

    image.style.left = -10 + change * 0.4 + "rem";
  }

  return (
    <section id="resume" className="page">
      <ParallaxImage id="game" handleScroll={handleGameParallax} image={Game} />
      {/* <img src={Game} alt="" id="game" className="bg-image" /> */}
      <div id="cat-container">
        <img id="small-cat" src={MobileCat} alt="" />
        <img id="large-cat" src={FullCat} alt="" />
        {/* <img id="X" src={X} alt="" /> */}
        <ParallaxImage id="X" handleScroll={handleXParallax} image={X} />
      </div>
      <div className="main">
        <h2 className="title">Quem sou eu? </h2>
        <div className="text-container">
          <p className="text">
            Olá a todos, meu nome é <strong>Paulo Eduardo</strong>, sou um
            estudante <strong>freelancer</strong> apaixonado por programação e
            por praticamente todas as áreas de desenvolvimento tecnológico.
          </p>
          <p className="text">
            Atualmente estou concluindo o Ensino Médio integrado ao técnico em
            eletrônica, então possuo experiência com sistemas de{" "}
            <strong>hardware</strong> e suporte nessa área de mais baixo nível.
            Pela minha formação, também tenho interesse nas áreas de{" "}
            <strong>IOT</strong> (Internet Of Things) e{" "}
            <strong>robótica</strong>.
          </p>
          <p className="text">
            Sempre gostei muito de ciências exatas, tendo inclusive obtido
            medalha na <strong>OBMEP</strong>, além de ciências da natureza e
            astronomia (também obtive medalha na <strong>OBA</strong>
            ).
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
