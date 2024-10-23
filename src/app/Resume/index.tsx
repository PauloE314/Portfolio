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
            Olá a todos! Meu nome é <strong>Paulo Eduardo</strong>, sou um
            desenvolvedor Fullstack de {age} anos com sólida experiência no
            desenvolvimento de soluções web. Trabalhei na
            <strong>Codeminer42</strong>, uma grande consultoria de software do
            Brasil, onde fui alocado para colaborar com empresas como Aero e
            Petlove, criando e mantendo sistemas robustos e escaláveis.
          </p>
          <p className="text">
            Minha expertise abrange tanto o front-end quanto o back-end,
            trabalhando com tecnologias modernas e frameworks populares. Tenho
            um olhar atento para a criação de interfaces intuitivas e otimização
            de performance, além de garantir a qualidade e segurança das
            aplicações.
          </p>
          <p className="text">
            Se você está buscando um profissional comprometido, que entrega
            soluções eficientes, inovadoras e dentro do prazo, estou pronto para
            colaborar em novos desafios e ajudar seu projeto a alcançar o
            próximo nível. Vamos transformar sua ideia em realidade!
          </p>
        </div>
      </div>
    </section>
  );
}
