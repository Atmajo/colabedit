import React, { useState } from "react";
import Tabs from "@/components/modules/Tabs";
import FileTab from "../tabs/FileTab";
import WelcomeTab from "../tabs/WelcomeTab";
import TerminalTab from "./TerminalTab";

const CodeTab = ({ menu, setMenu }) => {
  const [tab, setTab] = useState("file");
  const [isLang, setIsLang] = useState(false);
  
  return (
    <div className="flex">
      <Tabs menu={menu} setMenu={setMenu} setTab={setTab} isLang={isLang} setIsLang={setIsLang} />
      {tab === "file" && <FileTab menu={menu} setMenu={setMenu} isLang={isLang} />}
      {tab === "terminal" && <TerminalTab menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default CodeTab;
