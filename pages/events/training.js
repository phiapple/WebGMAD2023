import BaseLayout from '../../components/baseLayout';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function Training() {
  return (
    <BaseLayout seoTitle="GMAD • Training">
      <div>
        <Navbar fixedBg></Navbar>
        {/* for navbar placeholder */}
        <div className="h-[82px]"></div>

        {/* content */}
        <div className="min-h-screen-no-header w-full bg-c-blue text-white">
          <div className="min-h-screen-no-header container mx-auto grid place-items-center bg-c-blue">
            <div className="flex aspect-[16/9] max-h-[56vh] max-w-full flex-col items-center justify-center bg-event-card-comvis bg-cover p-32 drop-shadow-lg" data-aos="fade-up">
              <h2 className="text-center font-belleza text-6xl" data-aos="fade-up">Training</h2>
              <div className="mt-4">
                <p className="text-center text-lg font-semibold" data-aos="fade-up">
                  1st: Saturday, 12 Agustus 2023
                </p>
                <p className="text-center text-lg font-semibold" data-aos="fade-up">
                  2nd: Saturday, 3 September 2023
                </p>
              </div>
              <div className="h-12"></div>
              <p className="text-center text-lg" data-aos="fade-up">
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
