import React from "react";
import styled from "styled-components";
import Collapsible from "react-collapsible";

import SupporterParallele from "../img/support-parallele.png";

const SupportStyled = styled.nav`
  text-align: left;

  .Collapsible__trigger {
    color: black;
    background-color: whitesmoke;
    cursor: pointer;
    padding: 0.2rem;
    :hover {
      background-color: #00ffbf;
    }
  }
  .Collapsible__contentOuter {
    max-width: 300px;

    :hover {
      .Collapsible__contentInner {
      }
    }
  }
  .Collapsible__contentInner {
    padding: 0.5rem;
    background-color: whitesmoke;

    p {
      color: black;
    }

    a {
      color: #00ffbf;
    }
  }
`;

const StyledListItem = styled.li`
  list-style-type: none;
  display: flex;
  padding: 1rem;
  color: black;
`;

const StyledLink = styled.a`
  display: grid;
  grid-template-columns: auto auto;
  text-decoration-line: none;
`;

const StyledSupportertext = styled.span`
  align-self: center;
  color: black;
  padding: 1rem;
`;

const Support = () => {
  return (
    <SupportStyled>
      <Collapsible trigger="Support">
        <p>Supported by:</p>
        <ul>
          <StyledListItem>
            <StyledLink
              href="https://parallele.at"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={SupporterParallele}
                alt="Supported by Parallele Polis Vienna"
              />

              <StyledSupportertext>Parallele Polis</StyledSupportertext>
            </StyledLink>
          </StyledListItem>
          {/*
          <StyledListItem>
            <StyledLink href="https://ecosystem.support">
              <img
                src={SupporterEcosystem}
                alt="Supported by Ethereum Ecosystem Supoort"
              />

              <StyledSupportertext>
                Ethereum Ecosystem Support
              </StyledSupportertext>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="https://www.ethglobal.co">
              <img src={SupporterEthglobal} alt="Supported by ETHglobal" />

              <StyledSupportertext>ETHglobal</StyledSupportertext>
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href="https://gitcoin.co">
              <img src={SupporterGitcoin} alt="Supported by Gitcoin" />

              <StyledSupportertext>Gitcoin</StyledSupportertext>
            </StyledLink>
          </StyledListItem>
*/}
        </ul>
      </Collapsible>
    </SupportStyled>
  );
};

export default Support;
