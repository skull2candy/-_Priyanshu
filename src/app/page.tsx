'use client';

import RetroGrid from "@/components/magicui/retro-grid";
import Meteors from "@/components/magicui/meteors";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ThemeProvider } from 'next-themes';
import '@/app/globals.css';
import { useState, useEffect } from 'react';

import NumberTicker from "@/components/magicui/number-ticker";

const NumberTickerDemo = () => {
  const [count, setCount] = useState(0);

  const handleComplete = () => {
    window.location.href = '/resume'; // navigate to the Resume page
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
      if (count >= 100) {
        clearInterval(intervalId);
        handleComplete();
      }
    }, 500); // adjust the interval time as needed
  }, [count]);

  return (
    <p className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white">
      <NumberTicker value={100} />
    </p>
  );
};

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <main className="flex h-screen w-screen overflow-y-hidden">
        <div className="flex-1 md:flex-2 lg:flex-3 xl:flex-4">
          <RetroGrid className="md:w-1/2 lg:w-2/3 xl:w-3/4" />
        </div>
        <Meteors number={30} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:top-2/3 lg:top-3/4 xl:top-4/5">
          <NumberTickerDemo />
        </div>
        <BorderBeam />
      </main>
    </ThemeProvider>
  );
}

