import HtmlCssJs from "./assets/Skills/Html-css-js.svg";
import ReactVue from "./assets/Skills/React-vue.svg";
import NodeExpress from "./assets/Skills/Node-express.svg";
import PythonDjango from "./assets/Skills/Python-django.svg";
import ArduinoEletronics from "./assets/Skills/Arduino-eletronics.svg";

import Nonny from "./assets/Projects/Nonny.png";
import Happy from "./assets/Projects/Happy.png";
import PySnake from "./assets/Projects/Py snake.png";
import Pong from "./assets/Projects/Pong.png";
import Tahan from "./assets/Projects/Tahan.png";
import SeuChef from "./assets/Projects/Seu chef.png";
import Asteroids from "./assets/Projects/Asteroids.png";

interface ISkill {
  icon: string;
  name: string;
  tag: string;
  itens: {
    label: string;
    knowledge: number;
    color: string;
  }[];
}

export const skills: ISkill[] = [
  {
    icon: HtmlCssJs,
    name: "HTML, CSS & JS",
    tag: "Frontend",
    itens: [
      {
        label: "HTML",
        knowledge: 50,
        color: "#F16529",
      },
      {
        label: "CSS",
        knowledge: 100,
        color: "#2062AF",
      },
      {
        label: "JS",
        knowledge: 50,
        color: "#E5A321",
      },
    ],
  },
  {
    icon: ReactVue,
    name: "React.js\nVue.js",
    tag: "Frontend",
    itens: [
      {
        label: "React.js",
        knowledge: 50,
        color: "#61DBFB",
      },
      {
        label: "Vue.js",
        knowledge: 50,
        color: "#41B883",
      },
    ],
  },
  {
    icon: NodeExpress,
    name: "Node.js\nExpress.js",
    tag: "Backend",
    itens: [
      {
        label: "Node.js",
        knowledge: 50,
        color: "#68A063",
      },
      {
        label: "Express.js",
        knowledge: 50,
        color: "#ffffff",
      },
    ],
  },
  {
    icon: PythonDjango,
    name: "Python\nDjango",
    tag: "Backend",
    itens: [
      {
        label: "Python",
        knowledge: 50,
        color: "#FFD43B",
      },
      {
        label: "Django",
        knowledge: 50,
        color: "#092E20",
      },
    ],
  },
  {
    icon: ArduinoEletronics,
    name: "Arduino\neletrônica",
    tag: "Hardware e IOT",
    itens: [
      {
        label: "Arduino",
        knowledge: 50,
        color: "#00979C",
      },
      {
        label: "Eletrônica",
        knowledge: 50,
        color: "#E64C3C",
      },
    ],
  },
];

export const projects = [
  {
    name: "Nonny",
    year: 2020,
    tag: "Full Stack",
    image: Nonny,
    links: {
      github: "https://github.com/PauloE314/Nonny",
      production: undefined,
    },
  },
  {
    name: "Happy",
    year: 2020,
    tag: "Full Stack",
    image: Happy,
    links: {
      github: "https://github.com/PauloE314/Happy-NLW-3",
      production: undefined,
    },
  },
  {
    name: "Py snake",
    year: 2020,
    tag: "Game",
    image: PySnake,
    links: {
      github: "https://github.com/PauloE314/Py-Snake",
      production: undefined,
    },
  },
  {
    name: "Pong",
    year: 2020,
    tag: "Game",
    image: Pong,
    links: {
      github: "https://github.com/PauloE314/Pong-Lua",
      production: undefined,
    },
  },
  {
    name: "Tahan",
    year: 2020,
    tag: "Backend",
    image: Tahan,
    links: {
      github: "https://github.com/PauloE314/Tahan-Backend",
      production: undefined,
    },
  },
  {
    name: "Seu chef",
    year: 2020,
    tag: "Backend",
    image: SeuChef,
    links: {
      github: "https://github.com/PauloE314/Seu-Chef-Backend",
      production: undefined,
    },
  },
  {
    name: "Asteroids online",
    year: 2020,
    tag: "Full Stack",
    image: Asteroids,
    links: {
      github: "https://github.com/PauloE314/Seu-Chef-Backend",
      production: undefined,
    },
  },
];
