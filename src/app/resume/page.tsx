import React from 'react';
import { ThemeProvider } from 'next-themes';
import ThemeToggle from '@/components/ThemeToggle';
import Globe from "@/components/magicui/globe";
import TypingAnimation from "@/components/magicui/typing-animation";
import ParticlesDemo from "@/components/magicui/particles";
import WordRotate from "@/components/magicui/word-rotate";
import Image from 'next/image';
import Ripple from "@/components/magicui/ripple";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";


export default function Resume() {
  return (
    <ThemeProvider attribute="class">
      <main>
        {/* Existing content */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
        <TypingAnimation
  className="text-4xl font-bold text-black dark:text-white"
  text="&lt;/&_Priyanshu&apos;" // Replace ' with &apos;
/>
        </div>
        <div className="absolute flex flex-col items-center justify-center h-screen w-full z-10"> 
          <div className="flex justify-start w-full h-full">
            <div className="flex"> 
              <Globe className="ml-4 self-center scale-150" />
            </div>
          </div>
        </div>
        <ParticlesDemo />
        
        <div className="absolute left-1/2 top-1/3 transform -translate-y-1/2 flex items-center justify-center">
          <span className="text-5xl font-bold mr-4 ">Hi, I&aposm a </span>
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
        </div>

      <div className="relative h-screen w-full flex items-center justify-center mt-10">
      <Ripple/>
  <div className="relative z-10 flex items-center justify-center w-full max-w-7xl p-8">
    <div className="absolute top-0 w-full text-lg ext-white-1200 dark:text-white-400 flex flex-col items-center">
      <VelocityScroll
        text="About Me"
        default_velocity={5}
        className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
      />
    </div>
    <div className="relative">
      <div className="relative z-10 h-96 w-96 rounded-full overflow-hidden border-4 border-white shadow-lg">
        <Image
          src="/20.jpg" // Use the uploaded image
          alt="Priyanshu"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
    </div>
  </div>
</div>
      </main>
    </ThemeProvider>
  );
}