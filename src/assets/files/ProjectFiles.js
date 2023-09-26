import {
  TshareIcons,
  DwIcons,
  LightbenderIcons,
  LightbenderMobileIcons,
} from "./IconFiles";
import ImgFiles from "./ImgFiles.js";

let ProjectFiles = [
  {
    id: 0,
    mainImg: ImgFiles.dw.main,
    title: "Democracy Works",
    subtitle: "Python scripts empowering millions of Americans to vote",
    icons: DwIcons,
    link: "https://github.com/andyKlenzman/VIP-Data-Scripts",
  },
  {
    id: 1,
    mainImg: ImgFiles.tshare.main,
    title: "Tshare",
    subtitle: "An app that helps you break the ice",
    icons: TshareIcons,
    projectLink: "https://tshare.family/",

    nextProjectId: "lightbender",
    prevProjectId: "dw",
    nextProjectText: "Lightbender",
    prevProjectText: "Democracy Works",
    isMenu: false,
    isButton: true,
  },
  {
    id: 2,
    mainImg: ImgFiles.lightbender.main,
    primaryText: "Lightbender",
    isVideo: true,
    youtubeId: "HnL_CLqbVvE",
    secondaryText: "Python system for lightshows controlled by computer vision",
    icons: LightbenderIcons,
    projectLink: "https://github.com/andyKlenzman/Lightbender",

    nextProjectId: "lightbendermobile",
    prevProjectId: "tshare",
    nextProjectText: "Lightbender Mobile",
    prevProjectText: "Tshare",
    isMenu: false,
    isButton: true,
  },
  {
    id: 3,
    mainImg: ImgFiles.lightbendermobile.main,
    primaryText: "Lightbender Mobile",
    secondaryText: "Mobile app for Lightbenders",
    isVideo: false,
    youtubeId: "",
    icons: LightbenderMobileIcons,
    projectLink: "https://github.com/andyKlenzman/Lightbender_Mobile",

    nextProjectId: "dw",
    prevProjectId: "lightbender",
    nextProjectText: "Democracy Works",
    prevProjectText: "Lightbender",
    isMenu: false,
    isButton: true,
  },
];

export default ProjectFiles;
