export const IntroImageCard = () => {
  return (
    <div className="relative caret-transparent flex flex-col grow max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-auto mx-0 my-2.5 md:w-3/12 md:mx-2 md:my-5">
      <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
        <div
          title="Human Resource Productivity Partner, International (HRPPI)"
          className="relative box-border caret-transparent flex grow max-h-[469px] max-w-[469px] min-h-60 min-w-60 outline-[3px] w-full"
        >
          <div className="relative box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
            <img
              alt="Human Resource Productivity Partner, International (HRPPI)"
              src="/assets/806f85e0f8efb465de628ea5f301eef1_469x313.jpg"
              className="box-border caret-transparent outline-[3px] w-full"
            />
          </div>
        </div>
        <div className="relative caret-transparent flex grow max-w-full min-h-[50px] min-w-[180px] outline-[3px] w-3/5 mt-5">
          <a
            href="Services/"
            className="relative text-cyan-600 text-base content-center items-center bg-sky-500 box-border caret-transparent flex grow justify-center justify-items-center leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full border-sky-500 overflow-hidden border-2 border-solid font-josefin_sans before:accent-auto before:box-border before:caret-transparent before:text-cyan-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[22px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-josefin_sans hover:text-cyan-800 hover:bg-transparent"
          >
            <span className="relative text-white font-bold box-border caret-transparent block grow min-h-[auto] min-w-[auto] outline-[3px] align-middle">
              Our services
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};
