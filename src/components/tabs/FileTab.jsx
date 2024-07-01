import React from "react";
import CodeTab from "@/components/tabs/CodeTab";
import { AlignJustify } from "lucide-react";
import SharedScreen from "../SharedCode/SharedScreen";

const FileTab = ({ menu, setMenu, isLang }) => {
  return (
    <div className="">
      <div className="flex flex-row-reverse py-1 px-2 cursor-pointer">
        <AlignJustify size={24} onClick={() => setMenu(!menu)} />
      </div>
      <div className="px-2 py-1">
        <SharedScreen isLang={isLang} />
      </div>
    </div>
  );
};

export default FileTab;
