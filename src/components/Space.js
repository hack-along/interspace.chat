import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);

  const Header = styled.img`
    width: 50vw;
    height: auto;
    margin: 0 auto;
    padding: 1rem;
  `;

  const SpaceSelector = styled.nav`
    padding-top: 1rem;
  `;

  const RedLine = styled.hr`
    border-color: red;
  `;

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
      <RedLine />
      <div className="map-container">
        <Room roomName="Lobby" />
        <Room roomName="Parallele Polis" />
        <Room roomName="Cryptoeconomic Institute" />
        <Room roomName="Metatrack" />
      </div>
    </SpaceSelector>
  );
};

export default Space;
