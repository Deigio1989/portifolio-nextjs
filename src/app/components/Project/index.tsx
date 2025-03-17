import React from "react";
import { JSX } from "react/jsx-runtime";

import { FaGithub } from "react-icons/fa";

import { Card, LinkButton, GitButton, Icon } from "./styles";

import Title from "../Title";
import Paragraph from "../Paragraph";

type Props = {
  title: string;
  description: string;
  link: string;
  gitLink: string;
  icons: JSX.Element[];
};

const Project = ({ title, description, link, gitLink, icons }: Props) => (
  <Card>
    <Title fontSize={32}>{title}</Title>
    <Paragraph fontSize={18}>{description}</Paragraph>
    <div className="flex">
      {icons.map((icon, index) => (
        <Icon key={index}>{icon}</Icon>
      ))}
    </div>
    <div className="flex items-center">
      <LinkButton href={link}>Visualizar</LinkButton>
      <GitButton href={gitLink}>
        <div className="flex gap-x-2 items-center">
          <FaGithub />
          Github
        </div>
      </GitButton>
    </div>
  </Card>
);

export default Project;
