import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px 32px;
  border-radius: 8px;
  width: 100%;
  height: 360px;
  position: relative;
`;
export const LinkButton = styled.a`
  color: #fff;
  font-size: 18px;
  background-color: ${(props) => props.theme.green};
  border: 2px solid ${(props) => props.theme.green};
  text-decoration: none;
  padding: 12px 16px;
  margin-top: 24px;
  margin-bottom: 32px;
  border-radius: 50px;
  &:hover {
    background-color: ${(props) => props.theme.lightGreen};
    transition: background-color 0.2s ease-in;
  }
`;
export const GitButton = styled(LinkButton)`
  margin-left: 16px;
  color: ${(props) => props.theme.color1};
  background-color: ${(props) => props.theme.background};
  border: 2px solid ${(props) => props.theme.green};
`;
export const Icon = styled.div`
  font-size: 32px;
  margin-right: 16px;
  opacity: 1;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
    transition: opacity 0.2s ease-out;
  }
`;
