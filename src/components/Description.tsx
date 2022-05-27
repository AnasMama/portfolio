import React from "react";
import styled from "styled-components";

const Description = () => {
  return (
    <div>
      <Decors src="ressources/images/salon2.png" alt="Gong" />
      <Presentation>
        Hello ! Je m'appelle Anas MAMA. Je suis développeur web full-stack
        domicilié à Toulouse. Dans ce portfolio, je vous présente mes quelques
        projets réalisés en React/TypeScript/Node.
        <br />
        <span>Bienvenue dans mon univers !</span>
      </Presentation>
    </div>
  );
};

const Decors = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  transform: scale(1.25);

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Presentation = styled.p`
  font-size: 1.5rem;
  position: absolute;
  left: 56%;
  top: 35%;
  height: 100%;
  width: 23rem;

  color: var(--main-black);

  animation: opac 1s ease forwards;

  @media (max-width: 1200px) {
    position: fixed;
    display: flex;
    left: 0;
    flex-direction: column;
  }
`;

export default Description;
