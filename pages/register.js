import Footer from '../components/footer';
import Navbar from '../components/navbar';
import RegisterCard from '../components/registerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useState } from 'react';

// JNCC	:  https://bit.ly/RegistrationJNCC2023
// A-Talk:  https://bit.ly/RegistrationA-Talk2023
// NAO Junior :  https://bit.ly/RegistrationNAOJunior2023
// NAO Senior :  https://bit.ly/RegistrationNAO2023

const EVENTS = [
  {
    title: 'National Accounting Olympiad',
    date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationJNCC2023',
    detailUrl: '/events/jncc',
  },
  {
    title: 'Atalk',
    date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationA-Talk2023',
    detailUrl: '/events/atalk',
  },
  {
    title: 'Junior National Accounting Olympiad',
    date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationNAOJunior2023',
    detailUrl: '/events/junior-nao',
  },
  {
    title: 'National Accounting Olympiad',
    date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationNAO2023',
    detailUrl: '/events/nao',
  },
];

export default function Register() {
  const [swiper, setSwiper] = useState();

  console.log(swiper);

  return (
    <div>
      <Navbar fixedBg></Navbar>
      {/* for navbar placeholder */}
      <div className="h-[82px]"></div>

      {/* content */}
      <div className="min-h-screen-no-header w-full bg-c-blue text-white">
        <div className="container">
          <Swiper
            centeredSlides
            slidesPerView="auto"
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="flex w-full flex-row"
            onSwiper={(swiper) => setSwiper(swiper)}
            breakpoints={{
              100: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
            }}
          >
            {EVENTS.map((event, index) => {
              return (
                <SwiperSlide className="h-full" key={index}>
                  <RegisterCard
                    date={event.date}
                    detailUrl={event.detailUrl}
                    registerUrl={event.registerUrl}
                    title={event.title}
                  ></RegisterCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>

      {/* footer */}
      <Footer fixedBg></Footer>
    </div>
  );
}
