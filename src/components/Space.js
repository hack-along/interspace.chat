import React, { Fragment, useContext } from "react";
import styled from "styled-components";

import { BrowserView, MobileView } from "react-device-detect";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import Room from "./Room";

import JitsiInstanceMobile from "./integrations/JistiInstanceMobile";

//import Profile from "./Profile"
import Web3 from "./Web3"

const Headline = styled.h6`
  color: whitesmoke;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1rem;

  a {
    font-weight: 100;
    color: black;
    background-color: #00ffbf;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    background-color: black;
  }
`;

const SpaceSelector = styled.nav`
  padding-bottom: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    background-color: black;
    padding: 0px;
    min-height: 10vh;
  }
`;

const SpaceInfo = styled.div`
  text-align: center;
  padding-top: 1rem;
  margin: 0 auto;
  font-size: 1rem;
  z-index: 100;
  div {
    color: violet;
  }
`;

const Descripton = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: black;
  z-index: 1;
  margin: 0px;
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
  p {
    padding: 0.5rem;
    margin: 0px;
  }

  a {
    padding: 0px;
  }
`;

const CurrentSpace = styled.span`
  color: whitesmoke;
`;

const MobileContainer = styled.div`
  background: black;
  justify-content: center;
`;

const MobileSelectorContainer = styled.div`
  background: black;
  box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0.2rem;
