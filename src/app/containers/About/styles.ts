import styled from "styled-components";

export const Skills = styled.div`
  border: 1px solid ${(props) => props.theme.green};
  padding: 24px;
  padding-right: 32px;
  border-radius: 8px;
  margin-bottom: 32px;
`;

export const MailtoButton = styled.a`
  font-size: 18px;
  background-color: transparent;
  color: ${(props) => props.theme.foreground};
  padding: 8px 18px;
  border-radius: 50px;
  text-decoration: none;
  display: inline-block;
  margin-top: 16px;
  transition: background-color 0.3s, color 0.3s;
  border: solid, 2px, ${(props) => props.theme.green};

  &:hover {
    background-color: ${(props) => props.theme.green};
    color: #fff;
  }
`;
