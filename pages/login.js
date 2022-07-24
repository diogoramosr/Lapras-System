import React, { useState } from "react";
import Head from "next/head";
//import Cookies from "js-cookie";
import { useRouter } from "next/router"

export default function Login() {

  const [username,setUsername] = useState("")
  const [senha,setSenha] = useState("")

  const rotas = useRouter()

  function handleSubmit(e){
    e.preventDefault()
/*
    const options = {
      expires: 10/24*60
    }

    Cookies.set("username",username, options)
    Cookies.set("senha",senha, options)*/

    rotas.push("/PageGraficos")
  }

  return (
    <>
      <Head></Head>

      <div class="max-w-screen-xl px-4 py-6 mx-auto sm:px-6 lg:px-8">
        <div class="max-w-lg mx-auto">
          <div className="flex justify-center items-center">
            <img src="images/logo.png" className="" width={240} />
          </div>

          <form action="" class="p-8 mt-3 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p class="text-lg font-medium">Sign in to your account</p>

            <div>
              <label for="email" class="text-sm font-medium">
                Email
              </label>

              <div class="relative mt-1">
                <input
                  type="email"
                  name="username"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter email"
                  onInput={(e)=>setUsername(e.target.value)}
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
                Password
              </label>

              <div class="relative mt-1">
                <input
                  type="password"
                  name="senha"
                  class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                  placeholder="Enter password"
                  onInput={(e)=>setSenha(e.target.value)}
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
            <div class="text-right">
              <a href="#" class="text-blue-400">
                Forgot your password?
              </a>
            </div>

            <button
              type="submit"
              class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
              onClick={handleSubmit}
            >
              Sign in
            </button>
            <div class="mt-6 ">
              <div class="my-2">
                <div class="w-full flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    class="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer  checked:bg-sky-700"
                    checked=""
                  />
                  <label class="ml-2 text-sm" for="rememberMe">
                    Remember this device
                  </label>
                </div>
              </div>
            </div>
            <p class="text-sm mt-3 text-left">
              By continuing you accept our
              <a href="#" class="text-blue-400 ml-1">
                Terms of Use
              </a>{" "}
              and
              <a href="#" class="text-blue-400 ml-1">
                Privacy Policy
              </a>
              .
            </p>
          </form>
          <div>
            <p>{username}</p>
            <p>{senha}</p>
          </div>
        </div>
      </div>
    </>
  );
}
