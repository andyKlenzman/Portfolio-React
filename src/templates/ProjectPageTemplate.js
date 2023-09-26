import React from "react";
import { useParams } from "react-router";
import ProjectFiles from "../assets/files/ProjectFiles";
import IconContainer from "../components/molecules/IconContainer";
import ParagraphContainer from "../components/molecules/ParagraphContainer";
import ProjectBanner from "../components/organisms/ProjectBanner";
import Footer from "../components/organisms/Footer";
import ProjectNavigator from "../components/organisms/ProjectNavigator";
import ReactMarkdown from "react-markdown";

const ProjectPageTemplate = () => {
  const { id } = useParams();

  // returns data from project files
  return ProjectFiles.map((data, idx) => {
    console.log("chec", data.id == id, data.id, id);
    if (data.id == id) {
      console.log("FIRE", data);
      return (
        <div>
          <ProjectBanner
            title={data.title}
            subtitle={data.subtitle}
            link={data.link}
          />
          <div
            className="container-sm"
            style={{ maxWidth: "756px", marginTop: "80px" }}
          >
            <IconContainer selectedIcons={data.icons} />
            <ReactMarkdown source={data.content} />
          </div>
          <ProjectNavigator id={idx} />
          <Footer />
        </div>
      );
    }
  });
};

export default ProjectPageTemplate;
