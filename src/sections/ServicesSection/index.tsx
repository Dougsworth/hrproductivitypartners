import { ServiceCard } from "@/sections/ServicesSection/components/ServiceCard";

export const ServicesSection = () => {
  return (
    <div className="relative caret-transparent flex grow max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full">
      <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px] px-6">
        <div className="relative caret-transparent flex grow max-w-[1200px] min-h-[auto] min-w-[auto] outline-[3px] w-full">
          <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px] py-5">
            <div className="relative caret-transparent grow leading-[normal] max-w-full min-h-6 min-w-6 outline-[3px] break-words mt-[5px] mb-5">
              <h5 className="text-emerald-500 text-[22px] font-bold box-border caret-transparent leading-[26px] outline-[3px] break-words text-center uppercase font-roboto md:text-[28px] md:leading-8">
                <span className="text-[22px] box-border caret-transparent leading-[26px] outline-[3px] break-words md:text-[28px] md:leading-8">
                  Services
                </span>
              </h5>
            </div>
            <div className="relative caret-transparent flex grow max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-full my-[5px]">
              <div className="items-center box-border caret-transparent flex flex-col grow flex-nowrap justify-start justify-items-start min-h-5 min-w-5 outline-[3px] md:content-around md:items-start md:flex-row md:flex-wrap md:justify-around md:justify-items-center">
                <div className="relative caret-transparent flex flex-col shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-auto mx-0 md:w-[45%] md:mx-[5px]">
                  <a
                    name="Human+Resource+Productivity+Partner%2C+International+%28HRPPI%29"
                    className="text-cyan-600 box-border caret-transparent block min-h-[auto] min-w-[auto] outline-[3px] hover:text-cyan-800 hover:outline-0 hover:border-cyan-800"
                  ></a>
                  <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
                    <ServiceCard
                      heading="Human Resource Systems Design, Sourcing and Implementation"
                      description="Human resource management systems, learning management systems and performance management systems."
                      imageUrl="/assets/4cfb5c35398df23c99491f75f37c1c47_378x252.jpg"
                      anchorName="Human+Resource+Productivity+Partner%2C+International+%28HRPPI%29"
                      showAnchor="true"
                      spacerElement="h3"
                    />
                    <ServiceCard
                      heading="Learning and Talent Development"
                      description="Learning, re-learning, upskilling, career pathing and performance management. People Leader Development - leader communication, change leadership, leading organization culture, leading through crisis, a successful leader band."
                      imageUrl="/assets/2c555ad8375e98a3229a69057a87b7d4_378x252.jpg"
                    />
                  </div>
                </div>
                <div className="relative caret-transparent flex flex-col shrink-0 max-w-[559px] min-h-[auto] min-w-[auto] outline-[3px] w-auto mx-0 md:w-6/12 md:mx-[5px]">
                  <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
                    <ServiceCard
                      title="Human Resource Productivity Partner, International (HRPPI)"
                      heading="Organizational Change"
                      description="Change policy design and implementation, change management and sustainment."
                      imageUrl="/assets/c563674674b60f43b50fe92173e4c7c9_392x261.jpg"
                      imageAlt="Human Resource Productivity Partner, International (HRPPI)"
                    />
                    <div
                      title="Human Resource Productivity Partner, International (HRPPI)"
                      className="relative box-border caret-transparent flex shrink-0 max-w-full min-h-[auto] min-w-[auto] outline-[3px] w-[70%] my-5"
                    >
                      <div className="relative box-border caret-transparent grow min-h-[auto] min-w-[auto] outline-[3px] overflow-hidden">
                        <img
                          alt="Human Resource Productivity Partner, International (HRPPI)"
                          src="/assets/305fca0a91a3332e30d5d66832dd1957_392x261.jpg"
                          className="box-border caret-transparent outline-[3px] w-full rounded-tr-[150px] rounded-b-[5px] rounded-l-[5px]"
                        />
                      </div>
                    </div>
                    <ServiceCard
                      heading="Employee engagement"
                      description="Employee conflict resolution management engagement and employment branding events and activities. employee communication Internal communication policy design and implementation, Internal communication channel design and maintenance."
                      showImage="false"
                      spacerClassName="box-border caret-transparent outline-[3px] break-words"
                    />
                  </div>
                </div>
                <div className="relative caret-transparent flex flex-col shrink-0 max-w-[559px] min-h-[auto] min-w-[auto] outline-[3px] w-auto mx-0 md:w-6/12 md:mx-[5px]">
                  <div className="items-center box-border caret-transparent flex flex-col grow justify-start justify-items-start min-h-5 min-w-5 outline-[3px]">
                    <ServiceCard
                      imageUrl="/assets/2a474ae2cafb1b462795c8138c8a50c4_392x261.jpg"
                      showOuterWrapper="false"
                    />
                    <div className="relative caret-transparent grow leading-[normal] max-w-full min-h-6 min-w-6 outline-[3px] break-words">
                      <h3 className="text-zinc-800 text-xl box-border caret-transparent leading-6 outline-[3px] break-words text-center font-roboto md:text-[25px] md:leading-[30px]">
                        <strong className="text-xl font-bold box-border caret-transparent leading-6 outline-[3px] break-words md:text-[25px] md:leading-[30px]">
                          Organizational Culture
                        </strong>
                      </h3>
                      <p className="text-black text-sm box-border caret-transparent leading-[22px] outline-[3px] break-words text-left font-roboto md:text-xl md:leading-[31px]">
                         
                      </p>
                      <p className="text-black text-sm box-border caret-transparent leading-[22px] outline-[3px] break-words text-left font-roboto md:text-xl md:leading-[31px]">
                        Design, entrenchment and sustainment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
