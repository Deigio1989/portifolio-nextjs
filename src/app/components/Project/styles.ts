import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  padding: 16px 32px;
  border-radius: 8px;
  width: 740px;
  height: 320px;
  position: relative;
`;
export const LinkButton = styled.a`
  color: #fff;
  font-size: 18px;
  background-color: ${(props) => props.theme.green};
  border: 2px solid ${(props) => props.theme.green};
  text-decoration: none;
  padding: 12px 16px;
  display: inline-block;
  border-radius: 50px;
  position: absolute; /* Agora é absoluto dentro do Card */
  bottom: 32px; /* Sempre a 20px da parte inferior */
  left: 10%; /* Centraliza horizontalmente */
  transform: translateX(-50%); /* Ajusta a centralização */
  &:hover {
    background-color: ${(props) => props.theme.lightGreen};
    transition: background-color 0.2s ease-in;
  }
`;
export const GitButton = styled(LinkButton)`
  color: ${(props) => props.theme.color1};
  background-color: ${(props) => props.theme.background};
  border: 2px solid ${(props) => props.theme.green};
  left: 27%;
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
