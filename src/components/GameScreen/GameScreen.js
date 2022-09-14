import React from "react";
import ProgressScore from "./ProgressScore";
import SuccessModal from "./SuccessModal";
import FailModal from "./FailModal";
import OptionsModal from "./OptionsModal";
import items from "../../utils/itemData";
import Item from "./Item";
import LivesScore from "./LivesScore";
import { Container } from "../MasterCss";
import HowToPlayModal from "../LandingScreen/HowToPlayModal";
import FunFactsModal from "../LandingScreen/FunFacts";

import * as SC from "./GameScreen.style";

import { DragDropContainer, DropTarget } from "react-drag-drop-container";

import { ReactComponent as PauseIcon } from "../../assets/pause-icon.svg";
import RecycleBin from "../../assets/blue-bin.png";
import BlackBin from "../../assets/grey-bin.png";
import CompostBin from "../../assets/green-bin.png";

import HandGesture from "./HandTracking";

const GameScreen = (props) => {
  const [currentItem, setCurrentItem] = React.useState(
    items[Math.floor(Math.random() * items.length)]
  );
  const [itemVisibility, setItemVisibility] = React.useState(true);
  const [successModal, setSuccessModal] = React.useState(false);
  const [failModal, setFailModal] = React.useState(false);
  const [optionsModal, setOptionsModal] = React.useState(false);

  // HandGesture();

  const dropReaction = (currentBin) => {
    setItemVisibility(!itemVisibility);

    if (currentItem.bin === currentBin) {
      setSuccessModal(!successModal);
      props.setCount(props.count + 1);
    } else {
      setFailModal(!failModal);
      props.setBadCount(props.badCount + 1);
    }
  };

  const showOptionsModal = () => {
    setOptionsModal(!optionsModal);
  };

  return (
    <Container key="rendering">
      {successModal && (
        <SuccessModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          successModal={successModal}
          setSuccessModal={setSuccessModal}
        />
      )}
      {failModal && (
        <FailModal
          item={currentItem}
          setCurrentItem={setCurrentItem}
          itemVisibility={itemVisibility}
          setItemVisibility={setItemVisibility}
          failModal={failModal}
          setFailModal={setFailModal}
          badCount={props.badCount}
        />
      )}
      {optionsModal && (
        <OptionsModal
          optionsModal={optionsModal}
          setOptionsModal={setOptionsModal}
          setCount={props.setCount}
          setBadCount={props.setBadCount}
          funFactsModal={props.funFactsModal}
          setFunFactsModal={props.setFunFactsModal}
          howToPlayModal={props.howToPlayModal}
          setHowToPlayModal={props.setHowToPlayModal}
          showFunFactsModal={props.showFunFactsModal}
          hideFunFactsModal={props.hideFunFactsModal}
          hideHowToPlayModal={props.hideHowToPlayModal}
          showHowToPlayModal={props.showHowToPlayModal}
        />
      )}

      {props.howToPlayModal && (
        <HowToPlayModal handleClose={props.hideHowToPlayModal}></HowToPlayModal>
      )}
      {props.funFactsModal && (
        <FunFactsModal handleClose={props.hideFunFactsModal}></FunFactsModal>
      )}

      <SC.Header>
        <PauseIcon onClick={showOptionsModal} cursor="pointer" />
        <SC.ItemText>{currentItem.name}</SC.ItemText>
        <SC.LivesContainer>
          <LivesScore
            badCount={props.badCount}
            successModal={successModal}
            failModal={failModal}
          />
        </SC.LivesContainer>
        <ProgressScore gameScreen count={props.count} />
      </SC.Header>

      <SC.GameItem>
        <DragDropContainer targetKey="bins">
          {itemVisibility && (
            <Item
              item={currentItem}
              itemVisibility={itemVisibility}
              setItemVisibility={setItemVisibility}
            />
          )}
        </DragDropContainer>
      </SC.GameItem>

      <SC.BlackBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("general waste");
          }}
        >
          <img src={BlackBin} alt="Black Bin" />
        </DropTarget>
      </SC.BlackBinBox>

      <SC.RecycleBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("recycling");
          }}
        >
          <img src={RecycleBin} alt="Recycle Bin" />
        </DropTarget>
      </SC.RecycleBinBox>

      <SC.CompostBinBox>
        <DropTarget
          targetKey="bins"
          onHit={() => {
            dropReaction("food compost");
          }}
        >
          <img src={CompostBin} alt="Compost Bin" />
        </DropTarget>
      </SC.CompostBinBox>
      {/* <SC.Video id="debugger-holder"></SC.Video> */}
    </Container>
  );
};

export default GameScreen;
