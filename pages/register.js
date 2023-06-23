import Footer from '../components/footer';
import Navbar from '../components/navbar';
import RegisterCard from '../components/registerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useState } from 'react';
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi';

import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// JNCC	:  https://bit.ly/RegistrationJNCC2023
// A-Talk:  https://bit.ly/RegistrationA-Talk2023
// NAO Junior :  https://bit.ly/RegistrationNAOJunior2023
// NAO Senior :  https://bit.ly/RegistrationNAO2023

const EVENTS = [
  {
    title: 'National Accounting Olympiad',
    date: 'Until 17 August 2023',
    registerUrl: 'https://bit.ly/RegistrationNAO2023',
    detailUrl: '/events/nao',
    bg: `bg-[url('/images/card/nao-grad.png')]`,
  },
  {
    title: 'Junior National Accounting Olympiad',
    date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationNAOJunior2023',
    detailUrl: '/events/junior-nao',
    bg: `bg-[url('/images/card/jnao-grad.png')]`,
  },
  {
    title: 'Jogjakarta National Case Competition',
    date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationJNCC2023',
    detailUrl: '/events/jncc',
    bg: `bg-[url('/images/card/jncc-grad.png')]`,
  },
  {
    title: 'Atalk',
    date: '22 September 2023',
    registerUrl: 'https://bit.ly/RegistrationA-Talk2023',
    detailUrl: '/events/atalk',
    bg: `bg-[url('/images/card/atalk-grad.png')]`,
  },

  {
    title: 'GMAD Awarding and Networking Day',
    date: '22-23 September 2023',
    detailUrl: '/events/grand',
    bg: `bg-[url('/images/card/grand-grad.png')]`,
  },
  {
    title: 'Company Visit',
    date: '22-23 September 2023',
    detailUrl: '/events/comvis',
    bg: `bg-[url('/images/card/comvis-grad.png')]`,
  },
  {
    title: 'Training',
    date: '22-23 September 2023',
    detailUrl: '/events/training',
    bg: `bg-[url('/images/card/training-grad.png')]`,
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
      <div className="min-h-screen-no-header relative w-full bg-gradient-to-b from-c-blue to-c-green text-white">
        <div className="container">
          <div className="min-h-screen-no-header flex w-[300px] flex-col items-center justify-center gap-6">
            <h1 className="text-center font-belleza text-6xl">
              Main <br />
              Event
            </h1>
            <div className="flex gap-4">
              <BiChevronLeftCircle
                onClick={() => swiper.slidePrev()}
                className="h-10 w-10 cursor-pointer"
              ></BiChevronLeftCircle>
              <BiChevronRightCircle
                onClick={() => swiper.slideNext()}
                className="h-10 w-10 cursor-pointer"
              ></BiChevronRightCircle>
            </div>
          </div>
        </div>

        <div className="absolute right-0 top-[20%]">
          <Swiper
            id="swiper-register"
            className="absolute w-[800px]"
            slidesPerView={'auto'}
            pagination={{
              clickable: true,
            }}
            // modules={[Pagination]}
            onSwiper={(swiper) => setSwiper(swiper)}
            grabCursor
            breakpoints={{
              0: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
            }}
          >
            {EVENTS.map((event, index) => {
              return (
                <SwiperSlide key={index}>
                  <RegisterCard
                    date={event.date}
                    detailUrl={event.detailUrl}
                    registerUrl={event.registerUrl}
                    title={event.title}
                    bg={event.bg}
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
