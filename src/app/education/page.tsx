import { NeonGradientCard } from "@/components/magicui/neon-gradient-card";
import { ThemeProvider } from 'next-themes';
import BoxReveal from "@/components/magicui/box-reveal";
import Meteors from "@/components/magicui/meteors";

export default function Education() {
  return (
    <ThemeProvider attribute="class">
      <div className="flex h-screen w-screen">
      <Meteors number={30} />
        {/* Left side with larger vertical EDUCATION text */}
        <div className="flex flex-col justify-center items-center w-1/6 h-full bg-background text-7xl font-bold">
          <BoxReveal boxColor={"#5046e6"} duration={0.5}>
            <div className="leading-none">
              {"EDUCATION".split("").map((letter, index) => (
                <div key={index}>{letter}</div>
              ))}
            </div>
          </BoxReveal>
        </div>

        {/* Right side with two Neon Gradient Cards */}
        <div className="flex flex-col justify-center items-center w-5/6 h-full">
          <div className="flex flex-col justify-center items-center h-full">
            <NeonGradientCard className="max-w-sm h-[250px] items-center justify-center text-center mb-20">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-5xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                Bachelor of Technology in Computer Science
              </span>
              <div className="absolute bottom-0 right-2 text-white-500 text-xl font-italic" >
            CGPA: 8.5/10
            </div>
            </NeonGradientCard>
            <NeonGradientCard className="max-w-sm h-[250px] items-center justify-center text-center">
              <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-6xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
                CBSE~10th & 12th Standard 
              </span>
              <div className="absolute bottom-0 right-2 text-white-500 text-xl">
                Percentage : 95%
              </div>
            </NeonGradientCard>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}