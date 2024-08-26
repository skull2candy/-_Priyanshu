"use client"
import { cn } from "@/lib/utils";
import React from 'react';
import { ThemeProvider } from 'next-themes';
import HyperText from "@/components/magicui/hyper-text";
import { motion } from 'framer-motion';
import ShineBorder from "@/components/magicui/shine-border";
import DotPattern from "@/components/magicui/dot-pattern";

import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];


  
export default function Skills() {
  return (
    <ThemeProvider attribute="class">
      <ShineBorder
        className="relative w-full h-screen flex items-center justify-center bg-black text-white"
        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
      >
        
        <main className="relative w-screen h-screen flex items-center justify-center bg-black text-white">
      
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
        )}
      />
    
   <div className="absolute top-5 items-center justify-center">
  <HyperText
    className="text-7xl font-extrabold text-white"
    text="&lt;/&gt;SKILLS"
  />
</div>  

    
         
    <div className="top-1/2 left-1/2 max-w-[50rem] items-center justify-center overflow-hidden  bg-transparent px-30 pb-30 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
        </main>
       
      </ShineBorder>
    </ThemeProvider>
  );
}