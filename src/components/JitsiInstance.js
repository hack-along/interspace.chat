import React, { useState, useEffect, useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiInstance = () => {
  const { currentSpace } = useContext(SpaceContext);

  useEffect(() => {
    const domain = "meet.jit.si/interspace";
    const options = {
      roomName: currentSpace,
      width: 700,
      height: 700,
      parentNode: document.querySelector("#meet")
    };
    const api = new JitsiMeetExternalAPI(domain, options);
    // api.executeCommand("displayName", "New Nickname");

    return function cleanup() {
      api.dispose();
    };
  });

  return <div id="meet"></div>;
};

export default JitsiInstance;
