import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";

const Button = styled.button`
  height: 50px;
  color: white;
  width: 150px;
  text-align: center;
  margin-top: 15px;
  align-self: center;
  background-color: var(--primaryColor);
  border: none;
  transition: 0.7s;

  &:hover {
    background-color: transparent;
    border: white solid 2px;
  }
`;

const Text = styled.a`
  font-size: var(--small);
  text-transform: uppercase;
  margin-top: 12px;
  color: white;
  text-decoration: none;
  &:hover {
    color: white;

  }
`;

const BigButton = ({ text, projectLink }) => {
  const navigate = useNavigate();
  return (
    <Button>
      <Text href={projectLink} target="_blank">{text}</Text>
    </Button>
  );
};

export default BigButton;
