import { IntroImageCard } from "@/sections/IntroSection/components/IntroImageCard";
import { IntroText } from "@/sections/IntroSection/components/IntroText";

export const IntroSection = () => {
  return (
    <div className="relative caret-transparent flex grow max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="items-center bg-white box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px] px-6">
        <div className="relative caret-transparent flex grow max-w-[1200px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex flex-col grow flex-nowrap justify-start justify-items-start min-h-5 min-w-5 outline-[3px] md:content-around md:flex-row md:flex-wrap md:justify-around md:justify-items-center">
            <IntroImageCard />
            <IntroText />
          </div>
        </div>
      </div>
    </div>
  );
};
