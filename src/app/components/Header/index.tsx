import React from "react";
import {
  HeaderWrapper,
  HeaderContent,
  ThemeSwitch,
  SwitchLabel,
  SwitchInput,
  Slider,
  HeaderTitle,
} from "./styles";

interface HeaderProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ isDarkTheme, toggleTheme }) => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        <div className="flex items-center space-x-4">
          <ThemeSwitch>
            <SwitchLabel>
              <SwitchInput
                type="checkbox"
                checked={isDarkTheme}
                onChange={toggleTheme}
              />
              <Slider />
            </SwitchLabel>
          </ThemeSwitch>
        </div>
        <HeaderTitle>DIEGO SANCHEZ</HeaderTitle>
      </HeaderContent>
    </HeaderWrapper>
  );
};

export default Header;
