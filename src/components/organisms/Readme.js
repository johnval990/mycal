import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const README_PATH =
  "https://raw.githubusercontent.com/johnval990/mycal/master/README.md";

function Readme() {
  const [md, setMd] = useState(null);

  useEffect(() => {
    fetch(README_PATH, { mode: "cors" })
      .then((response) => response.text())
      .then((response) => {
        setMd(`${response}`);
      });
  }, []);

  return (
    <div className="readme">
      <ReactMarkdown rehypePlugins={[rehypeRaw]} children={md} />
    </div>
  );
}

export default Readme;
