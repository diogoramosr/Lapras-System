import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import NavbarDash from "./NavbarDash";
import Image from "next/image";
import Arduino from "../public/images/arduino.png";

export default function Admin() {
  // const Menus = [
  //   {
  //     title: "Dashboard",
  //     submenu: true,
  //     submenuItems: [{ title: "Home", icon: <RiHome2Fill /> }],
  //   },
  //   {
  //     title: "Ao vivo",
  //     icon: <RiLiveFill />,
  //     submenu: true,
  //     submenuItems: [
  //       { title: "COTUCA", icon: <BsFillCameraVideoFill /> },
  //       { title: "Amazonia", icon: <BsFillCameraVideoFill /> },
  //     ],
  //   },
  //   { title: "Histórico", icon: <RiHistoryLine /> },
  //   { title: "Calendário", icon: <RiCalendarFill />, ActiveLink: href="/calendar" },
  // ];
  return (
    <>
      <Head></Head>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default dark:bg-gray-600 bg-zinc-50 h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-zinc-50 dark:bg-gray-600">
          <NavbarDash title="Estatísticas Gerais" />
          <div class="pt-1 2xl:container h-full bg-zinc-50 dark:bg-gray-600 fadeIn">
            <div class="pt-1 2xl:container h-full bg-zinc-50 dark:bg-gray-600">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-6 mx-auto">
                  <div class="flex flex-wrap mt-6 -mx-3">
                    <div class="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                      <div class="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                          <div class="flex flex-wrap -mx-3">
                            <div class="max-w-full px-3 lg:w-1/2 lg:flex-none">
                              <div class="flex flex-col h-full">
                                <p class="pt-2 mb-1 font-semibold">
                                  Built by developers
                                </p>
                                <h5 class="font-bold">Soft UI Dashboard</h5>
                                <p class="mb-12">
                                  From colors, cards, typography to complex
                                  elements, you will find the full
                                  documentation.
                                </p>
                                <a
                                  class="mt-auto mb-0 font-semibold leading-normal text-sm group text-white"
                                  href="javascript:;"
                                >
                                  Read More
                                  <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                                </a>
                              </div>
                            </div>
                            <div class="max-w-full px-3 mt-12 ml-auto text-center lg:mt-0 lg:w-5/12 lg:flex-none">
                              <div class="h-full bg-gradient-to-tl from-purple-700 to-blue-500 rounded-xl">
                                <div class="relative flex items-center justify-center h-full">
                                  <Image
                                    class="relative z-20 w-full pt-6"
                                    src={Arduino}
                                    layout="intrinsic"
                                    alt="Logo"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="w-full max-w-full px-3 lg:w-5/12 lg:flex-none relative">
                      <div class="border-black/12.5 shadow-md relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                        <div class="relative h-full overflow-hidden bg-cover rounded-xl">
                          <span class="absolute top-0 left-0 w-full h-full  dark:bg-gray-500"></span>
                          <div class="relative z-10 flex flex-col flex-auto h-full p-4">
                            <h5 class="pt-2 mb-6 font-bold text-white">
                              Work with the rockets
                            </h5>
                            <p class="text-white">
                              Wealth creation is an evolutionarily recent
                              positive-sum game. It is all about who take the
                              opportunity first.
                            </p>
                            <a
                              class="mt-auto mb-0 font-semibold leading-normal text-white group text-sm"
                              href="javascript:;"
                            >
                              Read More
                              <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}