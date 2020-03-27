import React, { useState, useEffect } from "react";

function ChatInstance({ width, height, space }) {
  const [discordRoom, setDiscordRoom] = useState("690315812002988361");

  useEffect(() => {
    if (space.indexOf("capsule1") > -1) {
      setDiscordRoom("692864138447421530");
    } else if (space.indexOf("capsule2") > -1) {
      setDiscordRoom("692864277714829392");
    } else {
      setDiscordRoom("690315812002988361");
    }
    return console.log(discordRoom);
  });

  return (
    <div>
      <iframe
        src={`https://titanembeds.com/embed/690315811293888778?css=85&defaultchannel=${discordRoom}&theme=DiscordDark`}
        width={width}
        height={height}
        frameBorder="0"
        title="chat"
      ></iframe>
    </div>
  );
}

export default ChatInstance;
