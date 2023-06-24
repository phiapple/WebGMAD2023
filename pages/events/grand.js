import BaseLayout from '../../components/baseLayout';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function Grand() {
  return (
    <BaseLayout seoTitle="GMAD • GMAD Awarding and Networking Day (GRAND)">
      <div>
        <Navbar fixedBg></Navbar>
        {/* for navbar placeholder */}
        <div className="h-[82px]"></div>

        {/* content */}
        <div className="min-h-screen-no-header w-full bg-c-blue text-white">
          <div className="min-h-screen-no-header container mx-auto grid place-items-center bg-c-blue">
            <div
              className="nd:py-[60px] flex aspect-[16/9] max-h-[56vh] max-w-full flex-col items-center justify-center rounded-[24px] border border-c-orange bg-event-card-grand bg-cover p-[40px] drop-shadow-lg md:px-[120px]"
              data-aos="fade-up"
            >
              <h3
                className="text-center font-belleza text-2xl text-c-orange md:text-3xl"
                data-aos="fade-up"
              >
                GRAND
              </h3>
              <h2
                className="text-center font-belleza text-4xl md:text-6xl"
                data-aos="fade-up"
              >
                GMAD Awarding and Networking Day
              </h2>

              <div className="mt-4">
                <p
                  className="text-center text-sm font-semibold md:text-lg"
                  data-aos="fade-up"
                >
                  Saturday, 23 September 2023
                </p>
              </div>
              <div className="h-12"></div>

              <p className="text-center text-sm md:text-lg" data-aos="fade-up">
                GRAND (GMAD Awarding and Networking Day) is a new breakthrough
                in the series of events of GMAD 2023, which serves as the
                culmination, awarding, and closing ceremony of the entire series
                of competitions of GMAD. This event is accompanied by various
                exciting activities such as performances, networking sessions,
                and games that will enhance the sense of togetherness and serve
                as entertainment for all participants and committees of GMAD
                2023.
              </p>
            </div>
          </div>
        </div>

        {/* footer */}
        <Footer fixedBg></Footer>
      </div>
    </BaseLayout>
  );
}
