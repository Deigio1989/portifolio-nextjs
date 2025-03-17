"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import About from "./containers/About";
import { lightTheme, darkTheme } from "./theme";
import GlobalStyle from "./styles/GlobalStyle";
import Carousel from "./containers/Carousel";

export default function Home() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    const isDark = savedTheme ? savedTheme === "dark" : true;

    setIsDarkTheme(isDark);
    updateCSSVariables(isDark ? darkTheme : lightTheme);
  }, []);

  const updateCSSVariables = (theme: { [key: string]: string }) => {
    const root = document.documentElement;
    Object.keys(theme).forEach((key) => {
      root.style.setProperty(`--${key}`, theme[key]);
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark";
    setIsDarkTheme(isDark);

    // Configurar variáveis CSS no carregamento inicial
    updateCSSVariables(isDark ? darkTheme : lightTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkTheme;
    setIsDarkTheme(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");

    // Atualizar variáveis CSS ao alternar tema
    updateCSSVariables(newTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyle />
      <Header isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      <About />

      <Carousel />
    </ThemeProvider>
  );
}
