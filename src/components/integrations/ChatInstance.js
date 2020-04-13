import React, { useState, useEffect, useContext } from "react";
import { FloatingSpaceContext } from "../../contexts/FloatingSpaceContext";

function ChatInstance() {
  const [discordRoom, setDiscordRoom] = useState("690315812002988361");
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
  const space = currentFloatingSpaces;

  useEffect(() => {
    if (space.indexOf("capsule1") > -1) {
      setDiscordRoom("692864138447421530");
    } else if (space.indexOf("capsule2") > -1) {
      setDiscordRoom("692864277714829392");
    } else {
      setDiscordRoom("690315812002988361");
    }
    return console.log(discordRoom);
  }, [space, discordRoom]);

  return (
    <iframe
      src={`https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=${discordRoom}&theme=DiscordDark`}
      width="100%"
      height="100%"
      frameBorder="0"
      title="discord chat"
    ></iframe>
  );
}

export default ChatInstance;
