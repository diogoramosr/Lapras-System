import React from "react";
import ActiveLink from "./ActiveLink.tsx";
import Image from "next/image";
import Logo from "../public/images/logo.png";

import {
  RiDashboardFill,
  RiHistoryLine,
  RiHome2Fill,
  RiLiveFill,
  RiCalendarFill,
} from "react-icons/ri";
import {
  BsChevronDown,
  BsFillCameraVideoFill,
  BsFillBellFill,
} from "react-icons/bs";

export default function Sidebar() {
  const Menus = [
    {
      label: "Dashboard",
      icon: <RiDashboardFill className="w-5 h-5" />,
      path: "/dashboard",
    },
    {
      label: "Ao vivo",
      icon: <RiLiveFill className="w-5 h-5" />,
      path: "/posts/live/aovivo",
    },
    {
      label: "Histórico",
      icon: <RiHistoryLine className="w-5 h-5" />,
      path: "/posts/historic/historico",
    },
  ];

  return (
    <>
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col  justify-between h-screen transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-zinc-50 dark:bg-gray-600">
        <div class="z-20 fixed top-0 -left-96 lg:left-0 h-screen w-9/12 lg:w-72 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <nav role="navigation" class="p-6">
            <div class="flex items-center gap-4 pb-4">
              <a href="/">
              <Image
                alt="Lapras System logo"
                src={Logo}
                width={200}
                height={80}
              />
              </a>
            </div>
            <hr></hr>
            <div class="mt-2 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
              <ul class="space-y-2 mb-9 px-4 mt-4">
                {Menus.map((nav) => (
                  <>
                    <li className="hover:shadow-md hover:bg-white dark:hover:bg-sky-600 active:bg-white active:shadow-md rounded-md">
                      <span className="text-2xl block float-left">
                        {nav.icon ? nav.icon : <RiDashboardFill />}
                      </span>
                      <ActiveLink href={nav.path}>
                        <a>{nav.label}</a>
                      </ActiveLink>
                    </li>
                  </>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </aside>
    </>
  );
}
