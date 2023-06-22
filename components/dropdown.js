import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment } from 'react';
import { HiChevronDown } from 'react-icons/hi2';

export default function DropdownMenu({ name, routes }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center font-medium hover:bg-[#052b6362] transition-all duration-150 rounded-md px-5 py-2">
          {name}
          <HiChevronDown
            className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
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
        <Menu.Items className="absolute left-1/2 translate-x-[-50%] mt-2 w-[140px] origin-top-right divide-y rounded-md ring-opacity-5 focus:outline-none shadow-xl">
          <div className="flex flex-col items-center px-1 py-1 bg-[#082551] rounded-md">
            {routes.map((route) => (
              <Menu.Item>
                <Link
                  className="hover:bg-opacity-100 transition-all duration-150 bg-c-blue bg-opacity-0 p-3 rounded-md w-full text-center font-medium"
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
