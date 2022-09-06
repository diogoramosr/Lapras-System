import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatTawk from "../components/ChatTawk";

export default function Projeto() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content="Site do sistema Lapras System" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Lapras System" />
        <title>Lapras System - Projeto</title>
      </Head>
      <Navbar />
      <div className="h-full">
        <section class="relative pt-36 lg:pb-14 overflow-hidden bg-black w-full">
          <img
            class="absolute top-0 left-1/2 transform -translate-x-1/2"
            src="/images/fundo_projeto.jpg"
            alt=""
            width="100%"
          />
          <div class="relative z-10 container mx-auto px-4 mb-12">
            <div class="flex flex-wrap -m-6">
              <div class="w-full lg:w-1/2 p-6">
                <div class="lg:max-w-xl">
                  <h1 class="mb-10 font-heading font-bold text-6xl sm:text-7xl text-white">
                    Obtenha a segurança que o ambiente precisa.
                  </h1>
                  <ul class="flex flex-wrap w-full -m-3.5">
                    <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                      <svg
                        class="mr-3"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                        <path
                          d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Segurança</p>
                    </li>
                    <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                      <svg
                        class="mr-3"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                        <path
                          d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Privacidade</p>
                    </li>
                    <li class="p-3.5 flex items-center font-heading font-semibold text-lg text-white">
                      <svg
                        class="mr-3"
                        width="22"
                        height="22"
                        viewbox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="11" cy="11" r="11" fill="#3F3F46"></circle>
                        <path
                          d="M6.7959 11.6006L9.1982 14.0029L15.2039 7.99713"
                          stroke="white"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                      <p>Confiança</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="pl-4 lg:w-1/2 lg:absolute lg:bottom-0 lg:right-0">
            <img
              class="relative z-10 ml-auto transform hover:-translate-x-28 transition ease-in-out duration-500"
              src="/images/dashboard.png"
              alt=""
              width="100%"
            />
          </div>
        </section>
        <div class="py-12 mt-10 bg-white">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center">
              <h2 class="text-center text-black font-semibold tracking-wide uppercase">
                Características
              </h2>
              <p class="mt-2 text-3xl leading-8 text-center font-extrabold tracking-tight text-black sm:text-4xl">
                Por que o Lapras System?
              </p>
            </div>

            <div class="mt-20">
              <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      Competitive exchange rates
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      No hidden fees
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      Transfers are instant
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>

                <div class="relative">
                  <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-black text-white">
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-medium text-zinc-900">
                      Mobile notifications
                    </p>
                  </dt>
                  <dd class="mt-2 ml-16 text-base text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Maiores impedit perferendis suscipit eaque, iste dolor
                    cupiditate blanditiis ratione.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        <hr class="border-gray-200 mt-5 dark:border-gray-700 max-w-[1000px] m-auto"></hr>
        <div class="max-w-[1200px] m-auto mt-14 mb-20">
          <h2 class="text-center text-black font-semibold tracking-wide uppercase">
            Sistemas
          </h2>
          <p class="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
            Tecnologias
          </p>
          <div class="grid grid-cols-2 gap-20 mt-14 md:grid-cols-4 lg:grid-cols-8 items-center justify-items-center">
            <div class="">
              <img src="images/node-js.png" width="90px" />
            </div>

            <div class="">
              <img src="images/arduino.png" width="100px" />
            </div>

            <div class="">
              <img src="images/c++.png" width="90px" />
            </div>

            <div class="">
              <img src="images/nextjs.png" width="100px" />
            </div>

            <div class="">
              <img src="images/js.png" width="90px" />
            </div>

            <div class="pr-3">
              <img src="images/mongodb.png" width="200px" />
            </div>
            <div class="">
              <img src="images/Tailwind.png" width="100px" />
            </div>
            <div class="">
              <img src="images/vscode.png" width="90px" />
            </div>
          </div>
        </div>
        <hr class="border-gray-200 mt-5 dark:border-gray-700 max-w-[1000px] m-auto"></hr>
        <section class="text-gray-700">
          <div class="container px-5 py-16 mx-auto">
            <div class="text-center mb-20">
              <h2 class="text-center text-black font-semibold tracking-wide uppercase">
                Questões
              </h2>
              <p class="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-black sm:text-4xl">
                Perguntas Frequentes
              </p>
            </div>
            <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    How Long is this site live?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold bg-gray-200 rounded-md py-2 px-4 text-black">
                    Can I install/upload anything I want on there?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    How can I migrate to another site?
                  </summary>

                  <span>
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
              <div class="w-full lg:w-1/2 px-4 py-2">
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    Can I change the domain you give me?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    How many sites I can create at once?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
                <details class="mb-7">
                  <summary class="font-semibold  bg-gray-200 rounded-md py-2 px-4 text-black">
                    How can I communicate with you?
                  </summary>

                  <span class="px-4 py-2">
                    Laboris qui labore cillum culpa in sunt quis sint veniam.
                    Dolore ex aute deserunt esse ipsum elit aliqua. Aute quis
                    minim velit nostrud pariatur culpa magna in aute.
                  </span>
                </details>
              </div>
            </div>
          </div>
        </section>

        <div class="bg-zinc-200">
          <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 class="text-3xl font-extrabold tracking-tight text-black sm:text-4xl">
              <span class="block">Pronto para adquirir?</span>
              <span class="block text-sky-700">
                Obtenha o System Lapras hoje.
              </span>
            </h2>
            <div class="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div class="inline-flex rounded-md shadow">
                <a
                  href="/contato"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-md  text-white bg-sky-700 hover:bg-sky-800 "
                >
                  Obter
                </a>
              </div>
              <div class="ml-3 inline-flex rounded-md shadow">
                <a
                  href="/sobre"
                  class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-sky-700 bg-white hover:bg-gray-100"
                >
                  {" "}
                  Saber mais{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <ChatTawk />
    </>
  );
}
