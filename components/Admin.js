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
    { title: "Dashboard" },
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
    { title: "Historico" },
    { title: "Inbox" },
    { title: "Settings" },
  ];

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
      <div className="p-7">
        <h1 className="text-2xl font-semibold">Home Page</h1>
      </div>
    </div>
  );
}
