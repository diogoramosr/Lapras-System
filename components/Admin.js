import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import Head from "next/head";
import {
  RiDashboardFill,
  RiHistoryLine,
  RiHome2Fill,
  RiLiveFill,
} from "react-icons/ri";
import {
  BsArrowLeftShort,
  BsChevronDown,
  BsFillCameraVideoFill,
} from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";

export default function Admin() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    {
      title: "Dashboard",
      submenu: true,
      submenuItems: [{ title: "Home", icon: <RiHome2Fill /> }, {}],
    },
    {
      title: "Ao vivo",
      icon: <RiLiveFill />,
      submenu: true,
      submenuItems: [
        { title: "COTUCA", icon: <BsFillCameraVideoFill /> },
        { title: "Amazonia", icon: <BsFillCameraVideoFill /> },
      ],
    },
    { title: "Histórico", icon: <RiHistoryLine /> },
  ];

  const [profile, setProfile] = useState(false);
  const [notification, setNotification] = useState(false);

  return (
    <div className="flex">
      <Head></Head>
      <div
        className={`bg-black h-screen p-5 pt-8 ${
          open ? "w-64" : "w-20"
        } duration-300 relative`}
      >
        <BsArrowLeftShort
          className={`bg-white text-black text-3xl absolute top-9 -right-3 rounded-full border border-dark-purple cursor-pointer ${
            !open && "rotate-180"
          } `}
          onClick={() => setOpen(!open)}
        />

        <div className="inline-flex">
          <Image alt="Lapras System logo" src={Logo} width={200} height={80} />
        </div>
        <ul className="pt-1">
          {Menus.map((menu, index) => (
            <>
              <li
                key={index}
                className={`text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-white rounded-md ${
                  menu.spacing ? "mt-9" : "mt-2"
                } mt-2`}
              >
                <span className="text-2xl block float-left">
                  {menu.icon ? menu.icon : <RiDashboardFill />}
                </span>
                <span
                  className={`text-base font-medium flex-1 duration-200 ${
                    !open && "hidden"
                  }`}
                >
                  {menu.title}
                </span>
                {menu.submenu && open && (
                  <BsChevronDown
                    className={`${submenuOpen && "rotate-180"} duration-200`}
                    onClick={() => setSubmenuOpen(!submenuOpen)}
                  />
                )}
              </li>

              {menu.submenu && submenuOpen && open && (
                <ul>
                  {menu.submenuItems.map((submenuItems, index) => (
                    <li
                      key={index}
                      className="text-gray-300 text-md flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white rounded-md"
                    >
                      {submenuItems.icon}
                      {submenuItems.title}
                    </li>
                  ))}
                </ul>
              )}
            </>
          ))}
        </ul>
      </div>
      <div className="h-full w-full">
        <nav className=" xl:block p-5">
          <div className="mx-auto container px-6 py-2 xl:py-0">
            <div className="flex items-center justify-between">
              <div>
                <div className="w-32 p-1">
                  <span className="font-semibold text-2xl">
                    Estatísticas Gerais
                  </span>
                </div>
              </div>
              <div className="flex">
                <div className="xl:flex items-center">
                  <div className="ml-6 relative">
                    <div
                      className="flex items-center relative cursor-pointer"
                      onClick={() => setNotification(!notification)}
                    >
                      {notification && (
                        <ul className=" p-2 w-52 border-r bg-red-100 absolute rounded right-16 shadow top-0 mt-16 ">
                          <li className="text-sm leading-3 tracking-normal py-2">
                            <div className="flex items-center">
                              <span className="ml-1 mb-3 font-semibold">
                                Notificações
                              </span>
                            </div>
                            <div className="grid grid-cols-1 space-y-2">
                              <div className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                <img
                                  className="rounded-full h-10 w-10 object-cover"
                                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                                  alt="logo"
                                />
                                <div className="text-left px-2">
                                  <span className="font-semibold">
                                    Gabriel Perozim
                                  </span>
                                  <span className="">1:30</span>
                                  <p className="text-gray-500">
                                    Eu só quero um emprego pfvr
                                  </p>
                                </div>
                              </div>

                              <div className="flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                                <img
                                  className="rounded-full h-10 w-10 object-cover hover:scale-105 duration-200"
                                  src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                                  alt="logo"
                                />
                              </div>
                            </div>
                          </li>
                        </ul>
                      )}
                      <div>
                        <svg
                          className={`text-3xl absolute top-3 right-16 cursor-pointer hover:scale-105 ${notification} `}
                          onClick={() => setNotification(!notification)}
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                        >
                          <path d="M15.137 3.945c-.644-.374-1.042-1.07-1.041-1.82v-.003c.001-1.172-.938-2.122-2.096-2.122s-2.097.95-2.097 2.122v.003c.001.751-.396 1.446-1.041 1.82-4.667 2.712-1.985 11.715-6.862 13.306v1.749h20v-1.749c-4.877-1.591-2.195-10.594-6.863-13.306zm-3.137-2.945c.552 0 1 .449 1 1 0 .552-.448 1-1 1s-1-.448-1-1c0-.551.448-1 1-1zm3 20c0 1.598-1.392 3-2.971 3s-3.029-1.402-3.029-3h6z" />
                        </svg>
                      </div>
                    </div>

                    <div
                      className="flex items-center relative  cursor-pointer"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded -right-5 shadow top-0 mt-16 ">
                          <li className="text-sm leading-3 tracking-normal py-2">
                            <div className="flex items-center">
                              <span className="ml-1 mb-3 font-semibold">
                                CEO
                              </span>
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
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
