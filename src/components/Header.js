import React from "react";
import styled from "styled-components";

import Credits from "./Credits";
import Help from "./Help";

const HeaderContainer = styled.div`
  position: fixed;
  top: 0px;
  left: 20px;
  display: grid;
  grid-gap: 0.2rem;
  grid-template-rows: auto auto;
  padding: 1rem;
  justify-items: start;

  :hover {
    opacity: 1;
  }
`;

const Logotext = styled.h2`
  align-self: flex-end;
  margin: 0;
  font-size: 18px;
`;

const Logolink = styled.a`
  display: flex;
  width: 100px;
  text-decoration-line: none;
  padding-bottom: 2rem;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logolink href="/">
        <Logotext>Solarpunk VR Party</Logotext>
      </Logolink>
      <Help />
      <Credits />
    </HeaderContainer>
  );
};

export default Header;
