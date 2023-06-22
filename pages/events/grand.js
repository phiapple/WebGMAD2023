import Footer from '../../components/footer';
import Navbar from '../../components/navbar';

export default function CompanyVisit() {
  return (
    <div>
      <Navbar fixedBg></Navbar>
      {/* for navbar placeholder */}
      <div className='h-[82px]'></div>

      {/* content */}
      <div className='w-full min-h-screen-no-header bg-c-blue text-white'>
        <div className='mx-auto container bg-c-blue min-h-screen-no-header grid place-items-center'>
          <div className='bg-event-card-comvis bg-cover w-full aspect-[16/10] flex flex-col justify-center items-center p-32 drop-shadow-lg'>
            <h3 className='font-belleza text-3xl text-center text-c-orange'>GRAND</h3>
            <h2 className='font-belleza text-6xl text-center'>GMAD Awarding and Networking Day</h2>
            <div className='h-6'></div>
            <p className='text-center text-lg'>GRAND (GMAD Awarding and Networking Day) is a new breakthrough in the series of events of GMAD 2023, which serves as the culmination, awarding, and closing ceremony of the entire series of competitions of GMAD. This event is accompanied by various exciting activities such as performances, networking sessions, and games that will enhance the sense of togetherness and serve as entertainment for all participants and committees of GMAD 2023.</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer fixedBg></Footer>
    </div>
  );
}
