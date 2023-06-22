import React from 'react'

const TImelineCard = ({time, title, desc}) => {
  return (
    <>
        <div className="flex-col">
            <div className={"flex justify-center rounded-full bg-c-white border border-c-orange px-4 py-2"}>
                <h3 className="text-2xl text-c-orange">
                    {time}
                </h3>
            </div>
            <div className="flex justify-start mt-4 mb-2">
                <h3 className="text-2xl text-c-blue font-bold">
                    {title}
                </h3>
            </div>
            <div className="flex justify-start mb-4">
                <h3 className="text-xl text-c-green">
                    {desc}
                </h3>
            </div>
        </div>
    </>
  )
}

export default TImelineCard