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
import StarfieldAnimation from 'react-starfield-animation';

function App() {


  return (
    <div className="App">
      <div className='stars'></div>
			<div className='twinkling'></div>

			<StarfieldAnimation
				numParticles={300}
				lineWidth={2.0}
				depth={300}
				style={{
					position: 'absolute',
					width: '100%',
					height: '100%',
				}}
			/>
      
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
