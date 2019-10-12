import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Space from "./components/Space";
import JitsiInstance from "./components/JitsiInstance.js";
import SpaceContextProvider from "./contexts/SpaceContext";
import ImageMapper from "react-image-mapper";
// import Click from "./components/Click";

function App() {
  const [currentroom, setRoom] = useState("graveyard");

  const URL = "https://c1.staticflickr.com/5/4052/4503898393_303cfbc9fd_b.jpg";
  const MAP = {
    name: "my-map",
    areas: [
      {
        name: "1",
        shape: "poly",
        coords: [25, 33, 27, 300, 128, 240, 128, 94],
        preFillColor: "green",
        fillColor: "blue"
      },
      {
        name: "2",
        shape: "poly",
        coords: [219, 118, 220, 210, 283, 210, 284, 119],
        preFillColor: "pink"
      },
      {
        name: "3",
        shape: "poly",
        coords: [381, 241, 383, 94, 462, 53, 457, 282],
        fillColor: "yellow"
      },
      {
        name: "4",
        shape: "poly",
        coords: [245, 285, 290, 285, 274, 239, 249, 238],
        preFillColor: "red"
      },
      { name: "5", shape: "circle", coords: [170, 100, 25] }
    ]
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Interspace.chat v.0</h1>
        <SpaceContextProvider>
          <JitsiInstance />
          <Space />
        <div className="container" marginTop={1000 + "px"} style={{display: "none"}} display={"none"}>
            <ImageMapper src={URL} map={MAP} marginTop={1000 + "px"} width={500} display={"none"} />
          </div>
        </SpaceContextProvider>
      </header>

      <div className="map-container">
        <div className="video"></div>
        <div className="click-zone a" data-zone="Living Room"></div>
        <div className="click-zone b" data-zone="Dining Room"></div>
        <div className="click-zone c" data-zone="Sunset Patio"></div>
        <div className="click-zone hexagon" data-zone="Portal Zone"></div>
        <img className="click-zone pavle" id="pavle" src="pavle.png" data-zone="Pavle" />
        </div>
        <div className="map-container" style={{marginTop: 300 + "px"}}>
          <p>
            You're in the <span id="roomTitle">Graveyard</span>, faca!
          </p>
        </div>

        {/* <div className="map-container">
          <div className="video"></div>
          <div className="click-zone a" data-zone="Living Room"></div>
          <div className="click-zone b" data-zone="Dining Room"></div>
          <div className="click-zone c" data-zone="Sunset Patio"></div>
          <div className="click-zone hexagon" data-zone="Portal Zone"></div>
          <img className="click-zone pavle" id="pavle" src="pavle.png" data-zone="Pavle" />
          </div>
          <div className="map-container" style={{marginTop: 300 + "px"}}>
            <p>
              You're in the <span id="roomTitle">Graveyard</span>, faca!
            </p>
          </div> */}
    </div>
  );
}

export default App;
