import { HeaderBrand } from "@/sections/Header/components/HeaderBrand";
import { NavigationMenu } from "@/sections/Header/components/NavigationMenu";
import { CartSummary } from "@/sections/Header/components/CartSummary";

export const Header = () => {
  return (
    <div className="relative items-start caret-transparent flex shrink-0 max-w-full outline-[3px] w-full mx-auto">
      <a
        name="header"
        className="text-cyan-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:text-cyan-800 hover:outline-0 hover:border-cyan-800"
      ></a>
      <div className="items-center bg-[#144355] box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
        <HeaderBrand />
        <div className="relative caret-transparent flex shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex flex-col grow flex-nowrap justify-start justify-items-start min-h-5 min-w-5 outline-[3px] md:content-center md:flex-row md:flex-wrap md:justify-around md:justify-items-center">
            <NavigationMenu />
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};
