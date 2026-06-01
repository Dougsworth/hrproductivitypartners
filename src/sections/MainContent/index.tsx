import { HeroSection } from "@/sections/MainContent/components/HeroSection";
import { IntroSection } from "@/sections/IntroSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { AboutSection } from "@/sections/AboutSection";

export const MainContent = () => {
  return (
    <div className="relative items-start caret-transparent flex grow max-w-full min-h-[524px] outline-[3px] w-full mx-auto md:min-h-[686px]">
      <a
        name="main"
        className="text-cyan-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:text-cyan-800 hover:outline-0 hover:border-cyan-800"
      ></a>
      <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <AboutSection />
      </div>
    </div>
  );
};
