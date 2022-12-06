import { useState, useEffect } from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
import NavbarDash from "./NavbarDash";
import Calendar from "../components/calendar";
import CardData from "../components/ComponentFromWeatherData/CardData";
import initialData from "../helpers/initialData";
import fetchDataFromRegion from "../services/DataFromWeatherApi";
import PieChart from "./graficos/PieChart";
import GaugeChart from "./graficos/GaugeChart";

export default function Admin() {
  const [data, setData] = useState(initialData);
  const randomRegions = ["São Paulo", "Rio de Janeiro", "Salvador"];
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
    }, 6000);
  }, []);
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
      <div class="m-0 font-sans antialiased font-normal text-base leading-default dark:bg-gray-600 bg-zinc-50  lg:h-[170vh] h-full lg:overflow-hidden overflow-x-hidden">
        <Sidebar />
        <div class="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] dark:bg-gray-600">
          <NavbarDash title="Estatísticas Gerais" />
          <div class="2xl:container h-screen dark:bg-gray-600 fadeIn">
            <div class="2xl:container h-full dark:bg-gray-600">
              <div class="flex justify-center items-center">
                <div class="w-full px-6 py-6 mx-auto">
                  <div class="flex items-center flex-wrap justify-between gap-3 lg:gap-0">
                    <div class="flex flex-wrap lg:w-[45%] items-center justify-around gap-10">
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
                    </div>

                    <div class="px-3 mb-6 lg:mb-0 lg:w-[55%] lg:flex-none w-full">
                      <div class="relative flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                        <Calendar />
                      </div>
                    </div>

                    <div className="flex items-center justify-between flex-wrap w-full mt-4 mb-5">
                      <div className="lg:w-1/2 md:w-full w-full mt-4 h-[32rem]">
                        <div class="w-full h-full px-3 mb-6 md:mb-0 md:flex-none">
                          <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                            <div class="flex-auto p-4 ">
                              <div class="flex flex-wrap -mx-3">
                                <div class="max-w-full px-3 lg:w-full lg:flex-none">
                                  <div class="flex flex-wrap w-full justify-between items-center px-2 h-full">
                                    <p class="pt-2 mb-1 font-semibold ">
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
                      </div>


                      <div className="flex flex-col items-center justify-between lg:w-1/2 md:w-full w-full">
                        
                      <div className="w-full mt-4">
                          <div class="w-full h-full px-3 mb-6 md:mb-0 md:flex-none">
                            <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                              <div class="flex-auto p-4 ">
                                <div class="flex flex-wrap -mx-3">
                                  <GaugeChart/>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-full mt-4">
                          <div class="w-full h-full px-3 mb-6 md:mb-0 md:flex-none">
                            <div class="relative h-full flex flex-col min-w-0 break-words bg-white dark:bg-gray-500 shadow-md rounded-2xl bg-clip-border">
                              <div class="flex-auto p-4 ">
                                <div class="flex flex-wrap -mx-3">
                                  <PieChart/>
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
