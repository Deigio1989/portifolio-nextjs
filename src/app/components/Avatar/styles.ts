import styled from "styled-components";

export const Image = styled.img`
  max-width: 80%;
  border-radius: 50%;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 240px;
    max-width: none;
    margin-bottom: 32px;
    justify-self: center;
  }
`;
