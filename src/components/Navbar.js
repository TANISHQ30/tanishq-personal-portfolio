import React from 'react';
import { Disclosure, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar({ parentToChild }) {
  const navigation = [
    {
      name: 'About',
      href: '/about',
      current: parentToChild == 'About' ? true : false,
    },
    {
      name: 'Experience',
      href: '/experience',
      current: parentToChild == 'Experience' ? true : false,
    },
    {
      name: 'Projects',
      href: '/projects',
      current: parentToChild == 'Projects' ? true : false,
    },
    {
      name: 'Contact',
      href: '/contact',
      current: parentToChild == 'Contact' ? true : false,
    },
    // {
    //   name: 'Contact',
    //   href: '/contact',
    //   current: parentToChild == 'Contact' ? true : false,
    // },
  ];

  return (
    <Disclosure as="nav" className="bg-black">
      {({ open }) => (
        <>
          <div className="mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:bg-gray-100 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/">
                    <span className="text-3xl text-white font-bold">
                      Tanishq
                    </span>
                    <span className="text-3xl text-red-600 font-bold">.</span>
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map(item => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-stone-700 text-stone-200 border-solid font-bold'
                            : 'text-stone-500 hover:bg-stone-900 hover:text-stone-400',
                          'px-3 py-2 rounded-lg text-sm font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <button className="bg-stone-300 text-stone-700 hover:bg-white hover:text-black font-bold px-4 rounded inline-flex items-center">
                      Contact me
                      <FiArrowUpRight size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Transition
            enter="transition duration-500 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map(item => (
                  <Disclosure.Button
                    as="a"
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-200 text-gray-800'
                        : 'text-gray-500 hover:bg-gray-200 hover:text-gray-800',
                      'block px-3 py-2 rounded-lg text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
}
