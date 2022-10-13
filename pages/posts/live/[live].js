import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";
import Image from "next/image";
import PageGraficos from "../../../components/graficos/PageGraficos";
import SalaDeAula from "../../../public/images/salaDeAula.jpg";

// PAGINA DINÂMICA -------
// ADICIONAR [] EM VOLTA DO NOME DA PAGINA

const SlugPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 dark:bg-gray-600 h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] dark:bg-gray-600">
          <NavbarDash title="Ao Vivo" />
          <div class="2xl:container h-full bg-zinc-50 dark:bg-gray-600 fadeIn">
            <div class="2xl:container h-full  dark:bg-gray-600">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-3 items-start -mx-3 justify-between sm:h-full md:h-[30rem] lg:h-[30rem] p-2">
                    <div class="w-full h-full md:w-3/5 px-3 mb-6 md:mb-0 md:flex-none">
                      <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4 ">
                          <div class="flex flex-wrap -mx-3">
                            <div class="max-w-full px-3 lg:w-full lg:flex-none">
                              <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                                <p class="pt-2 mb-1 font-semibold w-3/6">
                                  Cameras
                                </p>
                                <div className="flex flex-wrap items-center justify-between gap-5">
                                  <div>
                                    <button>Sala de Aula</button>
                                  </div>
                                  <div>
                                    <button>Sala dos Professores</button>
                                  </div>
                                  <div>
                                    <button>Biblioteca</button>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="max-w-full px-3 mt-7 ml-auto text-center w-full lg:flex-none">
                              <div class="h-full bg-gradient-to-tl from-purple-700 to-blue-500 rounded-xl">
                                <div class="relative flex items-center justify-center h-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex flex-col gap-2 w-full h-full max-w-full px-3 md:w-2/5 lg:flex-none relative">
                      <div class="border-black/12.5 shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-2 h-full">
                        <div class="flex flex-wrap">
                          <div class="max-w-full px-3 lg:w-full lg:flex-none">
                            <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                              <p class="pt-3 mb-1 font-semibold w-3/6">
                                Camerassdasd
                              </p>
                            </div>
                          </div>

                          <div class="max-w-full px-3 mt-7 ml-auto text-center w-full lg:flex-none">
                            <div class="h-full bg-gradient-to-tl from-purple-700 to-blue-500 rounded-xl">
                              <div class="relative flex items-center justify-center h-full">
                                dd
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-2 items-start -mx-3 justify-between sm:h-full md:h-[30rem] lg:h-[30rem] p-2  ">
                    <div class="w-full h-full md:w-2/5 p-3 mb-6 gap-4 md:mb-0 md:flex-none flex flex-col items-center justify-between">
                      <div class="relative h-[45%] flex flex-col min-w-0 w-full break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <div class="flex flex-wrap h-full w-full">
                          <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                            <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                              <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center w-2/5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-24 h-24 p-2 dark:text-yellow-400 fill-current"
                                  >
                                    <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
                                    <rect
                                      width="32"
                                      height="48"
                                      x="240"
                                      y="16"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="48"
                                      x="240"
                                      y="448"
                                    ></rect>
                                    <rect
                                      width="48"
                                      height="32"
                                      x="448"
                                      y="240"
                                    ></rect>
                                    <rect
                                      width="48"
                                      height="32"
                                      x="16"
                                      y="240"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="45.255"
                                      x="400"
                                      y="393.373"
                                      transform="rotate(-45 416 416)"
                                    ></rect>
                                    <rect
                                      width="32.001"
                                      height="45.255"
                                      x="80"
                                      y="73.373"
                                      transform="rotate(-45 96 96)"
                                    ></rect>
                                    <rect
                                      width="45.255"
                                      height="32"
                                      x="73.373"
                                      y="400"
                                      transform="rotate(-45.001 96.002 416.003)"
                                    ></rect>
                                    <rect
                                      width="45.255"
                                      height="32.001"
                                      x="393.373"
                                      y="80"
                                      transform="rotate(-45 416 96)"
                                    ></rect>
                                  </svg>
                                  <h1 className="text-xl font-semibold">
                                    Campinas
                                  </h1>
                                  <span className="font-medium text-base">
                                    10 Out
                                  </span>
                                </div>
                                <span className="font-bold text-4xl">
                                  14°/ 20°
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="relative h-[45%] flex flex-col min-w-0 w-full break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <div class="flex flex-wrap h-full w-full">
                          <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                            <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                              <div className="flex justify-around items-center">
                                <div className="flex flex-col items-center w-2/5">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-24 h-24 p-2 dark:text-yellow-400 fill-current"
                                  >
                                    <path d="M256,104c-83.813,0-152,68.187-152,152s68.187,152,152,152,152-68.187,152-152S339.813,104,256,104Zm0,272A120,120,0,1,1,376,256,120.136,120.136,0,0,1,256,376Z"></path>
                                    <rect
                                      width="32"
                                      height="48"
                                      x="240"
                                      y="16"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="48"
                                      x="240"
                                      y="448"
                                    ></rect>
                                    <rect
                                      width="48"
                                      height="32"
                                      x="448"
                                      y="240"
                                    ></rect>
                                    <rect
                                      width="48"
                                      height="32"
                                      x="16"
                                      y="240"
                                    ></rect>
                                    <rect
                                      width="32"
                                      height="45.255"
                                      x="400"
                                      y="393.373"
                                      transform="rotate(-45 416 416)"
                                    ></rect>
                                    <rect
                                      width="32.001"
                                      height="45.255"
                                      x="80"
                                      y="73.373"
                                      transform="rotate(-45 96 96)"
                                    ></rect>
                                    <rect
                                      width="45.255"
                                      height="32"
                                      x="73.373"
                                      y="400"
                                      transform="rotate(-45.001 96.002 416.003)"
                                    ></rect>
                                    <rect
                                      width="45.255"
                                      height="32.001"
                                      x="393.373"
                                      y="80"
                                      transform="rotate(-45 416 96)"
                                    ></rect>
                                  </svg>
                                  <h1 className="text-xl font-semibold">
                                    Campinas
                                  </h1>
                                  <span className="font-medium text-base">
                                    10 Out
                                  </span>
                                </div>
                                <span className="font-bold text-4xl">
                                  14°/ 20°
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="flex gap-2 w-full h-full max-w-full px-1 md:w-[59.33%] p-1 lg:flex-none relative">
                      <div className="w-full h-full flex flex-wrap items-center justify-between p-1 gap-10">
                        <div class="border-black/12.5 shadow-md relative md:w-[46%] w-full md:h-[43%] flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                          <div className="max-w-md p-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between space-x-9 items-center">
                              <div className="flex flex-col items-center"></div>
                            </div>
                            <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                            </div>
                          </div>
                        </div>
                        <div class="border-black/12.5 shadow-md relative md:w-[46%] w-full md:h-[43%] flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                          <div className="max-w-md p-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between space-x-9 items-center">
                              <div className="flex flex-col items-center"></div>
                            </div>
                            <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                            </div>
                          </div>
                        </div>
                        <div class="border-black/12.5 shadow-md relative md:w-[46%] w-full md:h-[43%] flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                          <div className="max-w-md p-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between space-x-9 items-center">
                              <div className="flex flex-col items-center"></div>
                            </div>
                            <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                            </div>
                          </div>
                        </div>
                        <div class="border-black/12.5 shadow-md relative md:w-[46%] w-full md:h-[43%] h-full flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                          <div className="max-w-md p-2 mx-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                            <div className="flex justify-between space-x-9 items-center">
                              <div className="flex flex-col items-center"></div>
                            </div>
                            <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                              <div className="flex flex-col items-center space-y-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-2 -mx-3 ">
                    <div class="w-full px-3 mb-6 md:mb-0 md:flex-none">
                      <div class="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                          <div class="flex flex-wrap w-full h-full">
                            <div class="max-w-full px-3 mb-3 lg:w-full lg:flex-none">
                              <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                                <p class="pt-2 mb-1 font-semibold">Gráficos</p>
                              </div>
                            </div>

                            <div class="w-full h-[20rem]">
                                <PageGraficos />
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
};
export default SlugPage;
