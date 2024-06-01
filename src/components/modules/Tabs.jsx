import React, { useState } from "react";
import { Files, SquareTerminal, Globe } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";

const Tabs = ({ menu, setMenu, setTab }) => {
  const [ language, setLanguage ] = React.useState({});
  
  return (
    <div
      className="flex"
      onClick={() => {
        menu && setMenu(!menu);
      }}
    >
      <div className="flex flex-col h-screen">
        <div className="py-2 px-1">
          <Files size={24} onClick={() => setTab("file")} />
        </div>
        <div className="py-2 px-1">
          <SquareTerminal size={24} onClick={() => setTab("terminal")} />
        </div>
        <div>
          {
            <Drawer>
              <DrawerTrigger className="py-2 px-1">
                <Globe size={24} />
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Select Language :</DrawerTitle>
                  <DrawerDescription>
                    <Select>
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Language" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          value="javascript"
                          onClick={(e) =>
                            setLanguage({ "javascript": e.target.value })
                          }
                        >
                          Javascript
                        </SelectItem>
                        <SelectItem
                          value="typescript"
                          onClick={(e) =>
                            setLanguage({ "typescript": e.target.value })
                          }
                        >
                          Typescript
                        </SelectItem>
                        <SelectItem
                          value="python"
                          onClick={(e) =>
                            setLanguage({ "python": e.target.value })
                          }
                        >
                          Python
                        </SelectItem>
                        <SelectItem
                          value="java"
                          onClick={(e) =>
                            setLanguage({ "java": e.target.value })
                          }
                        >
                          Java
                        </SelectItem>
                        <SelectItem
                          value="c"
                          onClick={(e) =>
                            setLanguage({ "c": e.target.value })
                          }
                        >
                          C
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          }
        </div>
      </div>
    </div>
  );
};

export default Tabs;
