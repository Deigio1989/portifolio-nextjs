import styled from "styled-components";

import { Props } from "./index";

export const Title = styled.h1<Props>`
  color: ${(props) => props.theme.color1};
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  margin-bottom: 16px;
`;
