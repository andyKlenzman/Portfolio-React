import React from "react";
import ProjectCardContainer from "../components/molecules/ProjectCardContainer";
import Banner from "../components/organisms/Banner";
import Introduction from "../components/organisms/Introduction";
import Footer from "../components/organisms/Footer";

const LandingPageTemplate = () => {
  return (
    <div>
      <Banner
        primaryText="Andy Klenzman"
        secondaryText="&lt;Front End Developer />"
        isMainButton
        buttonText="View Portfolio"
      />
      <Introduction />
      <ProjectCardContainer />
      <div style={{ height: "60px" }} />
      <Footer />
    </div>
  );
};

export default LandingPageTemplate;
