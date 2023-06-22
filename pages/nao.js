import React from "react";
import TImelineCardRight from "../components/card/TImelineRightCard";
import TimelineCardLeft from "../components/card/TimelineLeftCard";
import WhiteCard from "../components/card/WhiteCard";

const leftTimeline = [
  {
    time: "25 - 30 June 2023",
    title: "Registration",
    desc: "(Early Bird)",
  },
  {
    time: "19 August 2023",
    title: "Preliminary Stage",
    desc: "(Extended)",
  },
  {
    time: "19 August 2023",
    title: "Preliminary",
    desc: "(Zoom and Sidek)",
  },
  {
    time: "24 August 2023",
    title: "TM Quarterfinal",
    desc: "(Zoom)",
  },
  {
    time: "27 August 2023",
    title: "Semifinalist Announcement",
    desc: "(Zoom and Sidek)",
  },
  {
    time: "9 September 2023",
    title: "Semifinal",
    desc: "(Zoom)",
  },
  {
    time: "22 September 2023",
    title: "TM Final",
    desc: "(Offline)",
  },
];
const rightTimeline = [
  {
    time: "1 July - 17 August 2023",
    title: "Registration",
    desc: "(Regular)",
  },
  {
    time: "11 August 2023",
    title: "TM Preliminary",
    desc: "(Zoom)",
  },
  {
    time: "20 August 2023",
    title: "Quarterfinalist Announcement",
    desc: "",
  },
  {
    time: "26 August 2023",
    title: "Quarterfinal",
    desc: "(Zoom and Sidek)",
  },
  {
    time: "8 September 2023",
    title: "TM Semifinal",
    desc: "(Zoom)",
  },
  {
    time: "10 September 2023",
    title: "Finalist Announcement",
    desc: "",
  },
  {
    time: "22 - 23 September 2023",
    title: "Final and Awarding",
    desc: "(Offline)",
  },
];

const nao = () => {
  return (
    <>
      <div className="h-full w-full">
        <section className="block h-[1594px] w-full bg-gradient-to-b from-c-blue to-c-green">
          {/* <div className='py-10 h-fit'>
            <div className="bg-c-white">
              <h1>Container Heading</h1>
            </div>
          </div> */}
          <div className="py-10">
            <div className="bg-c-white">Container Tema</div>
          </div>
        </section>
        <div className="block h-fit w-full bg-c-white">
          <div className="w-full bg-c-white">
          <div className="flex justify-center my-24">
            <h2 className="text-center font-belleza text-mobile-h2 text-c-orange xl:text-h2">
              Timeline
            </h2>
          </div>
            <div className="flex justify-center">
              <div className="flex-col">
                {/* left component */}
                {leftTimeline.map((data, index) => (
                  <div>
                    <div className="">
                      <TimelineCardLeft
                        time={data.time}
                        title={data.title}
                        desc={data.desc}
                      />
                    </div>
                    <div className="">
                      <WhiteCard />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mx-12 w-[60px] bg-gradient-to-b from-c-green to-c-blue"></div>
              <div>
                {/* right component */}
                {leftTimeline.map((data, index) => (
                  <div>
                    <div className="">
                      <WhiteCard />
                    </div>
                    <div className="">
                      <TImelineCardRight
                        time={data.time}
                        title={data.title}
                        desc={data.desc}
                      />
                    </div>
                  </div>
                ))}
                <div className="">
                  <WhiteCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default nao;
