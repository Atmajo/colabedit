import React, { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import { Play, Star } from "lucide-react";
import { executeCode } from "@/functions/api";
import { ReloadIcon } from "@radix-ui/react-icons";
import toast, { Toaster } from "react-hot-toast";
import StarterCode from "@/data/starter_code.json";
import * as y from "yjs";
import { WebrtcProvider } from "y-webrtc";
import { MonacoBinding } from "y-monaco";

const SharedScreen = ({ isLang }) => {
  const [value, setValue] = useState(StarterCode.javascript.code);
  const [output, setOutput] = useState("");
  const [language, setLanguage] = useState("javascript");
  const [loading, setLoading] = useState(false);
  const editorRef = useRef(null);

  const notify = () => toast("Some error occurred !");

  const runCode = async () => {
    const sourceCode = editorRef.current.getValue();
    console.log(sourceCode);
    if (!sourceCode) return;
    try {
      const response = await executeCode(language, sourceCode);
      console.log(response?.run);
      setOutput(response?.run?.stdout);
      if (response?.run?.stderr) {
        notify();
      }
    } catch (err) {
      console.error(err);
    }
  };

  const starterCode = () => {
    if (isLang) {
      switch (language) {
        case "javascript":
          setValue(StarterCode.javascript.code);
          break;
        case "typescript":
          setValue(StarterCode.typescript.code);
          break;
        case "python":
          setValue(StarterCode.python.code);
          break;
        case "java":
          setValue(StarterCode.java.code);
          break;
        case "c":
          setValue(StarterCode.c.code);
          break;
      }
    }
  };

  React.useEffect(() => {
    const down = (e) => {
      if (e.key === "r" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setLoading(true);
        runCode();
      }
    };
    document.addEventListener("keydown", down);
    starterCode();
    return () => document.removeEventListener("keydown", down);
  }, [language]);

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();

    //Initialize Yjs
    // let doc;
    // if (y.docs?.has("shared-code-room")) {
    //   doc = y.docs?.get("shared-code-room");
    // } else {
    //   doc = new y.Doc();
    // }
    
    // //Initialize WebrtcProvider
    // const provider = new WebrtcProvider("shared-code-room", doc);
    // const type = doc.getText("monaco");
    
    // //Bind Yjs with Monaco
    // const monacoBinding = new MonacoBinding(
    //   type,
    //   editorRef.current.getModel(),
    //   new Set([editorRef.current]),
    //   provider.awareness
    // );
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
      <div className="absolute bottom-10 right-10">
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
          <div className="absolute top-0 right-2">
            <button onClick={() => setOutput("")}>x</button>
          </div>
        </div>
      )}
      {isLang && (
        <div className="absolute top-10 left-10 bg-gray-800 text-white p-2">
          <select
            className="bg-transparent px-2 outline-none"
            onClick={(e) => setLanguage(e.target.value)}
          >
            <option value="javascript" className="text-black">
              {">> "}
              {"JavaScript"}
            </option>
            <option value="typescript" className="text-black">
              {">> "}
              {"TypeScript"}
            </option>
            <option value="java" className="text-black">
              {">> "}
              {"Java"}
            </option>
            <option value="python" className="text-black">
              {">> "}
              {"Pyhton"}
            </option>
            <option value="c" className="text-black">
              {">> "}
              {"C"}
            </option>
          </select>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default SharedScreen;
