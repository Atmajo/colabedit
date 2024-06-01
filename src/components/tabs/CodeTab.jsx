import React, { useState } from "react";
import Tabs from "@/components/modules/Tabs";
import FileTab from "../tabs/FileTab";
import WelcomeTab from "../tabs/WelcomeTab";
import TerminalTab from "./TerminalTab";

const CodeTab = ({ menu, setMenu }) => {
  const [tab, setTab] = useState("file");
  
  return (
    <div className="flex">
      <Tabs menu={menu} setMenu={setMenu} setTab={setTab} />
      {tab === "file" && <FileTab menu={menu} setMenu={setMenu} />}
      {tab === "terminal" && <TerminalTab menu={menu} setMenu={setMenu} />}
    </div>
  );
};

export default CodeTab;
