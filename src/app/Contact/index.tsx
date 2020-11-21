import React from "react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

import "./style.css";
import Notebook from "../../assets/Contact/Notebook.svg";
import Xicara from "../../assets/Contact/Xícara.svg";
import PI from "../../assets/Contact/PI.svg";
import R from "../../assets/Contact/R.svg";

export default function Contact() {
  return (
    <section id="contact" className="page">
      <img id="pi" src={PI} className="bg-image" alt="" />
      <img id="r" src={R} className="bg-image" alt="" />
      <h2 className="title">Entre em contato comigo :D</h2>
      <div className="main">
        <img id="notebook" src={Notebook} alt="" />
        <div id="contact-container">
          <p className="text">
            Eu fico muito feliz por você ter se interessado no meu pequeno mas
            duro trabalho de freelancer, talvez podemos virá amigos num futuro
            proximo :)
          </p>
          <ul id="contact-list">
            <li className="neon">
              <a
                href="https://www.linkedin.com/in/paulo-louren%C3%A7o-178580197/"
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
