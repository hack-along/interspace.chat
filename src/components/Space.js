import React, { Fragment, useContext } from "react";
import styled from "styled-components";
import { BrowserView, MobileView } from "react-device-detect";

import { FloatingSpaceContext } from "../contexts/FloatingSpaceContext";
// import { HouseContext } from "../contexts/HouseContext";
import { SpaceContext } from "../contexts/SpaceContext";

import Room from "./Room";
import JitsiInstanceMobile from "./integrations/JistiInstanceMobile";

import { RoomNames } from "../utils/constants";
// import Logo from "../img/interspace-logo.png";

const Headline = styled.h6`
  color: whitesmoke;
  font-weight: 600;
  font-size: 1.3rem;
  padding: 1rem;

  a {
    font-weight: 100;
    color: black;
    background-color: #00ffbf;
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    background-color: black;
  }
`;

const SpaceSelector = styled.nav`
  padding-bottom: 1rem;
  width: 100%;

  @media (max-width: 600px) {
    background-color: black;
    padding: 0px;
    min-height: 10vh;
  }
`;

const SpaceInfo = styled.div`
  text-align: center;
  padding-top: 4rem;
  margin: 0 auto;
  font-size: 1rem;
  z-index: 100;
  div {
    color: violet;
  }
`;

const Descripton = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  background-color: black;
  z-index: 1;
  margin: 0px;
  font-size: 0.8rem;
  padding-bottom: 0.4rem;
  p {
    padding: 0.5rem;
    margin: 0px;
  }

  a {
    padding: 0px;
  }
`;

const CurrentSpace = styled.span`
  color: whitesmoke;
`;

const NewRoomLink = styled.a`
  font-weight: 100;
  font-size: 1rem;
  color: violet;
  text-decoration-color: violet;
`;

const MobileContainer = styled.div`
  background: black;
  justify-content: center;
`;

const MobileSelectorContainer = styled.div`
  background: black;
  box-shadow: inset 0px 0px 30px 30px rgba(0, 0, 0, 0);
  justify-content: center;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 0.2rem;
