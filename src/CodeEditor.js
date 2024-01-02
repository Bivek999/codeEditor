import React, { useState, useEffect } from "react";

import Prism from "prismjs";

import "prismjs/themes/prism.css";

import "prismjs/components/prism-javascript"; // Import additional languages as needed

const CodeEditor = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode || "");

  // Function to transform the code into highlighted HTML

  const createHighlightedHtml = (code) => {
    // Escape HTML and convert newlines to <br> for proper rendering

    const escapedCode = code;

    return Prism.highlight(
      escapedCode,
      Prism.languages.javascript,
      "javascript"
    );
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div style={{ position: "relative" }}>

      <textarea
        value={code}
        onChange={handleCodeChange}
        style={{
          color: "black",
          position: "absolute",

          top: 5,

          left: -8,

          zIndex: 1,

          background: "transparent",

          color: "transparent",

          caretColor: "black",

          width: "100%",

          height: "300px",

          resize: "none",

          border: "none",

          padding: "10px",

          fontFamily: "monospace",

          fontSize: "16px",
        }}
      />
      <pre
        aria-hidden="true"
        style={{
          color: "black",
          position: "absolute",

          top: 0,

          left: 0,

          zIndex: 0,

          pointerEvents: "none",

          fontFamily: "monospace",

          fontSize: "16px",

          whiteSpace: "pre-wrap",

          wordWrap: "break-word",

          overflow: "hidden",
        }}
        dangerouslySetInnerHTML={{ __html: createHighlightedHtml(code) }}
      ></pre>
    </div>
  );
};

export default CodeEditor;
