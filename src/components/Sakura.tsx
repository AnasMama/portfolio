import styled from "styled-components";

const SakuraPetals = () => {
  return (
    <Sakura>
      <Petal />
      <Petal />
      <Petal />
      <Petal />
      <Petal />
      <Petal />
      <Petal />
      <Petal />
      <Petal />
      <Petal />
    </Sakura>
  );
};

const Sakura = styled.ul`
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Petal = styled.li`
  position: absolute;
  z-index: 3;
  list-style: none;
  top: -50px;
  background: var(--main-pink);
  border-radius: 0% 70%;
  animation: fall 4s linear infinite, sway 2s ease-in-out infinite alternate;

  &:nth-child(1) {
    left: 0%;
    width: 24px;
    height: 15px;
    animation: fall 10s linear infinite, sway1 3s ease-in-out infinite alternate;
    animation-delay: 2s;
  }

  &:nth-child(2) {
    left: 5%;
    width: 13px;
    height: 9px;
    animation: fall 15s linear infinite, sway1 2s ease-in-out infinite alternate;
    animation-delay: 8s;
  }

  &:nth-child(3) {
    left: 15%;
    width: 16px;
    height: 10px;
    animation: fall 9s linear infinite,
      sway1 3.5s ease-in-out infinite alternate;
    animation-delay: 13s;
  }

  &:nth-child(4) {
    left: 30%;
    width: 16px;
    height: 10px;
    animation: fall 8s linear infinite, sway2 4s ease-in-out infinite alternate;
    animation-delay: 7s;
  }
  &:nth-child(5) {
    left: 40%;
    width: 16px;
    height: 10px;
    animation: fall 10s linear infinite, sway1 4s ease-in-out infinite alternate;
    animation-delay: 0s;
  }
  &:nth-child(6) {
    left: 55%;
    width: 24px;
    height: 15px;
    animation: fall 11s linear infinite, sway2 3s ease-in-out infinite alternate;
    animation-delay: 3s;
  }
  &:nth-child(7) {
    left: 65%;
    width: 16px;
    height: 10px;
    animation: fall 7s linear infinite,
      sway2 3.5s ease-in-out infinite alternate;
    animation-delay: 7s;
  }
  &:nth-child(8) {
    left: 50%;
    width: 13px;
    height: 9px;
    animation: fall 7s linear infinite, sway1 3s ease-in-out infinite alternate;
    animation-delay: 3s;
  }
  &:nth-child(9) {
    left: 80%;
    width: 16px;
    height: 10px;
    animation: fall 10s linear infinite, sway2 4s ease-in-out infinite alternate;
    animation-delay: 4s;
  }
`;

export default SakuraPetals;
