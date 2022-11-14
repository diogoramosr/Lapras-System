import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import NavbarDash from "./NavbarDash";
import Calendar from "../components/calendar";
import Sphere from "./sphere/Sphere";

export default function Admin() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Dashboard</title>
      </Head>
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
                      <div class="relative flex flex-col min-w-0 break-words bg-red-100 dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <Calendar />
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
