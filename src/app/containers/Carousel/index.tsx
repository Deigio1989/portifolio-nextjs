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
  const [slidesPerView, setSlidesPerView] = useState(getInitialSlideNumber());

  // Função para calcular o número inicial de slides
  function getInitialSlideNumber() {
    return window.innerWidth > 764 ? 3 : 1;
  }

  // Atualiza o número de slides dinamicamente ao redimensionar a janela
  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView(window.innerWidth > 764 ? 3 : 1);
    };

    window.addEventListener("resize", handleResize);

    // Remove o listener ao desmontar o componente
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
          initialSlide={1}
          slidesPerView={slidesPerView} // Número de slides visíveis
          pagination={{ clickable: true }} // Adiciona paginação clicável
        >
          {window.innerWidth > 764 ? (
            <SwiperSlide>
              <BlankProject />
            </SwiperSlide>
          ) : (
            <></>
          )}

          {projects.map((project, index) => (
            <SwiperSlide style={{ opacity: 1 }} key={index}>
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
          {window.innerWidth > 764 ? (
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
