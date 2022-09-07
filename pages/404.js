import React from "react";
import Link from "next/link";
export default function NotFound() {
  return (
    <>
      <div class="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16">
        <div class="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0">
          <div class="relative">
            <div class="absolute">
              <div class="">
                <h1 class="my-2 text-black  font-bold text-2xl">
                  Desculpe, não foi possível encontrar esta página.
                </h1>
                <p class="mt-3 mb-5 text-gray-700">
                  Me desculpe por isso! Por favor, visite nossa página inicial
                  para chegar onde você precisa ir.
                </p>
                <Link href="/">
                  <a class="sm:w-full lg:w-auto my-2 border rounded md py-4 px-8 text-center bg-sky-700 text-white hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-opacity-50">
                    Voltar à página inicial!
                  </a>
                </Link>
              </div>
            </div>
            <div>
              <img src="https://i.ibb.co/G9DC8S0/404-2.png" />
            </div>
          </div>
        </div>
        <div>
          <img src="https://i.ibb.co/ck1SGFJ/Group.png" />
        </div>
      </div>
    </>
  );
}
