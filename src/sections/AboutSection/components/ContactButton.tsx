export const ContactButton = () => {
  return (
    <div className="relative caret-transparent flex grow max-w-full min-h-[50px] min-w-[180px] outline-[3px] w-4/5">
      <a
        href="Contacts/"
        className="relative text-cyan-600 text-base content-center items-center bg-sky-500 box-border caret-transparent flex grow justify-center justify-items-center leading-[22px] min-h-[auto] min-w-[auto] outline-[3px] text-center w-full border-sky-500 overflow-hidden border-2 border-solid font-josefin_sans before:accent-auto before:box-border before:caret-transparent before:text-cyan-600 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-full before:tracking-[normal] before:leading-[22px] before:list-outside before:list-disc before:outline-[3px] before:pointer-events-auto before:absolute before:text-center before:no-underline before:indent-[0px] before:normal-case before:visible before:w-full before:border-separate before:left-0 before:top-0 before:font-josefin_sans hover:text-cyan-800 hover:bg-transparent"
      >
        <span className="relative text-white font-bold box-border caret-transparent block grow min-h-[auto] min-w-[auto] outline-[3px] align-middle">
          Contacts
        </span>
      </a>
    </div>
  );
};
