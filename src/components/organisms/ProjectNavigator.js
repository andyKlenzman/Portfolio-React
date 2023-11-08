import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";
import ProjectFiles from "../../assets/assetManagementFiles/projectFiles";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
const NavButton = styled.a`
  color: #e854e6;
  text-decoration: none;
  margin: 30px;
  cursor: pointer;

  &:hover {
    color: #e854e6;
  }
`;

const ProjectNavigator = ({ id }) => {
  const navigate = useNavigate();
  const currentProjectId = parseInt(id);

  const handleClick = (props) => {
    navigate(`/project/${props}`);
  };

  const length = ProjectFiles.length - 1;
  console.log(currentProjectId);

  const nextProj = () => {
    if (currentProjectId === length) {
      return { id: 0, name: ProjectFiles[0].title };
    } else {
      console.log("here", {
        id: currentProjectId + 1,
        name: ProjectFiles[currentProjectId + 1].title,
      });

      return {
        id: currentProjectId + 1,
        name: ProjectFiles[currentProjectId + 1].title,
      };
    }
  };
  const prevProj = () => {
    if (currentProjectId === 0) {
      console.log("here", { id: length, name: ProjectFiles[length].title });
      return { id: length, name: ProjectFiles[length].title };
    } else {
      return {
        id: currentProjectId - 1,
        name: ProjectFiles[currentProjectId - 1].title,
      };
    }
  };

  const nextProjData = nextProj();
  const prevProjData = prevProj();

  return (
    <Wrapper>
      <NavButton onClick={() => handleClick(nextProjData.id)}>
        &lt;&lt; {nextProjData.name}
      </NavButton>
      <NavButton onClick={() => handleClick(prevProjData.id)}>
        {prevProjData.name} >>
      </NavButton>
    </Wrapper>
  );
};

export default ProjectNavigator;
