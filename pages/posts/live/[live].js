import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";
import Image from "next/image";
import PageGraficos from "../../PageGraficos";
import SalaDeAula from "../../../public/images/salaDeAula.jpg";

// PAGINA DINÂMICA -------
// ADICIONAR [] EM VOLTA DO NOME DA PAGINA

const SlugPage = () => {
  const { asPath } = useRouter();
  return (
    <>
      <div class="m-0 font-sans antialiased font-normal text-base leading-default bg-zinc-50 dark:bg-gray-600 h-screen">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] bg-red-800 dark:bg-gray-600">
          <NavbarDash title="Ao Vivo" />
          <div class="pt-1 2xl:container h-full bg-zinc-50 dark:bg-gray-600 fadeIn">
            <div class="pt-1 2xl:container h-full bg-zinc-500 dark:bg-red-600">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-6 mx-auto bg-yellow-100">
                  <div class="flex flex-wrap mt-6 items-start -mx-3 bg-red-600 justify-between sm:h-full md:h-[30rem] lg:h-[30rem] p-2  ">
                    <div class="w-full h-full md:w-3/5 px-3 mb-6 md:mb-0 bg-yellow-600 md:flex-none">
                      <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
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
                                <div class="relative flex items-center justify-center h-full">
                                  <Image
                                    class="relative z-20 w-full pt-6 rounded-md"
                                    src={SalaDeAula}
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

                    <div class="flex flex-col gap-2  w-full h-full max-w-full px-3 md:w-2/5 lg:flex-none relative bg-green-500">
                      <div class="border-black/12.5 shadow-md relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                        <div class="relative h-full overflow-hidden bg-cover rounded-xl">
                          <div class="relative z-10 flex flex-col flex-auto h-full">
                            <h5 class="pt-2 mb-1 font-medium text-black">
                              Tempo hoje
                            </h5>
                            <p class="text-black font-semibold text-xl">
                              Campinas - 24ºC
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="border-black/12.5 shadow-md relative flex h-44 min-w-0 w-full flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                        <div class="relative h-full overflow-hidden bg-cover rounded-xl">
                          <div class="relative z-10 flex flex-col flex-auto h-full">
                            <h5 class="pt-2 mb-1 font-medium text-black">
                              Tempo hoje
                            </h5>
                            <p class="text-black font-semibold text-xl">
                              Campinas - 24ºC
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="border-black/12.5 shadow-md relative flex h-44 min-w-0 w-full flex-col break-words rounded-2xl border-0 border-solid bg-white dark:bg-gray-500 bg-clip-border p-4">
                        <div class="relative h-full overflow-hidden bg-cover rounded-xl">
                          <div class="relative z-10 flex flex-col flex-auto h-full">
                            <h5 class="pt-2 mb-1 font-medium text-black">
                              Tempo hoje
                            </h5>
                            <p class="text-black font-semibold text-xl">
                              Campinas - 24ºC
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto bg-green-100">
                  <div class="flex flex-wrap mt-6 -mx-3 bg-red-400">
                    <div class="w-full px-3 mb-6 md:mb-0 bg-yellow-600 md:flex-none">
                      <div class="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <div class="flex-auto p-4">
                          <div class="flex flex-wrap -mx-3">
                            <div class="max-w-full px-3 lg:w-full lg:flex-none">
                              <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                                <p class="pt-2 mb-1 font-semibold">Gráficos</p>
                              </div>
                            </div>

                            <div class="w-full h-full">
                              <div class="w-full h-full" >
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
      </div>
    </>
  );
};
export default SlugPage;
