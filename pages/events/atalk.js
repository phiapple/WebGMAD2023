import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import TImelineCardRight from '../../components/card/TimelineCard/TImelineRightCard';
import TimelineCardLeft from '../../components/card/TimelineCard/TimelineLeftCard';
import BaseLayout from '../../components/baseLayout';

const leftTimeline = [
	{
		time: '16, 18, and 20 September 2023',
		title: 'Pre-Event',
		desc: '',
	},
];
const rightTimeline = [
	{
		time: '23 September 2023',
		title: 'Main Event',
		desc: '',
	},
];

export default function Atalk() {
	return (
		<BaseLayout seoTitle="GMAD • Accounting Talk (A-Talk)">
			<>
				<div className="h-full w-screen overflow-x-hidden">
					<Navbar fixedBg></Navbar>
					<div className="h-[82px]"></div>
					<section className="relative h-screen w-full bg-gradient-to-b from-c-blue to-c-green ">
						<div className="min-h-screen-no-header container mx-auto grid h-[671px] w-[296px] place-items-center px-0 md:w-[1272px]">
							<div
								className="nd:py-[60px] flex aspect-[16/9] max-h-[56vh] max-w-full flex-col items-center justify-center rounded-[24px] border border-c-orange bg-event-card-comvis bg-cover p-[40px] drop-shadow-lg md:px-[120px]"
								data-aos="fade-up"
							>
								<h3
									className="text-center font-belleza text-2xl text-c-orange md:text-3xl"
									data-aos="fade-up"
								>
									A-Talk
								</h3>
								<h2
									className="text-center font-belleza text-4xl text-white lg:text-6xl"
									data-aos="fade-up"
								>
									Accounting Talk
								</h2>
								<div className="h-6"></div>
								<p className="text-center text-sm text-white md:text-lg" data-aos="fade-up">
									A-Talk or Accounting Talk is a talk show consisting of two sessions that discuss
									current issues by inviting competent speakers as a platform for discussion,
									confirmation, and resolution of those issues, guided by a moderator. This year,
									A-Talk will feature speakers from the government and companies. Each speaker will
									be present in every session of Accounting Talk (A-Talk).
								</p>
							</div>
						</div>
					</section>
					<section className="block h-fit w-full bg-c-white">
						<div className="w-full bg-c-white">
							<div className="flex justify-center py-24">
								<h2
									className="text-center font-belleza text-mobile-h2 text-c-orange xl:text-h2"
									data-aos="fade-up"
								>
									Timeline
								</h2>
							</div>
							<div className="flex w-screen justify-center">
								<div className="mt-[24px] flex-col">
									{/* left component */}
									{leftTimeline.map((data, index) => (
										<div key={index}>
											<div className="">
												<TimelineCardLeft
													time={data.time}
													title={data.title}
													// desc={data.desc}
												/>
											</div>
											<div className="">
												<div className="block h-40 w-[0px] max-w-[158px] bg-c-white"></div>
											</div>
										</div>
									))}
								</div>
								<div className="mx-[15px] w-[30px] min-w-[30px] bg-gradient-to-b from-c-green to-c-blue md:mx-12 md:w-[60px]"></div>
								<div className="xl:w-[370px]">
									{/* right component */}
									{rightTimeline.map((data, index) => (
										<div>
											<div className="">
												<div className="block h-40 w-[0px] max-w-[158px] bg-c-white"></div>
											</div>
											<div className="">
												<TImelineCardRight
													time={data.time}
													title={data.title}
													// desc={data.desc}
												/>
											</div>
										</div>
									))}
									<div className="">
										<div className="block h-40 w-[0px] max-w-[158px] bg-c-white"></div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="flex h-[261px] w-full flex-col items-center justify-center bg-c-blue md:h-[372px]">
						<h2 className="font-belleza text-mobile-h2 text-white xl:text-h2" data-aos="fade-down">
							So, What Are You Waiting For ?
						</h2>
						<div className="mt-[32px] md:mt-[60px]">
							<a
								className="rounded-3xl bg-c-orange px-6 py-2 font-semibold text-c-white transition hover:bg-c-white hover:text-c-orange md:px-12 md:py-4"
								href="https://bit.ly/RegistrationA-Talk2023"
								data-aos="fade-up"
							>
								Register Now
							</a>
						</div>
					</section>
					<section className="">
						<div className=" container mx-auto py-[32px] md:py-[120px]">
							<div className="flex w-full flex-col items-center rounded-3xl bg-c-blue px-[16px] py-[32px] md:flex-row lg:px-[100px] lg:py-[120px]">
								<h2
									className="font-belleza text-mobile-h2 text-c-white md:w-1/2 xl:text-h2"
									data-aos="fade-right"
								>
									Contact Us
								</h2>
								<div
									className="flex flex-col text-center text-white max-md:mt-12 md:w-full md:flex-row xl:gap-6 xl:text-2xl"
									data-aos="fade-up"
								>
									<div className="md:w-1/2">
										<p className="mb-3 md:mb-6" data-aos="fade-down">
											Sponsorship
										</p>
										<a
											href="https://wa.me/+6281511115195"
											className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
											data-aos="fade-up"
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
										<p className="mb-3 md:mb-6" data-aos="fade-down">
											Media Partnership
										</p>
										<a
											href="https://wa.me/+6285800318595"
											className="rounded-full bg-c-green px-4 py-2 md:py-4 2xl:px-16"
											data-aos="fade-up"
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
			</>
		</BaseLayout>
	);
}
