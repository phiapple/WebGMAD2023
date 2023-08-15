import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import BaseLayout from '../components/baseLayout';
import clsx from 'clsx';

const events = [
  {
    title: 'NAO',
    subtitle: 'National Accounting Olympiad',
    buttonTo: '/events/nao',
    regLink: 'https://bit.ly/RegistrationNAO2023',
    imgUrl: '/images/events/nao.png',
    imgAlt: 'NAO Image',
  },
  {
    title: 'Junior NAO',
    subtitle: 'Junior National Accounting Olympiad',
    buttonTo: '/events/junior-nao',
    regLink: 'https://bit.ly/RegistrationNAOJunior2023',
    imgUrl: '/images/events/jnao.png',
    imgAlt: 'Junior NAO Image ',
  },
  {
    title: 'JNCC',
    subtitle: 'Jogjakarta National Case Competition',
    buttonTo: '/events/jncc',
    regLink: 'https://bit.ly/RegistrationJNCC2023',
    imgUrl: '/images/events/jncc.png',
    imgAlt: 'JNCC Image ',
  },

  {
    title: 'Training',
    subtitle: 'Training',
    buttonTo: '/events/training',
    imgUrl: '/images/events/training.png',
    imgAlt: 'Training Image ',
  },
  {
    title: 'Comvis',
    subtitle: 'Company Visit',
    buttonTo: '/events/company-visit',
    imgUrl: '/images/events/comvis.png',
    imgAlt: 'Company Visit Image ',
  },
  {
    title: 'A-Talks',
    subtitle: 'Accounting Talk',
    buttonTo: '/events/atalk',
    regLink: 'https://bit.ly/RegistrationA-Talk2023',
    imgUrl: '/images/events/atalk.png',
    imgAlt: 'A-Talks Image',
  },
  {
    title: 'GRAND',
    subtitle: 'GMAD Awarding and Networking Day',
    buttonTo: '/events/grand',
    imgUrl: '/images/events/grand.png',
    imgAlt: 'GRAND Image',
  },
];

// guide ukuran sponsor:
// container: 12
// ukuran screen md
// xl: col-span-6
// l: col-span-5
// m: col-span-4
// s: col-span-3
// ukuran screen base
// xl: col-span-12
// l: col-span-8
// m: col-span-6
// s: col-span-4
// pastikan tiap row total spannya 12

const sponsor = [
  {
    span: 'col-span-2 md:col-span-3',
  },
  {
    name: 'Sate Ratu',
    imgUrl: '/images/partners/sponsors/sate-ratu.png',
    imgAlt: 'Sate Ratu',
    span: 'col-span-4 md:col-span-3',
  },
  {
    name: 'Yamie Panda',
    imgUrl: '/images/partners/sponsors/yamie-panda.png',
    imgAlt: 'Yamie Panda',
    span: 'col-span-4 md:col-span-3',
  },
  {
    span: 'col-span-2 md:col-span-3',
  },
];

const pastSponsor = [
  {
    name: 'CIMB Digital Lounge',
    imgUrl: '/images/partners/cimb2.png',
    imgAlt: 'CIMB logo',
    span: 'md:col-span-6',
  },
  {
    name: 'Taspen Properti',
    imgUrl: '/images/partners/taspen2.png',
    imgAlt: 'Taspen logo',
    span: 'md:col-span-6',
  },
];

const pastMedpart = [
  {
    name: 'Istakalisa',
    imgUrl: '/images/partners/medpart/istakalisa2.png',
    imgAlt: 'Istakalisa logo',
    span: 'md:col-span-3',
  },
  {
    name: 'ADI TV',
    imgUrl: '/images/partners/medpart/aditv.png',
    imgAlt: 'Adi TV logo',
    span: 'col-span-2 md:col-span-6',
  },
  {
    name: 'Petra FM',
    imgUrl: '/images/partners/medpart/petra2.png',
    imgAlt: 'Petra FM logo',
    span: 'md:col-span-3',
  },
  {
    name: 'Magenta',
    imgUrl: '/images/partners/medpart/magenta.png',
    imgAlt: 'Magenta logo',
    span: 'md:col-span-3',
  },
  {
    name: 'RBTV',
    imgUrl: '/images/partners/medpart/rbtv.png',
    imgAlt: 'RBTV logo',
    span: 'md:col-span-3',
  },
  {
    name: 'Geronimo',
    imgUrl: '/images/partners/medpart/geronimo2.png',
    imgAlt: 'Geronimo logo',
    span: 'md:col-span-3',
  },
  {
    name: 'StarFM',
    imgUrl: '/images/partners/medpart/starfm2.png',
    imgAlt: 'StarFM logo',
    span: 'md:col-span-3',
  },
  {
    name: 'HIMA Akuntansi UNAIR',
    imgUrl: '/images/partners/medpart/hima-unair2.png',
    imgAlt: 'Hima Akuntansi UNAIR logo',
    span: 'md:col-span-4',
  },
  {
    name: 'HIMAJA UNESA',
    imgUrl: '/images/partners/medpart/himajaunesa2.png',
    imgAlt: 'HIMAJA UNESA logo',
    span: 'md:col-span-2',
  },
  {
    name: 'Ruang Mahasiswa',
    imgUrl: '/images/partners/medpart/ruangmhs2.png',
    imgAlt: 'Ruang Mahasiswa logo',
    span: 'md:col-span-3',
  },
  {
    name: 'Eventtik',
    imgUrl: '/images/partners/medpart/eventtik2.png',
    imgAlt: 'Eventtik logo',
    span: 'md:col-span-3',
  },
];

