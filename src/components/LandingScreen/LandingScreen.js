import React from "react";
import styled from "styled-components";
import Button from "../Button";
import { useHistory } from "react-router-dom";
import HowToPlayModal from "./HowToPlayModal";
import FunFactsModal from "./FunFacts";
import { spinscale } from "../Keyframes";
import { BlackText } from "../MasterCss";

import EnvironmentSrc from "../../assets/environment.png";
import CloudSrc from "../../assets/clouds.png";

const Container = styled.div`
  background-image: linear-gradient(#03adfc, #8ff8ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  z-index: -10;
`;

const SubTitle = styled.h1`
  background-color: #ff8a00;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  text-align: center;
  line-height: 60px;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  margin-bottom: 0;
  margin-top: 0em;
  position: relative;
  top: 0%;
  z-index: 5;
`;

const TitleBig = styled.h1`
  background-color: #eb7f21;
  font-family: "Poppins", sans-serif;
  text-align: center;
  font-size: 110px;
  font-weight: bold;
  text-shadow: 3px 3px 3px rgba(235, 154, 40, 0.4);
  color: transparent;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  margin-block-start: 0em;
  margin-block-end: 0em;
  z-index: 5;
`;

const Earth = styled.div`
  position: absolute;
  bottom: 0px;
  // left: -150px;
  overflow: hidden;
`;

const ButtonContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100vw;
  justify-content: space-around;
  margin-bottom: 0.5em;
`;

const Clouds = styled.div`
  position: absolute;
  bottom: 20%;
  // top: 0;
  // left: 0;
  // width: 100vw;
  // height: 100vh;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  overflow: hidden;
  animation: ${spinscale} 4s linear infinite alternate;
`;

const LandingScreen = (props) => {
  const history = useHistory();

  // const music = new UIfx(kahootMusic);
  // music.play(0.5);

  const startGame = () => {
    history.push("/game");
  };

  return (
    <Container>
      <div>
        <TitleBig>KaNChAN</TitleBig>
        <SubTitle>
          Ka<BlackText>chra</BlackText> N<BlackText>iyantran</BlackText> Ch
          <BlackText>unauti aur </BlackText>A<BlackText>pshisht </BlackText>N
          <BlackText>iptaan</BlackText>
        </SubTitle>
        <SubTitle>
          <BlackText>एक बार बर्बादी, दो बार भुगतान!</BlackText>
        </SubTitle>
      </div>
      {/* <Octopus>
        <SpaceOctopus />
      </Octopus> */}
      <Clouds>
        {/* <StarsSvg /> */}
        <img src={CloudSrc} alt="Clouds" />
      </Clouds>
      <Earth>
        {/* <EarthSvg /> */}
        <img src={EnvironmentSrc} alt="Environment" />
      </Earth>

      <ButtonContainer>
        {props.howToPlayModal && (
          <HowToPlayModal
            handleClose={props.hideHowToPlayModal}
          ></HowToPlayModal>
        )}
        {props.funFactsModal && (
          <FunFactsModal handleClose={props.hideFunFactsModal}></FunFactsModal>
        )}

        <Button
          type="button"
          handleClick={props.showHowToPlayModal}
          label="Instructions"
        ></Button>
        <Button
          primary
          type="button"
          renderAs="button"
          handleClick={startGame}
          label="Play Now!"
        ></Button>
        <Button
          type="button"
          handleClick={props.showFunFactsModal}
          label="Tips"
        ></Button>
      </ButtonContainer>
    </Container>
  );
};

export default LandingScreen;
