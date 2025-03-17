import { P } from "./styles";
import React from "react";

export type Props = {
  children?: string;

  fontSize?: number;
};

const Paragraph = ({ children, fontSize }: Props) => (
  <P fontSize={fontSize}>{children}</P>
);

export default Paragraph;
