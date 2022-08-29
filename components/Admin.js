import React, { useState } from "react";
import Image from "next/image";
import Logo from "../public/images/logo.png";
import Head from "next/head";
import { RiDashboardFill } from "react-icons/ri";
import { BsArrowLeftShort, BsChevronDown } from "react-icons/bs";
import { AiFillEnvironment } from "react-icons/ai";

export default function Admin() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const Menus = [
    { title: "Dashboard", submenu: true, submenuItems: [ {title: "Home"}, {} ],},
    { title: "Pages" },
    { title: "Media", spacing: true },
    {
      title: "Projetos",
      submenu: true,
      submenuItems: [
        { title: "Projetos" },
        { title: "Cadastrar" },
        { title: "Editar" },
      ],
    },
    { title: "Histórico" },
    { title: "Inbox" },
  ];

  const [profile, setProfile] = useState(false);

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
                      className="text-gray-300 text-sm flex items-center gap-x-4 cursor-pointer p-2 px-5 hover:bg-white rounded-md"
                    >
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
            <div className="flex items-center justify-end">
              <div className="flex">
                <div className="xl:flex items-center">
                  <div className="ml-6 relative">
                    <div
                      className="flex items-center relative"
                      onClick={() => setProfile(!profile)}
                    >
                      {profile && (
                        <ul className="p-2 w-40 border-r bg-white absolute rounded -right-5 shadow top-0 mt-16 ">
                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal py-2 hover:text-indigo-700 focus:text-indigo-700 focus:outline-none">
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
                              <span className="ml-2">My Profile</span>
                            </div>
                          </li>

                          <li className="cursor-pointer text-gray-600 text-sm leading-3 tracking-normal mt-2 py-2 hover:text-indigo-700 flex items-center focus:text-indigo-700 focus:outline-none">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="icon icon-tabler icon-tabler-settings"
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
                              <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                              <circle cx={12} cy={12} r={3} />
                            </svg>
                            <span className="ml-2">Account Settings</span>
                          </li>
                        </ul>
                      )}
                      <div className="cursor-pointer flex text-sm border-2 border-transparent rounded-full focus:outline-none focus:border-white transition duration-150 ease-in-out">
                        <img
                          className="rounded-full h-10 w-10 object-cover"
                          src="https://tuk-cdn.s3.amazonaws.com/assets/components/horizontal_navigation/hn_2.png"
                          alt="logo"
                        />
                      </div>
                      <div className="ml-2 text-gray-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon icon-tabler icon-tabler-chevron-down cursor-pointer"
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
                          <polyline points="6 9 12 15 18 9" />
                        </svg>
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
