import Image from 'next/image';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const events = [
	{
		title: 'NAO',
		subtitle: 'National Accounting Olympiad',
		buttonTo: '/events/nao',
		regLink: 'https://bit.ly/RegistrationNAO2023',
		imgUrl: '/images/events/nao.svg',
		imgAlt: 'NAO Image',
	},
	{
		title: 'Junior NAO',
		subtitle: 'Junior National Accounting Olympiad',
		buttonTo: '/events/junior-nao',
		regLink: 'https://bit.ly/RegistrationNAOJunior2023',
		imgUrl: '/images/events/nao.svg',
		imgAlt: 'Junior NAO Image ',
	},
	{
		title: 'JNCC',
		subtitle: 'Jogjakarta National Case Competition',
		buttonTo: '/events/jndcc',
		regLink: 'https://bit.ly/RegistrationJNCC2023',
		imgUrl: '/images/events/nao.svg',
		imgAlt: 'JNCC Image ',
	},
	{
		title: 'A-Talks',
		subtitle: 'Accounting Talk',
		buttonTo: '/events/atalks',
		regLink: 'https://bit.ly/RegistrationA-Talk2023',
		imgUrl: '/images/events/nao.svg',
		imgAlt: 'A-Talks Image',
	},
	{
		title: 'GRAND',
		subtitle: 'GMAD Awarding and Networking Day',
		buttonTo: '/events/grand',
		imgUrl: '/images/events/nao.svg',
		imgAlt: 'GRAND Image',
	},
	{
		title: 'Comvis',
		subtitle: 'Company Visit',
		buttonTo: '/events/company-visit',
		imgUrl: '/images/events/nao.svg',
		imgAlt: 'Company Visit Image ',
	},
];

const pastSponsor = [
	{
		name: 'CIMB Digital Lounge',
		imgUrl: '/images/partners/cimb.png',
		imgAlt: 'CIMB logo',
		span: 'md:col-span-6',
	},
	{
		name: 'Taspen Properti',
		imgUrl: '/images/partners/taspen.png',
		imgAlt: 'Taspen logo',
		span: 'md:col-span-6',
	},
];

const pastMedpart = [
	{
		name: 'Istakalisa',
		imgUrl: '/images/partners/medpart/istakalisa.png',
		imgAlt: 'Istakalisa logo',
		span: 'md:col-span-4',
	},
	{
		name: 'ADI TV',
		imgUrl: '/images/partners/medpart/aditv-big.png',
		imgAlt: 'Adi TV logo',
		span: 'md:col-span-4',
	},
	{
		name: 'Petra FM',
		imgUrl: '/images/partners/medpart/petra.png',
		imgAlt: 'Petra FM logo',
		span: 'md:col-span-4',
	},
	{
		name: 'Magenta',
		imgUrl: '/images/partners/medpart/magenta-small.png',
		imgAlt: 'Magenta logo',
		span: 'md:col-span-3',
	},
	{
		name: 'RBTV',
		imgUrl: '/images/partners/medpart/rbtv-small.png',
		imgAlt: 'RBTV logo',
		span: 'md:col-span-3',
	},
	{
		name: 'Geronimo',
		imgUrl: '/images/partners/medpart/geronimo.png',
		imgAlt: 'Geronimo logo',
		span: 'md:col-span-3',
	},
	{
		name: 'StarFM',
		imgUrl: '/images/partners/medpart/starfm.png',
		imgAlt: 'StarFM logo',
		span: 'md:col-span-3',
	},
	{
		name: 'HIMA Akuntansi UNAIR',
		imgUrl: '/images/partners/medpart/hima-unair.png',
		imgAlt: 'Hima Akuntansi UNAIR logo',
		span: 'md:col-span-3',
	},
	{
		name: 'HIMAJA UNESA',
		imgUrl: '/images/partners/medpart/himajaunesa.png',
		imgAlt: 'HIMAJA UNESA logo',
		span: 'md:col-span-3',
	},
	{
		name: 'Ruang Mahasiswa',
		imgUrl: '/images/partners/medpart/ruangmhs.png',
		imgAlt: 'Ruang Mahasiswa logo',
		span: 'md:col-span-3',
	},
	{
		name: 'Eventtik',
		imgUrl: '/images/partners/medpart/eventtik.png',
		imgAlt: 'Eventtik logo',
		span: 'md:col-span-3',
	},
];

