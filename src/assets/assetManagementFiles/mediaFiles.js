import dwMainImg from "../imgs/dw/dw.png";
// import lightbenderMainImg from "../imgs/lightbender/smallLightbenderFace.png";
import tshareMainImg from "../imgs/tshare/tshare.png";
import lightbenderMainImg from "../imgs/lightbender/lightbender.gif";
import headshot from "../imgs/general/myFace.jpg";
import lightbikeMainImg from "../imgs/bikelight/bikelightProjectImage.png"

import bikelightMarkdown from "../markdown/lightbike.md";
import dwMarkdown from "../markdown/dw.md";
import introMarkdown from "../markdown/intro.md";
import lightbenderMarkdown from "../markdown/lightbender.md";
import tshareMarkdown from "../markdown/tshare.md";


// exporting files for project card in main page
const dw = {
  mainImg: dwMainImg,
  content: dwMarkdown

};

const lightbender = {
  mainImg: lightbenderMainImg,
  content:lightbenderMarkdown
};
const tshare = {
  mainImg: tshareMainImg,
  content: tshareMarkdown
};
const bikelight = {
  mainImg: lightbikeMainImg,
  content: bikelightMarkdown,
};
const general = {
  headshot: headshot,
  intro: introMarkdown
};

export { dw, lightbender, tshare, bikelight, general };
