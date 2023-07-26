import React from 'react'

const TImelineCard = ({time, title, desc}) => {
  return (
    <>
        <div className="flex-col max-w-[158px] md:max-w-[666px] items-end text-end" data-aos="fade-right">
            <div className={"flex justify-center rounded-full bg-c-white border border-c-orange md:px-4 px-2 md:py-2 py-0 text-center items-center"}>
                <h3 className="md:text-2xl sm:text-xl text-lg text-c-orange">
                    {time}
                </h3>
            </div>
            <div className="flex justify-end mt-4 mb-2 items-end">
                <h3 className="md:text-2xl text-xl text-c-blue font-bold ">
                    {title}
                </h3>
            </div>
            {/* <div className="flex justify-end mb-4">
                <h3 className="text-xl text-c-green">
                    {desc}
                </h3>
            </div> */}
        </div>
    </>
  )
}

export default TImelineCard