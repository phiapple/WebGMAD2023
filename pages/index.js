import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const events = [
  {
    title: 'NAO',
    subtitle: 'National Accounting Olympiad',
    imgUrl: './images/events/nao.svg',
    imgAlt: 'nao',
    buttonTo: '/',
  },
  {
    title: 'NAO Junior',
    subtitle: 'National Accounting Olympiad Junior',
    imgUrl: '/images/events/nao.svg',
    imgAlt: 'naojr',
    buttonTo: '/',
  },
  {
    title: 'JNCC',
    subtitle: 'Jogjakarta National Case Competition',
    imgUrl: '/images/events/nao.svg',
    imgAlt: 'jncc',
    buttonTo: '/',
  },
  {
    title: 'A-Talks',
    subtitle: 'Accounting Talk',
    imgUrl: '/images/events/nao.svg',
    imgAlt: 'atalk',
    buttonTo: '/',
  },
  {
    title: 'GRAND',
    subtitle: 'GMAD Awarding and Networking Day',
    imgUrl: '/images/events/nao.svg',
    imgAlt: 'grand',
    buttonTo: '/',
  },
  {
    title: '',
    subtitle: 'Company Visit',
    imgUrl: '/images/events/nao.svg',
    imgAlt: 'companyvisit',
    buttonTo: '/',
  },
];

const socmed = [
  {
    src: '/images/instagram.png',
    alt: 'Instagram',
    width: 386.15,
    height: 740,
    href: '/',
  },
  {
    src: '/images/line.png',
    alt: 'Line',
    width: 292.89,
    height: 740,
    href: '/',
  },
];

const pastParticipants = [
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
];

const pastPartners = [
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
  { name: '' },
];

