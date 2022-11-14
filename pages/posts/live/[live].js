import { useRouter } from "next/router";
import Sidebar from "../../../components/Sidebar";
import NavbarDash from "../../../components/NavbarDash";
import Image from "next/image";
import PageGraficos from "../../../components/graficos/PageGraficos";
import SalaDeAula from "../../../public/images/salaDeAula.jpg";
import initialData from "../../../helpers/initialData";
import fetchDataFromRegion from "../../../services/DataFromWeatherApi";
import { useEffect, useState } from "react";
import CardData from "../../../components/ComponentFromWeatherData/CardData";

// PAGINA DINÂMICA -------
// ADICIONAR [] EM VOLTA DO NOME DA PAGINA

const SlugPage = () => {
  const { asPath } = useRouter();
  const [data, setData] = useState(initialData);
  const randomRegions = ["São Paulo"];
  const randomRegion = () => {
    let t = randomRegions.length;
    let av = Math.floor(Math.random() * t);
    let rdf = randomRegions[av];
    return rdf;
  };
  const FetchData = () => {
    fetchDataFromRegion(randomRegion()).then((response) => {
      setData(response);
    });
  };

  useEffect(() => {
    setInterval(() => {
      FetchData();
    }, 600);
  }, []);

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
                                  Câmera
                                </p>
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
                        <div class="flex flex-col">
                          <div class="max-w-full px-3 lg:w-full lg:flex-none">
                            <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                              <p class="pt-3 mb-1 font-semibold w-3/6">
                                Sensor
                              </p>
                            </div>
                          </div>

                          <div class="max-w-full px-3 mt-7 ml-auto text-center w-full lg:flex-none">
                            <div class="h-full w-full ">
                              <div class="relative h-full w-full">
                                <img
                                  className="w-full h-full"
                                  src="/images/sensorInfra.jpg"
                                  alt="Imagem Sensor Infravermelho"
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

              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-2 mx-auto">
                  <div class="flex flex-wrap mt-2 items-start -mx-3 justify-between sm:h-full md:h-[30rem] lg:h-[30rem] p-2  ">
                    <div class="w-full h-full md:w-full flex-wrap p-3 mb-6 gap-4 md:mb-0 md:flex-none flex items-center justify-between">

                      <div className="h-full w-full flex flex-wrap gap-4 items-center justify-between">
                        
                        <div class="relative h-2/4 w-full md:w-2/5  flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-1/4  flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-2/5 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="relative h-2/4 w-full md:w-1/4 flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                          <div class="flex flex-wrap h-full w-full">
                            <div class="h-full w-full px-3 lg:w-full lg:flex-none">
                              <div className="w-full h-full p-2 m-auto rounded-lg dark:bg-gray-900 dark:text-gray-100">
                                <div className="flex justify-around items-center h-full">
                                  <div className="flex flex-col items-center p-1 w-full h-full">
                                    <CardData data={data} />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* TABELA 
                      <div class="p-1 bg-red-400 h-[10%] w-full">
                        <PageGraficos />
                      </div>
                      */}
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
