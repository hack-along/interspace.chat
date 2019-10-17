import ImageMapper from "react-image-mapper";
import React, { useContext } from "react";
import { SpaceContext } from "../contexts/SpaceContext";

const Space = () => {
  const { currentSpace, setSpace } = useContext(SpaceContext);
  const portalStyle = {
    marginTop: '10px'
  }

  return (
    <div>
        <div>
          <p>You're in the {currentSpace}, man!</p>
        </div>

        <div className="map-container">
               <div className="map-background"></div>
               <div className="click-zone a" data-zone="Living Room" onClick={() => setSpace("living room")}><span className="spaceName">Living Room</span></div>
               <div className="click-zone b" data-zone="Dining Room" onClick={() => setSpace("dining room")}><span className="spaceName">Dining Room</span></div>
               <div className="click-zone c" data-zone="Sunset Patio" onClick={() => setSpace("sunset patio")}><span className="spaceName">Sunset Patio</span></div>
               <div className="hexagon" data-zone="Portal Zone" onClick={() => setSpace("poOOOooOortal")}><span className="spaceName" style={portalStyle}>The Portal</span></div>
               <img className="click-zone pavle" id="pavle" src="pavle.png" data-zone="Pavle" />
        </div>

      </div>
  );
};

export default Space;
