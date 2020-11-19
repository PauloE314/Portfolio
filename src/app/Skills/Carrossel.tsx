import React from "react";
import { BsCircleFill } from "react-icons/bs";

import Icon from "../../assets/Frontend.svg";

interface IProps {
  list: {
    icon: string;
    name: string;
    tag: string;
  }[];
}

interface ILineProps {
  label: string;
  color: string;
  count: string;
}

export default function Carrossel({ list }: IProps) {
  return (
    <div className="carrossel">
      <div className="content">
        <div className="identify-container">
          <img src={Icon} alt="Icon" />
          <span className="label">
            HTML,
            <br /> CSS & JS
          </span>
        </div>
        <div className="data-container">
          <ul>
            <Line label="HTML" color="orange" count="50%" />
            <Line label="CSS" color="blue" count="30%" />
            <Line label="JS" color="yellow" count="70%" />
          </ul>
          <span className="tag">Frontend</span>
        </div>
      </div>
      <ul className="control">
        <li className="active">
          <BsCircleFill />
        </li>
        <li>
          <BsCircleFill />
        </li>
        <li>
          <BsCircleFill />
        </li>
      </ul>
    </div>
  );
}

function Line({ color, label, count }: ILineProps) {
  return (
    <li>
      <span>{label}</span>
      <div className="line">
        <hr className="grow" style={{ backgroundColor: color, width: count }} />
        <hr className="bg-line" />
        <BsCircleFill className="ball" />
      </div>
    </li>
  );
}
