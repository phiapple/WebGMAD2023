import BaseLayout from '../../components/baseLayout';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function CompanyVisit() {
  return (
    <BaseLayout seoTitle="GMAD • Company Visit">
      <div>
        <Navbar fixedBg></Navbar>
        {/* for navbar placeholder */}
        <div className="h-[82px]"></div>

        {/* content */}
        <div className="min-h-screen-no-header w-full bg-c-blue text-white">
          <div className="min-h-screen-no-header container mx-auto grid place-items-center bg-c-blue">
            <div
              className="nd:py-[60px] flex aspect-[16/9] max-h-[56vh] max-w-full flex-col items-center justify-center rounded-[24px] border border-c-orange bg-event-card-comvis bg-cover p-[40px] drop-shadow-lg md:px-[120px]"
              data-aos="fade-up"
            >
              <h2
                className="text-center font-belleza text-4xl md:text-6xl"
                data-aos="fade-up"
              >
                Company Visit
              </h2>

              <div className="mt-4">
                <p
                  className="text-center text-sm font-semibold md:text-lg"
                  data-aos="fade-up"
                >
                  Saturday, 2 September 2023
                </p>
              </div>
              <div className="h-12"></div>

              <p className="text-center text-sm md:text-lg" data-aos="fade-up">
                As a part of the Jogjakarta National Case Competition (JNCC),
                Company Visit aims to give insights and networking experience
                for the semi-finalists to expand their knowledge on ethical
                standards and sustainable practices in supply chains with
                speakers from a reputable company who will also share about
                their company and working experience.
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
