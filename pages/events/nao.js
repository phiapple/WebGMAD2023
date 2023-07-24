import React from "react";
import TImelineCardRight from "../../components/card/TimelineCard/TImelineRightCard";
import TimelineCardLeft from "../../components/card/TimelineCard/TimelineLeftCard";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import BaseLayout from "../../components/baseLayout";

const leftTimeline = [
  {
    time: "25 - 30 June 2023",
    title: "Early Bird Registration",
    desc: "",
  },
  {
    time: "19 August 2023",
    title: "Preliminary Stage",
    desc: "",
  },
  {
    time: "9 September 2023",
    title: "Semifinal Stage",
    desc: "",
  },
];
const rightTimeline = [
  {
    time: "1 July - 17 August 2023",
    title: "Regular Registration",
    desc: "",
  },
  {
    time: "26 August 2023",
    title: "Quarter Final Stage",
    desc: "",
  },
  {
    time: "22 September 2023",
    title: "Grand Final Stage ",
    desc: "",
  },
];

const Nao = () => {
  return (
    <BaseLayout seoTitle="GMAD • National Accounting Olympiad (NAO)">
      <>
        <div className="h-full w-screen overflow-x-hidden">
          <Navbar fixedBg></Navbar>
          <div className="h-[82px]"></div>
          <section className="relative h-[1594px] w-full bg-gradient-to-b from-c-blue to-c-green ">
            <div className="min-h-screen-no-header container mx-auto grid h-[671px] w-[296px] place-items-center px-0 md:w-[1272px]">
              <div
                className="nd:py-[60px] flex aspect-[16/9] max-w-full flex-col items-center justify-center rounded-[24px] border border-c-orange bg-event-card-nao bg-cover p-[40px] drop-shadow-lg md:px-[120px]"
                data-aos="fade-up"
              >
                <h3
                  className="text-center font-belleza text-2xl text-c-orange md:text-3xl"
                  data-aos="fade-up"
                >
                  NAO
                </h3>
                <h2
                  className="text-center font-belleza text-4xl text-white lg:text-6xl"
                  data-aos="fade-up"
                >
                  National Accounting Olympiad
                </h2>
                <div className="h-6"></div>
                <p
                  className="text-center text-sm text-white md:text-lg"
                  data-aos="fade-up"
                >
                  National Accounting Olympiad (NAO) is one of the biggest and
                  most prestigious Accounting Olympiad in Indonesia. NAO
                  presents a new and interesting olympiad concept, as evidence
                  that the olympiads are fun. This competition will require
                  participants to solve accounting problems that are packaged in
                  fun, exciting, and challenging rounds. NAO 2023 consists of
                  four stages : preliminary, quarter final, semi final, and
                  final. Knowledge, teamwork, and strategy will be the
                  capabilities that are expected to be present to NAO
                  participants.
                </p>
              </div>
            </div>
            <div className=" mx-auto flex justify-center px-[40px]">
              <div
                className="flex aspect-[16/9] h-full max-h-[305px] max-w-[1208px] flex-col items-center justify-center rounded-[24px] border-[2px] border-c-blue p-[40px] drop-shadow-lg md:w-[800px] xl:w-[1208px]"
                data-aos="fade-up"
              >
                <h3
                  className="text-2xl text-c-blue md:text-3xl"
                  data-aos="fade-up"
                >
                  Sub-Theme
                </h3>
                <h2
                  className="mt-4 text-center text-2xl text-white md:text-4xl"
                  data-aos="fade-up"
                >
                  “Environmental Accounting : Integrating Environmental
                  Management Accounting to Develop Sustainable Supply Chain
                  Management”
                </h2>
              </div>
            </div>
            <div className="mx-auto my-10 max-w-[1088px] px-4">
              <p
                className="text-center text-lg text-white md:text-xl"
                data-aos="fade-up"
              >
                Environmental accounting is one of the fascinating topics to
                discuss. NAO 2023 incorporates this sub-theme to help
                participants gain a better understanding of the importance of
                sustainable supply chain management for a better generation.
              </p>
            </div>
          </section>
          <section className="block h-fit w-full bg-c-white">
            <div className="w-full bg-c-white">
              <div className="flex justify-center py-24">
                <h2
                  className="text-center font-belleza text-mobile-h2 text-c-orange xl:text-h2"
                  data-aos="fade-up"
                >
                  Timeline
                </h2>
              </div>
              <div className="flex w-screen justify-center">
                <div className="mt-[24px] flex-col">
                  {/* left component */}
                  {leftTimeline.map((data, index) => (
                    <div key={index}>
                      <div className="">
                        <TimelineCardLeft
                          time={data.time}
                          title={data.title}
                          // desc={data.desc}
                        />
                      </div>
                      <div className="">
                        <div className="block h-40 w-[0px] max-w-[158px] bg-c-white"></div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mx-[15px] w-[30px] min-w-[30px] bg-gradient-to-b from-c-green to-c-blue md:mx-12 md:w-[60px]"></div>
                <div>
                  {/* right component */}
                  {rightTimeline.map((data, index) => (
                    <div>
                      <div className="">
                        <div className="block h-40 w-[0px] max-w-[158px] bg-c-white"></div>
                      </div>
                      <div className="">
                        <TImelineCardRight
                          time={data.time}
                          title={data.title}
                          // desc={data.desc}
                        />
                      </div>
                    </div>
                  ))}
                  <div className="">
                    <div className="block h-40 w-[0px] max-w-[158px] bg-c-white"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="flex h-[261px] w-full flex-col items-center justify-center bg-c-blue md:h-[372px]">
            <h2
              className="font-belleza text-mobile-h2 text-white xl:text-h2"
              data-aos="fade-down"
            >
              So, What Are You Waiting For ?
            </h2>
            <div className="mt-[32px] flex flex-col gap-8 md:mt-[60px] md:flex-row">
              <a
                className="flex items-center justify-center rounded-3xl bg-c-orange px-6 py-2 font-semibold text-c-white transition hover:bg-c-white hover:text-c-orange md:px-12 md:py-4"
                href="https://bit.ly/RegistrationNAO2023"
                data-aos="fade-up"
              >
                Register Now
              </a>
              <a
                className="flex items-center justify-center rounded-3xl border border-c-orange px-6 py-2 font-semibold text-c-white transition hover:bg-c-white hover:text-c-orange md:px-12 md:py-4"
                href="http://bit.ly/BookletNAO23"
                target="_blank"
                data-aos="fade-up"
              >
                Download Booklet
              </a>
            </div>
          </section>
          <section className="">
            <div className=" container mx-auto py-[32px] md:py-[120px]">
              <div className="flex w-full flex-col items-center rounded-3xl bg-c-blue px-[16px] py-[32px] md:flex-row lg:px-[100px] lg:py-[120px]">
                <h2
                  className="font-belleza text-mobile-h2 text-c-white md:w-1/2 xl:text-h2"
                  data-aos="fade-right"
                >
                  Contact Us
                </h2>
                <div
                  className="flex flex-col text-center text-white max-md:mt-12 md:w-full md:flex-row xl:gap-6 xl:text-2xl"
                  data-aos="fade-up"
                >
                  <div className="md:w-1/2">
                    <p className="mb-3 md:mb-6" data-aos="fade-down">
                      Sponsorship
                    </p>
                    <a
                      href="https://wa.me/+6281511115195"
                      className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
                      data-aos="fade-up"
                    >
                      <img
                        className="mr-2 inline 2xl:mr-4"
                        src="/images/icons/WhatsApp.svg"
                        alt="Icon WhatsApp"
                      />
                      081511115195
                    </a>
                    <p
                      className="text-md mt-3 text-c-green md:mt-6"
                      data-aos="fade-up"
                    >
                      Inneke Patricia
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <p className="mb-3 md:mb-6" data-aos="fade-down">
                      Media Partnership
                    </p>
                    <a
                      href="https://wa.me/+6285800318595"
                      className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
                      data-aos="fade-up"
                    >
                      <img
                        className="mr-2 inline 2xl:mr-4"
                        src="/images/icons/WhatsApp.svg"
                        alt="Icon WhatsApp"
                      />
                      085800318595
                    </a>
                    <p
                      className="text-md mt-3 text-c-green md:mt-6"
                      data-aos="fade-up"
                    >
                      Listya Nur Aini
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <Footer fixedBg></Footer>
        </div>
      </>
    </BaseLayout>
  );
};

export default Nao;
