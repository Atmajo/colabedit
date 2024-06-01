"use client";
import { useState, useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/modules/Sidebar";
import CodeTab from "@/components/tabs/CodeTab";

export default function Home() {
  const [menu, setMenu] = useState(false);
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login");
    }
  }, [session]);
  
  return (
    <div className="flex overflow-hidden">
      {menu && <Sidebar session={session} signOut={signOut} />}
      <CodeTab menu={menu} setMenu={setMenu} />
    </div>
  );
}
