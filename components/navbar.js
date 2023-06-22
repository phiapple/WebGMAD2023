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
    <nav
      className={clsx(
        'fixed left-0 top-0 z-[999] w-full font-montserrat text-white transition-all duration-500',
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
        <div className="flex gap-2">
          {ROUTES.map((route) => {
            return route.path ? (
              <Link
                className="rounded-md px-5 py-2 font-medium transition-all duration-150 hover:bg-[#052b6362]"
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
