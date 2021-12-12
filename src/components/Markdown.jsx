import React from "react";
import MDEditor from "@uiw/react-md-editor";

const mkdStr = `# Markdown Editor for [React](https://facebook.github.io/react/)

**Hello world!!!**

`;

const Markdown = () => {
  const [value, setValue] = React.useState(mkdStr);
  return (
    <div className="container">
      <MDEditor height={200} value={value} onChange={setValue} />
      <div style={{ padding: "50px 0 0 0" }} />
      <MDEditor.Markdown source={value} linkTarget="_blank" />
    </div>
  );
};

export default Markdown;
