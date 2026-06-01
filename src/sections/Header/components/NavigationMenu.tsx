export const NavigationMenu = () => {
  return (
    <div className="relative caret-transparent block basis-8 flex-col shrink-0 h-[29px] max-h-[29px] max-w-8 min-h-[29px] min-w-8 outline-[3px] text-right my-[5px] md:flex md:basis-auto md:h-auto md:max-h-none md:max-w-full md:min-h-6 md:min-w-16">
      <a className="bg-[#144355] box-border caret-transparent inline-block outline-[3px] text-center text-nowrap align-middle border p-1.5 border-solid border-white md:hidden hover:outline-0">
        <span className="text-[1px] bg-white box-border caret-transparent block h-[3px] leading-[1px] outline-[3px] text-nowrap w-[18px]"></span>
        <span className="text-[1px] bg-white box-border caret-transparent block h-[3px] leading-[1px] outline-[3px] text-nowrap w-[18px] mt-[3px]"></span>
        <span className="text-[1px] bg-white box-border caret-transparent block h-[3px] leading-[1px] outline-[3px] text-nowrap w-[18px] mt-[3px]"></span>
      </a>
      <ul className="bg-[#144355] box-border caret-transparent hidden float-left list-none min-h-0 min-w-0 outline-[3px] w-full bg-[position:0%_top] pl-0 top-[350px] md:bg-transparent md:block md:min-h-[auto] md:min-w-[auto] md:bg-[position:100%_top] md:top-[213px]">
        <li className="relative box-border caret-transparent inline-block outline-[3px]">
          <a
            href=""
            className="text-white text-[15px] font-bold bg-no-repeat box-border caret-transparent block leading-[17px] outline-[3px] bg-[position:left_50%] p-2.5 border-b-white border-b font-roboto hover:outline-0"
          >
            Home
          </a>
        </li>
        <li className="relative box-border caret-transparent inline-block outline-[3px]">
          <a
            href="Services/"
            className="text-white text-[15px] bg-no-repeat box-border caret-transparent block leading-[17px] outline-[3px] bg-[position:50%_top] p-2.5 font-roboto hover:outline-0"
          >
            Services
          </a>
        </li>
        <li className="relative box-border caret-transparent inline-block outline-[3px]">
          <a
            href="Contacts/"
            className="text-white text-[15px] bg-no-repeat box-border caret-transparent block leading-[17px] outline-[3px] bg-[position:50%_top] p-2.5 font-roboto hover:outline-0"
          >
            Contacts
          </a>
        </li>
      </ul>
      <div className="box-border caret-transparent min-h-0 min-w-0 outline-[3px] md:min-h-[auto] md:min-w-[auto] before:accent-auto before:box-border before:caret-transparent before:text-zinc-800 before:table before:text-sm before:not-italic before:normal-nums before:font-normal before:tracking-[normal] before:leading-5 before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:text-right before:no-underline before:indent-[0px] before:normal-case before:visible before:border-separate before:font-helvetica_neue after:accent-auto after:box-border after:caret-transparent after:clear-both after:text-zinc-800 after:table after:text-sm after:not-italic after:normal-nums after:font-normal after:tracking-[normal] after:leading-5 after:list-outside after:list-disc after:outline-[3px] after:pointer-events-auto after:text-right after:no-underline after:indent-[0px] after:normal-case after:visible after:border-separate after:font-helvetica_neue"></div>
    </div>
  );
};
