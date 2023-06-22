import clsx from 'clsx';
import Link from 'next/link';
import useScrollPosition from '../hooks/useScrollPosition';

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
    icon: <BsInstagram className="h-5 w-5" />,
  },
  {
    name: '@aju6891t',
    url: '#',
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

const ROUTES = [
  { name: 'Home', path: '/' },
  {
    name: 'Events',
    routes: [
      { name: 'NAO', path: '/events/nao' },
      { name: 'Junior NAO', path: '/events/junior-nao' },
      { name: 'JNCC', path: '/events/jncc' },
      { name: 'A-Talk', path: '/events/atalk' },
      { name: 'GRAND', path: '/events/grand' },
      { name: 'Comvis', path: '/events/company-visit' },
    ],
  },

  { name: 'Register', path: '/register' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Footer({ fixedBg = false }) {
  const scrollPosition = useScrollPosition();

  return (
    <footer
      className={clsx(
        'left-0 z-[999] h-[82px] w-full font-montserrat text-white transition-all duration-500',
        scrollPosition > 100 ? 'bg-c-blue shadow-xl' : '',
        fixedBg ? 'bg-c-blue' : ''
      )}
    >
      <div className="container flex w-full items-center justify-between py-4">
        <div className="text-xl font-bold text-white">
          <img
            src="/images/logo-horizontal.png"
            alt="Logo GMAD"
            className="h-[50px]"
          />
        </div>

        <div className="flex gap-10">
          {CONTACTS.map((contact) => (
            <Link href={contact.url} target="_blank">
              {contact.icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
