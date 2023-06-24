import clsx from 'clsx';
import Link from 'next/link';

export default function RegisterCard({
  date,
  title,
  registerUrl,
  detailUrl,
  bg,
}) {
  return (
    <div
      className={clsx(
        'bg-c-whitebg-cover m-0 flex aspect-[7/8] w-[70vw] max-w-[300px] flex-col-reverse rounded-2xl bg-center p-6 text-c-white  drop-shadow-lg sm:w-[400px] lg:w-[500px]',
        bg
      )}
    >
      <div>
        <div className="md:text-md mb-2 text-sm">{date}</div>
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">{title}</h2>
        <div className="flex gap-4">
          {registerUrl && (
            <Link
              href={registerUrl}
              target="_blank"
              className="md:text-md grid w-full place-items-center rounded-full bg-c-orange p-1.5 text-center text-sm font-semibold text-c-white md:p-2"
            >
              Register Now
            </Link>
          )}
          <Link
            href={detailUrl}
            className="md:text-md grid w-full place-items-center rounded-full border-2 border-c-white p-1.5 text-center text-sm font-semibold text-c-white md:p-2"
          >
            See Detail
          </Link>
        </div>
      </div>
    </div>
  );
}
