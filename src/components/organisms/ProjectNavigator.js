import React from "react";
import styled from "styled-components";
import { Navigate, useNavigate } from "react-router";

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

const ProjectNavigator = ({
  prevProjectId,
  nextProjectId,
  prevProjectText,
  nextProjectText,
}) => {
  const navigate = useNavigate();

  const handleClick = (props) => {
    navigate(`/project/${props}`);
  };
  return (
    <Wrapper>
      <NavButton
        onClick={() => handleClick(prevProjectId)}
      >
        &lt;&lt; {prevProjectText}
      </NavButton>
      <NavButton onClick={() => handleClick(nextProjectId)}>{nextProjectText} >></NavButton>
    </Wrapper>
  );
};

export default ProjectNavigator;

{
  /* <div class="prj-footer-container">
          <a class="prj-arrow" href="lightbender.html"">&#60;&#60;Previous Project</a>
          <a class="prj-arrow" href="tshare.html">Next Project>></a>
        </div> */
}
