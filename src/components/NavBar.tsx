import { Link } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavContainer>
      <h1><Link to="/">PORTFOLIO</Link></h1>
      <NavSite>
        <h2>Présentation</h2>
        <h2><Link to="/projets">Projets</Link></h2>
        <h2><Link to="/contact">Contact</Link></h2>
      </NavSite>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  height: 7rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 0 2rem;
  z-index: 10;
  position: fixed;
`;

const NavSite = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 30%;
`;

export default NavBar;
