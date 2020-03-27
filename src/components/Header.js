import React from "react";
import styled from "styled-components";
import InterspaceLogo from "../img/interspace-logo.png";
import Logo from "./Logo";

import Credits from "./Credits";
import Support from "./Support";
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
  z-index: 100;

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
        <Logotext>interspace.chat</Logotext>
      </Logolink>
      <Help />
      <Support />
      <Credits />
    </HeaderContainer>
  );
};

export default Header;
