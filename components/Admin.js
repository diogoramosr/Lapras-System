import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import NavbarDash from "./NavbarDash";
import Image from "next/image";
import Arduino from "../public/images/arduino.png";
import Sphere from "./sphere/Sphere";

export default function Admin() {
  return (
    <>
      <Head></Head>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default dark:bg-gray-600 bg-zinc-50 h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-zinc-50 dark:bg-gray-600">
          <NavbarDash title="Estatísticas Gerais" />
          <div class="2xl:container h-screen bg-yellow-500 dark:bg-gray-600 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-600">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-6 mx-auto">
                  <div class="flex flex-wrap mt-3 -mx-3">
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
