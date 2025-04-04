import MultilineText from "../../components/MultilineText";
import Typewriter from "typewriter-effect";
import { MailtoButton, Skills } from "./styles";
import Avatar from "@/app/components/Avatar";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

const descricao = `Sou um Desenvolvedor Full Stack formado pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, de perfil criativo e de aprendizado rápido./n

Minha trajetória no Design Gráfico e Ilustração enriqueceu minha capacidade de desenvolver layouts front-end em frameworks variados, com uma forte ênfase na estética e funcionalidade./n

Atualmente, estou me especializando em React, Redux, Django REST Framework e ASP.NET focando na criação de APIs REST robustas e escaláveis. Estou sempre buscando novas oportunidades para aplicar meu conhecimento em projetos desafiadores./n
`;
const skills = `Python, C# /nHTML, CSS, JavaScript, TypeScript /nReact, Redux, NextJS /nDjango REST Framework, Entity Framework/nSQL, Postgres /nDocker, Cypress, Jest, Pytest, xUnit /nStyled Components, Tailwind /nGit, GitHub`;
const About = () => (
  <div className="container mx-auto flex flex-col md:flex-row py-10">
    <section className=" w-4/12 flex flex-col items-center md:items-start mx-auto ">
      <Avatar />
      <h1 className="text-4xl font-bold mb-4">
        <Typewriter
          options={{
            strings: [
              `DESENVOLVEDOR <span style="color: #27ae60;">FULLSTACK</span>`,
            ],
            autoStart: true,
            loop: false,
            delay: 100,
            deleteSpeed: Infinity,
          }}
        />
      </h1>
      <motion.div
        className="flex space-x-7 mb-4 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 4 }}
      >
        <a
          href="https://www.linkedin.com/in/diego-sanchezz1989/"
          title="Ir para meu LinkedIn"
        >
          <FaLinkedin className="text-4xl" />
        </a>
        <a href="https://github.com/Deigio1989" title="Ir para meu GitHub">
          <FaGithub className="text-4xl" />
        </a>
        <a
          href="https://wa.me/5521964505189"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-4xl" />
        </a>
      </motion.div>
    </section>
    <section className="w-auto mx-2 mt-7 md:mt-0 md:ml-2 md:mr-0  md:w-5/12">
      <MultilineText text={descricao} size={20} />
      <div className="flex justify-end md:justify-start">
        <MailtoButton
          href="mailto:diegosmsaintmartin@gmail.com"
          title="Enviar email"
        >
          Entre em contato
        </MailtoButton>
      </div>
    </section>
    <section className="w-auto md:w-3/12 mt-7 md:mt-0 md:ml-10 ">
      <Skills>
        <h2 className="text-2xl mb-4 ">TECH STACK</h2>
        <MultilineText text={skills} size={18} />
      </Skills>
    </section>
  </div>
);

export default About;
