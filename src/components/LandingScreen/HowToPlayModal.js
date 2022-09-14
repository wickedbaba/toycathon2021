import React from "react";
import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart-lives.svg";
import Trophy from "../../assets/trophy.png";
import RecycleBin from "../../assets/blue-bin.png";
import BlackBin from "../../assets/grey-bin.png";
import CompostBin from "../../assets/green-bin.png";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  BadgeBox,
  OrangeText,
  CloseCross,
} from "../MasterCss";

const HowToPlayBox = styled.div`
  background-image: linear-gradient(#023e8a, #00b4d8);
  padding: 2em;
  position: fixed;
  width: 90vw;
  height: 85vh;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: scroll;
  display: block;
  z-index: 3000;
  border-radius: 25px;
  border: 2px solid #08345c;
  filter: drop-shadow(4px 4px 4px #08345c);
  text-align: center;
`;

const CenterChildren = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const HowToPlayModal = ({ handleClose }) => {
  return (
    <HowToPlayBox>
      <CloseCross onClick={handleClose} />
      <PageHeader>Instructions</PageHeader>
      <CenterChildren>
        <MessageBox>
          <BadgeBox>
            <img src={RecycleBin} alt="Recycle Bin" />
            <BoxMessage>
              Drag and drop items that<OrangeText> CAN BE RECYCLED</OrangeText>{" "}
              into this bin
            </BoxMessage>
          </BadgeBox>
        </MessageBox>
        <MessageBox>
          <BadgeBox>
            <img src={CompostBin} alt="Compost Bin" />
            <BoxMessage>
              Drag and drop items that are
              <OrangeText> ORGANIC WASTE</OrangeText> into this bin
            </BoxMessage>
          </BadgeBox>
        </MessageBox>
        <MessageBox>
          <BadgeBox>
            <img src={BlackBin} alt="Black Bin" />
            <BoxMessage>
              Drag and drop items that
              <OrangeText> CANNOT BE RECYCLED</OrangeText> into this bin
            </BoxMessage>
          </BadgeBox>
        </MessageBox>
        <MessageBox>
          <BadgeBox>
            <Heart width="20%" />
            <BoxMessage>
              These are your <OrangeText>LIVES</OrangeText>. If you put the item
              in the wrong bin you lose a life
            </BoxMessage>
          </BadgeBox>
        </MessageBox>
        <MessageBox>
          <BadgeBox>
            <img src={Trophy} alt="trophy" />
            <BoxMessage>
              If you put an item in the right bin you get a{" "}
              <OrangeText>TROPHY</OrangeText>!
            </BoxMessage>
          </BadgeBox>
        </MessageBox>
      </CenterChildren>

      <Button primary handleClick={handleClose} label="Close"></Button>
    </HowToPlayBox>
  );
};

export default HowToPlayModal;
