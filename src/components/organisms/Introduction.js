import React from "react";
import IconContainer from "../molecules/IconContainer";
import styled from "styled-components";
import Headshot from "../atoms/Headshot";
import { introHeader } from "../../assets/copy/landingPageCopy";
import { AllIconFiles } from "../../assets/assetManagementFiles/techIconFiles";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { general } from "../../assets/assetManagementFiles/mediaFiles";
import styles from "../../styles/markdown-styles.module.css";
import { useEffect, useState } from "react";
const TextHeader = styled.p`
  font-size: var(--smallMedium);
`;
const Wrapper = styled.div`
  padding-top: 60px;
  margin-bottom: 40px;
  display: flex;
`;

const Introduction = () => {
  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(general.intro)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error("Error fetching Markdown file:", error));
  }, []);

  return (
    <Wrapper className="container" id="portfolio">
      <div className="row">
        <Headshot />
        <div className="col-12 col-md-8">
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            linkTarget="_blank"
            children={markdownContent}
            className={styles.reactMarkDown}

            // escapeHtml={false}
          />
          <IconContainer selectedIcons={AllIconFiles} intro />
        </div>
      </div>
    </Wrapper>
  );
};

export default Introduction;
