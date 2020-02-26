import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Space = () => {
  const { setSpace } = useContext(SpaceContext);

  const portalStyle = {
    marginTop: "10px"
  };

  const Header = styled.img`
    width: 100vw;
    height: auto;
  `;

  const SpaceSelector = styled.nav``;

  return (
    <SpaceSelector>
      <Header src="interspace-noncon-header.png" />
      <hr />
      <div className="map-container">
        <div className="click-zone" onClick={() => setSpace("entry")}>
          <span className="roomName">Entry</span>
        </div>
        <div className="click-zone" onClick={() => setSpace("qrypto-qube")}>
          <span className="roomName">Qrypto Qube</span>
        </div>
        <div
          className="click-zone"
          onClick={() => setSpace("qrypto-liberation-institute")}
        >
          <span className="roomName">QryptoLiberation Institute</span>
        </div>
        <div className="click-zone" onClick={() => setSpace("hallway")}>
          <span className="roomName" style={portalStyle}>
            Hallway
          </span>
        </div>
      </div>
    </SpaceSelector>
  );
};

export default Space;
