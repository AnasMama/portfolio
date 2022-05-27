import React, { useEffect, useState } from "react";
import styled from "styled-components";

interface Project {
  id: number;
  image: string;
  name: string;
  description: string;
  link: string;
}

const projetsList: Project[] = [
  {
    id: 0,
    name: "Espacito",
    image: "ressources/images/espacito.jpeg",
    description:
      "Application de découverte de l'espace. Vous y découvrirez quelques informations sur la navette de l'ISS (géolocalisation, équipe à bord en temps réel, altitude...) ainsi que des fonctionnalités ludiques comme un jeu FlapISS ou la découverte de la photo du jour de la naza.",
    link: "https://tlse0921-js-p2-espacito-six.vercel.app/"
    },
  {
    id: 1,
    name: "Lyrics Guesser",
    image: "ressources/images/lyricsguessr.jpeg",
    description: "Blind test un peu particulier ! Une voix vous lit les paroles d'une dizaine de chansons connues. Votre mission est de retrouver son titre et l'artiste qui se cache derrière.",
    link: "https://tlse0921-js-p2-espacito-six.vercel.app/"
  },
  {
    id: 2,
    name: "Business Plan Canvas",
    image: "ressources/images/bp-canvas.jpeg",
    description: "Application développée pour l'entreprise BouDu Concept permetant de réaliser le canva d'un business plan très simplement.",
    link: ""
  },
  {
    id: 3,
    name: "What's the movie ?",
    image: "ressources/images/whats-the-movie.jpeg",
    description: "Jeu de quizz. Une affiche de film vous aie présentée. Le problème est qu'elle est floutée. Saurez-vous retouver le nom du film ?",
    link: "https://github.com/AnasMama/frontend-whats-the-movie"
  },
];

const Projets = () => {
  const [projet, setProjet] = useState({ id: 3, image: "", name: "", description: "", link: "" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setProjet(projetsList[index]);
  }, [index]);

  const indexOfProject = projetsList.findIndex(
    (actualProjet: { id: number }) => actualProjet.id === projet.id
  );
  console.log(projet);

  return (
    <ProjectContainer>
      <Decors src="ressources/images/dragon.png" alt="Branche de sakura" />
      <RightContainer>
        <ProjetSelector>
          <Arrow
            src="ressources/images/arrow.png"
            alt="Fleche de navigation"
            onClick={() =>
              index > 0 ? setIndex(index - 1) : setIndex(projetsList.length - 1)
            }
          />
          <a href={projet.link}>
          <Img src={projet.image} alt="Porjet" />
          </a>
          <Arrow
            src="ressources/images/arrow.png"
            alt="Fleche de navigation"
            role="true"
            onClick={() =>
              index < projetsList.length - 1 ? setIndex(index + 1) : setIndex(0)
            }
          />
        </ProjetSelector>
        <h1>{projet.name}</h1>
        <p>
          {projet.description}
        </p>
        <a href={projet.link}><h2>Découvrir</h2></a>
      </RightContainer>
    </ProjectContainer>
  );
};

const ProjetSelector = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
  }
`;

const Img = styled.img`
  display: block;
  width: 40rem;
  transition: ${(imgToGuess: { blur?: boolean }) =>
    !imgToGuess.blur ? "filter 0.8s" : "none"};
  filter: ${(imgToGuess: { blur?: boolean }) =>
    !imgToGuess.blur ? "none" : "blur(0.8rem)"};
  @media (max-width: 768px) {
    width: 85%;
  }
`;

const Arrow = styled.img`
  width: 4rem;
  transform: ${(arrowNav) => (arrowNav.role ? "rotate(180deg)" : "none")};
  max-height: 4rem;
  @media (max-width: 768px) {
    width: 3rem;
  }
`;

const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 40rem;
  margin: auto;
  color: var(--main-blue);

  animation: opac 1s ease forwards;

  @media (max-width: 1300px) {
      color: var(--main-yellow);
  }
`;

const ProjectContainer = styled.div`
  background: var(--main-blue);
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 1300px) {
    h2 {
      color: var(--main-yellow);
    }
  }
`;

const Decors = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: max(100%,500px);

  &:nth-child(2) {
    &:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width: 1300px) {
    display: none;
  }
`;

export default Projets;
