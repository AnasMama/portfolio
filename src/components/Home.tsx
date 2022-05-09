import React from "react";
import styled from "styled-components";
import RedSun from "./Sun";

const Home = () => {
  return (
    <HomeContainer>
      <Cloud src="src/images/cloud.png" alt="nuage" />
      <Cloud src="src/images/cloud.png" alt="nuage" />
      <Cloud src="src/images/cloud.png" alt="nuage" />
      <Cloud src="src/images/cloud.png" alt="nuage" />
      <WaveBack src="src/images/wave-back.png" alt="vagues" />
      <WaveFront src="src/images/wave-front.png" alt="vagues" />
      <RedSun/>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 7rem);
  background: linear-gradient(to bottom, var(--main-yellow) 0%,var(--main-pink) 100%);
`;

const Cloud = styled.img`
  position: absolute;
  z-index: 2;
  
  &:nth-child(1) {
    animation: run 35s linear infinite, sway 2s ease-in-out infinite alternate;
    width: 20rem;
    top: 20%;
  }

  &:nth-child(2) {
    animation: run 30s linear infinite, sway 2s ease-in-out infinite alternate;
    margin-left: 50%;
    top: 35%;
  }

  &:nth-child(3) {
    animation: run 45s linear infinite, sway 2s ease-in-out infinite alternate;
    left: 50%;
    width: 20rem;
    top: 10%;
  }

  &:nth-child(4) {
    animation: run 30s linear infinite, sway 2s ease-in-out infinite alternate;
    left: 70%;
    top: 45%;
  }
`;

const WaveBack = styled.img`
  position: absolute;
  width: 120%;
  left: -10%;
  top: -10%;
  z-index: 3;
  animation: circle 15s linear infinite;
`;

const WaveFront = styled.img`
  position: absolute;
  width: 120%;
  left: -10%;
  top: -25%;
  z-index: 3;
  animation: circle2 20s linear infinite;
`;

export default Home;
