import { Header } from "@/sections/Header";
import { MainContent } from "@/sections/MainContent";
import { Footer } from "@/sections/Footer";
import { LoadingOverlay } from "@/components/LoadingOverlay";

export const App = () => {
  return (
    <body className="relative text-zinc-800 text-sm not-italic normal-nums font-normal accent-auto box-border caret-transparent block tracking-[normal] leading-5 list-outside list-disc outline-[3px] pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-helvetica_neue before:accent-auto before:bg-top before:bg-repeat-x before:box-border before:caret-transparent before:text-zinc-800 before:block before:text-sm before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-start before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:z-[-1] before:border-separate before:left-0 before:top-0 before:font-helvetica_neue">
      <div className="relative box-border caret-transparent flex-col outline-[3px] w-full">
        <div className="absolute bg-repeat-x box-border caret-transparent min-h-full outline-[3px] w-full left-0 top-0"></div>
        <Header />
        <MainContent />
        <Footer />
      </div>
      <LoadingOverlay />
    </body>
  );
};
