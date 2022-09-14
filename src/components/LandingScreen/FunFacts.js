import React from "react";
import styled from "styled-components";
import Button from "../Button";
import {
  PageHeader,
  MessageBox,
  BoxMessage,
  OrangeText,
  CloseCross,
} from "../MasterCss";

import { ReactComponent as Paper } from "../../assets/paper.svg";
import { ReactComponent as Apple } from "../../assets/apple-core.svg";
import ApplePNG from "../../assets/apple.png";
import { ReactComponent as Shirt } from "../../assets/shirt.svg";
import { ReactComponent as Walk } from "../../assets/walk.svg";
import { ReactComponent as DrinksCan } from "../../assets/drinks-can.svg";
import { ReactComponent as PlasticBag } from "../../assets/plastic-bag.svg";
import { ReactComponent as PlasticBottle } from "../../assets/plastic-bottle.svg";
import { ReactComponent as TV } from "../../assets/tv.svg";
import { ReactComponent as Tap } from "../../assets/tap.svg";

const FunFactsBox = styled.div`
  background-image: linear-gradient(#21b2d3, #7abefd);
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

const FactList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;

  li {
    line-height: 1.5em;
    // padding-bottom: 1em;
  }
`;

const Flexy = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const FunFactsModal = ({ handleClose }) => {
  return (
    <FunFactsBox>
      <CloseCross onClick={handleClose} />
      <PageHeader>The five R's of Waste Management</PageHeader>
      <MessageBox primary>
        <BoxMessage>
          {/* <p>
            All the natural resources we use and rubbish we create is hurting
            the planet and the animals who share it with us.
          </p> */}

          <p>If you want to positively impact the environment</p>

          <p>
            We recommend to use the philosophy of{" "}
            <OrangeText>REDUCE, REUSE, REPAIR, ROT</OrangeText> and{" "}
            <OrangeText>RECYCLE</OrangeText>, to prevent our rubbish from going
            into smelly landfills or ending up in the ocean.
          </p>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>REDUCE</OrangeText>
          </p>

          <FactList>
            <p>
              Don’t create waste if you don’t have to.
              <br />A few good examples:{" "}
            </p>

            <li>
              Save up to thousands of bottles and cans per year and use
              refillable bottles instead of buying single use beverage
              containers
            </li>
            <li>
              Copy documents on both sides of the paper instead of single-sided
              copying
            </li>
            <li>
              Use cloth bags at stores and just say NO to paper AND plastic
            </li>
          </FactList>

          <Flexy>
            <Walk width="150px" height="150px" />
            <Tap width="150px" height="150px" />
            <TV width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>REUSE</OrangeText>
          </p>

          <FactList>
            <p>
              Reuse any material or product you can before you give it away or
              recycle it
              <br />A few good examples:
            </p>

            <li>
              Share gently used clothing and toys your children have outgrown
              with friends and family
            </li>
            <li>
              Clothing, toys, and gardening implements can be donated to thrift
              stores such as Savers (HOPE Services), Goodwill Industries, and
              Salvation Army
            </li>
            <li>Give unwanted items to charity</li>
            <li>
              See the Moving Resources page for more details and places to
              donate
            </li>
            <li>
              Reuse scrap paper – you can always use both sides of a sheet of
              paper to draw on!
            </li>
          </FactList>

          <Flexy>
            <PlasticBag width="150px" height="150px" />
            <Shirt width="150px" height="150px" />
            <Paper width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>REPAIR</OrangeText>
          </p>

          <FactList>
            <p>
              Fix stuff before tossing it and buying new
              <br />A few good examples:
            </p>

            <li>Buy a knife sharpener and revive those tired knives</li>
            <li>
              Buy furniture and products that last and fix or re-finish them to
              give them a new look
            </li>
            <li>
              Sharpen gardening implements…a sharpened shovel or hoe makes life
              so much easier
            </li>
          </FactList>

          <Flexy>
            <Tap width="150px" height="150px" />

            <TV width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>ROT</OrangeText>
          </p>

          <FactList>
            <p>
              Kitchen scraps and yard trimmings are too valuable to bury in
              landfills
            </p>

            <li>Compost makes great soil.</li>
            <li>
              In each residential trash cart destined for the landfill,
              approximately 40% of it is food, and it is bulky and heavy
            </li>
            <li>
              Households that compost can save money on monthly disposal fees by
              reducing the size of their trash container to a smaller size!{" "}
            </li>
            <li>
              Children love to compost and can learn so much about science if
              encouraged to participate in this fun process
            </li>
          </FactList>

          <Flexy>
            <Apple width="150px" height="150px" />
            <Paper width="150px" height="150px" />
            <img src={ApplePNG} alt="apple" width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <MessageBox primary>
        <BoxMessage>
          <p>
            <OrangeText>RECYCLE</OrangeText>
          </p>

          <FactList>
            <p>
              Last but not least, if you absolutely cannot do something else
              with your stuff, find a way to recycle it
            </p>
            <li>
              Buy in bulk to eliminate excess packaging that needs to be
              recycled
            </li>
            <li>
              Recycle your bottles and cans at a local buyback center and get
              your deposit of 5 and 10 cents returned on your single use bottles
              and cans
            </li>
            <li>
              Think about what other things can be recycled at your local
              recycling centre, like batteries, ink cartridges and clothes
            </li>
            <li>Use kitchen waste to make compost for the garden</li>
          </FactList>

          <Flexy>
            <PlasticBottle width="150px" height="150px" />
            <DrinksCan width="150px" height="150px" />
            <Apple width="150px" height="150px" />
          </Flexy>
        </BoxMessage>
      </MessageBox>

      <Button primary handleClick={handleClose} label="Close"></Button>
    </FunFactsBox>
  );
};

export default FunFactsModal;
