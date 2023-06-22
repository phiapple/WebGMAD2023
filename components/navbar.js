import clsx from 'clsx';
import Link from 'next/link';
import useScrollPosition from '../hooks/useScrollPosition';
import DropdownMenu from './dropdown';

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

export default function Navbar({ fixedBg = false }) {
  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={clsx(
        'text-white fixed top-0 z-[999] w-full font-montserrat transition-all duration-500 left-0',
        scrollPosition > 100 ? 'bg-c-blue shadow-xl' : '',
        fixedBg ? 'bg-c-blue' : ''
      )}
    >
      <div className="container w-full flex items-center justify-between py-4">
        <div className="text-white font-bold text-xl">
          <img
            src="/images/logo-horizontal.png"
            alt="Logo GMAD"
            className="h-[50px]"
          />
        </div>
        <div className="flex gap-2">
          {ROUTES.map((route) => {
            return route.path ? (
              <Link
                className="font-medium hover:bg-[#052b6362] transition-all duration-150 rounded-md px-5 py-2"
                href={route.path}
              >
                {route.name}
              </Link>
            ) : (
              <DropdownMenu
                name={route.name}
                routes={route.routes}
              ></DropdownMenu>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
