import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

export default function DropdownMenu({ name, routes }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-md px-5 py-2 font-medium transition-all duration-150 hover:bg-[#052b6362]">
          {name}
          <HiChevronDown
            className="-mr-1 ml-2 h-5 w-5 text-violet-200 hover:text-violet-100"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-1/2 mt-2 w-[150px] origin-top-right translate-x-[-50%] divide-y rounded-md shadow-xl ring-opacity-5 focus:outline-none">
          <div className="flex flex-col items-center rounded-md bg-c-white px-1 py-1">
            {routes.map((route) => (
              <Menu.Item>
                <Link
                  className="w-full rounded-md bg-c-blue bg-opacity-0 px-6 py-3 text-center font-medium text-c-blue transition-all duration-150 hover:bg-opacity-100 hover:text-c-white"
                  href={route.path}
                >
                  {route.name}
                </Link>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
