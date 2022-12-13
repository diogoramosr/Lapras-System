import React, { useState } from "react";
import ActiveLink from "./ActiveLink.tsx";
import Image from "next/image";
import Logo from "../public/images/logo.png";


export default function Sidebar() {
  const Menus = [
    {
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      label: "Ao vivo",
      path: "/posts/live/aovivo",
    },
    {
      label: "Gráficos",
      path: "/posts/chart/graficos",
    },
    {
      label: "Previsão",
      path: "/posts/forecast/previsao",
    },
    {
      label: "Histórico",
      path: "/posts/historic/historico",
    },
  ];

  return (
    <>
      <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%] bg-zinc-50 dark:bg-gray-600">
        <div className="fixed top-0 lg:relative w-[270px] h-screen hidden lg:block lg:-left-6">
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
                    <ActiveLink href={nav.path}>
                      <a>
                        <li className="hover:shadow-md hover:bg-white dark:hover:bg-sky-600 active:bg-white active:shadow-md rounded-md p-3 flex items-center justify-start gap-3">
                          <span className="text-2xl block float-left shadow-md rounded-md p-2">
                            {nav.icon ? nav.icon : <RiDashboardFill />}
                          </span>
                          {nav.label}
                        </li>
                      </a>
                    </ActiveLink>
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
