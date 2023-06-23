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
            <div className="flex aspect-[16/9] max-h-[56vh] max-w-full flex-col items-center justify-center bg-event-card-comvis bg-cover p-32 drop-shadow-lg">
              <h3 className="text-center font-belleza text-3xl text-c-orange">
                GRAND
              </h3>
              <h2 className="text-center font-belleza text-6xl">
                GMAD Awarding and Networking Day
              </h2>

              <div className="mt-4">
                <p className="text-center text-lg font-semibold">
                  Saturday, 23 September 2023
                </p>
              </div>
              <div className="h-12"></div>

              <p className="text-center text-lg">
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
