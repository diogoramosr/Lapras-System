import Head from "next/head";
import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export default function Home() {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="w-screen h-[80px] z-10 bg-black fixed">
      <Head></Head>
      <div className="px-2 flex justify-between m-auto max-w-6xl items-center text-white h-full">
        <div className="flex items-center">
          <p>
            <a href="/"><img src="images/logo.png" width={200} height={200} /></a>
          </p>
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex">
            <li><a href="/">Home</a></li>
            <li><a href="/projeto">Projeto</a></li>
            <li><a href="/sobre">Sobre</a></li>
            <li><a href="/contato">Contato</a></li>
          </ul>
          <div className="hidden md:flex pr-4">
            <a href="">
                <button className="border-none bg-sky-700 rounded-md hover:bg-gradient-to-r from-sky-700 to-blue-500 text-center text-white mr-4 h-8 w-20">
                  Login
                </button>
            </a>
          </div>
        </div>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <MenuIcon className="w-5 " /> : <XIcon className="w-5" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute w-full px-8 text-center text-white bg-black"
        }
      >
        <li className=""><a href="">Home</a></li>
        <li className=""><a href="">Projeto</a></li>
        <li className=""><a href="">Sobre</a></li>
        <li className=""><a href="">Contato</a></li>
        <div className="">
          <button className="mb-6 bg-sky-700 h-8 w-20">Login</button>
        </div>
      </ul>
    </div>
  );
}
