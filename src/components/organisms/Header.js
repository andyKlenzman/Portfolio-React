import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router";


const Nav = styled.header`
  background-color: #1c1c1c;
  display: flex;
  text-align: left;
  padding: 0px;
  width: 100%;
  height: 27px;
  position: fixed;
  z-index: 5000;
`;

const Text = styled.a`
  text-decoration: none;
  font-weight: medium;
  color: #e854e6;
  font-size: var(--small);
  margin: none;
  text-transform: uppercase;

  margin-left: 4px;

  &:hover {
    text-decoration: none;
    color: #e854e6;
    cursor: pointer;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <Nav className="">
      <Text onClick={() => navigate("/")}>Home /</Text>
      <Text href="mailto: andyklenz@gmail.com" target="_blank">
        Email /{" "}
      </Text>
      <Text
        href="https://www.linkedin.com/in/andy-klenzman-735333149/"
        target="_blank"
      >
        LinkedIn /
      </Text>

      <Text href="https://github.com/andyKlenzman" target="_blank">
        Github /{" "}
      </Text>
      <Text
        href="https://docs.google.com/document/d/116xtnqwOGtKrAWpiBpoc2Q-okcqDJrHa2ecpMvKWoOQ/edit?usp=sharing"
        target="_blank"
      >
        CV{" "}
      </Text>
    </Nav>
  );
};

export default Header;
