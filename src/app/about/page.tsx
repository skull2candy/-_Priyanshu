import React from 'react';
import { ThemeProvider } from 'next-themes';
import Image from 'next/image';
import Ripple from "@/components/magicui/ripple";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ShinyButton from '@/components/magicui/shiny-button';
import Link from 'next/link';

export default function Resume() {
  return (
    <ThemeProvider attribute="class">
      <main className="relative w-full h-screen flex flex-col items-center justify-center bg-black text-white">

        {/* About Me Text at the Top */}
        <div className="absolute top-10 w-full flex flex-col items-center text-center">
          <VelocityScroll
            text="About Me"
            default_velocity={5}
            className="font-display text-5xl font-extrabold tracking-[-0.02em] text-black dark:text-white md:text-8xl md:leading-[6rem]"
          />
        </div>
        
        {/* Ripple and Image with Text Placement */}
        <div className="relative flex items-center justify-center w-full h-full mt-24">
          <Ripple />
          <div className="relative z-10 flex items-center justify-center w-full max-w-7xl">
            {/* Left Text */}
            <div className="w-1/2 flex justify-end pr-8">
              <p className="text-3xl font-extrabold text-left">
                Hello! I&apos;m Priyanshu Lochab, a 22-year-old <span className="text-red-400">tech enthusiast</span> and <span className="text-red-400">financial markets expert</span> based in Delhi, India.
              </p>
            </div>
            
            {/* Image */}
            <div className="relative z-10 h-[500px] w-[500px] rounded-full overflow-hidden border-8 border-white shadow-2xl mx-8">
              <Image
                src="/20.jpg" 
                alt="Priyanshu"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>
            
            {/* Right Text */}
            <div className="w-1/2 flex justify-start pl-8">
              <p className="text-3xl font-extrabold text-right">
                With a strong foundation in <span className="text-red-400">Computer Science Engineering</span> (BTech CSE) from my academic journey,
              </p>
            </div>
          </div>
        
          <div className="absolute bottom-24 w-full flex justify-center">
  <Link href="/">
    <ShinyButton 
      text="</>HOME" 
      className="text-xl text-red-400 hover:underline z-200 mx-2" 
    />
  </Link>
  <Link href='/skills'>
    <ShinyButton 
      text="</>Skills" 
      className="text-xl text-red-400 hover:underline z-200 mx-2" 
    />
  </Link>
  <Link href='/education'>
    <ShinyButton 
      text="</>EDUCATION" 
      className="text-xl text-red-400 hover:underline z-200 mx-2" 
    />
  </Link>
  <Link href='/contact_me'>
    <ShinyButton 
      text="</>CONTACT ME" 
      className="text-xl text-red-400 hover:underline z-200 mx-2" 
    />
  </Link>
</div>

          {/* Below Text */}
          <div className="absolute bottom-10 w-full flex justify-center">
            <p className="text-3xl font-extrabold text-center px-8">
              I&apos;ve developed a diverse skill set that bridges the gap between <span className="text-red-400">technology</span> and <span className="text-red-400">finance</span>.
            </p>
          </div>

        </div>

      </main>
    </ThemeProvider>
  );
}
