import { AiOutlineGlobal, AiFillGithub } from "react-icons/ai";

interface IProps {
  name: string;
  github: string;
  production?: string;
  onClickOut: () => any;
}

export default function ProjectModal({
  name,
  github,
  production,
  onClickOut,
}: IProps) {
  return (
    <div id="modal" className="project-modal">
      <div className="title-container" onClick={onClickOut}>
        <h3>{name}</h3>
      </div>
      <ul id="link-list">
        <li>
          <a href={github} target="_blank" rel="noopener noreferrer">
            <AiFillGithub className="icon" /> <span>Github</span>
          </a>
        </li>

        {production && (
          <li>
            <a href={production} target="_blank" rel="noopener noreferrer">
              <AiOutlineGlobal className="icon" /> <span>Produção</span>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