export default function Home() {
  return (
    <BaseLayout>
      <div className="w-screen bg-[#F0F0F0] font-montserrat">
        <Navbar></Navbar>
        <section className="relative grid place-content-center bg-gradient-to-b from-c-blue to-c-green pt-24 md:pt-[200px]">
          <div className="container relative mx-auto flex flex-col-reverse items-center justify-between md:flex-row">
            <div className="absolute h-[100vh] w-full bg-hero-ornament bg-cover bg-center sm:hidden"></div>
            <div className="relative flex flex-col gap-9 md:w-[64%]">
              <div className="absolute hidden h-[693px] bg-hero-ornament bg-cover bg-center sm:-left-64 sm:-top-64 sm:block sm:w-[800px] md:-left-30 md:-top-32 xl:w-[985px]"></div>
              <h1
                data-aos="fade-up"
                className="relative font-belleza text-mobile-h1 text-c-white md:w-5/6 xl:text-h1"
              >
                Gadjah Mada Accounting Days 2023
              </h1>
              <p
                data-aos="fade-up"
                className="relative text-xs text-c-white max-xl:text-sm"
              >
                Gadjah Mada Accounting Days (GMAD) is the biggest annual event
                of the Department of Accounting FEB UGM and organized by Ikatan
                Mahasiswa Akuntansi Gadjah Mada (IMAGAMA). GMAD consists of
                several series of events such as accounting competitions,
                multidisciplinary case studies, a seminar titled talk show, and
                many more, aiming to be a channel for the potential of
                Indonesian students, practitioners, and academics to accelerate
                and integrate their potentials in the field of economics,
                particularly accounting.
              </p>
              <a
                data-aos="fade-up"
                href="#our-main-events"
                className="relative w-fit rounded-full bg-c-orange px-6 py-2 text-lg font-medium text-c-white shadow-basic hover:bg-c-white hover:text-c-orange lg:px-12 lg:py-4 lg:text-xl"
              >
                Register Now
              </a>
            </div>
            <div
              data-aos="fade-up"
              className="relative mb-8 w-1/4 max-w-[40vh] md:mb-0"
            >
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
          <div data-aos="fade-up" className="container mx-auto">
            <div className="flex w-full flex-col items-center rounded-3xl bg-c-blue md:h-96 md:flex-row xl:h-[520px]">
              <iframe
                className="h-[35vh] w-full rounded-t-3xl bg-ilust-grand-theme bg-cover bg-center md:h-full md:w-1/2 md:rounded-l-3xl md:rounded-tr-none"
                src="https://www.youtube.com/embed/zu06u8GXk9Y?autoplay=1&controls=0"
                title="GADJAH MADA ACCOUNTING DAYS 2023 OFFICIAL TEASER"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              <div className="flex w-full flex-col justify-center gap-2 px-6 py-6 md:w-1/2 md:gap-9 xl:w-2/3 xl:px-[90px]">
                <h3 className="font-belleza text-mobile-h3 text-c-orange md:text-h3">
                  Grand Theme
                </h3>
                <p className="text-2xl font-medium text-c-white 2xl:text-p1">
                  A Recession-Proof Game Plan: Sustaining Supply Chain Amid
                  Global Challenges
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-14 md:mb-[200px]" id="our-main-events">
          <div className="container mx-auto">
            <h2
              data-aos="fade-up"
              className="mb-16 text-center font-belleza text-mobile-h2 text-c-orange xl:text-h2"
            >
              Our Main Events
            </h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 xl:gap-x-28 xl:gap-y-24">
              {events.map((event, index) => (
                <div
                  data-aos="fade-up"
                  className="col-span-1 flex h-full flex-col items-center justify-between gap-2 rounded-3xl bg-white p-3 text-center shadow-basic md:h-full md:gap-8 md:p-6 md:px-8"
                  key={index}
                >
                  <div class="flex flex-col gap-2 md:gap-4">
                    <div className="flex h-56 w-full overflow-hidden rounded-2xl">
                      <Image
                        src={event.imgUrl}
                        alt={event.imgAlt}
                        width={500}
                        height={500}
                        className="object-cover"
                      ></Image>
                    </div>
                    <p className="text-md font-bold text-c-orange">
                      {event.title}
                    </p>
                    <p className="text-lg font-semibold text-c-blue md:text-2xl xl:text-2xl">
                      {event.subtitle}
                    </p>
                  </div>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={event.buttonTo}
                    className="self-items-end rounded-full border border-c-orange bg-white px-6 py-2 font-semibold text-c-orange transition hover:bg-c-orange hover:text-white md:px-12 md:py-4"
                  >
                    See Details
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
              <h2
                data-aos="fade-up"
                className="relative mb-9 font-belleza text-mobile-h2 text-c-white xl:text-h2"
              >
                Our Social Media
              </h2>
              <p
                data-aos="fade-up"
                className="relative text-xl text-c-white md:text-h3"
              >
                Follow our social media for more updates!
              </p>
            </div>
            <div data-aos="fade-up" className="relative flex xl:h-[789px]">
              <div className="flex flex-col items-center gap-2 md:gap-8">
                <Image
                  src="/images/instagram2.png"
                  alt="Instagram"
                  width={386.15}
                  height={500}
                ></Image>
                <a
                  className="rounded-full bg-c-orange px-6 py-2 font-semibold text-c-white transition hover:bg-c-white hover:text-c-orange md:px-12 md:py-4"
                  href="https://www.instagram.com/gmad.ugm/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </div>
              <div
                data-aos="fade-up"
                className="flex flex-col items-center justify-end gap-2 md:gap-8"
              >
                <a
                  className="rounded-full bg-c-orange px-6 py-2 font-semibold text-c-white transition hover:bg-c-white hover:text-c-orange md:px-12 md:py-4"
                  href="https://liff.line.me/1645278921-kWRPP32q/?accountId=aju6891t"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Line
                </a>
                <Image
                  src="/images/line2.png"
                  alt="Instagram"
                  width={292.89}
                  height={500}
                ></Image>
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto flex flex-col items-center justify-center gap-8 py-16 md:gap-30 md:py-[120px]">
            <h2
              data-aos="fade-up"
              className="font-belleza text-mobile-h2 text-c-orange max-md:mb-8 xl:text-h2"
            >
              Sponsored By
            </h2>
            <div className="flex flex-col text-center">
              <div className="grid h-fit w-full grid-cols-12 place-items-center gap-8">
                {sponsor.map((item, index) => (
                  <div
                    data-aos="fade-up"
                    className={clsx(`relative w-full`, item.span)}
                    key={index}
                  >
                    {item?.imgUrl && (
                      <img
                        src={item.imgUrl}
                        alt={item.imgAlt}
                        style={{ objectFit: 'contain' }}
                      ></img>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="">
          <div className="container mx-auto flex flex-col items-center justify-center gap-8 py-16 md:gap-30 md:py-[120px]">
            <h2
              data-aos="fade-up"
              className="font-belleza text-mobile-h2 text-c-orange max-md:mb-8 xl:text-h2"
            >
              Our Past Partners
            </h2>
            <div className="flex w-1/2 flex-col text-center">
              <h3
                data-aos="fade-up"
                className="mb-14 text-[32px] font-semibold text-c-green"
              >
                Sponsors
              </h3>
              <div className="grid h-fit w-full grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:gap-30">
                {pastSponsor.map((item, index) => (
                  <div
                    data-aos="fade-up"
                    className={`relative aspect-square w-40 lg:w-64 xl:w-80`}
                    key={index}
                  >
                    <Image
                      src={item.imgUrl}
                      alt={item.imgAlt}
                      fill
                      style={{ objectFit: 'contain' }}
                    ></Image>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col px-8 pt-20 text-center md:w-3/4">
              <h3
                data-aos="fade-up"
                className="mb-14 text-[32px] font-semibold text-c-green"
              >
                Media Partners
              </h3>
              <div className="grid w-full grid-cols-2 place-content-center items-center md:grid-cols-12">
                {pastMedpart.map((item, index) => (
                  <div
                    data-aos="fade-up"
                    className={`${item.span} relative mx-4 aspect-square xl:mx-8`}
                    key={index}
                  >
                    <Image
                      src={item.imgUrl}
                      alt={item.imgAlt}
                      fill
                      style={{ objectFit: 'contain' }}
                    ></Image>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

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
                    className="rounded-full bg-c-green px-4 py-2 md:py-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mr-2 inline 2xl:mr-4"
                      src="/images/icons/WhatsApp.svg"
                      alt="Icon WhatsApp"
                    />
                    Inneke Patricia
                  </a>
                </div>
                <div className="md:w-1/2">
                  <p className="mb-3 md:mb-6">Media Partnership</p>
                  <a
                    href="https://wa.me/+6285800318595"
                    className="rounded-full bg-c-green px-4 py-2 md:py-4"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className="mr-2 inline 2xl:mr-4"
                      src="/images/icons/WhatsApp.svg"
                      alt="Icon WhatsApp"
                    />
                    Listya Nur Aini
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer fixedBg></Footer>
      </div>
    </BaseLayout>
  );
}
