import GlassBottle from "../images/wine-bottle.svg";
import AppleCore from "../images/apple-core.svg";
import CardboardBox from "../images/cardboard-box.svg";
import CoffeeCup from "../images/coffee-cup2.svg";
import DrinksCan from "../images/drinks-can.svg";
import MilkCarton from "../images/milk-carton.svg";
import Newspaper from "../images/newspaper.svg";
import Papers from "../images/paper.svg";
import PlasticBag from "../images/plastic-bag.svg";
import PlasticBottle from "../images/plastic-bottle.svg";
import Shirt from "../images/shirt.svg";
import SweetWrapper from "../images/sweet-wrapper.svg";
import TeaBag from "../images/tea-bag.svg";
import TinCan from "../images/tin-can.svg";

const items = [
  {
    name: "Glass Bottles & Jars",
    src: GlassBottle,
    bin: "recycling",
    fact: "As much as 384 pounds of mining waste is created when new glass is made using raw materials",
  },
  {
    name: "Coffee Cups",
    src: CoffeeCup,
    bin: "general waste",
    // fact: "You can sometimes take coffee cups back to the shop for recycling!",
    fact: "16 billion paper cups are used for coffee every single year, which leads to 6.5 million trees cut down, 4 billion gallons of water going to waste",
  },
  {
    name: "Newspapers",
    src: Newspaper,
    bin: "recycling",
    fact: "Today, approximately 50% of the world’s industrial logging goes into making paper.!",
  },
  {
    name: "Tea Bags",
    src: TeaBag,
    bin: "food compost",
    fact: "Dried tea bags are the ideal fire-starters for a bonfire night or camping!",
  },
  {
    name: "Apple Cores",
    src: AppleCore,
    bin: "food compost",
    fact: "Uneaten food items can be used for composting which can be food for animals!",
  },
  {
    name: "Cardboard Boxes",
    src: CardboardBox,
    bin: "recycling",
    fact: "Flatten cardboard boxes before they go in the bin!",
  },
  {
    name: "Spray Cans",
    src: DrinksCan,
    bin: "recycling",
    fact: "The steel used to make aerosol cans contains about 25 percent recycled metal",
  },
  {
    name: "Milk Cartons",
    src: MilkCarton,
    bin: "recycling",
    fact: "It can take as much as five years for milk cartons to undergo complete decomposition.",
  },
  {
    name: "Papers",
    src: Papers,
    bin: "recycling",
    fact: "70% of Office Waste Consists of Paper",
  },
  {
    name: "Plastic Bags",
    src: PlasticBag,
    bin: "general waste",
    fact: "Indians use 100 billion plastic bags a year, which require 12 million barrels of oil to manufacture",
  },
  {
    name: "Plastic Bottles",
    src: PlasticBottle,
    bin: "recycling",
    fact: "90% of the cost of bottled water is the bottle itself",
  },
  {
    name: "Clothes",
    src: Shirt,
    bin: "general waste",
    fact: "You might not be able to recycle clothes at home, but you can probably donate them to needy ones!",
  },
  {
    name: "Sweet Wrappers",
    src: SweetWrapper,
    bin: "general waste",
    fact: "There are five trillion pieces of plastic in our oceans enough to circle the Earth over 400 times.",
  },
  {
    name: "Tin Cans",
    src: TinCan,
    bin: "recycling",
    fact: "Canned food can last for three years!",
  },
];

export default items;
