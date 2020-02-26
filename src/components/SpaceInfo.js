import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import styled from "styled-components";

const Info = styled.span`
  padding-top: 1rem;
  font-size: 2rem;
`;

const CurrentSpace = styled.span`
  color: red;
`;

const SpaceInfo = () => {
  const { currentSpace } = useContext(SpaceContext);
  return (
    <Info>
      You're in the <CurrentSpace>{currentSpace}</CurrentSpace>!
    </Info>
  );
};

export default SpaceInfo;
