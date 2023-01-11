import React from "react";
import Paragraph from "../atoms/Paragraph";

const ParagraphContainer = ({ text }) => {
  return (
    <div className="container ">
      {text.map((data, idx) => {
        return <Paragraph text={data} />;
      })}
    </div>
  );
};

export default ParagraphContainer;
