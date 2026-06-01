import { AboutContent } from "@/sections/AboutSection/components/AboutContent";

export const AboutSection = () => {
  return (
    <div className="relative caret-transparent flex grow max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <a
        name="Human+Resource+Productivity+Partner%2C+International+%28HRPPI%29"
        className="text-cyan-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:text-cyan-800 hover:outline-0 hover:border-cyan-800"
      ></a>
      <div className="items-center bg-teal-900 box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px] before:accent-auto before:bg-[url('/assets/084932ea58bb34c01f9084a3e2a27d08.jpg')] before:bg-center before:bg-cover before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:opacity-30 before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-helvetica_neue">
        <div className="relative caret-transparent flex grow max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex flex-col grow flex-nowrap justify-start justify-items-start min-h-5 min-w-5 outline-[3px] px-6 md:content-around md:flex-row md:flex-wrap md:justify-end md:justify-items-center">
            <AboutContent />
          </div>
        </div>
      </div>
    </div>
  );
};
