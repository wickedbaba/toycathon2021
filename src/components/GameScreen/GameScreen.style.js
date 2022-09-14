import styled from "styled-components";

const Header = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 15vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  padding-left: 20px;
`;

const LivesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  // margin-left: 20vw;
`;

const ItemText = styled.h2`
  text-align: center;
  font-family: "Poppins", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 77px;
  color: rgba(19, 90, 70, 100);
  text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1000;
  margin: 0;
  // position: fixed;
  // bottom: 2%;
  // width: 100vw;
  animation: blink 1.5s linear infinite;
  @keyframes blink {
    0% {
      opacity: 0.5;
    }
    25% {
      opacity: 0.7;
    }
    50% {
      opacity: 1;
    }
    75% {
      opacity: 0.7;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

const BlackBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 20%;
  &:hover {
    transform: scale(1.2);
  }
`;

const RecycleBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  margin-left: -107px;
  &:hover {
    transform: scale(1.2);
  }
`;

const CompostBinBox = styled.div`
  position: fixed;
  bottom: 50px;
  right: 20%;
  &:hover {
    transform: scale(1.2);
  }
`;

const GameItem = styled.div`
  position: fixed;
  top: 15%;
  left: 50%;
  margin-left: -80px;
`;

const Video = styled.div`
  position: fixed;
  bottom: 15%;
  right: 1%;
  height: 250px;
  width: 360px;
  background: #000;
  opacity: 0.1;
`;

export {
  Header,
  LivesContainer,
  BlackBinBox,
  RecycleBinBox,
  CompostBinBox,
  GameItem,
  ItemText,
  Video,
};
