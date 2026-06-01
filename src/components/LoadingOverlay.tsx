export const LoadingOverlay = () => {
  return (
    <div
      role="dialog"
      className="absolute box-border caret-transparent hidden h-full outline-[3px] w-full z-[1500] overflow-hidden left-0 top-0"
    >
      <div className="absolute bg-black box-border caret-transparent h-full opacity-70 outline-[3px] w-full left-0 top-0"></div>
      <div className="absolute box-border caret-transparent h-full outline-[3px] w-full overflow-hidden left-0 top-0">
        <div className="absolute box-border caret-transparent outline-[3px] inset-0">
          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden inset-0"></div>
          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden inset-0"></div>
          <div className="absolute box-border caret-transparent outline-[3px] overflow-hidden inset-0"></div>
        </div>
        <div className="box-border caret-transparent outline-[3px] z-[1550]"></div>
      </div>
    </div>
  );
};
