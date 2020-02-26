import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);

  const Header = styled.img`
    width: 100vw;
    height: auto;
  `;

  const SpaceSelector = styled.nav``;

  const Room = ({ roomName, active }) => (
    <div className="click-zone" onClick={() => setSpace(roomName)}>
      <span className={`roomFont ${currentSpace === roomName ? "active" : ""}`}>
        {roomName}
      </span>
    </div>
  );

  return (
    <SpaceSelector>
      <Header src="interspace-noncon-header.png" />
      <hr />
      <div className="map-container">
        <Room roomName="Entry" />
        <Room roomName="Qrypto Qube" />
        <Room roomName="QryptoLib Institute" />
        <Room roomName="Hall Track" />
      </div>
    </SpaceSelector>
  );
};

export default Space;
