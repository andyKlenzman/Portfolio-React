import {
  TshareIcons,
  DwIcons,
  LightbenderIcons,
  lightbikeIcons,
} from "./techIconFiles";
import { dw, lightbender, bikelight, tshare } from "./mediaFiles.js";

let ProjectFiles = [
  {
    id: 0,
    mainImg: bikelight.mainImg,
    title: "Bike Light",
    subtitle: "Bike Safe. Bike Fun. Bike Light.",
    icons: lightbikeIcons,
    link: "https://github.com/andyKlenzman/Bike-Light",
    content: bikelight.content,
  },
  {
    id: 1,
    mainImg: dw.mainImg,
    title: "Democracy Works",
    subtitle: "Empowering millions to vote with Google",
    icons: DwIcons,
    link: "https://github.com/andyKlenzman/VIP-Data-Scripts",
    content: dw.content,
  },
  {
    id: 2,
    mainImg: tshare.mainImg,
    title: "Tshare",
    subtitle: "A shirt that breaks the ice for you",
    icons: TshareIcons,
    link: "https://tshare.family/",
    content: tshare.content,
  },
  {
    id: 3,
    mainImg: lightbender.mainImg,
    title: "Lightbender",
    subtitle: "A Lightshow controlled by computer vision",
    icons: LightbenderIcons,
    link: "https://github.com/andyKlenzman/Lightbender",
    content: lightbender.content,
  },
  
];

export default ProjectFiles;
