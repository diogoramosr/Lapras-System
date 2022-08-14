import React, { useState } from "react";
import Head from "next/head";

export default function Login() {
  return (
    <>
      <Head></Head>

      <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <div className="flex justify-center items-center">
            <a href="/">
            <img src="images/logo.png" className="" width={240}/>
            </a>
          </div>

          <form action="/api/login" method="post" class="p-8 mt-3 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p class="text-lg font-medium">Inicie sessão na sua conta</p>

            <div>
              <label for="email" class="text-sm font-medium">
                Email
              </label>

              <div class="relative mt-1">
                <input
                  type="email"
                  name="email"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Email"
                  required
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label for="password" class="text-sm font-medium">
                Senha
              </label>

              <div class="relative mt-1">
                <input
                  type="password"
                  name="password"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Senha"
                  required
                />

                <span class="absolute inset-y-0 inline-flex items-center right-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                </span>
              </div>
            </div>
            <div>
              <a href="#" class="text-sky-600">
                Esqueceu a senha ?
              </a>
              <div className="flex items-center mt-3">
                <input
                  type="checkbox"
                  name="rememberMe"
                  class="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer  checked:bg-sky-700"
                  checked=""
                />
                <label class="ml-2 text-sm" for="rememberMe">
                  Lembrar de mim
                </label>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                class="block w-32 px-5 py-3 text-sm font-medium  text-white bg-sky-700 rounded-lg"
                value='Login'
              >
                Login
              </button>
            </div>
            <div class="mt-6 ">
              <div class="my-2"></div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