export default function Home() {
  return (
    <div className="w-screen bg-[#eeeeee] font-montserrat">
      <Navbar></Navbar>
      <section className="relative grid place-content-center bg-gradient-to-b from-c-blue to-c-green pt-24 md:pt-[200px]">
        <div className="container relative mx-auto flex flex-col-reverse items-center justify-center md:flex-row xl:space-x-30">
          <div className="absolute h-[100vh] w-full bg-hero-ornament bg-cover bg-center sm:hidden"></div>
          <div className="relative flex flex-col gap-9 md:w-[64%]">
            <div className="absolute hidden h-[693px] bg-hero-ornament bg-cover bg-center sm:-left-64 sm:-top-64 sm:block sm:w-[800px] md:-left-30 md:-top-32 xl:w-[985px]"></div>
            <h1 className="relative font-belleza text-mobile-h1 text-c-white md:w-5/6 xl:text-h1">
              Gadjah Mada Accounting Days 2023
            </h1>
            <p className="max-xl:text-md relative text-sm text-c-white">
              Gadjah Mada Accounting Days (GMAD) is the biggest annual event of
              the Department of Accounting FEB UGM and organized by Ikatan
              Mahasiswa Akuntansi Gadjah Mada (IMAGAMA). GMAD consists of
              several series of events such as accounting competitions,
              multidisciplinary case studies, a seminar titled talk show, and
              many more, aiming to be a channel for the potential of Indonesian
              students, practitioners, and academics to accelerate and integrate
              their potentials in the field of economics, particularly
              accounting.
            </p>
            <a
              href="/"
              className="relative w-fit rounded-full bg-c-orange px-6 py-2 text-lg font-medium text-c-white shadow-basic lg:px-12 lg:py-4 lg:text-2xl"
            >
              Register Now
            </a>
          </div>
          <div className="relative mb-8 w-1/4 max-w-[40vh] md:mb-0">
            <Image
              src="/images/logo.svg"
              alt="GMAD logo"
              height={200}
              width={450}
              objectFit="contain"
              objectPosition="center"
            />
          </div>
        </div>
        <div className="h-[50vh] md:h-[454.5px]"></div>
      </section>

      <section className="-translate-y-[50%]">
        <div className="container mx-auto">
          <div className="flex w-full flex-col items-center rounded-3xl bg-c-blue md:h-96 md:flex-row xl:h-[520px]">
            <div className="h-[35vh] w-full rounded-t-3xl bg-ilust-grand-theme bg-cover bg-center md:h-full md:w-1/2 md:rounded-l-3xl md:rounded-tr-none xl:w-1/3"></div>
            <div className="flex w-full flex-col justify-center gap-2 px-6 py-6 md:w-1/2 md:gap-9 xl:w-2/3 xl:px-[90px]">
              <h3 className="font-belleza text-mobile-h3 text-c-orange md:text-h3">
                Grand Theme
              </h3>
              <p className="text-2xl font-medium text-c-white 2xl:text-p1">
                A Recession-Proof Game Plan: Sustaining Supply Chain Amid Global
                Challenges
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-14 md:mb-[200px]">
        <div className="container mx-auto">
          <h2 className="mb-16 text-center font-belleza text-mobile-h2 text-c-orange xl:text-h2">
            Our Main Events
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3 xl:gap-x-28 xl:gap-y-24">
            {events.map((event, index) => (
              <div className="col-span-1 flex flex-col items-center justify-between gap-2 rounded-3xl bg-white p-3 shadow-basic md:h-[450px] md:gap-8 md:p-6">
                <div className="w-full rounded-2xl bg-c-blue py-8">
                  <Image
                    src={event.imgUrl}
                    alt={event.imgAlt}
                    width={183}
                    height={135}
                    className="mx-auto"
                  ></Image>
                </div>
                <div className="text-center">
                  <p className="font-bold text-c-orange md:mb-4">
                    {event.title}
                  </p>
                  <p className="text-c-blue">{event.subtitle}</p>
                </div>
                <a
                  href={event.buttonTo}
                  className="self-items-end rounded-3xl border border-c-orange bg-white px-6 py-2 text-c-orange transition hover:bg-c-orange hover:text-white md:px-12 md:py-4"
                >
                  See More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-c-green to-c-blue max-md:py-12">
        <div className="container mx-auto flex flex-col items-center justify-center gap-6 md:h-[640px] md:max-h-[560px] md:flex-row">
          <div className="absolute left-0 h-[450px] w-full bg-socmed-ornament bg-cover sm:h-full md:hidden"></div>
          <div className="relative flex h-full flex-col items-start justify-center">
            <div className="absolute left-0 hidden h-[450px] w-[250px] bg-socmed-ornament bg-contain bg-no-repeat md:block md:aspect-square md:w-[640px]"></div>
            <h2 className="relative mb-9 font-belleza text-mobile-h2 text-c-white xl:text-h2">
              Our Social Media
            </h2>
            <p className="relative text-xl text-c-white md:text-h3">
              Lorem ipsum dolor sit amet con
            </p>
          </div>
          <div className="relative flex h-fit">
            {socmed.map((socmed, index) => (
              <a href={socmed.href} key={index}>
                <Image
                  src={socmed.src}
                  alt={socmed.alt}
                  width={socmed.width}
                  height={socmed.height}
                ></Image>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto flex flex-col items-center justify-center pt-16 md:gap-16 md:py-[120px]">
          <h2 className="font-belleza text-mobile-h2 text-c-orange max-md:mb-8 xl:text-h2">
            Our Past Participants
          </h2>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 md:gap-16 xl:grid-cols-6">
            {pastParticipants.map((item, index) => (
              <div className="w-100 aspect-square w-[100px] rounded-3xl bg-c-blue"></div>
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 py-16 md:gap-16 md:py-[120px]">
          <h2 className="font-belleza text-mobile-h2 text-c-orange max-md:mb-8 xl:text-h2">
            Our Past Partners
          </h2>
          <div className="grid grid-cols-2 gap-12 sm:grid-cols-4 md:gap-16 xl:grid-cols-6">
            {pastPartners.map((item, index) => (
              <div className="w-100 aspect-square w-[100px] rounded-3xl bg-c-blue"></div>
            ))}
          </div>
        </div>
      </section>

      <section className="">
        <div className=" container mx-auto py-[32px] md:py-[120px]">
          <div className="flex w-full flex-col items-center rounded-3xl bg-c-blue px-[16px] py-[32px] md:flex-row lg:px-[100px] lg:py-[120px]">
            <h2 className="font-belleza text-mobile-h2 text-c-white xl:text-h2">
              Let's Work Together!
            </h2>
            <div className="flex flex-col text-center text-white max-md:mt-12 md:w-full md:flex-row xl:gap-6 xl:text-2xl">
              <div className="md:w-1/2">
                <p className="mb-3 md:mb-6">Sponsorship</p>
                <a
                  href="/"
                  className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
                >
                  <img
                    className="mr-2 inline 2xl:mr-4"
                    src="/images/icons/WhatsApp.svg"
                    alt="Icon WhatsApp"
                  />
                  081511115195
                </a>
              </div>
              <div className="md:w-1/2">
                <p className="mb-3 md:mb-6">Media Partnership</p>
                <a
                  href="/"
                  className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
                >
                  <img
                    className="mr-2 inline 2xl:mr-4"
                    src="/images/icons/WhatsApp.svg"
                    alt="Icon WhatsApp"
                  />
                  085800318595
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer fixedBg></Footer>
    </div>
  );
}
