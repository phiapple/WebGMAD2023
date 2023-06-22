import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function Atalk() {
  return (
    <div>
      <Navbar fixedBg></Navbar>
      {/* for navbar placeholder */}
      <div className="h-[82px]"></div>

      {/* content */}
      <div className="min-h-screen-no-header w-full bg-gradient-to-b from-c-blue to-c-green text-white">
        <div className="min-h-screen-no-header container mx-auto grid place-items-center">
          <div className="flex aspect-[16/9] max-h-[56vh] max-w-full flex-col items-center justify-center bg-event-card-atalk bg-cover p-32 drop-shadow-lg">
            <h3 className="text-center font-belleza text-3xl text-c-orange">
              A-Talk
            </h3>
            <h2 className="text-center font-belleza text-6xl">
              Accounting Talk
            </h2>
            <div className="h-6"></div>
            <p className="text-center text-lg">
              As a part of the Jogjakarta National Case Competition (JNCC),
              Company Visit aims to give insights and networking experience for
              the semi-finalists to expand their knowledge on ethical standards
              and sustainable practices in supply chains with speakers from a
              reputable company who will also share about their company and
              working experience.
            </p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer fixedBg></Footer>
    </div>
  );
}
