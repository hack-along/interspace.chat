import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);

  const metatron = (
    <svg class="frame"  xmlns="http://www.w3.org/2000/svg" preserveAspectRatio=" meet" viewBox="1 1 36 40" id="svg">
      <g id="shapes">
        <path class="path-hex " d="M 19,5 L 33,13 L 33,29 L 19,37 L 5,29 L 5,13 L 19,5 z " id="octagon" />
        <path class="path-hex " d="M 19,5 L 5,29 L 33,29 L 19,5 z " id="triange-up" />
        <path class="path-hex " d="M 5,13 L 19,37 L 33,13 L 5,13 z " id="triange-down" />
        <path class="path-hex inner" d="M 19,13 L 12,17 L 12,25 L 19,29 L 26,25 L 26,17 L 19,13 z " id="octagon-inner" />
        <path class="path-hex " d="M 12,25 L 19,5 L 26,25 L 12,25 z " id="path2894" />
        <path class="path-hex " d="M 19,37 L 12,17 L 26,17 L 19,37 z " id="path2896" />
        <path class="path-hex " d="M 5,13 L 33,29" id="line-6-3" />
        <path class="path-hex " d="M 5,29 L 33,13" id="line-6-2" />
        <path class="path-hex " d="M 19,5 L 19,37" id="line=-1-3" />
        <path class="path-hex " d="M 5,29 L 19,13 L 26,25 L 5,29 z " id="path2904" />
        <path class="path-hex " d="M 33,29 L 19,13 L 12,25 L 33,29 z " id="path2906" />
        <path class="path-hex " d="M 33,13 L 12,17 L 19,29 L 33,13 z " id="path2908" />
        <path class="path-hex " d="M 5,13 L 19,29 L 26,17 L 5,13 z " id="path2910" />
      </g>
    </svg>
    )

  const portalStyle = {
    marginTop: "10px"
  };

  const Headline = styled.h6`
    font-weight: 100;
    font-size: 1.3rem;
    padding: 1rem;
  `;

  const SpaceSelector = styled.nav`
    padding-bottom: 1rem;
  `;

  const SpaceInfo = styled.p`
    font-size: 2rem;
  `;

  const Intro = styled.p`
    font-size: 1.3rem;
  `;

  const roomName = styled.p`
    font-size: 1.3rem;
  `;

  const CurrentSpace = styled.span`
    color: pink;
  `;

  return (
    <SpaceSelector>
      <span>
        <Headline>
          Welcome to Interspace.
        </Headline>
        <SpaceInfo>
          You're in the <CurrentSpace>{currentSpace}</CurrentSpace>!
        </SpaceInfo>
      </span>

      <div className="map-container">
        <div class="m-grid-container">
          
          {metatron}
          
          <div id="c0" onClick={() => setSpace("c0")} onclass="circle row-1 c-center c-1"></div>
          <div id="c1" onClick={() => setSpace("c1")} class="circle row-2 c-right"></div>
          <div id="c2" onClick={() => setSpace("c2")} class="circle row-6 c-right"></div>
          <div id="c3" onClick={() => setSpace("c3")} class="circle row-7 c-center"></div>
          <div id="c4" onClick={() => setSpace("c4")} class="circle row-6 c-left"></div>
          <div id="c5" onClick={() => setSpace("c5")} class="circle row-2 c-left"></div>

          <div id="c6" onClick={() => setSpace("c6")} class="circle row-2 c-center"></div>
          <div id="c7" onClick={() => setSpace("c7")} class="circle row-3 c-center-right"></div>
          <div id="c8" onClick={() => setSpace("c8")} class="circle row-5 c-center-right" ></div>
          <div id="c9" onClick={() => setSpace("c9")} class="circle row-6 c-center"></div>
          <div id="c10" onClick={() => setSpace("c10")} class="circle row-5 c-center-left"></div>
          <div id="c11" onClick={() => setSpace("c11")} class="circle row-3 c-center-left"></div>
          
          <div id="c12" onClick={() => setSpace("c12")} class="circle row-4 c-center"></div>
        </div>
      </div>
    </SpaceSelector>
  )
  
};

export default Space;
