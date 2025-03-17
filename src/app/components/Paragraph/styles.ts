import styled from "styled-components";

import { Props } from "./index";

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  line-height: 32px;
  margin-bottom: 16px;

  color: ${(props) =>
    props.color === "main" ? props.theme.color1 : props.theme.color2};
`;
