import React from "react";
import { BrowserView } from "react-device-detect";
import "./styles/metatronstyle.css";
import "./App.css";
import Space from "./components/Space";
import FloatingRoomWindow from "./components/FloatingRoomWindow";
import RootContextProvider from "./contexts/RootContext";
import HouseContext from "./contexts/HouseContext";
import SpaceContext from "./contexts/SpaceContext";

import Header from "./components/Header";

function App() {


  return (
    <div className="App">
      <RootContextProvider>
        <HouseContext>
          <SpaceContext>
            <BrowserView>
              <Header />
            </BrowserView>
            <Space />
          </SpaceContext>
        </HouseContext>
        <FloatingRoomWindow />
      </RootContextProvider>
    </div>
  );
}

export default App;
