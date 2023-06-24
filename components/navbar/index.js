import clsx from 'clsx';
import Link from 'next/link';
import useScrollPosition from '../../hooks/useScrollPosition';
import DropdownMenu from './dropdown';
import MobileNavbar from './mobileNavbar';
import DesktopNavbar from './desktopNavbar';

const ROUTES = [
  { name: 'Home', path: '/' },
  {
    name: 'Events',
    routes: [
      { name: 'NAO', path: '/events/nao' },
      { name: 'Junior NAO', path: '/events/junior-nao' },
      { name: 'JNCC', path: '/events/jncc' },
      { name: 'A-Talk', path: '/events/atalk' },
      { name: 'Training', path: '/events/training' },
      { name: 'GRAND', path: '/events/grand' },
      { name: 'Comvis', path: '/events/company-visit' },
    ],
  },

  { name: 'Register', path: '/register' },
  { name: 'Contact Us', path: '/contact' },
];

export default function Navbar({ fixedBg = false }) {
  const scrollPosition = useScrollPosition();

  return (
    <>
      <div className="sticky top-0 z-[99] block md:hidden">
        <MobileNavbar
          fixedBg={fixedBg}
          scrollPosition={scrollPosition}
          ROUTES={ROUTES}
        ></MobileNavbar>
      </div>
      <div className="sticky top-0 z-[99] hidden md:block">
        <DesktopNavbar
          fixedBg={fixedBg}
          scrollPosition={scrollPosition}
          ROUTES={ROUTES}
        ></DesktopNavbar>
      </div>
    </>
  );
}
