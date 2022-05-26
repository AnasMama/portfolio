import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  const { pathname } = useLocation();
  const [loader, setLoader] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoader(true);
  }, [pathname]);
  console.log(pathname);
  return (
    <NavContainer
      color={
        pathname === "/projets" || pathname === "/description" ? true : false
      }
      display={pathname === "/presentation" || (pathname === "/open" && "none")}
    >
      <h1>
        <Link to="/">
          <Portfolio>PORTFOLIO</Portfolio>
        </Link>
      </h1>
      <NavSite isOpen={isOpen}>
        <PortfolioMobile>
          <Link to="/">
            <span>Accueil</span>
          </Link>
        </PortfolioMobile>
        <h2>
          <Link to="/presentation">
            <span>Présentation</span>
          </Link>
        </h2>
        <h2>
          <Link to="/open">
            <span>Projets</span>
          </Link>
        </h2>
        <h2>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </h2>
      </NavSite>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: ${(props: { display: any; color: any }) =>
    props.display ? "none" : "flex"};
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
  z-index: 10;
  position: fixed;

  span {
    color: ${(props: { color: any }) =>
      props.color ? "var(--main-yellow)" : "var(--main-blue)"};
    animation: opac 1s ease forwards;
  }
`;

const NavSite: any = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;

  @media (max-width: 1271px) {
    /* overflow: hidden; */
    background-color: var(--second-pink);
    /* border-radius: 10%; */
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    /* align-content: flex-end; */
    display: ${({ isOpen }: { isOpen: string }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    justify-content: center;
    width: 100%;
    /* max-height: ${({ isOpen }) => (isOpen ? "800px" : "0")}; */
    transition: 0.3s ease-in;
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 2px;
    width: 25px;
    background: var(--main-blue);
    margin-bottom: 4px;
    border-radius: 5px;
  }
  @media (max-width: 1271px) {
    display: flex;
  }
`;

const Portfolio = styled.span`
  @media (max-width: 1271px) {
    display: none;
  }
`;

const PortfolioMobile = styled.h2`
  display: none;
  @media (max-width: 1271px) {
    display: flex;
  }
`;

export default NavBar;
