import styled, { css } from "styled-components";
import { ReactComponent as Cross } from "../assets/x-button.svg";
import Background from "../assets/bg.png";

const Container = styled.div`
  background-image: url(${Background});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
  width: 100vw;
  font-family: Roboto;
  overflow: hidden;
`;

const PageHeader = styled.h1`
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 79px;
  text-align: center;
  color: #ff8a00;
  -webkit-text-stroke: 2px black;
  text-transform: uppercase;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin-block-end: 0px;
  display: inline;
`;

const MessageBox = styled.div`
  width: 75vw;
  min-height: 40vh;
  border-radius: 25px;
  background-color: #a2d2ff;
  color: white;
  padding: 35px;
  margin: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  ${(props) =>
    props.primary &&
    css`
      width: auto;
    `}

  ${(props) =>
    props.results &&
    css`
      justify-content: center;
    `}
`;

const BadgeBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

const BoxMessage = styled.p`
  font-family: Roboto;
  font-weight: 600;
  font-size: 36px;
  line-height: 50px;
  align-items: center;
  color: #000000;
  padding-left: 0.5em;
  margin: 0;
`;

const ModalHeader = styled.h2`
  text-align: center;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 50px;
  line-height: 77px;
  color: black;
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 0;
  width: 80vw;
  padding-top: 0.5em;
  z-index: 5;
`;

const MessageImage = styled.img`
  width: 200px;
  height: 200px;

  ${(props) =>
    props.bin &&
    css`
      width: 100px;
      height: 100px;
    `}
`;

const OrangeText = styled.p`
  color: #e45858;
  display: inline;
`;

const BlackText = styled.p`
  color: #000000;
  display: inline;
`;
const CloseCross = styled(Cross)`
  left: 1%;
  top: 2.04%;
  position: fixed;
  cursor: pointer;
`;

export {
  Container,
  PageHeader,
  MessageBox,
  BadgeBox,
  BoxMessage,
  ModalHeader,
  MessageImage,
  OrangeText,
  BlackText,
  CloseCross,
};
