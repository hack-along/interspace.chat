import React from "react";
import "./App.css";
import LiminalSpace from "./components/LiminalSpace";
import MetatronSpace from "./components/MetatronSpace";
import SDGSpace from "./components/SDGSpace";
import Space from "./components/Space";

import JitsiInstance from "./components/JitsiInstance.js";
import SpaceContextProvider from "./contexts/SpaceContext";
import UserContextProvider from "./contexts/UserContext";
// import Click from "./components/Click";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
      <UserContextProvider>
        <SpaceContextProvider>
            <Switch>
            <Route path="/liminal">
              <LiminalSpace />
            </Route>
            <Route path="/metatron">
             <MetatronSpace />
            </Route>
            <Route path="/SDG">
             <SDGSpace />
            </Route>
            <Route path="/">
             <Space />
            </Route>
            </Switch>
          <div className="meetContainer">
            <JitsiInstance />
          </div>
        </SpaceContextProvider>
      </UserContextProvider>
    </div>
  </Router>
    
  );
}

export default App;
