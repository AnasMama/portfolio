import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const Presentation = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoader(!loader);
    }, 3000);
  }, []);
  useEffect(() => {
    if (loader) {
      navigate("/description");
    }
  }, [loader]);
  return (
    <DojoContainer>
      <Decors
        src="ressources/images/dojo-back.png"
        alt="Dojo"
        openDoor={0}
        scale={1}
        scaleAfter={1.25}
      />
      <Decors
        src="ressources/images/salon2.png"
        alt="Gong"
        openDoor={0}
        scale={1}
        scaleAfter={1.25}
      />
      <Doors
        src="ressources/images/dojo-left.png"
        alt="Porte gauche du dojo supérieur"
        openDoor={-30}
        scale={1.15}
      />
      <Doors
        src="ressources/images/dojo-right.png"
        alt="Porte droite du dojo supérieur"
        openDoor={30}
        scale={1.15}
      />
      <Doors
        src="ressources/images/dojo-left.png"
        alt="Porte gauche du dojo inférieur"
        openDoor={-20}
        scale={1.12}
      />
      <Doors
        src="ressources/images/dojo-right.png"
        alt="Porte droite du dojo inférieur"
        openDoor={20}
        scale={1.12}
      />
      <Doors
        src="ressources/images/dojo-left.png"
        alt="Porte gauche du dojo inférieur"
        openDoor={-20}
        scale={1.1}
      />
      <Doors
        src="ressources/images/dojo-right.png"
        alt="Porte droite du dojo inférieur"
        openDoor={20}
        scale={1.1}
      />
    </DojoContainer>
  );
};

const DojoContainer = styled.div`
  background: var(--main-yellow);
  background-repeat: no-repeat;
  position: relative;
  width: 100%;
  min-height: 100vh;

  h1 {
    margin-top: 7rem;
  }
`;

const Decors: any = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;

  &:nth-child(1) {
    z-index: 0;
    animation: ${(props: { openDoor: number; scale: number ; scaleAfter: number}) =>
        open(props.openDoor, props.scale, props.scaleAfter)}
      3s linear;
  }
  &:nth-child(2) {
    z-index: 1;
    animation: ${(props: { openDoor: number; scale: number ; scaleAfter: number}) =>
        open(props.openDoor, props.scale, props.scaleAfter)}
      3s linear;
  }

  
`;

const Doors: any = styled.img`
position: absolute;
top: 4%;
height: 100%;
width: 100%;

&:nth-child(3) {
    left: 0%;
    z-index: 4;
    transform: scale(${(props: any) => props.scale});
    animation: ${(props: { openDoor: number; scale: number }) =>
        open(props.openDoor, props.scale)}
      3s linear;
  }
  &:nth-child(4) {
    left: 0%;
    z-index: 4;
    transform: scale(${(props: any) => props.scale});
    animation: ${(props: { openDoor: number; scale: number }) =>
        open(props.openDoor, props.scale)}
      3s linear;
  }
  &:nth-child(5) {
    left: -15%;
    z-index: 3;
    transform: scale(${(props: any) => props.scale});
    animation: ${(props: { openDoor: number; scale: number }) =>
        open(props.openDoor, props.scale)}
      3s linear;
  }
  &:nth-child(6) {
    left: 15%;
    z-index: 3;
    transform: scale(${(props) => props.scale});
    animation: ${(props) => open(props.openDoor, props.scale)} 3s linear;
  }
  &:nth-child(7) {
    left: -35%;
    z-index: 2;
    transform: scale(${(props) => props.scale});
    animation: ${(props) => open(props.openDoor, props.scale)} 3s linear;
  }
  &:nth-child(8) {
    left: 35%;
    z-index: 2;
    transform: scale(${(props) => props.scale});
    animation: ${(props: { openDoor: number; scale: number }) =>
        open(props.openDoor, props.scale)}
      3s linear;
  }
`

const open = (
  openDoor: number,
  scale: number,
  scaleAfter: number = 2
) => keyframes`
from {
    transform: scale(${scale}) translateX(0px);
}

to {
    transform: scale(${scaleAfter}) translateX(${openDoor}rem);
}
`;

export default Presentation;
