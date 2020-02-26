import React from "react";
import "./App.css";
import Space from "./components/Space";
import JitsiInstance from "./components/JitsiInstance.js";
import SpaceContextProvider from "./contexts/SpaceContext";
import UserContextProvider from "./contexts/UserContext";
import SpaceInfo from "./components/SpaceInfo";

function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <SpaceContextProvider>
          <Space />
          <hr />
          <div className="meetContainer">
            <JitsiInstance />
          </div>
          <SpaceInfo />
        </SpaceContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
