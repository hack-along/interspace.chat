import React, { useState, useEffect, useContext } from "react";
import { FloatingSpaceContext } from "../../contexts/FloatingSpaceContext";

function HolonsInstance() {
  const [holonID, setHolonID] = useState("0x82Aa4dC3E7D85a95cd801394A070AE316b6a668d");
  const { currentFloatingSpaces } = useContext(FloatingSpaceContext);
  const space = currentFloatingSpaces;

  useEffect(() => {
    if (space.indexOf("ValuesAndWorldview") > -1) {
      setHolonID("0x82Aa4dC3E7D85a95cd801394A070AE316b6a668d");
    } else if (space.indexOf("THEOS") > -1) {
      setHolonID("692864277714829392");
    } else {
      setHolonID("690315812002988361");
    }
    return console.log(holonID);
  }, [space, holonID]);

  return (
    <iframe
      src={`https://holons.hackalong.io/`}
      width="100%"
      height="100%"
      frameBorder="0"
      title="Holons"
    ></iframe>
  );
}

export default HolonsInstance;
