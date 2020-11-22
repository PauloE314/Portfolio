import Icon from "./assets/Skills/Frontend.svg";

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
    icon: Icon,
    name: "HTML",
    tag: "Coisas",
    itens: [
      {
        label: "HTML",
        knowledge: 50,
        color: "orange",
      },
    ],
  },
  {
    icon: Icon,
    name: "HTML, CSS & JS",
    tag: "Frontend",
    itens: [
      {
        label: "HTML",
        knowledge: 50,
        color: "orange",
      },
      {
        label: "CSS",
        knowledge: 99.7,
        color: "blue",
      },
      {
        label: "JS",
        knowledge: 50,
        color: "yellow",
      },
    ],
  },
  {
    icon: Icon,
    name: "HTML",
    tag: "Coisas",
    itens: [
      {
        label: "HTML",
        knowledge: 50,
        color: "red",
      },
    ],
  },
];

export const projects = [
  {
    name: "Nonny",
    year: 2020,
    tag: "Full stack",
    image:
      "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
    links: {
      github: "https://github.com/PauloE314/Nonny",
      production: undefined,
    },
  },
  {
    name: "Google",
    year: 2020,
    tag: "Backend",
    image:
      "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png",
    links: {
      github: "https://github.com/PauloE314/Py-Snake",
      production: "https://google.com",
    },
  },
  {
    name: "League of Legends",
    year: 2020,
    tag: "Database",
    image:
      "https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png",
    links: {
      github: "https://github.com/PauloE314/Pong-Lua",
      production: "https://br.leagueoflegends.com/pt-br/",
    },
  },
];
