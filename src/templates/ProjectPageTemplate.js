import React from "react";
import { useParams } from "react-router";
import ProjectFiles from "../assets/assetManagementFiles/projectFiles";
import IconContainer from "../components/molecules/IconContainer";
import ProjectBanner from "../components/organisms/ProjectBanner";
import Footer from "../components/organisms/Footer";
import ProjectNavigator from "../components/organisms/ProjectNavigator";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import styles from "../styles/markdown-styles.module.css";
import rehypeRaw from "rehype-raw";

const renderers = {
  image: (alt, src, title) => (
    <img alt={alt} src={src} title={title} style={{ maxWidth: 75 }} />
  ),
};

const ProjectPageTemplate = () => {
  const { id } = useParams();

  // returns data from project files
  const projectData = ProjectFiles.find((data) => data.id == id);
  const { title, subtitle, link, icons, content } = projectData;

  const [markdownContent, setMarkdownContent] = useState("");

  useEffect(() => {
    fetch(content)
      .then((response) => response.text())
      .then((data) => setMarkdownContent(data))
      .catch((error) => console.error("Error fetching Markdown file:", error));
  }, [id]);

  if (!projectData) {
    // Handle the case where no matching project is found
    return <div>Project not found</div>;
  }

  return (
    <div>
      <ProjectBanner title={title} subtitle={subtitle} link={link} />
      <div
        className="container-sm"
        style={{ maxWidth: "756px", marginTop: "80px" }}
      >
        <IconContainer selectedIcons={icons} />
        <div className={styles.reactMarkDown}>
          <ReactMarkdown
            rehypePlugins={[rehypeRaw]}
            linkTarget="_blank"
            children={markdownContent}
            className={styles.reactMarkDown}
            renderers={renderers}
          />
        </div>
      </div>
      <ProjectNavigator id={id} />
      <Footer />
    </div>
  );
};

export default ProjectPageTemplate;
