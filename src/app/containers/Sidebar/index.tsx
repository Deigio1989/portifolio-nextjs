import React from "react";

import Avatar from "../../components/Avatar";
import Title from "../../components/Title";
import Paragraph from "../../components/Paragraph";
import { BotaoTema, Description, SidebarContainer } from "./styles";

type Props = {
  themeChange: () => void;
};

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Diego Sanchez</Title>
      <Description type="principal" fontSize={16}>
        Desenvolvedor Full Stack
      </Description>
      <a href="https://www.linkedin.com/in/diego-sanchezz1989/">
        <Paragraph type="secundario" fontSize={16}>
          Linkedin
        </Paragraph>
      </a>
      <a href="https://github.com/Deigio1989">
        <Paragraph type="secundario" fontSize={16}>
          Github
        </Paragraph>
      </a>
      <BotaoTema onClick={props.themeChange}>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
);

export default Sidebar;
