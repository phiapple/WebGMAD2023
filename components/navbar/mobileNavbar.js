import clsx from 'clsx';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

export default function MobileNavbar({ fixedBg = false, scrollPosition = 0, ROUTES = [] }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	}, [isOpen]);

	return (
		<div>
			<nav
				className={clsx(
					'fixed left-0 top-0 z-[999] w-full font-montserrat text-white transition-all duration-500',
					scrollPosition > 100 ? 'bg-c-blue shadow-xl' : '',
					fixedBg ? 'bg-c-blue' : ''
				)}
			>
				<div className="container flex w-full items-center justify-between py-4">
					<div className="text-xl font-bold text-white">
						<img src="/images/logo-horizontal.png" alt="Logo GMAD" className="h-[50px]" />
					</div>
					<FiMenu className="h-8 w-8 cursor-pointer" onClick={() => setIsOpen(true)}></FiMenu>
				</div>
			</nav>

			{/* overlay full screen */}
			<div
				className={clsx(
					'fixed z-[1000] h-screen w-screen overflow-y-auto bg-c-blue pb-20 text-white transition-all duration-200',
					isOpen ? 'left-0 opacity-100' : 'opcaity-0 left-[-120%]'
				)}
			>
				{isOpen ? (
					<FiX
						className="fixed right-0 top-0 mx-4 my-6 h-8 w-8 cursor-pointer"
						onClick={() => setIsOpen(false)}
					></FiX>
				) : null}
				<div className="h-header"></div>
				<div className="container mx-auto my-12 flex max-w-[330px] flex-col gap-8 font-semibold">
					<div className="flex justify-start">
						<img
							src="/images/logo-horizontal.png"
							alt="Logo GMAD"
							className="h-[50px] object-contain"
						/>
					</div>
					<div className="flex flex-col gap-6">
						{ROUTES.map((route, i) =>
							route.path ? (
								<Link key={i} href={route.path}>
									{route.name}
								</Link>
							) : (
								<>
									<div>{route.name}</div>
									<div className="ml-6 flex flex-col gap-6">
										{route.routes.map(
											(route, j) =>
												route.path && (
													<Link key={j} href={route.path}>
														{route.name}
													</Link>
												)
										)}
									</div>
								</>
							)
						)}
						{/* <div>NAO</div>
            <div>ATalk</div>
            <div>Events</div>
            <div className="ml-6 flex flex-col gap-6">
              <div>ATalk</div>
              <div>ATalk</div>
              <div>ATalk</div>
              <div>ATalk</div>
            </div> */}
					</div>
				</div>
			</div>
		</div>
	);
}
