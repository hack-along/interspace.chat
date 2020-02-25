import React, { useEffect, useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
import { UserContext } from "../contexts/UserContext";
import styled from "styled-components";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiContainer = styled.div`
  width: auto;
  float: right;
`;

const JitsiInstance = () => {
  const { currentSpace } = useContext(SpaceContext);
  const { user } = useContext(UserContext);

  const width = 800;
  const height = 600;

  useEffect(() => {
    const domain = "meet.jit.si/interspace/noncon";
    const options = {
      roomName: currentSpace,
      width: width,
      height: height,
      parentNode: document.querySelector("#meet")
    };
    const api = new JitsiMeetExternalAPI(domain, options);

    //    api.executeCommand("displayName", user);

    return function cleanup() {
      api.dispose();
    };
  });

  return <JitsiContainer id="meet"></JitsiContainer>;
};

export default JitsiInstance;
