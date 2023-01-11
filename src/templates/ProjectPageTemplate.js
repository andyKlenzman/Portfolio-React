import React from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";
import ProjectFiles, { TinyProjectFiles } from "../assets/files/ProjectFiles";
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

const TextHeader = styled.p`
  font-size: var(--smallMedium);
`;
const ProjectPageTemplate = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  return ProjectFiles.map((data, idx) => {
    if (data.isMenu && data.id === id) {
      return (
        <div>
          <ProjectBanner
            primaryText={data.primaryText}
            secondaryText={data.secondaryText}
            projectLink={data.projectLink}
            isButton={false}
            backgroundColor="white"
          />
          {TinyProjectFiles.map((data, idx) => {
            return (
              <div
                className="container-sm"
                style={{ maxWidth: "756px", marginTop: "40px" }}
              >
                <div className="" style={{display:"flex", alignItems: "center", justifyContent:"center"}}>
                  <MainTextBody text="Snapchat Lens" />
                  <IconContainer selectedIcons={data.icons} />
                </div>
                <Paragraph text={"dsa"} />
              </div>
            );
          })}

          <div
            className="container-sm"
            style={{ maxWidth: "756px", marginTop: "40px" }}
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
    if (data.id === id) {
      console.log(data);
      return (
        <div>
          <ProjectBanner
            primaryText={data.primaryText}
            secondaryText={data.secondaryText}
            projectLink={data.projectLink}
          />
          <div
            className="container-sm"
            style={{ maxWidth: "756px", marginTop: "40px" }}
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
