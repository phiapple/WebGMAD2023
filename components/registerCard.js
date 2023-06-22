import Link from 'next/link';

export default function RegisterCard({ date, title, registerUrl, detailUrl }) {
  return (
    <div className="flex aspect-[48/56] w-[400px] flex-col-reverse rounded-lg  bg-c-white bg-event-card-atalk bg-cover bg-center p-6 text-c-white drop-shadow-lg">
      <div>
        <div className="mb-3">{date}</div>
        <h2 className="mb-5 text-3xl font-semibold">{title}</h2>
        <div className="flex gap-4">
          <Link
            href={registerUrl}
            target="_blank"
            className="w-full rounded-full bg-c-orange p-2 text-center font-semibold text-c-white"
          >
            Register Now
          </Link>
          <Link
            href={detailUrl}
            className="w-full rounded-full border-2 border-c-white p-2 text-center font-semibold text-c-white"
          >
            See Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
