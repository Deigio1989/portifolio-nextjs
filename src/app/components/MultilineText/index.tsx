import React from "react";
import { P } from "../Paragraph/styles";

interface Props {
  text: string;
  size?: number;
  color?: "main" | "secondary";
}

const MultilineText: React.FC<Props> = ({ text, size, color }) => {
  return (
    <>
      {text.split("/n").map((line, index) => (
        <P fontSize={size} key={index} color={color}>
          {line}
        </P>
      ))}
    </>
  );
};

export default MultilineText;
