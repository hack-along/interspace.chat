import React from "react";
import styled from "styled-components";

function ChatInstance({ width, height }) {
  return (
    <iframe
      src="https://titanembeds.com/embed/690315811293888778?css=85&theme=DiscordDark"
      width={width}
      height={height}
      frameborder="0"
      title="chat"
    ></iframe>
  );
}

export default ChatInstance;
