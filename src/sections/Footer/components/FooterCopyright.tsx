export const FooterCopyright = () => {
  return (
    <div className="relative caret-transparent grow leading-[normal] max-w-full min-h-[auto] min-w-[auto] outline-[3px] break-words mb-[15px]">
      <p className="text-white text-xs box-border caret-transparent leading-3 outline-[3px] break-words text-left font-roboto md:text-[17px] md:leading-[17px]">
        © 2022{" "}
        <a
          href=""
          className="text-red-500 text-xs font-bold box-border caret-transparent leading-3 outline-[3px] break-words underline md:text-[17px] md:leading-[17px] hover:outline-0 hover:no-underline"
        >
          hrproductivitypartner.com
        </a>
      </p>
    </div>
  );
};
