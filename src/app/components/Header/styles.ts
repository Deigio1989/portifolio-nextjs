import styled from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 32px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px rgba(61, 60, 60, 0.3);
  transform: scale(1.25);
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  transform: scale(0.8);
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ThemeSwitch = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 24px;
`;

export const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${(props) => props.theme.green};
  }
  &:hover + span {
    background-color: ${(props) => props.theme.lightGreen};
  }
  &:checked + span:before {
    transform: translateX(26px);
  }
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.green};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 4px;
    bottom: 2px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const HeaderTitle = styled.h1`
  font-size: 36px;
  color: ${({ theme }) => theme.text};
`;
