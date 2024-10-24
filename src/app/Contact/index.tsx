import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

import "./style.css";
import Notebook from "../../assets/Contact/Notebook.svg";
import Xicara from "../../assets/Contact/Xícara.svg";
import PI from "../../assets/Contact/PI.svg";
import R from "../../assets/Contact/R.svg";
import ParallaxImage from "../../components/ParallaxImage";

interface IProps {
  screen: {
    width: number;
    height: number;
  };
}

export default function Contact({ screen }: IProps) {
  function handlePIScroll(diff: number, image: HTMLImageElement) {
    const initial = screen.width < 700 ? 8 : 10;
    image.style.top = initial - diff * 0.015 + "rem";
  }

  function handleRScroll(diff: number, image: HTMLImageElement) {
    image.style.bottom = 3 - diff * 0.03 + "rem";
  }

  return (
    <section id="contact" className="page">
      <ParallaxImage id="pi" image={PI} handleScroll={handlePIScroll} />
      <ParallaxImage id="r" image={R} handleScroll={handleRScroll} />
      <h2 className="title">Entre em contato comigo :D</h2>
      <div className="main">
        <img id="notebook" src={Notebook} alt="" />
        <div id="contact-container">
          <p className="text">
            Fico muito feliz por você ter chegado até aqui! Espero que viremos
            parceiros em um futuro próximo :)
          </p>
          <ul id="contact-list">
            <li className="neon">
              <a
                href="https://www.linkedin.com/in/pedll/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </li>
            <li className="neon">
              <a
                href="https://github.com/PauloE314"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="neon">
              <a
                href="mailto:pauloeduardodelima155@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineMail />
              </a>
            </li>
            <li className="neon">
              <a href="#">
                <FaTelegramPlane />
              </a>
            </li>
            <img src={Xicara} id="xicara" alt="" />
          </ul>
        </div>
      </div>
    </section>
  );
}