`;

const Space = () => {
  const { currentFloatingSpaces, setFloatingSpaces } = useContext(
    FloatingSpaceContext
  );
  const { currentSpace } = useContext(SpaceContext);
  // const [modalOpen, setModalOpen] = useState(true);
  const launchFloatingSpace = floatingSpace => {
    let resultantSpaces = null;
    if (currentFloatingSpaces && currentFloatingSpaces.length > 0) {
      if (currentFloatingSpaces.indexOf(floatingSpace) > -1) {
        resultantSpaces = currentFloatingSpaces;
      } else if (RoomNames.indexOf(floatingSpace) > -1) {
        let replaceIndex;
        for (let instance of RoomNames) {
          if (currentFloatingSpaces.indexOf(instance) > -1) {
            replaceIndex = currentFloatingSpaces.indexOf(instance);
          }
        }
        if (replaceIndex > -1) {
          let spliceJitsiDuplicates = [...currentFloatingSpaces]; // Prepare for splice
          spliceJitsiDuplicates.splice(replaceIndex, 1, floatingSpace);
          resultantSpaces = [...spliceJitsiDuplicates];
        } else {
          resultantSpaces = [...currentFloatingSpaces, floatingSpace];
        }
      } else {
        resultantSpaces = [...currentFloatingSpaces, floatingSpace];
      }
    } else {
      resultantSpaces = [floatingSpace];
    }
    setFloatingSpaces(resultantSpaces);
  };

  const displayJoinedSpaces = floatingSpaceWindows => {
    let windowsWithoutPlaceholders = floatingSpaceWindows.filter(item => item);
    if (windowsWithoutPlaceholders.length > 0) {
      if (windowsWithoutPlaceholders.length > 2) {
        let nameCount = windowsWithoutPlaceholders.length;
        return (
          windowsWithoutPlaceholders.slice(0, nameCount - 2).join(", ") +
          ", " +
          windowsWithoutPlaceholders.slice(nameCount - 2, nameCount).join(" & ")
        );
      } else {
        return windowsWithoutPlaceholders.join(" & ");
      }
    } else {
      return null;
    }
  };

  const openInNewTab = url => {
    let win = window.open(url, "_blank");
    win.focus();
  };

  return (
    <SpaceSelector>
      <BrowserView>
        {/*modalOpen && (
					<div id='myModal' class='modal'>
						<div class='modal-content'>
							<img src={Logo} alt='logo' className='modal_logo'></img>
							<p className='modal_text'>
								Genieße die lauschige Atmosphäre in unserer Taverne.
							</p>
							<p className='modal_text'>
								Setz dich an einen Tisch der Dir zusagt.
							</p>
							<p className='modal_text'>
								Bevorzugt Chrome, screen sharing benötigt die Jitsi Chrome
								Extension.
							</p>
							<p className='modal_text'>
								Die Chat logs sind nicht öffentlich, aber werden bei Dir lokal
								gespeichert, bitte schreibe keine sensitiven Daten in den Chat.
							</p>
							<button
								onClick={() => setModalOpen(false)}
								className='modal-close'>
								Ich verstehe
							</button>
						</div>
					</div>
				)*/}
        <span>
          {/*
					<Headline>
						Welcome to{' '}
						<a
							href='https://interspace.chat'
							target='_blank'
							rel='noopener noreferrer'
							style={{ textDecoration: 'none' }}>
							Interspace.Chat
						</a>
					</Headline>
					
        <span>
          Come to the chat on{" "}
          <a href="https://t.me/intercon13" target="_blank">
            Telegram
          </a>
        </span>
        */}
          <SpaceInfo>
            {displayJoinedSpaces(currentFloatingSpaces) ? (
              <Fragment>
                You are in{" "}
                <CurrentSpace>
                  {displayJoinedSpaces(currentFloatingSpaces)}
                </CurrentSpace>
                !
              </Fragment>
            ) : (
              <Fragment>
                <div>Click on a portal</div>
                <div>
                  <NewRoomLink href="https://portal.interspace.chat">
                    or open a new room
                  </NewRoomLink>
                </div>
              </Fragment>
            )}
          </SpaceInfo>
        </span>
        <div>
          <div class="m-grid-container">
            <svg
              class="frame"
              // xmlns:svg='http://www.w3.org/2000/svg'
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMidYMid meet"
              viewBox="1 1 36 40"
              id="svg"
            >
              <g id="shapes">
                <path
                  class="path-hex "
                  d="M 19,5 L 33,13 L 33,29 L 19,37 L 5,29 L 5,13 L 19,5 z "
                  id="octagon"
                />
                <path
                  class="path-hex "
                  d="M 19,5 L 5,29 L 33,29 L 19,5 z "
                  id="triange-up"
                />
                <path
                  class="path-hex "
                  d="M 5,13 L 19,37 L 33,13 L 5,13 z "
                  id="triange-down"
                />
                <path
                  class="path-hex inner"
                  d="M 19,13 L 12,17 L 12,25 L 19,29 L 26,25 L 26,17 L 19,13 z "
                  id="octagon-inner"
                />
                <path
                  class="path-hex "
                  d="M 12,25 L 19,5 L 26,25 L 12,25 z "
                  id="path2894"
                />
                <path
                  class="path-hex "
                  d="M 19,37 L 12,17 L 26,17 L 19,37 z "
                  id="path2896"
                />
                <path class="path-hex " d="M 5,13 L 33,29" id="line-6-3" />
                <path class="path-hex " d="M 5,29 L 33,13" id="line-6-2" />
                <path class="path-hex " d="M 19,5 L 19,37" id="line=-1-3" />
                <path
                  class="path-hex "
                  d="M 5,29 L 19,13 L 26,25 L 5,29 z "
                  id="path2904"
                />
                <path
                  class="path-hex "
                  d="M 33,29 L 19,13 L 12,25 L 33,29 z "
                  id="path2906"
                />
                <path
                  class="path-hex "
                  d="M 33,13 L 12,17 L 19,29 L 33,13 z "
                  id="path2908"
                />
                <path
                  class="path-hex "
                  d="M 5,13 L 19,29 L 26,17 L 5,13 z "
                  id="path2910"
                />
              </g>
            </svg>
            <div
              id="c0"
              className="circle row-1 c-center c-1 click-zone"
              onClick={() => openInNewTab("https://interspace.noncon.org")}
            >
              <span className="roomName">NonCon</span>
            </div>
            <div
              id="c1"
              className="circle row-2 c-right click-zone"
              onClick={() => openInNewTab("https://nyc.ethglobal.co")}
            >
              <span className="roomName">ETH nyc</span>
            </div>
            <div
              id="c2"
              className="circle row-6 c-right click-zone"
              onClick={() => openInNewTab("https://ethturin.com/")}
            >
              <span className="roomName">ETHTurin</span>
            </div>
            <div
              id="c3"
              className="circle row-7 c-center click-zone"
              onClick={() =>
                openInNewTab("https://github.com/ethereum/solidity")
              }
            >
              <span className="roomName">Solidity</span>
            </div>
            <div
              id="c4"
              className="circle row-6 c-left click-zone"
              onClick={() => openInNewTab("https://decentralala.com/")}
            >
              <span className="roomName">ETHBerlin</span>
            </div>
            <div
              id="c5"
              className="circle row-2 c-left click-zone"
              onClick={() => openInNewTab("https://interspace.metagame.wtf")}
            >
              <span className="roomName">Metagame</span>
            </div>

            <div
              id="c6"
              className="circle row-2 c-center click-zone"
              onClick={() => launchFloatingSpace("calendar")}
            >
              <span className="roomName">Calendar</span>
            </div>

            <div
              id="c7"
              className="circle row-3 c-center-right click-zone"
              onClick={() => launchFloatingSpace("chat")}
            >
              <span className="roomName">Discord</span>
            </div>

            <div
              id="c8"
              className="circle row-5 c-center-right click-zone"
              onClick={() => launchFloatingSpace("Marvin")}
            >
              <span className="roomName">Marvin</span>
            </div>
            <div
              id="c9"
              className="circle row-6 c-center click-zone"
              onClick={() => launchFloatingSpace("Zaphod")}
            >
              <span className="roomName">Zaphod</span>
            </div>
            <div
              id="c10"
              className="circle row-5 c-center-left click-zone"
              onClick={() => launchFloatingSpace("Dent")}
            >
              <span className="roomName">Dent</span>
            </div>
            <div
              id="c11"
              className="circle row-3 c-center-left click-zone"
              onClick={() => launchFloatingSpace("loft.radio")}
            >
              <span className="roomName">loft.radio</span>
            </div>

            <div
              id="c12"
              className="circle row-4 c-center click-zone"
              onClick={() => openInNewTab("https://portal.interspace.chat")}
            >
              <span className="roomName">launch new room</span>
            </div>
          </div>
          {/*
        <span className="mapInstructions">
          Click a location to join a conversation.
        </span>
        */}
        </div>
      </BrowserView>
      <MobileView>
        <MobileContainer>
          <Headline>
            Welcome to{" "}
            <a
              href="https://interspace.chat"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              interspace.chat
            </a>
          </Headline>
          <Descripton>
            <p> Click on a room to enter</p>

            <a href="https://portal.interspace.chat">or open a new room</a>
          </Descripton>
          <MobileSelectorContainer>
            <Room roomName="room1" />
            <Room roomName="room2" />
            <Room roomName="room3" />
            <Room roomName="room4" />
            <Room roomName="room5" />
          </MobileSelectorContainer>
          <JitsiInstanceMobile />
        </MobileContainer>
      </MobileView>
    </SpaceSelector>
  );
};

export default Space;
