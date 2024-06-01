import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Play } from "lucide-react";
import { executeCode } from "@/functions/api";

const SharedScreen = () => {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [languageBox, setLanguageBox] = useState(false);
  const editorRef = useRef(null);

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    console.log(sourceCode);
    if (!sourceCode) return;
    try {
      const response = await executeCode("javascript", sourceCode);
      console.log(response?.run);
      setOutput(response?.run?.stdout);
    } catch (err) {
      console.error(err);
    }
  };

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "r" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        runCode();
      }
      if (e.key === "l" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setLanguageBox(!languageBox);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };

  return (
    <div>
      <Editor
        height="95vh"
        width="97vw"
        theme="vs-dark"
        value={value}
        onChange={(value) => setValue(value)}
        onMount={onMount}
      />
      <div className="absolute top-10 right-5">
        <button onClick={runCode}>
          <Play size={24} />
          <span>Run</span>
        </button>
      </div>
      {output.length > 0 && (
        <div className="absolute flex justify-between bottom-0 left-0 right-0 bg-gray-800 text-white p-2">
          <pre>
            {">> "}
            {output}
          </pre>
          <button onClick={() => setOutput("")}>x</button>
        </div>
      )}
    </div>
  );
};

export default SharedScreen;
