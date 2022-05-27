import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const ProjectStart = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 3000);
  }, []);
  useEffect(() => {
    if (loader) {
      navigate("/projets");
    }
  }, [loader]);
  return (
    <ProjectContainer>
      <Paper src="ressources/images/paper.png" alt="Papier" />
      <Parchment
        src="ressources/images/parchment-left.png"
        alt="Rouleau gauche"
        close={35}
      />
      <Parchment
        src="ressources/images/parchment-right.png"
        alt="Rouleau droit"
        close={-35}
      />
      <Dragon src="ressources/images/dragon-tatoo.png" alt="Dragon" />
    </ProjectContainer>
  );
};

const ProjectContainer = styled.div`
  background: var(--main-blue);
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  min-height: 100vh;
`;

const openParchment = (close: number) => keyframes`
  from {
      transform: translateX(${close}rem);
  }
  
  to {
      transform: translateX(${(Math.abs(close)-27)*close/Math.abs(close)}px);
  }
`;

const open = () => keyframes`
  from {
    left: 47%;
      width: 10%;
  }
  
  to {
    left: 0;
      width: 100%;
  }
  `;

const apparition = () => keyframes`
from {
    transform:  scale(0) rotate(-360deg);
}

to {
    transform: scale(1) rotate(0deg);
}
`;

const Decors = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  z-index: 1;
`;

const Paper = styled(Decors)`
  animation: ${open} 3s linear;
`;

const Dragon = styled(Decors)`
  z-index: 0;
  animation: ${apparition} 3s linear;
`;

const Parchment = styled(Decors)`
  animation: ${(props: { close: number }) => openParchment(props.close)} 3s
    linear;
`;

export default ProjectStart;
