import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Space from "./components/Space";
import JitsiInstance from "./components/JitsiInstance.js";
import SpaceContextProvider from "./contexts/SpaceContext";
// import Click from "./components/Click";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Interspace.chat v.0</h1>
        <p>Remotely collaborate with teams, friends, projects, and communities on the Interspace</p>
        <SpaceContextProvider>
          <Space />
          <div id="meetContainer"></div>
          <JitsiInstance />
        </SpaceContextProvider>
      </header>
      <script>
      </script>
    </div>
  );
}

export default App;
