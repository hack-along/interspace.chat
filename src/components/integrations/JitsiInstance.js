import React, { useRef, useEffect } from "react";
// import * as JitsiMeetExternalAPI from "../dist/jitsi";

const JitsiMeetExternalAPI = window.JitsiMeetExternalAPI;

const JitsiInstance = ({ width, height, roomData }) => {
  const root = useRef(null);

  useEffect(() => {
    const options = {
      roomName: roomData.roomName,
      width: "100%",
      height: "100%",
      parentNode: root.current,
      interfaceConfigOverwrite: {
        defaultLanguage: `de`,
        TOOLBAR_ALWAYS_VISIBLE: "true",
        INITIAL_TOOLBAR_TIMEOUT: 200000,
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
      }
    };
    const api = new JitsiMeetExternalAPI(roomData.domain, options);

    // api.executeCommand("displayName", user);

    return function cleanup() {
      api.dispose();
    };
  }, [roomData, width, height]);

  return <div ref={root} style={{ height: "100%" }}></div>;
};

export default JitsiInstance;
