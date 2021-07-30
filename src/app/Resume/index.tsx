import { useState } from "react";
import { FaCalculator, FaRobot } from "react-icons/fa";
import { GoTelescope } from "react-icons/go";

import "./style.css";
import FullCat from "../../assets/Resume/Full cat.svg";
import MobileCat from "../../assets/Landing/Landing icon (mobile).svg";
import Game from "../../assets/Resume/Game.svg";
import X from "../../assets/Resume/X.svg";
import ParallaxImage from "../../components/ParallaxImage";
import { useEffect } from "react";

interface IProps {
  screen: {
    width: number;
    height: number;
  };
}

export default function Resume({ screen }: IProps) {
  const [age, setAge] = useState(17);

  function handleGameParallax(diff: number, image: HTMLImageElement) {
    const change = 0.03 * diff;

    image.style.right = -15 + change + "rem";
    image.style.transform = `rotate(${45 - change * 2}deg)`;
  }

  function handleXParallax(diff: number, image: HTMLImageElement) {
    const change = 0.02 * diff;

    image.style.left = -10 + change * 0.4 + "rem";
  }

  useEffect(() => {
    const birthDay = new Date(2003, 3, 21);
    const ageDiff = Date.now() - birthDay.getTime();
    setAge(Math.floor(ageDiff / 31536000000));
  }, []);

  return (
    <section id="resume" className="page">
      <ParallaxImage id="game" handleScroll={handleGameParallax} image={Game} />
      <div id="cat-container">
        <img id="small-cat" src={MobileCat} alt="" />
        <img id="large-cat" src={FullCat} alt="" />
        <ParallaxImage id="X" handleScroll={handleXParallax} image={X} />
      </div>
      <div className="main">
        <h2 className="title">Quem sou eu? </h2>
        <div className="text-container">
          <p className="text">
            Olá a todos, meu nome é <strong>Paulo Eduardo</strong>, tenho {age}{" "}
            anos, trabalho na{" "}
            <a
              href="https://www.codeminer42.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>Codeminer42</strong>
            </a>{" "}
            como programador fullstack e sou um estudante apaixonado por
            tecnologia.
          </p>
          <p className="text">
            Atualmente estou concluindo o Ensino Médio integrado ao técnico em
            eletrônica, então possuo conhecimento em algumas áreas de{" "}
            <strong>hardware</strong> e software de baixo nível. Sempre tive
            muito interesse em ramos como <strong>IOT</strong> e,{" "}
            <strong>sistemas embarcados</strong> e, principalmente,{" "}
            <strong>robótica</strong>.
          </p>
          <p className="text">
            Sempre gostei muito de ciências exatas, tendo, inclusive, obtido
            algumas medalhas na <strong>OBMEP</strong>; mas não me restrinjo
            apenas à matemática, também sou fã de outras áreas, como física,
            química e astronomia (também fui premiado na <strong>OBA</strong>
            ).
          </p>
          <p className="text">
            Atualmente me dedico ao desenvolvimento de software. Meu principal
            setor de atuação é a programação web <strong>backend</strong> e{" "}
            <strong>frontend</strong>, mas tenho um pouco de experiência com{" "}
            <strong>desenvolvimento de jogos</strong> e de{" "}
            <strong>aplicações desktop</strong>.
          </p>
        </div>
        <ul className="interest-list">
          <li className="interest">
            <FaCalculator />
            <span>Exatas</span>
          </li>
          <li className="interest">
            <FaRobot />
            <span>Robótica</span>
          </li>
          <li className="interest">
            <GoTelescope />
            <span>Astronomia</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
