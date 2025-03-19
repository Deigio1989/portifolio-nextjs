import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "../../globals.css";

import Project from "../../components/Project";
import { projects } from "./projects";
import { BlankProject } from "./styles";

const Carousel = () => {
  const [slidesPerView, setSlidesPerView] = useState(1); // Valor padrão para evitar erros em SSR

  // Função para calcular o número inicial de slides
  useEffect(() => {
    // Executa apenas no navegador
    if (typeof window === "undefined") return;

    const getInitialSlideNumber = () => {
      return window.innerWidth > 764 ? 3 : 1;
    };

    const handleResize = () => {
      setSlidesPerView(window.innerWidth > 764 ? 3 : 1);
    };

    // Ajusta os slides com base na largura da janela
    setSlidesPerView(getInitialSlideNumber());
    window.addEventListener("resize", handleResize);

    // Remove o evento ao desmontar o componente
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="right-gradient">
      <div className="left-gradient">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]} // Adiciona módulos
          grabCursor={true} // Cursor de clique
          spaceBetween={30} // Espaço entre os slides
          initialSlide={1} // Slide inicial
          slidesPerView={slidesPerView} // Número de slides visíveis
          pagination={{ clickable: true }} // Adiciona paginação clicável
          navigation
        >
          {typeof window !== "undefined" && window.innerWidth > 764 ? (
            <SwiperSlide>
              <BlankProject />
            </SwiperSlide>
          ) : (
            <></>
          )}

          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <Project
                key={index}
                title={project.title}
                description={project.description}
                link={project.link}
                gitLink={project.gitLink}
                icons={project.icons}
              />
            </SwiperSlide>
          ))}

          {typeof window !== "undefined" && window.innerWidth > 764 ? (
            <SwiperSlide>
              <BlankProject />
            </SwiperSlide>
          ) : (
            <></>
          )}
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
