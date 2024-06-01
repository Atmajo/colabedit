import React from "react";
import { LogIn, Code, Forward, Users, ChevronRight } from "lucide-react";

const Sidebar = ({ session, signOut }) => {
  return (
    <div className="absolute top-0 left-0 w-[350px] h-screen bg-zinc-900 z-50">
      <div>
        <h2 className="scroll-m-20 py-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
          Colab Edit
        </h2>
      </div>
      <div className="flex flex-col py-2 border-b">
        <div className="flex justify-between hover:bg-slate-100/10 p-2">
          <div className="flex gap-2 items-center">
            <Code size={24} />
            <p className="font-semibold">Code</p>
          </div>
          <div>
            <ChevronRight size={24} />
          </div>
        </div>
        <div className="flex justify-between hover:bg-slate-100/10 p-2">
          <div className="flex gap-2 items-center">
            <Forward size={24} />
            <p className="font-semibold">Share</p>
          </div>
          <div>
            <ChevronRight size={24} />
          </div>
        </div>
        <div className="flex justify-between hover:bg-slate-100/10 p-2">
          <div className="flex gap-2 items-center">
            <Users size={24} />
            <p className="font-semibold">Groups</p>
          </div>
          <div>
            <ChevronRight size={24} />
          </div>
        </div>
      </div>
      <div className="py-2 border-b">
        {!session ? (
          <Link href="/login">
            <div className="flex gap-2 items-center hover:bg-slate-100/10 p-2">
              <LogIn size={24} />
              <h2 className="text-lg font-semibold text-center">Log In</h2>
            </div>
          </Link>
        ) : (
          <div
            className="flex gap-2 items-center hover:bg-slate-100/10 p-2 cursor-pointer"
            onClick={signOut}
          >
            <LogIn size={24} />
            <h2 className="text-lg font-semibold text-center">Log Out</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
