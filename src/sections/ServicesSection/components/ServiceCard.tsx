export type ServiceCardProps = {
  title?: string;
  heading?: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  anchorName?: string;
  showOuterWrapper?: string;
  showImage?: string;
  showContent?: string;
  showAnchor?: string;
  spacerElement?: string;
  spacerClassName?: string;
};

export const ServiceCard = (props: ServiceCardProps) => {
  const showOuterWrapper = props.showOuterWrapper !== "false";
  const showImage = props.showImage !== "false";
  const showContent = props.showContent !== "false";
  const showAnchor = props.showAnchor === "true";
  const title =
    props.title ?? "Human Resource Productivity Partner, International (HRPPI)";
  const imageAlt = props.imageAlt ?? title;
  const spacerClassName =
    props.spacerClassName ??
    "text-black text-sm box-border caret-transparent leading-[22px] outline-[3px] break-words text-justify font-roboto md:text-xl md:leading-[31px]";

  const imageContent = showImage ? (
    <div
      title={title}
      className="relative caret-transparent max-w-full outline-[3px] box-border flex shrink-0 min-h-[auto] min-w-[auto] w-[70%] my-5"
    >
      {showAnchor ? (
        <a
          name={props.anchorName}
          className="text-cyan-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:text-cyan-800 hover:outline-0 hover:border-cyan-800"
        ></a>
      ) : null}
      <div className="relative box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
        <img
          alt={imageAlt}
          src={props.imageUrl}
          className="box-border caret-transparent outline-[3px] w-full rounded-tr-[150px] rounded-b-[5px] rounded-l-[5px]"
        />
      </div>
    </div>
  ) : null;

  const textContent = showContent ? (
    <div className="relative caret-transparent grow leading-[normal] max-w-full min-h-6 min-w-6 outline-[3px] break-words mb-5">
      <h3 className="text-zinc-800 text-xl box-border caret-transparent leading-6 outline-[3px] break-words text-center font-roboto md:text-[25px] md:leading-[30px]">
        <strong className="text-xl font-bold box-border caret-transparent leading-6 outline-[3px] break-words md:text-[25px] md:leading-[30px]">
          {props.heading}
        </strong>
      </h3>
      {props.spacerElement === "h3" ? (
        <h3 className="text-zinc-800 text-xl box-border caret-transparent leading-6 outline-[3px] break-words text-justify font-roboto md:text-[25px] md:leading-[30px]">
           
        </h3>
      ) : (
        <p className={spacerClassName}> </p>
      )}
      <p className="text-black text-sm box-border caret-transparent leading-[22px] outline-[3px] break-words text-justify font-roboto md:text-xl md:leading-[31px]">
        {props.description}
      </p>
    </div>
  ) : null;

  if (!showOuterWrapper) {
    return imageContent;
  }

  return (
    <div className="relative caret-transparent flex shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full mx-[5px]">
      <div className="box-border caret-transparent grow outline-[3px] items-center flex flex-col justify-start justify-items-start min-h-5 min-w-5">
        {imageContent}
        {textContent}
      </div>
    </div>
  );
};
