import Footer from '../components/footer';
import Navbar from '../components/navbar';
import RegisterCard from '../components/registerCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { useState } from 'react';
import { BiChevronRightCircle, BiChevronLeftCircle } from 'react-icons/bi';

import 'swiper/css';
import BaseLayout from '../components/baseLayout';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// JNCC	:  https://bit.ly/RegistrationJNCC2023
// A-Talk:  https://bit.ly/RegistrationA-Talk2023
// NAO Junior :  https://bit.ly/RegistrationNAOJunior2023
// NAO Senior :  https://bit.ly/RegistrationNAO2023

const EVENTS = [
  {
    title: 'National Accounting Olympiad',
    // date: 'Until 17 August 2023',
    registerUrl: 'https://bit.ly/RegistrationNAO2023',
    detailUrl: '/events/nao',
    bg: `bg-[url('/images/card/nao-grad.png')]`,
  },
  {
    title: 'Junior National Accounting Olympiad',
    // date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationNAOJunior2023',
    detailUrl: '/events/junior-nao',
    bg: `bg-[url('/images/card/jnao-grad.png')]`,
  },
  {
    title: 'Jogjakarta National Case Competition',
    // date: '22-23 September 2023',
    registerUrl: 'https://bit.ly/RegistrationJNCC2023',
    detailUrl: '/events/jncc',
    bg: `bg-[url('/images/card/jncc-grad.png')]`,
  },
  {
    title: 'Atalk',
    // date: '22 September 2023',
    registerUrl: 'https://bit.ly/RegistrationA-Talk2023',
    detailUrl: '/events/atalk',
    bg: `bg-[url('/images/card/atalk-grad.png')]`,
  },

  {
    title: 'GMAD Awarding and Networking Day',
    // date: '22-23 September 2023',
    detailUrl: '/events/grand',
    bg: `bg-[url('/images/card/grand-grad.png')]`,
  },
  {
    title: 'Company Visit',
    // date: '22-23 September 2023',
    detailUrl: '/events/comvis',
    bg: `bg-[url('/images/card/comvis-grad.png')]`,
  },
  {
    title: 'Training',
    // date: '22-23 September 2023',
    detailUrl: '/events/training',
    bg: `bg-[url('/images/card/training-grad.png')]`,
  },
];

export default function Register() {
  const [swiper, setSwiper] = useState();

  return (
    <BaseLayout seoTitle="GMAD • Register Events">
      <div>
        <Navbar fixedBg></Navbar>
        {/* for navbar placeholder */}
        <div className="h-[82px]"></div>

        {/* content */}
        <div className="min-h-screen-no-header relative flex w-full flex-col items-center justify-center bg-gradient-to-b from-c-blue to-c-green text-white lg:block">
          <div className="container flex flex-col items-center justify-center lg:block">
            <div className="flex w-[300px] flex-col items-center justify-center gap-6 py-24 lg:absolute lg:top-[50%] lg:translate-y-[-50%] lg:py-0">
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

          <div className="pb-16 lg:absolute lg:right-0 lg:top-[50%] lg:translate-y-[-50%] lg:pb-0">
            <Swiper
              id="swiper-register"
              slidesPerView={'auto'}
              className="w-screen lg:w-[600px] xl:w-[900px]"
              autoplay
              centeredSlides
              spaceBetween={20}
              onSwiper={(swiper) => setSwiper(swiper)}
              grabCursor
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                680: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1024: {
                  slidesPerView: 2,
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

        <section className="">
          <div
            data-aos="fade-up"
            className=" container mx-auto py-[32px] md:py-[120px]"
          >
            <div className="flex w-full flex-col items-center rounded-3xl bg-c-blue px-[16px] py-[32px] md:flex-row lg:px-[100px] lg:py-[120px]">
              <h2 className="font-belleza text-mobile-h2 text-c-white md:w-1/2 xl:text-h2">
                Contact Us
              </h2>
              <div className="flex flex-col text-center text-white max-md:mt-12 md:w-full md:flex-row xl:gap-6 xl:text-2xl">
                <div className="md:w-1/2">
                  <p className="mb-3 md:mb-6">Sponsorship</p>
                  <a
                    href="https://wa.me/+6281511115195"
                    className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mr-2 inline 2xl:mr-4"
                      src="/images/icons/WhatsApp.svg"
                      alt="Icon WhatsApp"
                    />
                    081511115195
                  </a>
                  <p className="text-md mt-3 text-c-green md:mt-6">
                    Inneke Patricia
                  </p>
                </div>
                <div className="md:w-1/2">
                  <p className="mb-3 md:mb-6">Media Partnership</p>
                  <a
                    href="https://wa.me/+6285800318595"
                    className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mr-2 inline 2xl:mr-4"
                      src="/images/icons/WhatsApp.svg"
                      alt="Icon WhatsApp"
                    />
                    085800318595
                  </a>
                  <p className="text-md mt-3 text-c-green md:mt-6">
                    Listya Nur Aini
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* footer */}
        <Footer fixedBg></Footer>
      </div>
    </BaseLayout>
  );
}
