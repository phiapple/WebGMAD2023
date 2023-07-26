import Link from 'next/link';
import Footer from '../components/footer';
import Navbar from '../components/navbar';
import { AiFillInstagram } from 'react-icons/ai';
import { BsLine, BsLinkedin, BsYoutube, BsWhatsapp, BsInstagram } from 'react-icons/bs';
import BaseLayout from '../components/baseLayout';

const CONTACTS = [
	{
		name: '@gmad.ugm',
		url: 'https://instagram.com/gmad.ugm',
		icon: <BsInstagram className="h-5 w-5" />,
	},
	{
		name: '@aju6891t',
		url: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=aju6891t',
		icon: <BsLine className="h-5 w-5" />,
	},
	{
		name: 'Gadjah Mada Accounting Days',
		url: 'https://www.linkedin.com/company/gmad.ugm/',
		icon: <BsLinkedin className="h-5 w-5" />,
	},
	{
		name: 'Gadjah Mada Accounting Days',
		url: 'https://www.youtube.com/@gadjahmadaaccountingdays4153',
		icon: <BsYoutube className="h-5 w-5" />,
	},
];

export default function Contact() {
	return (
		<BaseLayout seoTitle="GMAD • Contact Us">
			<div>
				<Navbar fixedBg></Navbar>
				{/* for navbar placeholder */}
				<div className="h-[82px]"></div>

				{/* content */}
				<div className="flex flex-col bg-c-blue text-c-white">
					<div className="min-h-screen-no-header-footer bg-c-blue">
						<div className="relative h-[40vh] bg-c-blue bg-opacity-10 bg-[url('/images/contact-map.png')]">
							<div className="container relative h-full">
								<h1 className="absolute bottom-8 font-belleza text-6xl drop-shadow-md">
									Contact Us
								</h1>
							</div>
						</div>

						<div className="container relative mt-16 flex-1 font-medium">
							{/* floating right */}
							<div className=" top-0 rounded-xl bg-c-white px-8 py-12 text-c-blue drop-shadow-lg lg:absolute lg:right-[15%] lg:translate-y-[-50%]">
								<h2 className="text-xl font-bold">Contact Us At</h2>
								<div className="mt-6">
									<h3 className="mb-2 border-b-2 border-b-c-blue font-semibold">Sponsorship</h3>
									<Link
										href="https://wa.me/6281511115195"
										target="_blank"
										className="flex w-64 items-center justify-center gap-2 rounded-full bg-c-green p-2 text-2xl font-semibold text-c-white drop-shadow-md"
									>
										<BsWhatsapp className="h-6 w-6"></BsWhatsapp>
										<div>Inneke Patricia</div>
									</Link>
								</div>
								<div className="mt-6">
									<h3 className="mb-2 border-b-2 border-b-c-blue font-semibold">
										Media Partnership
									</h3>
									<Link
										href="https://wa.me/6285800318595"
										target="_blank"
										className="flex w-64 items-center justify-center gap-2 rounded-full bg-c-green p-2 text-2xl font-semibold text-c-white drop-shadow-md"
									>
										<BsWhatsapp className="h-6 w-6"></BsWhatsapp>
										<div>Listya Nur Aini</div>
									</Link>
								</div>
							</div>

							<div className="hidden lg:block">
								<h2 className="text-xl font-semibold">Also Find Us At</h2>
								<div className="h-4"></div>
								<div className="flex flex-col gap-4">
									{CONTACTS.map((contact) => (
										<Link
											key={contact.url}
											href={contact.url}
											target="_blank"
											className="flex items-center gap-3"
										>
											{contact.icon}
											<div className="font-medium">{contact.name}</div>
										</Link>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* footer */}
				<Footer fixedBg></Footer>
			</div>
		</BaseLayout>
	);
}
