import React, { useState, useContext } from "react";
import styled from "styled-components";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";

import { RoomURLs } from "../utils/constants";
import JitsiInstance from "./integrations/JitsiInstance";
import ChatInstance from "./integrations/ChatInstance";
import HolonsInstance from "./integrations/HolonsInstance";
//import Holons from "Holons"
// import YoutubeInstance from './integrations/YoutubeInstance';
// import HubInstance from './integrations/HubInstance';

const SERVICES = {
  jitsi: {
    title: "Videochat",
    component: JitsiInstance
  },
  chat: {
    title: "Chat",
    component: ChatInstance
  },
  holons: {
    title: "Holons",
    component: HolonsInstance
  }

};

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ChatButton = styled.button`
  min-height: 20px;
  max-width: 120px;
  color: black;
  align-self: flex-end;
  margin-top: 15px;
`;

const RoomInstance = ({ space }) => {
  const { currentFloatingSpaces, addFloatingSpace } = useContext(
    FloatingSpaceContext
  );
  const roomURLs = RoomURLs[space];
  const availableServiceNames = Object.keys(SERVICES).filter(serviceName =>
    Object.keys(roomURLs).includes(serviceName)
  );

  const [selectedServiceName] = useState(availableServiceNames[0]);

  if (availableServiceNames.length === 0) return <div>Unknown room</div>;

  const roomData = roomURLs[selectedServiceName];
  const selectedService = SERVICES[selectedServiceName];
  const RoomServiceComponent = selectedService.component;

  return (
    <Container>
      
      <RoomServiceComponent roomData={roomData} />
      {currentFloatingSpaces.indexOf("discord chat") === -1 ? (
        <ChatButton onClick={() => addFloatingSpace("discord chat")}>
          Open Chat
        </ChatButton>
      ) : null}
        {currentFloatingSpaces.indexOf("Holons") === -1 ? (
        <ChatButton onClick={() => addFloatingSpace("Holons")}>
          Open Holons
        </ChatButton>
      ) : null}
    </Container>
  );
};

export default RoomInstance;
