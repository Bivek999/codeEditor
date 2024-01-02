// CodeEditor.js
import React, { useState, useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/'

const CodeEditor = ({ initialCode }) => {
  const [code, setCode] = useState(initialCode || '');

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const handleCodeChange = (event) => {
    const newCode = event.target.value;
    setCode(newCode);
    Prism.highlightAll();
  };

  return (
    <div>
      <h1>React Code Editor</h1>
      <textarea
        value={code}
        onChange={handleCodeChange}
        rows="10"
        cols="50"
      ></textarea>
    </div>
  );
};

export default CodeEditor;
