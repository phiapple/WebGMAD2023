import Image from 'next/image';
import Navbar from '../components/navbar';

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
						<p className="relative text-xs text-c-white max-xl:text-sm">
							Gadjah Mada Accounting Days (GMAD) is the biggest annual event of the Department of
							Accounting FEB UGM and organized by Ikatan Mahasiswa Akuntansi Gadjah Mada (IMAGAMA).
							GMAD consists of several series of events such as accounting competitions,
							multidisciplinary case studies, a seminar titled talk show, and many more, aiming to
							be a channel for the potential of Indonesian students, practitioners, and academics to
							accelerate and integrate their potentials in the field of economics, particularly
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
					<div className="w-full bg-c-blue flex flex-col md:flex-row rounded-3xl items-center md:h-96 xl:h-[520px]">
						<div className="w-full md:w-1/2 xl:w-1/3 h-[35vh] md:h-full rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none bg-ilust-grand-theme bg-cover bg-center"></div>
						<div className="flex flex-col w-full md:w-1/2 xl:w-2/3 justify-center gap-2 md:gap-9 px-6 py-6 xl:px-[90px]">
							<h3 className="font-belleza text-c-orange text-mobile-h3 md:text-h3">Grand Theme</h3>
							<p className="text-c-white text-2xl 2xl:text-p1 font-medium">
								A Recession-Proof Game Plan: Sustaining Supply Chain Amid Global Challenges
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mb-14 md:mb-[200px]">
				<div className="container mx-auto">
					<h2 className="text-c-orange text-mobile-h2 xl:text-h2 font-belleza text-center mb-16">
						Our Main Events
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-x-28 xl:gap-y-24">
						{events.map((event, index) => (
							<div className="bg-white p-3 md:p-6 md:h-[450px] rounded-3xl col-span-1 flex flex-col items-center justify-between gap-2 md:gap-8 shadow-basic">
								<div className="bg-c-blue rounded-2xl w-full py-8">
									<Image
										src={event.imgUrl}
										alt={event.imgAlt}
										width={183}
										height={135}
										className="mx-auto"
									></Image>
								</div>
								<div className="text-center">
									<p className="text-c-orange font-bold md:mb-4">{event.title}</p>
									<p className="text-c-blue">{event.subtitle}</p>
								</div>
								<a
									href={event.buttonTo}
									className="px-6 py-2 md:py-4 md:px-12 border border-c-orange bg-white text-c-orange rounded-3xl self-items-end hover:bg-c-orange hover:text-white transition"
								>
									See More
								</a>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="bg-gradient-to-b from-c-green to-c-blue max-md:py-12">
				<div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-6 md:max-h-[560px] md:h-[640px]">
					<div className="absolute left-0 bg-socmed-ornament bg-cover w-full h-[450px] sm:h-full md:hidden"></div>
					<div className="relative h-full flex flex-col justify-center items-start">
						<div className="absolute left-0 bg-socmed-ornament bg-contain bg-no-repeat md:w-[640px] md:aspect-square w-[250px] h-[450px] hidden md:block"></div>
						<h2 className="relative text-c-white text-mobile-h2 xl:text-h2 font-belleza mb-9">
							Our Social Media
						</h2>
						<p className="relative text-c-white text-xl md:text-h3">
							Lorem ipsum dolor sit amet con
						</p>
					</div>
					<div className="flex h-fit relative">
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
				<div className="flex flex-col items-center justify-center md:gap-16 pt-16 md:py-[120px] container mx-auto">
					<h2 className="text-mobile-h2 xl:text-h2 text-c-orange font-belleza max-md:mb-8">
						Our Past Participants
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-12 md:gap-16">
						{pastParticipants.map((item, index) => (
							<div className="bg-c-blue aspect-square w-100 rounded-3xl w-[100px]"></div>
						))}
					</div>
				</div>
			</section>

			<section className="">
				<div className="flex flex-col items-center justify-center gap-8 md:gap-16 py-16 md:py-[120px] container mx-auto">
					<h2 className="text-mobile-h2 xl:text-h2 text-c-orange font-belleza max-md:mb-8">
						Our Past Partners
					</h2>
					<div className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-12 md:gap-16">
						{pastPartners.map((item, index) => (
							<div className="bg-c-blue aspect-square w-100 rounded-3xl w-[100px]"></div>
						))}
					</div>
				</div>
			</section>

			<section className="">
				<div className=" py-[32px] md:py-[120px] container mx-auto">
					<div className="w-full py-[32px] lg:py-[120px] px-[16px] lg:px-[100px] bg-c-blue rounded-3xl flex flex-col md:flex-row items-center">
						<h2 className="text-c-white text-mobile-h2 xl:text-h2 font-belleza">
							Let's Work Together!
						</h2>
						<div className="flex flex-col md:flex-row text-center text-white xl:text-2xl md:w-full max-md:mt-12 xl:gap-6">
							<div className="md:w-1/2">
								<p className="mb-3 md:mb-6">Sponsorship</p>
								<a href="/" className="bg-c-green px-4 2xl:px-16 py-2 md:py-4 rounded-full">
									<img
										className="inline mr-2 2xl:mr-4"
										src="/images/icons/WhatsApp.svg"
										alt="Icon WhatsApp"
									/>
									081511115195
								</a>
							</div>
							<div className="md:w-1/2">
								<p className="mb-3 md:mb-6">Media Partnership</p>
								<a href="/" className="bg-c-green px-4 2xl:px-16 py-2 md:py-4 rounded-full">
									<img
										className="inline mr-2 2xl:mr-4"
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
		</div>
	);
}
