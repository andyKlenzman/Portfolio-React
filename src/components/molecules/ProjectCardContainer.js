import React from "react";
import ProjectCard from "../atoms/ProjectCard";
import ProjectFiles from "../../assets/files/ProjectFiles.js";
import styled from "styled-components";

const Wrapper = styled.div`
  align-items: center;
`;


const ProjectCardContainer = ({projectFiles}) => {
  return (
    <Wrapper className="container">
      <div className="row  g-4">
    
          {projectFiles.map((data, idx) => {
            return (
              <ProjectCard
                id={data.id}
                primaryText={data.primaryText}
                secondaryText={data.secondaryText}
                img={data.mainImg}
                key={idx}
              />
            );
          })}
    
      </div>
    </Wrapper>
  );
};

export default ProjectCardContainer;
