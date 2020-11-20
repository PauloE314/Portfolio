import React from "react";

interface IProps {
  name: string;
  year: number;
  tag: string;
  image: string;
}

export default function Project({ name, year, tag, image }: IProps) {
  return (
    <li className="card">
      <div className="card-data">
        <div className="image-container">
          <img src={image} alt={name} />
          <div className="button-container">
            <button>Link</button>
          </div>
        </div>
        <div className="card-body">
          <div className="data-container">
            <h3>{name}</h3>
            <small>{year}</small>
          </div>
          <div className="tag-container">
            <h4 className="tag">{tag}</h4>
          </div>
        </div>
      </div>
    </li>
  );
}
