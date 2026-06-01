import { FooterCopyright } from "@/sections/Footer/components/FooterCopyright";
import { FooterLogo } from "@/sections/Footer/components/FooterLogo";

export const Footer = () => {
  return (
    <div className="relative items-start caret-transparent flex shrink-0 max-w-full outline-[3px] w-full mx-auto">
      <a
        name="footer"
        className="text-cyan-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:text-cyan-800 hover:outline-0 hover:border-cyan-800"
      ></a>
      <div className="items-center bg-[#144355] box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
        <div className="relative caret-transparent flex grow max-w-[1200px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex flex-col grow flex-nowrap justify-start justify-items-start min-h-5 min-w-5 outline-[3px] px-6 py-5 md:content-around md:flex-row md:flex-wrap md:justify-around md:justify-items-center">
            <div className="relative caret-transparent flex flex-col grow max-w-[285px] min-h-[auto] min-w-[auto] outline-[3px] w-auto mx-0 my-[5px] md:w-3/12 md:mx-[5px]">
              <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
                <FooterCopyright />
                <FooterLogo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
