import { keyframes } from "styled-components";

const spinscale = keyframes`
    0% {
      transform: 
      rotate(-2deg) 
      scale(0.9)
    }
    35% {
        transform: 
        rotate(2deg) 
        scale(0.84) 
    }
    70% {
        transform: 
        rotate(4deg) 
        scale(0.9)
    }
    100% {
        transform: 
        rotate(6deg) 
        scale(0.84) 
    }
`;
const rotatey = keyframes`
    100% {
      transform: rotate(360deg);
    }
  `;
export { spinscale, rotatey };
