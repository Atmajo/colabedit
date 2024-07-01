"use client";
import { BackgroundBeams } from "@/components/ui/BackgroundBeams";
import React from "react";
import { motion } from "framer-motion";
import "@/components/Hero/hero-text.css";
import CustomButton from "@/components/Button/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  
  return (
    <div className="relative">
      <div className="flex flex-col justify-center items-center h-screen">
        <motion.h1
          initial={{ opacity: 0, z: 100 }}
          whileInView={{ opacity: 1, z: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-2 bg-gradient-to-br mb-40 from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-transparent md:text-7xl scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-5xl"
        >
          <span className="text-7xl">W</span>elcome to <br />
          <span className="text-4xl">Colab Edit{"  "}</span>
          <span className="blinking-underscore"></span>
        </motion.h1>
      </div>
      <div className="absolute flex justify-center items-center h-screen inset-0 w-full">
        <Link href={"/login"}>
          <button
            className={
              "border-2 border-[#063c7a] hover:bg-[#063c7a] rounded-lg py-2 px-3 cursor-pointer mt-40"
            }
            onClick={() => router.push("/login")}
          >
            <span className="text-xl font-semibold">Get Started</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
