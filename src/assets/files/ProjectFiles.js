import {
  TshareIcons,
  DwIcons,
  LightbenderIcons,
  LightbenderMobileIcons,
} from "./IconFiles";
import projectMediaFiles from "./ProjectMediaFiles.js";

let ProjectFiles = [
  {
    id: 0,
    mainImg: projectMediaFiles.dw.mainImg,
    title: "Democracy Works",
    subtitle: "Python scripts empowering millions of Americans to vote",
    icons: DwIcons,
    link: "https://github.com/andyKlenzman/VIP-Data-Scripts",
    content: "",
  },
  {
    id: 1,
    mainImg: projectMediaFiles.tshare.mainImg,
    title: "Tshare",
    subtitle: "A shirt that breaks the ice for you",
    icons: TshareIcons,
    link: "https://tshare.family/",
    content: "",
  },
  {
    id: 2,
    mainImg: projectMediaFiles.lightbender.mainImg,
    title: "Lightbender",
    subtitle: "A Lightshow controlled by computer vision",
    icons: LightbenderIcons,
    link: "https://github.com/andyKlenzman/Lightbender",
    content: "",
  },
  {
    id: 3,
    mainImg: projectMediaFiles.bikelight.mainImg,
    title: "Bike Light",
    subtitle: "Bike Safe. Bike Fun. Bike Light",
    icons: LightbenderMobileIcons,
    link: "https://github.com/andyKlenzman/Lightbender_Mobile",
    content: projectMediaFiles.bikelight.content,
  },
];

export default ProjectFiles;
