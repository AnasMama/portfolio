import React from "react";
import styled from "styled-components";

const RedSun = ({ loader }: { loader: boolean}) => {
  return (
    <SunContainer>
      <Sun loader={loader}/>
    </SunContainer>
  );
};

const SunContainer = styled.div`
  height: 100vh;
  width: 100%;

  @media (max-width: 1200px) {
    display: none;
  }
`;

const Sun = styled.div`
  background: #FF5C7C;
  box-shadow: 0 -5px 40px 0 #FF5C7C;
  height: 50rem;
  width: 50rem;
  border-radius: 50%;
  margin: auto;
  position: absolute;
  left: 35%;
  top: 25%;
  z-index: 1;

  animation: ${(props: {loader: boolean }) => props.loader ? "upsun 2s ease" : "none"};
`;

export default RedSun;