export default function Home() {
	return (
		<div className="w-screen bg-[#F0F0F0] font-montserrat">
			<Navbar></Navbar>
			<section className="relative grid place-content-center bg-gradient-to-b from-c-blue to-c-green pt-24 md:pt-[200px]">
				<div className="container relative mx-auto flex flex-col-reverse items-center justify-between md:flex-row">
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
							href="#our-main-events"
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
						<iframe
							className="h-[35vh] w-full rounded-t-3xl bg-ilust-grand-theme bg-cover bg-center md:h-full md:w-1/2 md:rounded-l-3xl md:rounded-tr-none"
							src="https://www.youtube.com/embed/zu06u8GXk9Y?controls=0"
							title="YouTube video player"
							frameborder="0"
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
							allowfullscreen
						></iframe>
						<div className="flex w-full flex-col justify-center gap-2 px-6 py-6 md:w-1/2 md:gap-9 xl:w-2/3 xl:px-[90px]">
							<h3 className="font-belleza text-mobile-h3 text-c-orange md:text-h3">Grand Theme</h3>
							<p className="text-2xl font-medium text-c-white 2xl:text-p1">
								A Recession-Proof Game Plan: Sustaining Supply Chain Amid Global Challenges
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="mb-14 md:mb-[200px]" id="our-main-events">
				<div className="container mx-auto">
					<h2 className="mb-16 text-center font-belleza text-mobile-h2 text-c-orange xl:text-h2">
						Our Main Events
					</h2>
					<div className="grid grid-cols-2 gap-8 sm:grid-cols-2 md:grid-cols-1 xl:grid-cols-3 xl:gap-x-28 xl:gap-y-24">
						{events.map((event, index) => (
							<div
								className="col-span-1 flex flex-col items-center justify-center gap-2 rounded-3xl bg-white p-3 text-center shadow-basic md:h-[450px] md:gap-6 md:p-6 md:px-8"
								key={index}
							>
								<div className="w-full rounded-2xl bg-c-blue py-8">
									<Image
										src={event.imgUrl}
										alt={event.imgAlt}
										width={183}
										height={135}
										className="mx-auto"
									></Image>
								</div>
								<p className="font-bold text-c-orange">{event.title}</p>
								<p className="text-lg font-semibold text-c-blue md:text-2xl md:text-4xl">
									{event.subtitle}
								</p>
								<a
									href={event.buttonTo}
									className="self-items-end rounded-3xl border border-c-orange bg-white px-6 py-2 font-semibold text-c-orange transition hover:bg-c-orange hover:text-white md:px-12 md:py-4"
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
					<div className="relative flex xl:h-[789px]">
						<div className="flex flex-col items-center gap-2 md:gap-8">
							<Image
								src="/images/instagram2.png"
								alt="Instagram"
								width={386.15}
								height={500}
							></Image>
							<a
								className="rounded-3xl bg-c-orange px-6 py-2 font-semibold text-c-white transition hover:bg-c-white hover:text-c-orange md:px-12 md:py-4"
								href="https://www.instagram.com/gmad.ugm/"
							>
								Instagram
							</a>
						</div>
						<div className="flex flex-col items-center justify-end gap-2 md:gap-8">
							<a
								className="rounded-3xl bg-c-orange px-6 py-2 font-semibold text-c-white transition hover:bg-c-white hover:text-c-orange md:px-12 md:py-4"
								href="https://liff.line.me/1645278921-kWRPP32q/?accountId=aju6891t"
							>
								Line
							</a>
							<Image src="/images/line2.png" alt="Instagram" width={292.89} height={500}></Image>
						</div>
					</div>
				</div>
			</section>

			<section className="">
				<div className="container mx-auto flex flex-col items-center justify-center gap-8 py-16 md:gap-30 md:py-[120px]">
					<h2 className="font-belleza text-mobile-h2 text-c-orange max-md:mb-8 xl:text-h2">
						Our Past Partners
					</h2>
					<div className="flex w-1/2 flex-col text-center">
						<h3 className="mb-14 text-[32px] font-semibold text-c-green">Sponsors</h3>
						<div className="grid h-fit w-full grid-cols-1 place-items-center gap-8 md:grid-cols-2 md:gap-30">
							{pastSponsor.map((item, index) => (
								<div className={`relative aspect-square w-40 lg:w-80`} key={index}>
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
					<div className="flex w-full flex-col px-8 pt-20 text-center">
						<h3 className="mb-14 text-[32px] font-semibold text-c-green">Media Partners</h3>
						<div className="grid w-full grid-cols-2 gap-8 lg:grid-cols-12 lg:gap-30">
							{pastMedpart.map((item, index) => (
								<div className={`${item.span} relative aspect-square w-full`} key={index}>
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
				<div className=" container mx-auto py-[32px] md:py-[120px]">
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
									href="https://wa.me/+6285800318595"
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
