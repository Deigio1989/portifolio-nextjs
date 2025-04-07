// Description: Projects data for the Carousel component.

import React from "react";
import {
  SiNextdotjs,
  SiDjango,
  SiHtml5,
  SiCss3,
  SiReact,
  SiRedux,
  SiJavascript,
  SiGulp,
  SiSass,
  SiStyledcomponents,
  SiVite,
} from "react-icons/si";
export const projects = [
  {
    title: "Efood",
    description:
      "Desenvolvimento de site responsivo para delivery utilizando React, Redux e integração com API com RTK Query.",
    link: "https://efood-azure.vercel.app/",
    gitLink: "https://github.com/Deigio1989/Efood",
    icons: [
      <SiReact key="React" />,
      <SiRedux key="Redux" />,
      <SiStyledcomponents key="Styled" />,
    ],
  },
  {
    title: "Twitter CLone",
    description:
      "Desenvolvimento de aplicação fullstack clone do Twitter.Utilização do Django Rest Framework e Postgres para o Backend e NextJS para o Frontend.",
    link: "https://twitter-clone-gamma-virid.vercel.app/",
    gitLink: "https://github.com/Deigio1989/portifolio-nextjs",
    icons: [
      <SiReact key="React" title="React" />,
      <SiDjango key="Django" title="Django" />,
      <SiNextdotjs key="NextJS" title="NextJS" />,
    ],
  },
  {
    title: "Lista de Contatos",
    description:
      "Desenvolvimento de site responsivo com funcionalidades de adicionar, buscar e deletar contatos além de filtra-los por tipo. Utilização de React e Redux.",
    link: "https://lista-de-contatos-diego.vercel.app/",
    gitLink: "https://github.com/Deigio1989/Lista-de-Contatos",
    icons: [
      <SiReact key="React" title="React" />,
      <SiRedux key="Redux" title="Redux" />,
    ],
  },
  {
    title: "Calculadora de IMC",
    description:
      "Desenvolvimento de uma calculadora de IMC funcional para curso de Desenvolvedor Full Stack da EBAC. Uso de ReactJS.",
    link: "https://calculadora-imc-rho-eight.vercel.app/",
    gitLink: "https://github.com/Deigio1989/calculadora_imc",
    icons: [
      <SiReact key="React" title="React" />,
      <SiVite key="Vite" title="Vite" />,
    ],
  },
  {
    title: "Landing page - Esperando Godot",
    description:
      "Desenvolvimento de landing page para lançamento da peça Esperando Godot como estudo. Uso de Javascript para criação de contagem regressiva.",
    link: "https://esperando-godot.vercel.app/",
    gitLink: "https://github.com/Deigio1989/ebac_parcel",
    icons: [
      <SiJavascript key="Javascript" title="Javascript" />,
      <SiHtml5 key="HTML5" title="HTML5" />,
      <SiSass key="Sass" title="Sass" />,
    ],
  },
  {
    title: "Landing page - Stalker",
    description:
      "Desenvolvimento de landing page para o filme Stalker como estudo. Aplicação prática dos conhecimentos de design de layouts e uso de Gulp e SASS.",
    link: "https://stalkerlanding.vercel.app/",
    gitLink: "https://github.com/Deigio1989/Projeto_4",
    icons: [
      <SiGulp key="Gulp" title="Gulp" />,
      <SiSass key="SASS" title="SASS" />,
      <SiHtml5 key="HTML5" title="HTML5" />,
      <SiCss3 key="CSS3" title="CSS3" />,
    ],
  },
];
