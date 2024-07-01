import React, { useState } from "react";
import { Files, SquareTerminal, Globe } from "lucide-react";

const Tabs = ({ menu, setMenu, setTab, isLang, setIsLang }) => {
  return (
    <div
      className="flex"
      onClick={() => {
        menu && setMenu(!menu);
      }}
    >
      <div className="flex flex-col h-screen">
        <div className="py-2 px-1 cursor-pointer">
          <Files size={24} onClick={() => setTab("file")} />
        </div>
        <div className="py-2 px-1 cursor-pointer">
          <SquareTerminal size={24} onClick={() => setTab("terminal")} />
        </div>
        <div className="py-2 px-1 cursor-pointer">
          <Globe size={24} onClick={() => setIsLang(!isLang)} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
