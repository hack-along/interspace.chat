import React, { useEffect } from "react";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiInstance = ({ width, height, roomData }) => {
  useEffect(() => {
    const options = {
      roomName: roomData.roomName,
      width: width,
      height: height,
      interfaceConfigOverwrite: { defaultLanguage: `de` },
      interfaceConfigOverwrite: { TOOLBAR_ALWAYS_VISIBLE: "true" },
      interfaceConfigOverwrite: { INITIAL_TOOLBAR_TIMEOUT: 200000 },
      interfaceConfigOverwrite: {
        TOOLBAR_BUTTONS: [
          "microphone",
          "camera",
          "closedcaptions",
          "desktop",
          "fullscreen",
          "fodeviceselection",
          "hangup",
          "profile",
          "info",
          "recording",
          "livestreaming",
          "etherpad",
          "sharedvideo",
          "settings",
          "raisehand",
          "videoquality",
          "filmstrip",
          "invite",
          "feedback",
          "stats",
          "shortcuts",
          "tileview",
          "download",
          "help",
          "mute-everyone"
        ]
      },
      parentNode: document.querySelector("#meet")
    };
    const api = new JitsiMeetExternalAPI(roomData.domain, options);

    // api.executeCommand("displayName", user);

    return function cleanup() {
      api.dispose();
    };
  }, [roomData, width, height]);

  return <div id="meet"></div>;
};

export default JitsiInstance;