`;

const Space = () => {
  const { currentFloatingSpaces, addFloatingSpace } = useContext(
    FloatingSpaceContext
  );

  let displayedJoinedSpaces;
  if (currentFloatingSpaces.length > 0) {
    if (currentFloatingSpaces.length > 2) {
      let nameCount = currentFloatingSpaces.length;
      displayedJoinedSpaces =
        currentFloatingSpaces.slice(0, nameCount - 2).join(", ") +
        ", " +
        currentFloatingSpaces.slice(nameCount - 2, nameCount).join(" & ");
    } else {
      displayedJoinedSpaces = currentFloatingSpaces.join(" & ");
    }
  }

  const openInNewTab = url => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    
    <SpaceSelector>
      <BrowserView>
        <span>
          <SpaceInfo>
            {displayedJoinedSpaces ? (
              <Fragment>
                You're in the{" "}
                <CurrentSpace>{displayedJoinedSpaces}</CurrentSpace>!
              </Fragment>
            ) : (
              <Fragment>
                <div>Click on a portal</div>
              </Fragment>
              
            )}
          </SpaceInfo>
        </span>

        <div>
          <div className="m-grid-container">
            <svg
              className="frame"
              // xmlns:svg='http://www.w3.org/2000/svg'
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="1 1 36 40"
              id="svg"
            >
              <g id="shapes">
                <path
                  className="path-hex "
                  d="M 19,5 L 33,13 L 33,29 L 19,37 L 5,29 L 5,13 L 19,5 z "
                  id="octagon"
                />
                <path
                  className="path-hex "
                  d="M 19,5 L 5,29 L 33,29 L 19,5 z "
                  id="triange-up"
                />
                <path
                  className="path-hex "
                  d="M 5,13 L 19,37 L 33,13 L 5,13 z "
                  id="triange-down"
                />
                <path
                  className="path-hex inner"
                  d="M 19,13 L 12,17 L 12,25 L 19,29 L 26,25 L 26,17 L 19,13 z "
                  id="octagon-inner"
                />
                <path
                  className="path-hex "
                  d="M 12,25 L 19,5 L 26,25 L 12,25 z "
                  id="path2894"
                />
                <path
                  className="path-hex "
                  d="M 19,37 L 12,17 L 26,17 L 19,37 z "
                  id="path2896"
                />
                <path className="path-hex " d="M 5,13 L 33,29" id="line-6-3" />
                <path className="path-hex " d="M 5,29 L 33,13" id="line-6-2" />
                <path className="path-hex " d="M 19,5 L 19,37" id="line=-1-3" />
                <path
                  className="path-hex "
                  d="M 5,29 L 19,13 L 26,25 L 5,29 z "
                  id="path2904"
                />
                <path
                  className="path-hex "
                  d="M 33,29 L 19,13 L 12,25 L 33,29 z "
                  id="path2906"
                />
                <path
                  className="path-hex "
                  d="M 33,13 L 12,17 L 19,29 L 33,13 z "
                  id="path2908"
                />
                <path
                  className="path-hex "
                  d="M 5,13 L 19,29 L 26,17 L 5,13 z "
                  id="path2910"
                />
              </g>
            </svg>
            <div
              id="c0"
              className="circle row-1 c-center c-1 click-zone"
              onClick={() => addFloatingSpace("ValuesAndWorldview")}
            >
              <span className="roomName">Values and Worldview</span>
            </div>
            <div
              id="c1"
              className="circle row-2 c-right click-zone"
              onClick={() => addFloatingSpace("HealthAndWellbeing")}
            >
              <span className="roomName">Health &amp; Wellbeing</span>
            </div>

            <div
              id="c2"
              className="circle row-6 c-right click-zone"
              onClick={() => addFloatingSpace("FoodAndAgriculture")}
            >
              <span className="roomName">Food &amp; Agriculture</span>
            </div>
            <div
              id="c3"
              className="circle row-7 c-center click-zone"
              onClick={() => addFloatingSpace("BusinessAndTrade")}
            >
              <span className="roomName">Business &amp; Trade</span>
            </div>
            <div
              id="c4"
              className="circle row-6 c-left click-zone"
              onClick={() => addFloatingSpace("EnergyAndResources")}
            >
              <span className="roomName">Energy &amp; Resources</span>
            </div>
            <div
              id="c5"
              className="circle row-2 c-left click-zone"
              onClick={() => addFloatingSpace("ClimateChange")}
            >
              <span className="roomName">Climate Change</span>
            </div>

            <div
              id="c6"
              className="circle row-2 c-center click-zone"
              onClick={() => addFloatingSpace("EcosystemsAndBiosphere")}
            >
              <span className="roomName">Ecosystems &amp; Biosphere</span>
            </div>

            <div 
              id="c7" 
              className="circle row-3 c-center-right click-zone"
              onClick={() => addFloatingSpace("WaterAvailability")}
            >
              <span className="roomName">Water Availability</span>
            </div>

            <div 
              id="c8" 
              className="circle row-5 c-center-right click-zone"
              onClick={() => addFloatingSpace("HabitatAndInfrastructure")}
            >
              <span className="roomName">Habitat &amp; Infrastructure</span>
            </div>

            <div
              id="c9"
              className="circle row-6 c-center click-zone"
              onClick={() => addFloatingSpace("EconomyAndWealth")}
            >
              <span className="roomName">Economy &amp; Wealth</span>
            </div>
            
            <div 
              id="c10" 
              className="circle row-5 c-center-left click-zone"
              onClick={() => addFloatingSpace("GovernanceAndInstitutions")}
            >
              <span className="roomName">Governance &amp; Institutions</span>
            </div>
            
            <div 
              id="c11" 
              className="circle row-3 c-center-left click-zone"
              onClick={() => addFloatingSpace("CommunityAndResilience")}
            >
            <span className="roomName">Community &amp; Resilience</span>
            </div>

            <div
              id="c12"
              className="circle row-4 c-center click-zone"
            >
              <span className="roomName"><button>Send Funds</button></span>
            </div>
          </div>
          {/*
        <span className="mapInstructions">
          Click a location to join a conversation.
        </span>
        */}
        </div>
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <Headline>
            Welcome to{" "}
            <a
              href="https://hackalong.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              Hack-Along
            </a>
          </Headline>
          <Descripton>
            <p> Click below to enter the space</p>
          </Descripton>
          <MobileSelectorContainer>
            <Room roomName="ValuesAndWorldview" />
            <Room roomName="HealthAndWellbeing" />
            <Room roomName="FoodAndAgriculture" />
            <Room roomName="BusinessAndTrade" />
            <Room roomName="EnergyAndResources" />
            <Room roomName="ClimateChange" />
            <Room roomName="EcosystemsAndBiosphere" />
            <Room roomName="WaterAvailability" />
            <Room roomName="HabitatAndInfrastructure" />
            <Room roomName="EconomyAndWealth" />
            <Room roomName="GovernanceAndInstitutions" />
            <Room roomName="CommunityAndResilience" />
          </MobileSelectorContainer>
          <JitsiInstanceMobile />
        </MobileContainer>
      </MobileView>
    </SpaceSelector>
  );
};

export default Space;
