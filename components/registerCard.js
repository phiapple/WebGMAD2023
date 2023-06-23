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
        'bg-c-whitebg-cover m-0 flex aspect-[7/8] h-[40vh] flex-col-reverse rounded-2xl bg-center p-6  text-c-white drop-shadow-lg md:h-[60vh] lg:h-[50vh]',
        bg
      )}
    >
      <div>
        <div className="mb-2">{date}</div>
        <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
        <div className="flex gap-4">
          {registerUrl && (
            <Link
              href={registerUrl}
              target="_blank"
              className="w-full rounded-full bg-c-orange p-2 text-center font-semibold text-c-white"
            >
              Register Now
            </Link>
          )}
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
