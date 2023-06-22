import clsx from "clsx";

export default function CardEvent({bg}) {
  return (
    <div className='mx-auto container bg-c-blue min-h-screen-no-header grid place-items-center'>
          <div className={clsx()}>
            <h2 className='font-belleza text-6xl text-center'>Company Visit</h2>
            <p className='text-center text-lg'>As a part of the Jogjakarta National Case Competition (JNCC), Company Visit aims to give insights and networking experience for the semi-finalists to expand their knowledge on ethical standards and sustainable practices in supply chains with speakers from a reputable company who will also share about their company and working experience.</p>
          </div>
        </div>
  )
}