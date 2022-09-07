import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import Link from "next/link";
import ActiveLink from "../components/ActiveLink.tsx";
import Arduino from "../public/images/arduino.png";

import Head from "next/head";
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

export default function Admin() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
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

  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <>
      <Head></Head>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 h-screen">
        <aside class="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col  justify-between h-screen transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
          <div class="z-20 fixed top-0 -left-96 lg:left-0 h-screen w-9/12 lg:w-72 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
            <nav role="navigation" class="p-6">
              <div class="flex items-center gap-4 pb-4">
                <Image
                  alt="Lapras System logo"
                  src={Logo}
                  width={200}
                  height={80}
                />
              </div>
              <hr></hr>
              <div class="mt-2 -mx-4 relative overflow-y-auto overflow-x-hidden h-[85vh]">
                <ul class="space-y-2 mb-9 px-4 mt-4">
                  <li className="hover:shadow-md hover:bg-white active:bg-white active:shadow-md rounded-md">
                    <ActiveLink activeClassName="active" href="/">
                      <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2.5">
                        <RiDashboardFill />
                        <a
                          className="nav-link"
                          class="text-md font-semibold flex-1 duration-200"
                        >
                          Home
                        </a>
                      </div>
                    </ActiveLink>
                  </li>
                  <li className="hover:shadow-md hover:bg-white rounded-md">
                    <ActiveLink href="/calendar">
                      <div className="text-black text-sm flex items-center gap-x-4 cursor-pointer p-2.5">
                        <RiDashboardFill />
                        <a
                          className="nav-link"
                          class="text-md font-semibold flex-1 duration-200"
                        >
                          Home
                        </a>
                      </div>
                    </ActiveLink>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
          <div class="sticky top-5 h-16 lg:py-2.5">
            <div class="px-6 flex items-center justify-between space-x-4 2xl:container">
              <h5 hidden class="text-2xl font-medium lg:block">
                Estatísticas Gerais
              </h5>
              <button class="w-12 h-16 -mr-2 border-r lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6 my-auto"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>

              <div class="flex space-x-4">
                <button
                  aria-label="notification"
                  class="w-10 h-10 flex items-center justify-center hover:scale-105 transition duration-200 ease-in-out"
                >
                  <BsFillBellFill class="w-4 h-4" />
                </button>

                <div
                  className="flex items-center relative cursor-pointer"
                  onClick={() => setProfile(!profile)}
                >
                  {profile && (
                    <ul className="p-2 w-40 border-r bg-white absolute rounded right-1 shadow-md top-0 mt-14 ">
                      <li className="text-sm leading-3 tracking-normal py-2">
                        <div className="flex items-center">
                          <span className="ml-1 mb-3 font-semibold">CEO</span>
                        </div>
                        <span className="ml-1 text-sm text-gray-400">
                          Admin
                        </span>
                      </li>
                      <hr className="mt-2 mb-2"></hr>
                      <li className="cursor-pointer text-black text-sm leading-3 tracking-normal py-1 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
                        <div className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-user"
                            width={20}
                            height={20}
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" />
                            <circle cx={12} cy={7} r={4} />
                            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                          </svg>
                          <span className="ml-2">Perfil</span>
                        </div>
                      </li>

                      <li className="cursor-pointer text-black text-sm leading-3 tracking-normal mt-1 py-2 ml-1 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-help-circle"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                          <line x1="12" y1="17" x2="12.01" y2="17"></line>
                        </svg>
                        <span className="ml-2">Ajuda</span>
                      </li>
                      <hr className="mt-2 mb-2"></hr>
                      <li className="cursor-pointer text-black text-sm leading-3 tracking-normal mt-2 py-2 pl-1 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-box-arrow-right"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"
                          />{" "}
                          <path
                            fill-rule="evenodd"
                            d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"
                          />
                        </svg>
                        <span className="ml-2">Sair</span>
                      </li>
                    </ul>
                  )}

                  <div className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                    <img
                      className="rounded-full h-10 w-10 object-cover hover:scale-105 duration-200"
                      src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                      alt="logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-1 2xl:container h-full">
            <div class="flex justify-center items-center">
              <div class="w-full px-6 py-6 mx-auto">
                <div class="flex flex-wrap mt-6 -mx-3">
                  <div class="w-full px-3 mb-6 lg:mb-0 lg:w-7/12 lg:flex-none">
                    <div class="relative flex flex-col min-w-0 break-words bg-white shadow-md rounded-2xl bg-clip-border">
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
                                elements, you will find the full documentation.
                              </p>
                              <a
                                class="mt-auto mb-0 font-semibold leading-normal text-sm group text-slate-500"
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
                    <div class="border-black/12.5 shadow-md relative flex h-full min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white bg-clip-border p-4">
                      <div class="relative h-full overflow-hidden bg-cover rounded-xl">
                        <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
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
    </>
  );
}
