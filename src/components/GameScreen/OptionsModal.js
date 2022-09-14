import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { ReactComponent as PlayIcon } from "../../assets/play-icon.svg";

const OptionsBox = styled.div`
  background-color: #38b598;
  opacity: 0.95;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 15px;
  padding-bottom: 15px;
  z-index: 2000;
  margin: 0;
  // border-style: solid;
  // border-color: #38b598;
  border: 5px solid #135646;
  border-radius: 0px 25px 25px 25px;
`;

const OptionsList = styled.ul`
  list-style-type: none;
  margin: 25px;
  padding: 0;
`;

const OptionsListItem = styled.li`
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  align-items: center;
  color: #135646;
  cursor: pointer;
  line-height: 1.5;
`;

const OptionsModal = (props) => {
  const hideOptionsModal = () => {
    props.setOptionsModal(!props.optionsModal);
  };

  const history = useHistory();

  const quitGame = () => {
    props.setCount(0);
    props.setBadCount(0);
    history.push("/toycathon21");
  };

  return (
    <OptionsBox>
      <PlayIcon onClick={hideOptionsModal} cursor="pointer" />
      <OptionsList>
        <OptionsListItem onClick={props.showHowToPlayModal} cursor="pointer">
          How to play
        </OptionsListItem>
        <OptionsListItem onClick={props.showFunFactsModal} cursor="pointer">
          Recycling Information
        </OptionsListItem>
        <OptionsListItem onClick={quitGame} cursor="pointer">
          Quit
        </OptionsListItem>
      </OptionsList>
    </OptionsBox>
  );
};

export default OptionsModal;
