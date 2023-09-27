import dw from "../imgs/dw/dw.png";
import lightbender from "../imgs/lightbender/smallLightbenderFace.png";
import tshare from "../imgs/tshare/tshare.png";
import lightbendermobile from "../imgs/lightbender/lightbender.gif";
import bikelightContent from "./projectMarkdown/lightbike.md";

// exporting files for project card in main page
let projectMediaFiles = {
  dw: {
    mainImg: dw,
  },
  lightbender: {
    mainImg: lightbender,
  },
  tshare: {
    mainImg: tshare,
    
  },
  bikelight: {
    mainImg: lightbendermobile,
    content: bikelightContent,
  },
};

export default projectMediaFiles;
