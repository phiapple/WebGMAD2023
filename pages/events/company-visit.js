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
            <h2 className='font-belleza text-6xl text-center'>Company Visit</h2>
            <div className='h-6'></div>
            <p className='text-center text-lg'>As a part of the Jogjakarta National Case Competition (JNCC), Company Visit aims to give insights and networking experience for the semi-finalists to expand their knowledge on ethical standards and sustainable practices in supply chains with speakers from a reputable company who will also share about their company and working experience.</p>
          </div>
        </div>
      </div>

      {/* footer */}
      <Footer fixedBg></Footer>
    </div>
  );
}
