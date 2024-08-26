// pages/index.js
import React from 'react';
import { ThemeProvider } from 'next-themes';
import Globe from "@/components/magicui/globe";
import TypingAnimation from "@/components/magicui/typing-animation";
import ParticlesDemo from "@/components/magicui/particles";
import WordRotate from "@/components/magicui/word-rotate";
import Link from 'next/link';
import ShinyButton from "@/components/magicui/shiny-button";


export default function LandingPage() {
  return (
    <ThemeProvider attribute="class">
      <main className="relative w-full h-screen flex bg-black text-white">
        {/* Particles Background */}
        <ParticlesDemo className="absolute inset-0 z-0" />

        {/* Top Center Text */}
        <div className="absolute top-10 w-full flex justify-center">
          <TypingAnimation
            className="text-4xl font-bold text-black dark:text-white"
            text="&lt;/&gt;_Priyanshu"
          />
        </div>

        {/* Container for Globe and Text */}
        <div className="relative flex w-full h-full">
          {/* Globe on the Left Side */}
          <div className="absolute flex flex-col items-center justify-center h-screen w-full z-1"> 
          <div className="flex justify-start w-full h-full">
            <div className="flex"> 
              <Globe className="ml-4 self-center scale-150" />
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/3 transform -translate-y-1/2 flex items-center justify-center">
          <span className="text-5xl font-bold mr-4 ">Hi, I&apos;m a </span>
          <WordRotate className="text-6xl font-bold text-white"
          words={[' Front-end Developer', ' Forex Trader', ' Freelancer']}/>
        </div>
        <div className="absolute left-1/2 top-2/4 transform -translate-y-1/2 text-lg ext-white-1200 dark:text-white-400 flex flex-col items-start">
          <span className="text-4xl font-bold mt-20 mr-4 ">Passionate about crafting visually </span>
          <span className="text-4xl font-bold mt-3 mr-4 ">appealing web experiences and leveraging 
          </span>
          <span className="text-4xl font-bold mt-3 mr-4 ">data-driven strategies in the financial markets. 
          </span>
          <span className="text-4xl font-bold mt-3 mr-4 ">I combine creativity with analytical thinking 
          </span>
          <span className="text-4xl font-bold mt-3 mr-4 ">to bring innovative solutions to life. 
          </span>
          <div className='mt-3'>
            <Link href="/about" className="text-xl text-red-400 hover:underline z-">
              <ShinyButton text="Learn More about me " className="z-200" />
            </Link>
          </div>
        </div>
       
          
        </div>
      </main>
    </ThemeProvider>
  );
}
