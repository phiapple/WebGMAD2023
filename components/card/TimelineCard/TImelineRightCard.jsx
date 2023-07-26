import React from 'react';

const TImelineCard = ({ time, title, desc }) => {
	return (
		<>
			<div className="max-w-[158px] flex-col md:max-w-[666px]" data-aos="fade-left">
				<div
					className={
						'flex items-center justify-start rounded-full border border-c-orange bg-c-white px-4 py-0 text-start md:px-4 md:py-2'
					}
				>
					<h3 className="text-lg text-c-orange sm:text-xl md:text-2xl">{time}</h3>
				</div>
				<div className="mb-2 mt-4 flex justify-start">
					<h3 className="text-xl font-bold text-c-blue md:text-2xl ">{title}</h3>
				</div>
				<div className="mb-4 flex justify-start">
					<h3 className="text-xl text-c-green">{desc}</h3>
				</div>
			</div>
		</>
	);
};

export default TImelineCard;
