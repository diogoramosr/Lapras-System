import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ChatTawk from "../components/ChatTawk";

export default function Sobre() {
  return (
    <>
      <Head></Head>
      <Navbar />

      <section class="dark:bg-[#303030] bg-white">
        <div class="max-w-screen-xl px-4 py-32 mx-auto lg:h-screen lg:items-center lg:flex">
          <div class="max-w-2xl mx-auto text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl dark:text-white text-black">
              O Inicio de tudo.
              <strong class="font-extrabold w-[700px] text-sky-700 sm:block">
                A criação do Lapras System.
              </strong>
            </h1>
          </div>
        </div>
      </section>

      <section className="mt-14">
        <div className="container px-6 py-10 mx-auto">
          <h2 class="text-center dark:text-white text-black font-semibold tracking-wide uppercase">
            Características
          </h2>
          <p class="mt-2 text-3xl leading-8 text-center font-extrabold tracking-tight dark:text-white text-black sm:text-4xl">
            Por que o Lapras System?
          </p>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-2">
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Application UI v2.0.0{" "}
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    Latest
                  </span>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                  Released on January 13th, 2022
                </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &amp;
                  Marketing pages.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    class="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>{" "}
                  Download ZIP
                </a>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Figma v1.3.0
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                  Released on December 7th, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-300">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.2.2
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                  Released on December 2nd, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-300">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
            <ol class="relative border-l border-gray-200 dark:border-gray-700">
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Application UI v2.0.0{" "}
                  <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                    Latest
                  </span>
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                  Released on January 13th, 2022
                </time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-300">
                  Get access to over 20+ pages including a dashboard layout,
                  charts, kanban board, calendar, and pre-order E-commerce &amp;
                  Marketing pages.
                </p>
                <a
                  href="#"
                  class="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                >
                  <svg
                    class="mr-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>{" "}
                  Download ZIP
                </a>
              </li>
              <li class="mb-10 ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Figma v1.3.0
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                  Released on December 7th, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-300">
                  All of the pages and components are first designed in Figma
                  and we keep a parity between the two versions even as we
                  update the project.
                </p>
              </li>
              <li class="ml-6">
                <span class="flex absolute -left-3 justify-center items-center w-6 h-6 bg-blue-200 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg
                    aria-hidden="true"
                    class="w-3 h-3 text-blue-600 dark:text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
                <h3 class="mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                  Flowbite Library v1.2.2
                </h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-400">
                  Released on December 2nd, 2021
                </time>
                <p class="text-base font-normal text-gray-500 dark:text-gray-300">
                  Get started with dozens of web components and interactive
                  elements built on top of Tailwind CSS.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </section>

      <hr class="border-gray-200 mt-5 dark:border-gray-700 max-w-[1000px] m-auto"></hr>

      <section class="bg-white dark:bg-[#121212] mt-5">
        <div class="container px-6 py-10 mx-auto">
          <h2 class="text-center dark:text-white text-black font-semibold tracking-wide uppercase">
            Equipe
          </h2>
          <p class="mt-2 text-3xl leading-8 text-center font-extrabold tracking-tight dark:text-white text-black sm:text-4xl">
            Time Executivo
          </p>
          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="/images/logo.png"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-white group-hover:text-white">
                Cristian Caetano
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                CEO | Back-end Developer
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 
                    2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 
                    6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="mx-2 text-gray- dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="/images/logo.png"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-white group-hover:text-white">
                Diogo Rodrigues
              </h1>

              <p class="mt-2 text-black capitalize dark:text-gray-300 group-hover:text-gray-300">
                CEO | Web Developer
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 
                    2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 
                    6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Instagram"
                >
                  <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div class="flex flex-col items-center p-8 transition-colors duration-200 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-blue-600 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src="/images/logo.png"
                alt=""
              />

              <h1 class="mt-4 text-2xl font-semibold text-black capitalize dark:text-white group-hover:text-white">
                Gabriel Perozim
              </h1>

              <p class="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">
                CEO | Back-End Developer
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="LinkedIn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 
                    2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 
                    6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Facebook"
                >
                    <svg
                    class="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>

                <a
                  href="#"
                  class="mx-2 text-black dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                  aria-label="Github"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="border-gray-200 mt-5 dark:border-gray-700 max-w-[1000px] m-auto"></hr>

      <section className="w-full pt-10 pb-10">
        <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
          Our Executive Team
        </h1>
        <p class="max-w-2xl mx-auto my-6 text-center text-gray-500 dark:text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt
          ex placeat modi magni quia error alias, adipisci rem similique, at
          omnis eligendi optio eos harum.
        </p>
        <div class="max-w-[900px] mx-auto p-5 drop-shadow-md">
          <div class="w-full shadow-md subpixel-antialiased rounded h-64 bg-black border-black mx-auto">
            <div
              class="flex items-center h-6 rounded-t bg-gray-300 border-b border-gray-500 text-center text-black"
              id="headerTerminal"
            >
              <div
                class="flex ml-2 items-center text-center border-red-900 bg-red-500 shadow-inner rounded-full w-3 h-3"
                id="closebtn"
              ></div>
              <div
                class="ml-2 border-yellow-900 bg-yellow-500 shadow-inner rounded-full w-3 h-3"
                id="minbtn"
              ></div>
              <div
                class="ml-2 border-green-900 bg-green-400 shadow-inner rounded-full w-3 h-3"
                id="maxbtn"
              ></div>
              <div class="mx-auto pr-16" id="terminaltitle">
                <p class="text-center text-sm">Terminal</p>
              </div>
            </div>
            <div
              class="pl-1 pt-1 h-auto  text-white font-mono text-xs bg-black"
              id="console"
            >
              <p class="pb-1">Last login: Wed Sep 25 09:11:04 on ttys002</p>
              <p class="pb-1">Laraben:Devprojects laraben$</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <ChatTawk />
    </>
  );
}
