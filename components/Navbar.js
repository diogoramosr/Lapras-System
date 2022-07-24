import Head from "next/head";
import React, { useState, useEffect, useRef } from "react";

export default function Home() {
  const [state, setState] = useState(false);


  
  return (
    <>
    <Head></Head>
      <nav className="bg-black w-full top-0 z-20">
        <div className="items-center px-4 max-w-screen-xl mx-auto h-full lg:flex lg:px-8">
          <div className="flex items-center justify-between py-3 lg:py-4 lg:block">
            <a href="/">
              <img
                src="images/logo.png"
                width={200}
                height={130}
                alt="Float UI logo"
              />
            </a>
            <div className="lg:hidden">
              <button
                className="text-gray-700 outline-none p-2 rounded-md focus:border-white focus:border"
                onClick={() => setState(!state)}
              >
                {state ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`flex-1 justify-between flex-row-reverse lg:overflow-visible lg:flex lg:pb-0 lg:pr-0 lg:h-auto ${
              state ? "h-screen pb-20 overflow-auto pr-4" : "hidden"
            }`}
          >
            <div className="">
              <ul className="flex flex-col text-center space-x-0 lg:space-x-6 lg:flex-row">
                <li className="lg:mt-0 lg:mb-0 ">
                  <a href="/" className="text-white hover:text-sky-700">
                    Home
                  </a>
                </li>
                <li className="mt-8 lg:mt-0 lg:mb-0">
                  <a href="/projeto" className="text-white hover:text-sky-700">
                    Projeto
                  </a>
                </li>
                <li className="mt-8 lg:mt-0 lg:mb-0">
                  <a
                    href="/sobre"
                    className="text-white hover:text-sky-700"
                  >
                    Sobre
                  </a>
                </li>
                <li className="mt-8 lg:mt-0 lg:mb-0">
                  <a
                    href="/contato"
                    className="text-white hover:text-sky-700"
                  >
                    Contato
                  </a>
                </li>
                <li className="mt-8 lg:mt-0">
                  <a
                    href="/login"
                    className="py-3 px-4 text-center text-white bg-sky-700 hover:bg-gradient-to-r from-sky-700 to-blue-500 rounded-md shadow block lg:inline"
                  >
                    Login
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
