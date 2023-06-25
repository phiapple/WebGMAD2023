import BaseLayout from '../../components/baseLayout';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function Training() {
  return (
    <BaseLayout seoTitle="GMAD • Training">
      <div className=" w-screen overflow-x-hidden">
        <Navbar fixedBg></Navbar>
        {/* for navbar placeholder */}
        <div className="h-[82px]"></div>

        {/* content */}
        <div className="min-h-screen-no-header w-full bg-c-blue text-white">
          <div className="min-h-screen-no-header container mx-auto grid place-items-center bg-c-blue">
            <div
              className="nd:py-[60px] flex aspect-[16/9] max-h-[56vh] max-w-full flex-col items-center justify-center rounded-[24px] border border-c-orange bg-event-card-training bg-cover p-[40px] drop-shadow-lg md:px-[120px]"
              data-aos="fade-up"
            >
              <h2
                className="text-center font-belleza text-4xl md:text-6xl"
                data-aos="fade-up"
              >
                Training
              </h2>
              <div className="mt-4">
                <p
                  className="text-center text-sm font-semibold md:text-lg"
                  data-aos="fade-up"
                >
                  1st: Saturday, 12 Agustus 2023
                </p>
                <p
                  className="text-center text-sm font-semibold md:text-lg"
                  data-aos="fade-up"
                >
                  2nd: Saturday, 3 September 2023
                </p>
              </div>
              <div className="h-12"></div>
              <p className="text-center text-sm md:text-lg" data-aos="fade-up">
                The training and workshop sessions, tailored as a
                beginner-friendly platform, provide a space for receiving
                valuable feedback and guidance from industry professionals.
                These sessions not only refine skills, boost confidence, and
                improve overall performance in the competition but also
                encourage interactive discussions, creating a supportive
                learning environment for participants at all levels.
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
