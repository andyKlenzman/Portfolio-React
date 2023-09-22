import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import ProjectFiles from "../assets/files/ProjectFiles";
import IconContainer from "../components/molecules/IconContainer";
import ParagraphContainer from "../components/molecules/ParagraphContainer";
import ProjectBanner from "../components/organisms/ProjectBanner";
import { TshareIcons } from "../assets/files/IconFiles";
import YoutubeVideo from "../components/atoms/YoutubeVideo";
import Footer from "../components/organisms/Footer";
import ProjectNavigator from "../components/organisms/ProjectNavigator";
import MainText from "../components/atoms/MainText";
import styled from "styled-components";
import Paragraph from "../components/atoms/Paragraph";
import MainTextBody from "../components/atoms/MainTextBody";
import ProjectCardContainer from "../components/molecules/ProjectCardContainer";

const TextHeader = styled.p`
  font-size: var(--smallMedium);
`;
const ProjectPageTemplate = () => {
  const navigate = useNavigate();

  const { id } = useParams();


  // returns data from project files
  return ProjectFiles.map((data, idx) => {
    if (data.isMenu && data.id === id) {
      return (
        <div>
          <ProjectBanner
            primaryText={data.primaryText}
            secondaryText={data.secondaryText}
            projectLink={data.projectLink}
            isButton={data.isButton}
          />

    
          <ProjectNavigator
            prevProjectText={data.prevProjectText}
            nextProjectText={data.nextProjectText}
            prevProjectId={data.prevProjectId}
            nextProjectId={data.nextProjectId}
          />
          <Footer />
        </div>
      );
    }
    if (data.id === id) {
      console.log(data);
      return (
        <div>
          <ProjectBanner
            primaryText={data.primaryText}
            secondaryText={data.secondaryText}
            projectLink={data.projectLink}
            isButton={data.isButton}
          />
          <div
            className="container-sm"
            style={{ maxWidth: "756px", marginTop: "80px" }}
          >
            <IconContainer selectedIcons={data.icons} style={{}} />
            {data.isVideo && (
              <div style={{ marginBottom: "30px" }}>
                <YoutubeVideo youtubeId={data.youtubeId} />
              </div>
            )}
            <ParagraphContainer text={data.bodyText} />
          </div>
          <ProjectNavigator
            prevProjectText={data.prevProjectText}
            nextProjectText={data.nextProjectText}
            prevProjectId={data.prevProjectId}
            nextProjectId={data.nextProjectId}
          />
          <Footer />
        </div>
      );
    }
  });
};

export default ProjectPageTemplate;
