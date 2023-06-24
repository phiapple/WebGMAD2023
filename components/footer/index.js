import clsx from 'clsx';
import Link from 'next/link';
import useScrollPosition from '../../hooks/useScrollPosition';

import {
  BsLine,
  BsLinkedin,
  BsYoutube,
  BsWhatsapp,
  BsInstagram,
} from 'react-icons/bs';

const CONTACTS = [
  {
    name: '@gmad.ugm',
    url: 'https://instagram.com/gmad.ugm',
    icon: <BsInstagram className="h-4 w-4" />,
  },
  {
    name: '@aju6891t',
    url: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=aju6891t',
    icon: <BsLine className="h-4 w-4" />,
  },
  {
    name: 'Gadjah Mada Accounting Days',
    url: 'https://www.linkedin.com/company/gmad.ugm/',
    icon: <BsLinkedin className="h-4 w-4" />,
  },
  {
    name: 'Gadjah Mada Accounting Days',
    url: 'https://www.youtube.com/@gadjahmadaaccountingdays4153',
    icon: <BsYoutube className="h-4 w-4" />,
  },
];

export default function Footer({ fixedBg = false }) {
  const scrollPosition = useScrollPosition();

  return (
    <footer
      className={clsx(
        'left-0 z-[999] h-fit w-full py-4 font-montserrat text-white transition-all duration-500 md:h-[82px] md:py-0',
        scrollPosition > 100 ? 'bg-c-blue shadow-xl' : '',
        fixedBg ? 'bg-c-blue' : ''
      )}
    >
      <div className="container flex w-full flex-col items-start justify-between py-4 md:flex-row md:items-center">
        <div className="text-xl font-bold text-white">
          <img
            src="/images/logo-horizontal.png"
            alt="Logo GMAD"
            className="h-[50px]"
          />
        </div>

        {/* desktop */}
        <div className="hidden gap-10 md:flex">
          {CONTACTS.map((contact) => (
            <Link href={contact.url} target="_blank">
              {contact.icon}
            </Link>
          ))}
        </div>

        {/* mobile */}
        <div className="mt-8 flex flex-col gap-4 md:hidden">
          {CONTACTS.map((contact) => (
            <Link
              href={contact.url}
              target="_blank"
              className="flex items-center gap-2"
            >
              {contact.icon}
              <div className="text-sm font-medium">{contact.name}</div>
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
