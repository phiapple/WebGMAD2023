import clsx from 'clsx';
import Link from 'next/link';
import DropdownMenu from './dropdown';

export default function DesktopNavbar({
  fixedBg = false,
  scrollPosition = 0,
  ROUTES = [],
}) {
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
          {ROUTES.map((route, index) => {
            return route.path ? (
              <Link
                className="rounded-md px-5 py-2 font-medium transition-all duration-150 hover:bg-[#052b6362]"
                href={route.path}
                key={index}
              >
                {route.name}
              </Link>
            ) : (
              <DropdownMenu
                name={route.name}
                routes={route.routes}
                key={index}
              ></DropdownMenu>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
