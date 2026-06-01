export const CartSummary = () => {
  return (
    <div className="relative caret-transparent flex flex-col shrink-0 justify-center max-w-full min-h-[auto] min-w-[auto] outline-[3px] text-center w-full overflow-hidden md:w-auto">
      <div className="box-border caret-transparent min-h-[auto] min-w-[auto] outline-[3px]">
        <img
          src="/assets/4f7d0995acc7fd9973dd872d4ea2faab.png"
          alt="CART"
          title="CART"
          className="box-border caret-transparent inline-block max-w-16 outline-[3px] w-[30px] mx-1.5"
        />
        <div className="box-border caret-transparent inline-block outline-[3px] align-middle">
          <span className="text-white text-[15px] box-border caret-transparent inline-block leading-[normal] outline-[3px] text-left align-middle font-roboto">
            <span className="box-border caret-transparent outline-[3px]">
              CART
            </span>
             
            <span className="box-border caret-transparent inline-block outline-[3px]">
              (0)
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};
