import React from "react";
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
  return (
    <div className="right-gradient">
      <div className="left-gradient">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]} // Adiciona módulos
          grabCursor={true} // Cursor de clique
          spaceBetween={10} // Espaço entre os slides
          initialSlide={1}
          slidesPerView={3} // Número de slides visíveis
          pagination={{ clickable: true }} // Adiciona paginação clicável
        >
          <SwiperSlide>
            <BlankProject />
          </SwiperSlide>
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
          <SwiperSlide>
            <BlankProject />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
